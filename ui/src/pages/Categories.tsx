import './Categories.scss';
import { useModel } from '../hooks/useModel';
import { CategoryRow } from '../components/CategoryRow';
import { CategoryRowMobile } from '../components/CategoryRowMobile';
import { useDevice } from '../hooks/useDevice';
import { useApiClient } from '../hooks/useApiClient';
import { NewCategoryRow } from '../components/NewCategoryRow';
import { useEffect, useState } from 'preact/hooks';

export function Categories() {
    const { mainCategories: initialMainCategories, subcategories: initialSubcategories, expenseTypes } = useModel();
    const [mainCategories, setMainCategories] = useState(initialMainCategories);
    const [subcategories, setSubcategories] = useState(initialSubcategories);
    const isMobile = useDevice();
    const { fetchWithAuth } = useApiClient();

    useEffect(() => {
        setMainCategories(initialMainCategories);
        setSubcategories(initialSubcategories);
    }, [initialMainCategories, initialSubcategories]);

    const CategoryComponent = isMobile ? CategoryRowMobile : CategoryRow;

    const handleCategoryEdit = async (id, name, type: string) => {
        const typeId = expenseTypes.find((expenseType) => expenseType.name === type)?._id;

        if (!typeId) {
            console.error(`No expense type found for: ${type}`);
            return;
        }

        const updatedCategory = { id, name, expenseType: typeId };

        await fetchWithAuth('http://localhost:3000/main_categories', 'POST', JSON.stringify(updatedCategory));
    };

    const handleSubategoryEdit = async (id, name, type) => {
        const mainCategoryId = subcategories.find((subcategory) => subcategory._id === id)?.mainCategory._id;
        const typeId = expenseTypes.find((expenseType) => expenseType.name === type)?._id;

        if (!typeId) {
            console.error(`No expense type found for: ${type}`);
            return;
        }

        const body: any = {
            id: id,
            name: name,
            mainCategory: mainCategoryId,
            expenseType: typeId,
        };

        await fetchWithAuth('http://localhost:3000/subcategories', 'POST', JSON.stringify(body));
    };

    const handleDeleteCategory = async (id) => {
        const response = await fetchWithAuth(`http://localhost:3000/main_categories/${id}`, 'DELETE', '');
        if (!response.ok) {
            console.error("Failed to delete main category");
            return;
        }

        setMainCategories((prevCategories) => prevCategories.filter((category) => category._id !== id));
        setSubcategories((prevSubcategories) =>
            prevSubcategories.filter((subcategory) => subcategory.mainCategory._id !== id)
        );
    };


    const handleDeleteSubcategory = async (id) => {
        const response = await fetchWithAuth(`http://localhost:3000/subcategories/${id}`, 'DELETE', '');

        if (!response.ok) {
            console.error("Failed to delete subcategory");
            return;
        }

        setSubcategories(subcategories.filter((subcategory) => subcategory._id !== id));
    };

    const createMainCategory = async () => {
        const body: any = {
            name: "New category",
            expenseType: expenseTypes.find((expenseType) => expenseType.name === "Fixed")?._id,
            transactionType: expenseTypes.find((expenseType) => expenseType.name === "Expense")?._id,
        };

        const response = await fetchWithAuth('http://localhost:3000/main_categories', 'POST', JSON.stringify(body));
        if (!response.ok) {
            console.error("Failed to create main category");
            return;
        }

        const data = await response.json();
        setMainCategories([...mainCategories, data]);
    }

    const createSubcategory = async (id) => {
        const body: any = {
            name: "New category",
            mainCategory: id,
            expenseType: expenseTypes.find((expenseType) => expenseType.name === "Fixed")?._id,
        };

        const response = await fetchWithAuth('http://localhost:3000/subcategories', 'POST', JSON.stringify(body));
        if (!response.ok) {
            console.error("Failed to create subcategory");
            return;
        }

        const data = await response.json();
        setSubcategories((prevSubcategories) => [
            ...prevSubcategories,
            { ...data, mainCategory: { _id: id } },
        ]);
    };



    return (
        <div className="categories-container">
            <div className="categories-spacer" />
            <div className="categories-table-container">
                {mainCategories.map((category) => (
                    <>
                        <CategoryComponent key={category._id} item={category} options={expenseTypes?.map(item => item.name)} isSubcategory={false} firstSub={false} onEdit={handleCategoryEdit} onDelete={handleDeleteCategory} />
                        {subcategories.filter(subcategory => subcategory.mainCategory._id === category._id).map((subcategory, index) => (
                            <CategoryComponent key={subcategory._id} item={subcategory} options={expenseTypes?.map(item => item.name)} isSubcategory={true} firstSub={index === 0} onEdit={handleSubategoryEdit} onDelete={handleDeleteSubcategory} />
                        ))}
                        <NewCategoryRow onAdd={(id) => { createSubcategory(id); }} text="Add new subcategory" subRow={true} categoryId={category._id} isMobileView={isMobile} />
                    </>
                ))}
                <NewCategoryRow onAdd={(id) => { createMainCategory(); }} text="Add Category" subRow={false} isMobileView={isMobile} />
            </div>
        </div>
    );
};