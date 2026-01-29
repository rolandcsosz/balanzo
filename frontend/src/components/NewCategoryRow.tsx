import "./NewCategoryRow.scss";
import addNewButtonUrl from "../assets/add-new-button.svg";
import { useDevice } from "../hooks/useDevice";

interface CategoryRowProps {
    onAdd: () => void;
    text: string;
    subRow?: boolean;
    latsRow?: boolean;
}

const NewCategoryRow = ({ onAdd, text, subRow = false, latsRow = false }: CategoryRowProps) => {
    const isMobileView = useDevice();
    return (
        <button
            className={`new-category-row ${subRow ? "sub" : ""} ${isMobileView ? "mobile" : ""} ${latsRow ? "last" : ""}`}
            onClick={onAdd}
        >
            <img src={addNewButtonUrl} alt="Add new" />
            <div className="new-category-row-text">{text}</div>
        </button>
    );
};

export default NewCategoryRow;
