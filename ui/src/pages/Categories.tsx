import './Categories.scss';
import { useModel } from '../hooks/useModel';
import { CategoryRow } from '../components/CategoryRow';
import { CategoryRowMobile } from '../components/CategoryRowMobile';
import { useDevice } from '../hooks/useDevice';
import { useApiClient } from '../hooks/useApiClient';

export function Categories() {
    const { mainCategories, subcategories, expenseTypes } = useModel();
    const isMobile = useDevice();
    const { fetchWithAuth } = useApiClient();


    const CategoryComponent = isMobile ? CategoryRowMobile : CategoryRow;

    const handleCategoryEdit = async (id, name, type: string) => {
        const typeId = expenseTypes.find((expenseType) => expenseType.name === type)?._id;

        if (!typeId) {
            console.error(`No expense type found for: ${type}`);
            return;
        }

        const body: any = {
            id: id,
            name: name,
            expenseType: typeId,
        };

        await fetchWithAuth('http://localhost:3000/main_categories', 'POST', JSON.stringify(body));
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

        console.log(body);
        await fetchWithAuth('http://localhost:3000/subcategories', 'POST', JSON.stringify(body));
    };

    const handleDeleteCategory = async (id) => {
        console.log(id);
        await fetchWithAuth(`http://localhost:3000/main_categories/${id}`, 'DELETE', '');
    };

    const handleDeleteSubcategory = async (id) => {
        console.log(id);
        await fetchWithAuth(`http://localhost:3000/subcategories/${id}`, 'DELETE', '');
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
                    </>
                ))}
            </div>
        </div>
    );
};