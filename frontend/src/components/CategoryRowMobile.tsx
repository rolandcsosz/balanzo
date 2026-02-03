import styles from "./CategoryRowMobile.module.scss";
import { useEffect, useState } from "preact/hooks";
import Dropdown from "./Dropdown";
import InputField from "./InputField";
import deleteButtonUrl from "../assets/delete.svg";
import { MainCategory, Subcategory } from "../../../libs/sdk/types.gen";
import { useEntityQuery } from "../hooks/useEntityQuery";

type CategoryRowMobileProps = {
    item: MainCategory | Subcategory;
    expenseTypeNames: string[];
    firstSubcategory?: boolean;
    onEdit: (id: string, name: string, type: string) => void;
    onDelete: (id: string) => void;
};

const CategoryRowMobile = ({ item, expenseTypeNames, firstSubcategory, onEdit, onDelete }: CategoryRowMobileProps) => {
    const { store } = useEntityQuery();
    const isSubcategory = (item as Subcategory).mainCategoryId !== undefined;
    const [selectedType, setSelectedType] = useState(
        store.expenseType(item?.expenseTypeId).tryGet()?.name || expenseTypeNames[0] || "",
    );
    const [name, setName] = useState(item?.name || "");

    useEffect(() => {
        setSelectedType(store.expenseType(item?.expenseTypeId).tryGet()?.name || expenseTypeNames[0] || "");
        setName(item?.name || "");
    }, [item, expenseTypeNames]);

    return (
        <div
            className={`${styles.categoryRowMobileRow} ${isSubcategory ? styles.sub : styles.main} ${firstSubcategory ? "" : styles.nonfirstsub}`}
        >
            <div className={`${styles.categoryRowMobileHighlight} ${isSubcategory ? styles.sub : styles.main}`} />
            <div className={styles.categoryRowMobileContent}>
                <div className={styles.categoryRowMobileNameSection}>
                    <div className={styles.categoryRowMobileLabel}>Name</div>
                    {!isSubcategory && <div className={styles.categoryRowMobileSpacer} />}
                    <InputField
                        type="text"
                        value={name}
                        placeholder=""
                        onChange={(value) => {
                            setName(value);
                            onEdit(item.id, value, selectedType);
                        }}
                        mini={true}
                    />
                    <button
                        className={styles.categoryRowMobileIcon}
                        onClick={() => {
                            onDelete(item.id);
                        }}
                    >
                        <img loading="lazy" src={deleteButtonUrl} alt="" className={styles.categoryRowActionIcon} />
                    </button>
                </div>

                <div className={styles.ategoryRowMobileTypeSection}>
                    <div className={styles.categoryRowMobileLabel}>Type</div>
                    {!isSubcategory && <div className="categoryRowMobilespacer" />}
                    <Dropdown
                        options={expenseTypeNames}
                        selected={selectedType}
                        onSelectedChange={(value) => {
                            setSelectedType(value);
                            onEdit(item.id, name, value);
                        }}
                        mini={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default CategoryRowMobile;
