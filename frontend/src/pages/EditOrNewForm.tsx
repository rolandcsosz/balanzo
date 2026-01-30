import styles from "./EditOrNewForm.module.scss";
import InputField from "../components/InputField";
import Dropdown from "../components/Dropdown";
import { useEffect, useMemo, useState } from "preact/hooks";
import templateUrl from "../assets/template.svg";
import itemUrl from "../assets/item.svg";
import amountUrl from "../assets/amount.svg";
import expenseTypeUrl from "../assets/export-type.svg";
import categoryUrl from "../assets/category.svg";
import subcategoryUrl from "../assets/subcategory.svg";
import dateUrl from "../assets/date.svg";
import { formatDateToSet, formattedStringToDate } from "../utils/utlis";
import { useModel } from "../hooks/useModel";
import { Template, Transaction } from "../../../libs/sdk/types.gen";
import Button from "../components/Button";

interface EditItemFormProps {
    item?: Transaction | Template;
    typeToAdd?: "transaction" | "template";
    onFinished: () => void;
}

const isTransaction = (item: Transaction | Template): item is Transaction => {
    if (!item) {
        return false;
    }
    return (item as Transaction).item !== undefined;
};

const EditOrNewForm = ({ item, typeToAdd, onFinished }: EditItemFormProps) => {
    const isTransactionItem = isTransaction(item);
    const { mainCategory, subcategory, transactionType, transaction, template } = useModel();
    const [itemName, setItemName] = useState("");
    const [itemAmount, setItemAmount] = useState<number | string>("");
    const [itemTransactionType, setItemTransactionType] = useState("");
    const [itemCategory, setItemCategory] = useState("");
    const [itemCategoryOptions, setItemCategoryOptions] = useState([]);
    const [itemSubcategory, setItemSubcategory] = useState("");
    const [itemSubcategoryOptions, setItemSubcategoryOptions] = useState([]);
    const [itemDate, setItemDate] = useState(new Date());
    const [templateName, setTemplateName] = useState(isTransactionItem ? "" : item?.name || "");

    const setCategoryOptions = (transactionTypeName: string) => {
        const transactionTypeId = transactionType.list.find((type) => type.name === transactionTypeName)?.id;
        if (!transactionTypeId) {
            setItemCategoryOptions([]);
            return;
        }
        const filteredCategories = mainCategory.list
            ?.filter((category) => category.transactionTypeId === transactionTypeId)
            .map((category) => category?.name);
        setItemCategoryOptions(filteredCategories || []);
    };

    const setSubcategoryOptions = (category: string) => {
        const mainCategoryId = mainCategory.list.find((cat) => cat.name === category)?.id;
        if (!mainCategoryId) {
            setItemSubcategoryOptions([]);
            return;
        }
        const filteredSubcategories = subcategory.list
            .filter((subcategory) => subcategory.mainCategoryId === mainCategoryId)
            .map((subcategory) => subcategory.name);
        setItemSubcategoryOptions(filteredSubcategories);
    };

    useEffect(() => {
        if (item) {
            const name = (isTransactionItem ? item?.item : item?.itemName) || "";
            const amount = item?.amount || 0;
            const subcategoryId = item?.subcategoryId || "";
            const subcategoryName = subcategory.list.find((sub) => sub.id === subcategoryId)?.name || "";
            const mainCategoryId = subcategory.list.find((sub) => sub.id === subcategoryId).mainCategoryId || "";
            const mainCategoryName = mainCategory.list.find((cat) => cat.id === mainCategoryId)?.name || "";
            const transactionTypeId =
                mainCategory.list.find((type) => type.id === mainCategoryId)?.transactionTypeId || "";
            const transactionTypeName = transactionType.list.find((type) => type.id === transactionTypeId)?.name || "";
            const date = item?.date || new Date();

            setItemName(name);
            if (amount > 0) {
                setItemAmount(amount);
            }
            setItemTransactionType(transactionTypeName);
            setItemCategory(mainCategoryName);
            setItemSubcategory(subcategoryName);
            setItemDate(new Date(date));
        }
    }, [item, item, mainCategory.list, subcategory.list, transactionType.list]);

    useEffect(() => {
        if (itemTransactionType) {
            setCategoryOptions(itemTransactionType);
        }
    }, [itemTransactionType, mainCategory.list]);

    useEffect(() => {
        if (itemCategory) {
            setSubcategoryOptions(itemCategory);
        }
    }, [itemCategory, subcategory.list]);

    const handleEditItem = async () => {
        const transactionTypeId = transactionType.list.find((type) => type.name === itemTransactionType)?.id;
        if (!transactionTypeId) {
            console.error(`No transaction type found for: ${itemTransactionType}`);
            return;
        }

        const mainCategoryId = mainCategory.list.find(
            (category) => category.name === itemCategory && category.transactionTypeId === transactionTypeId,
        )?.id;

        const subcategoryId = subcategory.list.find(
            (subcategory) => subcategory.name === itemSubcategory && subcategory.mainCategoryId === mainCategoryId,
        )?.id;

        if (!subcategoryId) {
            console.error(`No subcategory found for: ${itemSubcategory}`);
            return;
        }

        if (!itemName || typeof itemAmount !== "number" || itemAmount <= 0) {
            return;
        }

        const baseBody = {
            amount: itemAmount,
            subcategoryId,
            date: itemDate.toISOString(),
        };

        if (item && item.id) {
            if (isTransactionItem) {
                transaction.update({ path: { id: item.id }, body: { ...baseBody, item: itemName } });
            } else {
                template.update({ path: { id: item.id }, body: { ...baseBody, itemName: itemName, name: itemName } });
            }
            onFinished();
            return;
        }

        if (isTransactionItem) {
            transaction.create({ body: { ...baseBody, item: itemName } });
        } else {
            template.create({ body: { ...baseBody, itemName: itemName, name: itemName } });
        }
        onFinished();
    };

    const handleDelete = async () => {
        if (!item) {
            console.error("No transaction found to delete");
            return;
        }

        transaction.delete({ path: { id: item.id } });
        onFinished();
    };

    const title = useMemo(() => {
        let title = item ? "Edit " : "New ";
        if (!item && typeToAdd) {
            title += typeToAdd;
            return title;
        }
        title += isTransactionItem ? "transaction" : "template";
        return title;
    }, [item, isTransactionItem]);

    return (
        <div className={styles.newItemContainer}>
            <div className={styles.newItemContent}>
                <div className={styles.newItemTitle}>{title}</div>
                <form onSubmit={(e) => e.preventDefault()} className={styles.newItemForm}>
                    {typeToAdd !== "transaction" && !isTransactionItem && (
                        <div className={styles.newItemFormRow}>
                            <img src={templateUrl} alt="" />
                            <InputField
                                type="text"
                                placeholder="Item"
                                value={templateName}
                                onChange={setTemplateName}
                            />
                        </div>
                    )}
                    <div className={styles.newItemFormRow}>
                        <img src={itemUrl} alt="" />
                        <InputField type="text" placeholder="Item" value={itemName} onChange={setItemName} />
                    </div>
                    <div className={styles.newItemFormRow}>
                        <img src={amountUrl} alt="" />
                        <InputField
                            type="number"
                            placeholder="Amount"
                            value={itemAmount}
                            onChange={(amount) => {
                                const parsedAmount = parseFloat(amount);
                                setItemAmount(isNaN(parsedAmount) ? 0 : parsedAmount);
                            }}
                        />
                    </div>
                    <div className={styles.newItemFormRow}>
                        <img src={expenseTypeUrl} alt="" />
                        <Dropdown
                            options={transactionType.list.map((type) => type.name)}
                            selected={itemTransactionType}
                            onSelectedChange={setItemTransactionType}
                            mini={false}
                        />
                    </div>
                    <div className={styles.newItemFormRow}>
                        <img src={categoryUrl} alt="" />
                        <Dropdown
                            options={itemCategoryOptions}
                            selected={itemCategory}
                            onSelectedChange={setItemCategory}
                            mini={false}
                        />
                    </div>
                    <div className={styles.newItemFormRow}>
                        <img src={subcategoryUrl} alt="" />
                        <Dropdown
                            options={itemSubcategoryOptions}
                            selected={itemSubcategory}
                            onSelectedChange={setItemSubcategory}
                            mini={false}
                        />
                    </div>
                    <div className={styles.newItemFormRow}>
                        <img src={dateUrl} alt="" />
                        <InputField
                            type="datetime-local"
                            placeholder="Select date and time"
                            value={formatDateToSet(itemDate)}
                            onChange={(date) => {
                                setItemDate(formattedStringToDate(date));
                            }}
                        />
                    </div>
                </form>
                <div className={styles.newItemButtonRow}>
                    {item && <Button text="Delete" onClick={handleDelete} style="secondary" />}
                    <Button text={item ? "Save" : "Add"} onClick={handleEditItem} />
                </div>
            </div>
        </div>
    );
};

export default EditOrNewForm;
