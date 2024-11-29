import './Categories.scss';
import { useModel } from '../hooks/useModel';
import { CategoryRow } from '../components/CategoryRow';

export function Categories() {
    const { mainCategories, subcategories, expenseTypes } = useModel();

    return (
        <div class="categories-container">
            <div class="categories-spacer" />
            <div class="categories-table-container">
                {mainCategories.map((category) => (
                    <>
                    <CategoryRow key={category._id} item={category} options={expenseTypes?.map(item =>item.name)} isSubcategory={false} firstSub={false}/>
                    {subcategories.filter(subcategory => subcategory.mainCategory._id === category._id).map((subcategory, index) => (
                        <CategoryRow key={subcategory._id} item={subcategory} options={expenseTypes?.map(item =>item.name)} isSubcategory={true} firstSub={index===0}/>
                    ))}
                    </>
                ))}
            </div>
        </div>
    );
};