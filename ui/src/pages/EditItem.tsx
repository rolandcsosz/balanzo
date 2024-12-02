import './EditItem.scss';
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

interface EditItemProps {
    transaction?: Transaction | null;
    template?: Template | null;
    onFinished: () => void;
}

export function EditItem({ transaction = null, template = null, onFinished }: EditItemProps) {
    const { mainCategories, subcategories, transactionTypes } = useModel();
    const [itemName, setItemName] = useState("");
    const [itemAmount, setItemAmount] = useState<number | string>("");
    const [itemTransactionType, setItemTransactionType] = useState("");
    const [itemCategory, setItemCategory] = useState("");
    const [itemCategoryOptions, setItemCategoryOptions] = useState([]);
    const [itemSubcategory, setItemSubcategory] = useState("");
    const [itemSubcategoryOptions, setItemSubcategoryOptions] = useState([]);
    const [itemDate, setItemDate] = useState(formatDate(new Date().toDateString()));

    const { fetchWithAuth } = useApiClient();

    const setCategoryOptions = (transactionType: string) => {
        const filteredCategories = mainCategories
            .filter((category) => category.transactionType.name === transactionType)
            .map((category) => category.name);
        setItemCategoryOptions(filteredCategories);
    };

    const setSubcategoryOptions = (category: string) => {
        const filteredSubcategories = subcategories
            .filter((subcategory) => subcategory.mainCategory.name === category)
            .map((subcategory) => subcategory.name);
        setItemSubcategoryOptions(filteredSubcategories);
    };

    useEffect(() => {
        if (transaction || template) {
            const name = template?.itemName || transaction?.item || "";
            const amount = template?.amount || transaction?.amount || "";
            const transactionType = template?.subcategory?.mainCategory?.transactionType.name ||
                transaction?.subcategory?.mainCategory?.transactionType.name || "";
            const category = template?.subcategory?.mainCategory?.name ||
                transaction?.subcategory?.mainCategory?.name || "";
            const subcategory = template?.subcategory?.name || transaction?.subcategory?.name || "";
            const date = transaction?.date || new Date().toDateString();

            setItemName(name);
            setItemAmount(amount);
            setItemTransactionType(transactionType);
            setItemCategory(category);
            setItemSubcategory(subcategory);
            setItemDate(formatDate(date));
        }
    }, [transaction, template]);


    useEffect(() => {
        if (itemTransactionType) {
            setCategoryOptions(itemTransactionType);
        }
    }, [itemTransactionType, mainCategories]);

    useEffect(() => {
        if (itemCategory) {
            setSubcategoryOptions(itemCategory);
        }
    }, [itemCategory, subcategories]);


    const handleEditItem = async () => {
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
                <h1 class="new-item-title">{transaction || template ? 'Edit item' : 'New item'}</h1>
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
                    {transaction && (
                        <button class="new-item-delete-button" onClick={handleDelete}>
                            Delete
                        </button>
                    )}
                    <button type="submit" class="new-item-submit-button" onClick={handleEditItem}>
                        {transaction || template ? 'Save' : 'Add'}
                    </button>
                </div>
            </div>
        </div>
    );
}
