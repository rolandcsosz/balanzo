import styles from "./Categories.module.scss";
import { useModel } from "../hooks/useModel";
import CategoryRow from "../components/CategoryRow";
import CategoryRowMobile from "../components/CategoryRowMobile";
import { useDevice } from "../hooks/useDevice";
import NewCategoryRow from "../components/NewCategoryRow";

const Categories = () => {
    const { mainCategory, subcategory, expenseType, transactionType } = useModel();
    const expenseTypes = expenseType.list;
    const transactionTypes = transactionType.list;
    const mainCategories = mainCategory.list;
    const subcategories = subcategory.list;
    const isMobile = useDevice();

    const CategoryComponent = isMobile ? CategoryRowMobile : CategoryRow;

    const handleCategoryEdit = (id: string, name: string, type: string) => {
        const typeId = expenseTypes.find((expenseType) => expenseType.name === type)?.id;

        if (!typeId) {
            console.error(`No expense type found for: ${type}`);
            return;
        }

        // TODO: Fix transactionTypeId being hardcoded to "ERROR"
        mainCategory.update({ path: { id }, body: { name, expenseTypeId: typeId, transactionTypeId: "ERROR" } });
    };

    const handleSubategoryEdit = (id: string, name: string, type: string) => {
        const mainCategoryId = subcategory.list.find((subcategory) => subcategory.id === id)?.mainCategoryId;
        const typeId = expenseTypes.find((expenseType) => expenseType.name === type)?.id;

        if (!typeId) {
            console.error(`No expense type found for: ${type}`);
            return;
        }

        subcategory.update({
            path: { id },
            body: {
                name,
                mainCategoryId,
                expenseTypeId: typeId,
            },
        });
    };

    const handleDeleteCategory = (id: string) => {
        mainCategory.delete({ path: { id } });
    };

    const handleDeleteSubcategory = (id: string) => {
        subcategory.delete({ path: { id } });
    };

    const createMainCategory = async () => {
        mainCategory.create({
            body: {
                name: "New category",
                expenseTypeId: expenseTypes.find((expenseType) => expenseType.name === "Fixed")?.id,
                transactionTypeId: transactionTypes.find((transactionType) => transactionType.name === "Expense")?.id,
            },
        });
    };

    const createSubcategory = (id: string) => {
        subcategory.create({
            body: {
                name: "New category",
                mainCategoryId: id,
                expenseTypeId: expenseTypes.find((expenseType) => expenseType.name === "Fixed")?.id,
            },
        });
    };

    const expenseTypeNames = expenseTypes.map((item) => item.name);

    return (
        <div className={styles.categoriesContainer}>
            <div className={styles.categoriesSpacer} />
            <div className={styles.categoriesTableContainer}>
                {mainCategories.map((category) => (
                    <>
                        <CategoryComponent
                            key={category.id}
                            item={category}
                            expenseTypeNames={expenseTypeNames}
                            onEdit={handleCategoryEdit}
                            onDelete={handleDeleteCategory}
                        />
                        {subcategories
                            .filter((subcategory) => subcategory.mainCategoryId === category.id)
                            .map((subcategory, index) => (
                                <CategoryComponent
                                    key={subcategory.id}
                                    item={subcategory}
                                    expenseTypeNames={expenseTypeNames}
                                    firstSubcategory={index === 0}
                                    onEdit={handleSubategoryEdit}
                                    onDelete={handleDeleteSubcategory}
                                />
                            ))}
                        <NewCategoryRow
                            onAdd={() => {
                                createSubcategory(category.id);
                            }}
                            text="Add new subcategory"
                            subRow={true}
                        />
                    </>
                ))}
                <NewCategoryRow onAdd={createMainCategory} text="Add Category" subRow={false} latsRow={true} />
            </div>
        </div>
    );
};

export default Categories;
