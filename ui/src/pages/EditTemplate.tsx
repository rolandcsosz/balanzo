import './EditItem.scss';
import InputField from '../components/InputField';
import { Dropdown } from '../components/Dropdown';
import { useEffect, useState } from 'preact/hooks';
import templateUrl from '../assets/template.svg';
import itemUrl from '../assets/item.svg';
import amountUrl from '../assets/amount.svg';
import expenseTypeUrl from '../assets/export-type.svg';
import categoryUrl from '../assets/category.svg';
import subcategoryUrl from '../assets/subcategory.svg';
import { useModel } from '../hooks/useModel';
import { useApiClient } from '../hooks/useApiClient';
import { Template, Transaction } from '../types';

interface EditItemProps {
    template?: Template | null;
    onFinished: () => void;
}

export function EditTemplate({ template = null, onFinished }: EditItemProps) {
    const { mainCategories, subcategories, transactionTypes } = useModel();
    const [templateName, setTemplateName] = useState(template?.name || '');
    const [itemName, setItemName] = useState(template?.itemName || '');
    const [itemAmount, setItemAmount] = useState(template?.amount || '');
    const [itemTransactionType, setItemTransactionType] = useState(template?.subcategory?.mainCategory?.transactionType.name || transactionTypes[0]?.name || '');
    const [itemCategory, setItemCategory] = useState(template?.subcategory?.mainCategory?.name || '');
    const [itemCategoryOptions, setItemCategoryOptions] = useState<string[]>([]);
    const [itemSubcategory, setItemSubcategory] = useState(template?.subcategory?.name || '');
    const [itemSubcategoryOptions, setItemSubcategoryOptions] = useState<string[]>([]);

    const { fetchWithAuth } = useApiClient();

    // Set category options based on the selected transaction type
    const setCategoryOptions = (transactionType: string) => {
        const filteredCategories = mainCategories
            .filter((category) => category.transactionType.name === transactionType)
            .map((category) => category.name);
        setItemCategoryOptions(filteredCategories);
    };

    // Set subcategory options based on the selected category
    const setSubcategoryOptions = (category: string) => {
        const filteredSubcategories = subcategories
            .filter((subcategory) => subcategory.mainCategory.name === category)
            .map((subcategory) => subcategory.name);
        setItemSubcategoryOptions(filteredSubcategories);
    };

    // Update category options when transaction type changes
    useEffect(() => {
        setCategoryOptions(itemTransactionType);
    }, [itemTransactionType, mainCategories]);

    // Update subcategory options when category changes
    useEffect(() => {
        setSubcategoryOptions(itemCategory);
    }, [itemCategory, subcategories]);

    // Handle editing the item
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
            name: templateName,
            itemName: itemName,
            amount: itemAmount,
            transactionType: transactionType,
            subcategory: subcategory,
        };

        if (template) {
            body.id = template._id;
        }

        await fetchWithAuth(process.env.REACT_APP_BACKEND_URL + '/templates', 'POST', JSON.stringify(body));
        onFinished();
    };

    // Handle deleting the item
    const handleDelete = async () => {
        if (!template) {
            console.error('No transaction found to delete');
            return;
        }

        await fetchWithAuth(`http://localhost:3000/templates/${template._id}`, 'DELETE', '');
        onFinished();
    };

    return (
        <div class="new-item-container">
            <div class="new-item-content">
                <h1 class="new-item-title">{template ? 'Edit template' : 'New template'}</h1>
                <form onSubmit={(e) => e.preventDefault()} class="new-item-form">
                    <div class="new-item-form-row">
                        <img src={templateUrl} alt="" />
                        <InputField type="text" placeholder="Item" value={templateName} onChange={setTemplateName} />
                    </div>
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
                </form>
                <div class="new-item-button-row">
                    {template && (
                        <button class="new-item-delete-button" onClick={handleDelete}>
                            Delete
                        </button>
                    )}
                    <button type="submit" class="new-item-submit-button" onClick={handleEditItem}>
                        {template ? 'Save' : 'Add'}
                    </button>
                </div>
            </div>
        </div>
    );
}
