import "./NewCategoryRow.scss";
import addNewButtonUrl from "../assets/add-new-button.svg";

interface CategoryRowProps {
    onAdd: (categoryId: string) => void; // Callback function when the button is clicked
    text: string; // Text to display inside the button
    categoryId?: string; // Optional category ID
    subRow?: boolean; // Flag to indicate if this is a sub-row
    latsRow?: boolean; // Flag to indicate if this is the last row
    isMobileView: boolean; // Flag to indicate if the view is mobile
}

export function NewCategoryRow({
    onAdd,
    text,
    categoryId,
    subRow = false,
    latsRow = false,
    isMobileView,
}: CategoryRowProps) {
    return (
        // Button element with dynamic classes based on props
        <button
            className={
                `new-category-row ${subRow ? "sub" : ""} ${isMobileView ? "mobile" : ""} ${latsRow ? "last" : ""}` /* Dynamic classes based on props */
            }
            onClick={() => {
                categoryId ? onAdd(categoryId) : onAdd("");
            }}
        >
            <img src={addNewButtonUrl} alt="Add new" /> {/* Image for the add new button */}
            <div className="new-category-row-text">
                {text} {/* Display the provided text */}
            </div>
        </button>
    );
}
