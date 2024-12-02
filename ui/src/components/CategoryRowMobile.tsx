import './CategoryRowMobile.scss';
import { useEffect, useState } from 'preact/hooks';
import { Dropdown } from './Dropdown';
import InputField from './InputField';
import deleteButtonUrl from '../assets/delete.svg';

export function CategoryRowMobile({
    item,
    options,
    isSubcategory,
    firstSub,
    onEdit,
    onDelete,
}) {
    // State for selected type and name
    const [selectedType, setSelectedType] = useState(item?.expenseType?.name || options[0] || "");
    const [name, setName] = useState(item?.name || "");

    // Update state when item or options change
    useEffect(() => {
        setSelectedType(item?.expenseType?.name || options[0] || "");
        setName(item?.name || "");
    }, [item, options]);

    return (
        <div
            className={`category-row-mobile-row ${isSubcategory ? "sub" : "main"} ${firstSub ? "" : "nonfirstsub"}`}
        >
            <div className={`category-row-mobile-highlight ${isSubcategory ? "sub" : "main"}`} />
            <div className="category-row-mobile-content">

                <div className="category-row-mobile-nameSection">
                    <div className="category-row-mobile-label">Name</div>
                    {!isSubcategory && <div className="category-row-mobile-spacer" />}
                    <InputField
                        type="text"
                        value={name}
                        placeholder=""
                        onChange={(value) => {
                            setName(value);
                            onEdit(item._id, value, selectedType);
                        }}
                        mini={true}
                    />
                    <button className="category-row-mobile-icon" onClick={() => { onDelete(item._id); }}>
                        <img
                            loading="lazy"
                            src={deleteButtonUrl}
                            alt=""
                            className="category-row-action-icon"
                        />
                    </button>
                </div>

                <div className="category-row-mobile-typeSection">
                    <div className="category-row-mobile-label">Type</div>
                    {!isSubcategory && <div className="category-row-mobile-spacer" />}
                    <Dropdown
                        options={options}
                        selected={selectedType}
                        onSelectedChange={(value) => {
                            setSelectedType(value);
                            onEdit(item._id, name, value);
                        }}
                        mini={true}
                    />
                </div>
            </div>
        </div>
    );
}
