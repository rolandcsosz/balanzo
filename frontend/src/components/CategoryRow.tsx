import "./CategoryRow.scss";
import { useEffect, useState } from "preact/hooks";
import { Dropdown } from "./Dropdown";
import InputField from "./InputField";
import deleteButtonUrl from "../assets/delete.svg";

export function CategoryRow({ item, options, isSubcategory, firstSub, onEdit, onDelete }) {
    // State for selected type and name
    const [selectedType, setSelectedType] = useState(item?.expenseType?.name || options[0] || "");
    const [name, setName] = useState(item?.name || "");

    // Update state when item or options change
    useEffect(() => {
        setSelectedType(item?.expenseType?.name || options[0] || "");
        setName(item?.name || "");
    }, [item, options]);

    return (
        <div className={`category-row-table-row ${isSubcategory ? "sub" : "main"} ${firstSub ? "" : "nonfirstsub"}`}>
            <div className={`category-row-highlight-bar ${isSubcategory ? "sub" : "main"}`} />

            <div className="category-row-category-cell">
                <div className="category-row-category-name">
                    <InputField
                        type="text"
                        value={name}
                        placeholder=""
                        onChange={(value) => {
                            setName(value);
                            onEdit(item._id, value, selectedType); // Call onEdit when name changes
                        }}
                        mini={true}
                        labelLike={true}
                        largeText={true}
                    />
                </div>
            </div>

            <div className="category-row-type-cell">
                <Dropdown
                    options={options}
                    selected={selectedType}
                    onSelectedChange={(value) => {
                        setSelectedType(value);
                        onEdit(item._id, name, value); // Call onEdit when type changes
                    }}
                    mini={true}
                />
            </div>

            <button
                className="category-row-action-cell"
                onClick={() => {
                    onDelete(item._id);
                }}
            >
                <img loading="lazy" src={deleteButtonUrl} alt="" className="category-row-action-icon" />
            </button>
        </div>
    );
}
