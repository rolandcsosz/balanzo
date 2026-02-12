import styles from "./EditOrNewForm.module.scss";
import InputField from "../components/InputField";
import Dropdown from "../components/Dropdown";
import { useCallback, useEffect, useMemo, useState } from "preact/hooks";
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
    itemType: "transaction" | "template";
    onFinished: () => void;
}

const isTransaction = (item: Transaction | Template): item is Transaction => {
    return !!item && "item" in item;
};

const EditOrNewForm = ({ item, itemType, onFinished }: EditItemFormProps) => {
    const isTransactionItem = itemType === "transaction";
    const isEditing = useMemo(() => {
        if (!item || !item.id) return false;
        return isTransactionItem ? isTransaction(item) : !isTransaction(item);
    }, [item, isTransactionItem]);

    const { mainCategory, subcategory, transactionType, transaction, template } = useModel();
    const [itemName, setItemName] = useState("");
    const [itemAmount, setItemAmount] = useState<number | string>("");
    const [itemTransactionType, setItemTransactionType] = useState("");
    const [itemCategory, setItemCategory] = useState("");
    const [itemCategoryOptions, setItemCategoryOptions] = useState([]);
    const [itemSubcategory, setItemSubcategory] = useState("");
    const [itemSubcategoryOptions, setItemSubcategoryOptions] = useState([]);
    const [itemDate, setItemDate] = useState<Date | null>(isTransactionItem ? new Date() : null);
    const [templateName, setTemplateName] = useState(
        !isTransactionItem && !isTransaction(item) ? (item as Template)?.name : "",
    );

    const setCategoryOptions = (transactionTypeName: string) => {
        const transactionTypeId = transactionType.list.find((type) => type.name === transactionTypeName)?.id;
        if (!transactionTypeId) {
            setItemCategoryOptions([]);
            return;
        }
        const filteredCategories = mainCategory.list
            ?.filter((category) => category.transactionTypeId === transactionTypeId)
            .map((category) => category?.name);
        const options = filteredCategories || [];
        setItemCategoryOptions(options);

        if (options.length > 0 && !options.includes(itemCategory)) {
            setItemCategory(options[0]);
        }
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
        const options = filteredSubcategories;
        setItemSubcategoryOptions(options);

        if (options.length > 0 && !options.includes(itemSubcategory)) {
            setItemSubcategory(options[0]);
        }
    };

    useEffect(() => {
        if (item) {
            const name = (isTransaction(item) ? item.item : item.itemName) || "";
            const amount = item?.amount || 0;
            const subcategoryId = item?.subcategoryId || "";
            const subcategoryName = subcategory.list.find((sub) => sub.id === subcategoryId)?.name || "";
            const mainCategoryId = subcategory.list.find((sub) => sub.id === subcategoryId)?.mainCategoryId || "";
            const mainCategoryName = mainCategory.list.find((cat) => cat.id === mainCategoryId)?.name || "";
            const transactionTypeId =
                mainCategory.list.find((type) => type.id === mainCategoryId)?.transactionTypeId || "";
            const transactionTypeName = transactionType.list.find((type) => type.id === transactionTypeId)?.name || "";
            const date =
                item?.date ? new Date(item.date)
                : isTransactionItem ? new Date()
                : null;

            setItemName(name);
            if (amount > 0) {
                setItemAmount(amount);
            }
            setItemTransactionType(transactionTypeName);
            setItemCategory(mainCategoryName);
            setItemSubcategory(subcategoryName);
            setItemDate(date);
        } else if (transactionType.list.length > 0) {
            // Default for new items
            const sortedTypes = [...transactionType.list].sort((a, b) => a.name.localeCompare(b.name));
            setItemTransactionType(sortedTypes[0].name);
        }
    }, [item, isTransactionItem, mainCategory.list, subcategory.list, transactionType.list]);

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

    const handleEditItem = useCallback(async () => {
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
            date:
                itemDate ? itemDate.toISOString()
                : isTransactionItem ? new Date().toISOString()
                : null,
        };

        if (isEditing && item?.id) {
            if (isTransactionItem) {
                transaction.update({ path: { id: item.id }, body: { ...baseBody, item: itemName } });
            } else {
                template.update({
                    path: { id: item.id },
                    body: { ...baseBody, itemName: itemName, name: templateName },
                });
            }
            onFinished();
            return;
        }

        if (isTransactionItem) {
            transaction.create({ body: { ...baseBody, item: itemName } });
        } else {
            template.create({ body: { ...baseBody, itemName: itemName, name: templateName } });
        }
        onFinished();
    }, [
        isEditing,
        item,
        isTransactionItem,
        itemTransactionType,
        itemCategory,
        itemSubcategory,
        itemAmount,
        itemName,
        itemDate,
        templateName,
        transactionType.list,
        mainCategory.list,
        subcategory.list,
        transaction,
        template,
        onFinished,
    ]);

    const handleDelete = useCallback(async () => {
        if (!isEditing) {
            console.error("No item to delete");
            return;
        }

        if (isTransactionItem) {
            transaction.delete({ path: { id: item?.id } });
        } else {
            template.delete({ path: { id: item?.id } });
        }

        onFinished();
    }, [isEditing, isTransactionItem, item?.id, transaction, template, onFinished]);

    const title = useMemo(() => {
        let title = isEditing ? "Edit " : "New ";
        title += isTransactionItem ? "transaction" : "template";
        return title;
    }, [isEditing, isTransactionItem]);

    return (
        <div className={styles.newItemContainer}>
            <div className={styles.newItemContent}>
                <div className={styles.newItemTitle}>{title}</div>
                <form onSubmit={(e) => e.preventDefault()} className={styles.newItemForm}>
                    {!isTransactionItem && (
                        <div className={styles.newItemFormRow}>
                            <img src={templateUrl} alt="" />
                            <InputField
                                type="text"
                                placeholder="Template Name"
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
                            options={transactionType.list.map((type) => type.name).sort()}
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
                    {isEditing && <Button text="Delete" onClick={handleDelete} style="secondary" />}
                    <Button text={isEditing ? "Save" : "Add"} onClick={handleEditItem} />
                </div>
            </div>
        </div>
    );
};

export default EditOrNewForm;
