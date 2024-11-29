import './Categories.scss';
import { useModel } from '../hooks/useModel';
import { CategoryRow } from '../components/CategoryRow';
import { CategoryRowMobile } from '../components/CategoryRowMobile';
import { useDevice } from '../hooks/useDevice';

export function Categories() {
    const { mainCategories, subcategories, expenseTypes } = useModel();
    const isMobile = useDevice();

    const CategoryComponent = isMobile ? CategoryRowMobile : CategoryRow;

    return (
        <div className="categories-container">
            <div className="categories-spacer" />
            <div className="categories-table-container">
                {mainCategories.map((category) => (
                    <>
                        <CategoryComponent key={category._id} item={category} options={expenseTypes?.map(item => item.name)} isSubcategory={false} firstSub={false} />
                        {subcategories.filter(subcategory => subcategory.mainCategory._id === category._id).map((subcategory, index) => (
                            <CategoryComponent key={subcategory._id} item={subcategory} options={expenseTypes?.map(item => item.name)} isSubcategory={true} firstSub={index === 0} />
                        ))}
                    </>
                ))}
            </div>
        </div>
    );
};