import './CategoryRowMobile.scss';
import { useEffect, useState } from 'preact/hooks';
import { Sidebar } from '../components/Sidebar';
import { Navbar } from '../components/Navbar';
import deleteButtonUrl from '../assets/delete.svg';
import { useDevice } from '../hooks/useDevice';
import { Dropdown } from './Dropdown';
import InputField from './InputField';

export function CategoryRowMobile({
  item,
  options,
  isSubcategory,
  firstSub
}) {
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    if (item?.expenseType?.name) {
      setSelectedType(item.expenseType.name);
    } else if (options.length > 0) {
      setSelectedType(options[0]);
    }
  }, [item, options]);

  return (
    <div className={`category-row-mobile-row ${isSubcategory ? " sub" : " main"}  ${firstSub ? "" : " nonfirstsubb"} `}>
      <div className={`category-row-mobile-highlight ${isSubcategory ? "sub" : "main"}`} />
      <div className="category-row-mobile-content">
        <div className="category-row-mobile-nameSection">
          <div className="category-row-mobile-label">Name</div>
          {!isSubcategory && <div className="category-row-mobile-spacer" />}
          <InputField type="text" value={item.name} placeholder="" onChange={() => { }} mini={true} />
          <div className="category-row-mobile-icon">
            <img
              loading="lazy"
              src={deleteButtonUrl}
              alt=""
              className="category-row-action-icon"
            />
          </div>
        </div>
        <div className="category-row-mobile-typeSection">
          <div className="category-row-mobile-label">Type</div>
          {!isSubcategory && <div className="category-row-mobile-spacer" />}
          <Dropdown options={options} selected={selectedType} onSelectedChange={(value) => { }} mini={true} />
        </div>
      </div>
    </div>
  );
};