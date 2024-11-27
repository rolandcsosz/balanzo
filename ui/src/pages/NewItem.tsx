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
import { useData } from '../hooks/useData';
import { useApiClient } from '../hooks/useApiClient';
import { Transaction } from '../types';


interface NewItemProps {
    transaction: Transaction | null;
    onFinished: () => void;
}

export function NewItem({ transaction, onFinished }: NewItemProps) {
    const { mainCategories, subcategories, transactionTypes } = useData();
    const [itemName, setItemName] = useState("");
    const [itemAmount, setItemAmount] = useState("");
    const [itemTransactionType, setItemTransactionType] = useState("");
    const [itemCategory, setItemCategory] = useState("");
    const [itemCategoryOptions, setItemCategoryOptions] = useState([]);
    const [itemSubcategory, setItemSubcategory] = useState("");
    const [itemSubcategoryOptions, setItemSubcategoryOptions] = useState([]);
    const [itemDate, setItemDate] = useState("");
    const { fetchWithAuth } = useApiClient();

    const setCategoryOptions = (transactionType) => {
        const filteredCategories = mainCategories
            .filter((category) => category.transactionType.name === transactionType)
            .map((category) => category.name);
        setItemCategoryOptions(filteredCategories);

        if (filteredCategories.length > 0) {
            setItemCategory(filteredCategories[0]);
        } else {
            setItemCategory("");
        }
    };

    const setSubcategoryOptions = (category) => {
        const filteredSubcategories = subcategories
            .filter((subcategory) => subcategory.mainCategory.name === category)
            .map((subcategory) => subcategory.name);
        setItemSubcategoryOptions(filteredSubcategories);

        if (filteredSubcategories.length > 0) {
            setItemSubcategory(filteredSubcategories[0]);
        } else {
            setItemSubcategory("");
        }
    };

    useEffect(() => {
        setCategoryOptions(itemTransactionType);
    }, [itemTransactionType, mainCategories]);

    useEffect(() => {
        setSubcategoryOptions(itemCategory);
    }, [itemCategory, subcategories]);

    useEffect(() => {
        setItemDate(formatDate(new Date().toDateString()));
        if (transactionTypes.length > 0) {
            const defaultTransactionType = transactionTypes[0].name;
            setItemTransactionType(defaultTransactionType);
        }
    }, [transactionTypes, mainCategories, subcategories]);

    const handleNewItem = async () => {

        const transactionType = transactionTypes.find((type) => type.name === itemTransactionType)._id;
        if (!transactionType) {
            console.error(`No transaction type found for: ${itemTransactionType}`);
            return;
        }

        const subcategory = subcategories.find((subcategory) => subcategory.name === itemSubcategory && subcategory.mainCategory.name === itemCategory)._id;
        if (!subcategory) {
            console.error(`No subcategory found for: ${itemSubcategory}`);
            return;
        }

        const body = {
            item: itemName,
            amount: itemAmount,
            transactionType: transactionType,
            subcategory: subcategory,
            date: itemDate
        };

        const expenseTypesResponse = await fetchWithAuth('http://localhost:3000/transactions', 'POST', JSON.stringify(body));
        onFinished();
    };

    return (
        <div class="new-item-container">
            <div class="new-item-content">
                <h1 class="new-item-title">{transaction === null ? "New item" : "Edit item"}</h1>
                <form onSubmit={() => { }} class="new-item-form">
                    <div class="new-item-form-row">
                        <img src={itemUrl} alt="" />
                        <InputField type="text" placeholder="" value={itemName} onChange={setItemName} />
                    </div>
                    <div class="new-item-form-row">
                        <img src={amountUrl} alt="" />
                        <InputField type="number" placeholder="" value={itemAmount} onChange={setItemAmount} />
                    </div>
                    <div class="new-item-form-row">
                        <img src={expenseTypeUrl} alt="" />
                        <Dropdown options={transactionTypes.map((type) => type.name)} onSelectedChange={setItemTransactionType} />
                    </div>
                    <div class="new-item-form-row">
                        <img src={categoryUrl} alt="" />
                        <Dropdown options={itemCategoryOptions} onSelectedChange={setItemCategory} />
                    </div>
                    <div class="new-item-form-row">
                        <img src={subcategoryUrl} alt="" />
                        <Dropdown options={itemSubcategoryOptions} onSelectedChange={setItemSubcategory} />
                    </div>
                    <div class="new-item-form-row">
                        <img src={dateUrl} alt="" />
                        <InputField type="date" placeholder="" value={itemDate} onChange={setItemDate} />
                    </div>
                </form>
                <button type="submit" class="new-item-submit-button" onClick={handleNewItem}>Add</button>
            </div>
        </div>
    );
};