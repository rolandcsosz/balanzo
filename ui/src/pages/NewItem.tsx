import './NewItem.scss';
import InputField from '../components/InputField';
import { Dropdown } from '../components/Dropdown';
import { useEffect, useState } from 'preact/hooks';
import itemUrl from '../assets/item.svg';
import amountUrl from '../assets/amount.svg';
import expenseTypeUrl from '../assets/export-type.svg';
import categoryUrl from '../assets/category.svg';
import subcategoryUrl from '../assets/subcategory.svg';
import dateUrl from '../assets/date.svg';
import { formatDate } from '../utils/utlis';
import { useModel } from '../hooks/useModel';
import { useApiClient } from '../hooks/useApiClient';
import { Template, Transaction } from '../types';

interface NewItemProps {
    transaction?: Transaction | null;
    template?: Template | null;
    onFinished: () => void;
}

export function NewItem({ transaction = null, template = null, onFinished }: NewItemProps) {
    const { mainCategories, subcategories, transactionTypes } = useModel();
    const [itemName, setItemName] = useState(template?.itemName || transaction?.item || '');
    const [itemAmount, setItemAmount] = useState(template?.amount || transaction?.amount || '');
    const [itemTransactionType, setItemTransactionType] = useState(template?.subcategory?.mainCategory?.transactionType.name ||
        transaction?.subcategory?.mainCategory?.transactionType.name || transactionTypes[0]?.name || ''
    );
    const [itemCategory, setItemCategory] = useState(
        template?.subcategory?.mainCategory?.name ||
        transaction?.subcategory?.mainCategory?.name || ''
    );
    const [itemCategoryOptions, setItemCategoryOptions] = useState<string[]>([]);
    const [itemSubcategory, setItemSubcategory] = useState(template?.subcategory?.name || transaction?.subcategory?.name || '');
    const [itemSubcategoryOptions, setItemSubcategoryOptions] = useState<string[]>([]);
    const [itemDate, setItemDate] = useState(() => {
        const date = transaction?.date ? formatDate(transaction.date) : formatDate(new Date().toDateString());
        return date;
    });

    const { fetchWithAuth } = useApiClient();

    const setCategoryOptions = (transactionType: string) => {
        const filteredCategories = mainCategories
            .filter((category) => category.transactionType.name === transactionType)
            .map((category) => category.name);
        setItemCategoryOptions(filteredCategories);

        if (filteredCategories.length > 0) {
            setItemCategory(filteredCategories[0]);
        } else {
            setItemCategory('');
        }
    };

    const setSubcategoryOptions = (category: string) => {
        const filteredSubcategories = subcategories
            .filter((subcategory) => subcategory.mainCategory.name === category)
            .map((subcategory) => subcategory.name);

        setItemSubcategoryOptions(filteredSubcategories);

        if (filteredSubcategories.length > 0) {
            setItemSubcategory(filteredSubcategories[0]);
        } else {
            setItemSubcategory('');
        }
    };

    useEffect(() => {
        setCategoryOptions(itemTransactionType);
    }, [itemTransactionType, mainCategories]);

    useEffect(() => {
        setSubcategoryOptions(itemCategory);
    }, [itemCategory, subcategories]);

    useEffect(() => {
        if (!transaction && transactionTypes.length > 0) {
            const defaultTransactionType = transactionTypes[0]?.name || '';
            setItemTransactionType(defaultTransactionType);
            setCategoryOptions(defaultTransactionType);
        }
    }, [transaction, transactionTypes]);

    const handleNewItem = async () => {
        const transactionType = transactionTypes.find((type) => type.name === itemTransactionType)?._id;
        if (!transactionType) {
            console.error(`No transaction type found for: ${itemTransactionType}`);
            return;
        }

        const subcategory = subcategories.find(
            (subcategory) =>
                subcategory.name === itemSubcategory && subcategory.mainCategory.name === itemCategory
        )?._id;
        if (!subcategory) {
            console.error(`No subcategory found for: ${itemSubcategory}`);
            return;
        }

        const body: any = {
            item: itemName,
            amount: itemAmount,
            transactionType: transactionType,
            subcategory: subcategory,
            date: itemDate,
        };

        if (transaction) {
            body.id = transaction._id;
        }

        await fetchWithAuth('http://localhost:3000/transactions', 'POST', JSON.stringify(body));
        onFinished();
    };

    const handleDelete = async () => {
        if (!transaction) {
            console.error('No transaction found to delete');
            return;
        }

        await fetchWithAuth(`http://localhost:3000/transactions/${transaction._id}`, 'DELETE', '');
        onFinished();
    };

    return (
        <div class="new-item-container">
            <div class="new-item-content">
                <h1 class="new-item-title">{(transaction || template) ? 'Edit item' : 'New item'}</h1>
                <form onSubmit={(e) => e.preventDefault()} class="new-item-form">
                    <div class="new-item-form-row">
                        <img src={itemUrl} alt="" />
                        <InputField type="text" placeholder="Item" value={itemName} onChange={setItemName} />
                    </div>
                    <div class="new-item-form-row">
                        <img src={amountUrl} alt="" />
                        <InputField
                            type="number"
                            placeholder="Amount"
                            value={itemAmount}
                            onChange={setItemAmount}
                        />
                    </div>
                    <div class="new-item-form-row">
                        <img src={expenseTypeUrl} alt="" />
                        <Dropdown
                            options={transactionTypes.map((type) => type.name)}
                            selected={itemTransactionType}
                            onSelectedChange={setItemTransactionType}
                            mini={false}
                        />
                    </div>
                    <div class="new-item-form-row">
                        <img src={categoryUrl} alt="" />
                        <Dropdown
                            options={itemCategoryOptions}
                            selected={itemCategory}
                            onSelectedChange={setItemCategory}
                            mini={false}
                        />
                    </div>
                    <div class="new-item-form-row">
                        <img src={subcategoryUrl} alt="" />
                        <Dropdown
                            options={itemSubcategoryOptions}
                            selected={itemSubcategory}
                            onSelectedChange={setItemSubcategory}
                            mini={false}
                        />
                    </div>
                    <div class="new-item-form-row">
                        <img src={dateUrl} alt="" />
                        <InputField type="date" placeholder="" value={itemDate} onChange={setItemDate} />
                    </div>
                </form>
                <div class="new-item-button-row">
                    {(transaction || template) && (
                        <button class="new-item-delete-button" onClick={handleDelete}>
                            Delete
                        </button>
                    )}
                    <button type="submit" class="new-item-submit-button" onClick={handleNewItem}>
                        {transaction || template ? 'Save' : 'Add'}
                    </button>
                </div>
            </div>
        </div>
    );
}
