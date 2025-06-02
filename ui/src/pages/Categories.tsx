import "./Categories.scss";
import { useModel } from "../hooks/useModel";
import { CategoryRow } from "../components/CategoryRow";
import { CategoryRowMobile } from "../components/CategoryRowMobile";
import { useDevice } from "../hooks/useDevice";
import { useApiClient } from "../hooks/useApiClient";
import { NewCategoryRow } from "../components/NewCategoryRow";
import { useEffect, useState } from "preact/hooks";

export function Categories() {
    // Fetch initial data from the model
    const {
        mainCategories: initialMainCategories,
        subcategories: initialSubcategories,
        expenseTypes,
        transactionTypes,
    } = useModel();
    const [mainCategories, setMainCategories] = useState(initialMainCategories);
    const [subcategories, setSubcategories] = useState(initialSubcategories);
    const isMobile = useDevice();
    const { fetchWithAuth } = useApiClient();

    // Update state when initial data changes
    useEffect(() => {
        setMainCategories(initialMainCategories);
        setSubcategories(initialSubcategories);
    }, [initialMainCategories, initialSubcategories]);

    // Determine which component to use based on device type
    const CategoryComponent = isMobile ? CategoryRowMobile : CategoryRow;

    // Handle category edit
    const handleCategoryEdit = async (id, name, type: string) => {
        const typeId = expenseTypes.find((expenseType) => expenseType.name === type)?._id;

        if (!typeId) {
            console.error(`No expense type found for: ${type}`);
            return;
        }

        const updatedCategory = { id, name, expenseType: typeId };

        await fetchWithAuth(
            import.meta.env.VITE_BACKEND_URL + "/main_categories",
            "POST",
            JSON.stringify(updatedCategory),
        );
    };

    // Handle subcategory edit
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

        await fetchWithAuth(import.meta.env.VITE_BACKEND_URL + "/subcategories", "POST", JSON.stringify(body));
    };

    // Handle category deletion
    const handleDeleteCategory = async (id) => {
        const response = await fetchWithAuth(import.meta.env.VITE_BACKEND_URL + `/main_categories/${id}`, "DELETE", "");
        if (!response.ok) {
            console.error("Failed to delete main category");
            return;
        }

        setMainCategories((prevCategories) => prevCategories.filter((category) => category._id !== id));
        setSubcategories((prevSubcategories) =>
            prevSubcategories.filter((subcategory) => subcategory.mainCategory._id !== id),
        );
    };

    // Handle subcategory deletion
    const handleDeleteSubcategory = async (id) => {
        const response = await fetchWithAuth(import.meta.env.VITE_BACKEND_URL + `/subcategories/${id}`, "DELETE", "");

        if (!response.ok) {
            console.error("Failed to delete subcategory");
            return;
        }

        setSubcategories(subcategories.filter((subcategory) => subcategory._id !== id));
    };

    // Create a new main category
    const createMainCategory = async () => {
        const body: any = {
            name: "New category",
            expenseType: expenseTypes.find((expenseType) => expenseType.name === "Fixed")?._id,
            transactionType: transactionTypes.find((transactionType) => transactionType.name === "Expense")?._id,
        };

        const response = await fetchWithAuth(
            import.meta.env.VITE_BACKEND_URL + "/main_categories",
            "POST",
            JSON.stringify(body),
        );
        if (!response.ok) {
            console.error("Failed to create main category");
            return;
        }

        const data = await response.json();
        setMainCategories([...mainCategories, data]);
    };

    // Create a new subcategory
    const createSubcategory = async (id) => {
        const body: any = {
            name: "New category",
            mainCategory: id,
            expenseType: expenseTypes.find((expenseType) => expenseType.name === "Fixed")?._id,
        };

        const response = await fetchWithAuth(
            import.meta.env.VITE_BACKEND_URL + "/subcategories",
            "POST",
            JSON.stringify(body),
        );
        if (!response.ok) {
            console.error("Failed to create subcategory");
            return;
        }

        const data = await response.json();
        setSubcategories((prevSubcategories) => [...prevSubcategories, { ...data, mainCategory: { _id: id } }]);
    };

    return (
        <div className="categories-container">
            <div className="categories-spacer" />
            <div className="categories-table-container">
                {mainCategories.map((category) => (
                    <>
                        <CategoryComponent
                            key={category._id}
                            item={category}
                            options={expenseTypes?.map((item) => item.name)}
                            isSubcategory={false}
                            firstSub={false}
                            onEdit={handleCategoryEdit}
                            onDelete={handleDeleteCategory}
                        />
                        {subcategories
                            .filter((subcategory) => subcategory.mainCategory._id === category._id)
                            .map((subcategory, index) => (
                                <CategoryComponent
                                    key={subcategory._id}
                                    item={subcategory}
                                    options={expenseTypes?.map((item) => item.name)}
                                    isSubcategory={true}
                                    firstSub={index === 0}
                                    onEdit={handleSubategoryEdit}
                                    onDelete={handleDeleteSubcategory}
                                />
                            ))}
                        <NewCategoryRow
                            onAdd={(id) => {
                                createSubcategory(id);
                            }}
                            text="Add new subcategory"
                            subRow={true}
                            categoryId={category._id}
                            isMobileView={isMobile}
                        />
                    </>
                ))}
                <NewCategoryRow
                    onAdd={(id) => {
                        createMainCategory();
                    }}
                    text="Add Category"
                    subRow={false}
                    latsRow={true}
                    isMobileView={isMobile}
                />
            </div>
        </div>
    );
}
