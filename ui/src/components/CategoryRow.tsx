import './CategoryRow.scss';
import { useEffect, useState } from 'preact/hooks';
import { Sidebar } from '../components/Sidebar';
import { Navbar } from '../components/Navbar';
import deleteButtonUrl from '../assets/delete.svg';
import { useDevice } from '../hooks/useDevice';
import { Dropdown } from './Dropdown';
import InputField from './InputField';

export function CategoryRow({
    item,
    options,
    isSubcategory,
    firstSub
}) {
    const isMobile = useDevice();
    const [selectedType, setSelectedType] = useState("");

    useEffect(() => {
        if (item?.expenseType?.name) {
            setSelectedType(item.expenseType.name);
        } else if (options.length > 0) {
            setSelectedType(options[0]);
        }
    }, [item, options]);

    return (
        <div class={`${"category-row-table-row"} ${isSubcategory ? " sub" : " main"}  ${firstSub ? "" : " nonfirstsub"} `}>
            <div class={`${"category-row-highlight-bar"} ${isSubcategory ? " sub" : " main"}`}></div>
            <div class="category-row-category-cell">
                <div class="category-row-category-name">
                    <InputField type="text" value={item.name} placeholder="" onChange={() => { }} mini={true} labelLike={true} largeText={true}/>
                </div>
            </div>
            <div class="category-row-type-cell">
                <Dropdown options={options} selected={selectedType} onSelectedChange={(value) => { }} mini={true} />
            </div>
            <div class="category-row-action-cell">
                <img
                    loading="lazy"
                    src={deleteButtonUrl}
                    alt=""
                    class="category-row-action-icon"
                />
            </div>
        </div>
    );
};