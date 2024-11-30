import './NewCategoryRow.scss';
import addNewButtonUrl from '../assets/add-new-button.svg';

interface CategoryRowProps {
    onAdd: (categoryId: string) => void;
    text: string;
    categoryId?: string;
    subRow?: boolean;
    isMobileView: boolean;
}

export function NewCategoryRow({
    onAdd,
    text,
    categoryId,
    subRow,
    isMobileView
}: CategoryRowProps) {

    return (
        <button className={`new-category-row ${subRow ? "sub" : ""} ${isMobileView ? "mobile" : ""}`} onClick={() => { categoryId ? onAdd(categoryId) : onAdd("") }}>
            <img src={addNewButtonUrl} alt="Add new" />
            <div className="new-category-row-text">
                {text}
            </div>
        </button>
    );
};
