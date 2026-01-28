import "./EditItemForm.scss";
import InputField from "../components/InputField";
import { Dropdown } from "../components/Dropdown";
import { useEffect, useState } from "preact/hooks";
import templateUrl from "../assets/template.svg";
import itemUrl from "../assets/item.svg";
import amountUrl from "../assets/amount.svg";
import expenseTypeUrl from "../assets/export-type.svg";
import categoryUrl from "../assets/category.svg";
import subcategoryUrl from "../assets/subcategory.svg";
import { useModel } from "../hooks/useModel";
import { Template } from "../../../libs/sdk/types.gen";
import { useEntityQuery } from "../hooks/useEntityQuery";
import { removeNullishValuesFromList } from "../utils/utlis";

interface EditItemProps {
    templateToEdit?: Template | null;
    onFinished: () => void;
}

export function EditTemplate({ templateToEdit = null, onFinished }: EditItemProps) {
    const { mainCategory, subcategory, transactionType, template } = useModel();
    const transactionTypes = transactionType.list;
    const mainCategories = mainCategory.list;
    const subcategories = subcategory.list;
    const [templateName, setTemplateName] = useState(templateToEdit?.name || "");
    const [itemName, setItemName] = useState(templateToEdit?.itemName || "");
    const [itemAmount, setItemAmount] = useState(templateToEdit?.amount || "");
    const { store } = useEntityQuery();

    const [itemTransactionType, setItemTransactionType] = useState(
        store
            .template(templateToEdit?.id || "")
            .subcategory()
            .mainCategory()
            .transactionType()
            .tryGet()?.name ||
            transactionTypes[0]?.name ||
            "",
    );
    const [itemCategory, setItemCategory] = useState(
        store
            .template(templateToEdit?.id || "")
            .subcategory()
            .mainCategory()
            .tryGet()?.name || "",
    );
    const [itemCategoryOptions, setItemCategoryOptions] = useState<string[]>([]);
    const [itemSubcategory, setItemSubcategory] = useState(
        store
            .template(templateToEdit?.id || "")
            .subcategory()
            .tryGet() || "",
    );
    const [itemSubcategoryOptions, setItemSubcategoryOptions] = useState<string[]>([]);

    const setCategoryOptions = (transactionType: string) => {
        const filteredCategories = mainCategory.list
            .map((cat) => store.mainCategory(cat.id))
            .filter((category) => category.transactionType().tryGet()?.name === transactionType)
            .map((category) => category.tryGet()?.name)
            .pipe(removeNullishValuesFromList);
        setItemCategoryOptions(filteredCategories || []);
    };

    const setSubcategoryOptions = (category: string) => {
        const filteredSubcategories = subcategory.list
            .filter((subcat) => store.mainCategory(subcat.mainCategoryId).tryGet()?.name === category)
            .map((subcat) => subcat.name);
        setItemSubcategoryOptions(filteredSubcategories);
    };

    useEffect(() => {
        setCategoryOptions(itemTransactionType);
    }, [itemTransactionType, mainCategories]);

    useEffect(() => {
        setSubcategoryOptions(itemCategory);
    }, [itemCategory, subcategories]);

    const handleEditItem = async () => {
        const transactionType = transactionTypes.find((type) => type.name === itemTransactionType)?.id;
        if (!transactionType) {
            console.error(`No transaction type found for: ${itemTransactionType}`);
            return;
        }

        const subcategories = subcategory.list
            .filter(
                (subcat) =>
                    store.mainCategory(subcat.mainCategoryId).tryGet()?.name === itemCategory &&
                    subcat.name === itemSubcategory,
            )
            .map((subcat) => subcat.name);

        const currentsubcategory = subcategories.length > 0 ? subcategories[0] : null;
        if (!currentsubcategory) {
            console.error(`No subcategory found for: ${itemSubcategory}`);
            return;
        }

        const body: any = {
            name: templateName,
            itemName: itemName,
            amount: itemAmount,
            transactionType: transactionType,
            subcategory: currentsubcategory,
        };

        if (templateToEdit) {
            body.id = templateToEdit.id;
            template.update(body);
            return;
        }

        template.create(body);
        onFinished();
    };

    // Handle deleting the item
    const handleDelete = async () => {
        if (!template) {
            console.error("No transaction found to delete");
            return;
        }

        template.delete({ path: { id: templateToEdit.id } });
        onFinished();
    };

    return (
        <div class="new-item-container">
            <div class="new-item-content">
                <h1 class="new-item-title">{template ? "Edit template" : "New template"}</h1>
                <form onSubmit={(e) => e.preventDefault()} class="new-item-form">
                    <div class="new-item-form-row">
                        <img src={templateUrl} alt="" />
                        <InputField type="text" placeholder="Item" value={templateName} onChange={setTemplateName} />
                    </div>
                    <div class="new-item-form-row">
                        <img src={itemUrl} alt="" />
                        <InputField type="text" placeholder="Item" value={itemName} onChange={setItemName} />
                    </div>
                    <div class="new-item-form-row">
                        <img src={amountUrl} alt="" />
                        <InputField type="number" placeholder="Amount" value={itemAmount} onChange={setItemAmount} />
                    </div>
                    <div class="new-item-form-row">
                        <img src={expenseTypeUrl} alt="" />
                        <Dropdown
                            options={transactionTypes.map((type) => type.name)}
                            selected={itemTransactionType}
                            onSelectedChange={setItemTransactionType}
                            mini={false}
                        />
                    </div>
                    <div class="new-item-form-row">
                        <img src={categoryUrl} alt="" />
                        <Dropdown
                            options={itemCategoryOptions}
                            selected={itemCategory}
                            onSelectedChange={setItemCategory}
                            mini={false}
                        />
                    </div>
                    <div class="new-item-form-row">
                        <img src={subcategoryUrl} alt="" />
                        <Dropdown
                            options={itemSubcategoryOptions}
                            selected={itemSubcategory}
                            onSelectedChange={setItemSubcategory}
                            mini={false}
                        />
                    </div>
                </form>
                <div class="new-item-button-row">
                    {template && (
                        <button class="new-item-delete-button" onClick={handleDelete}>
                            Delete
                        </button>
                    )}
                    <button type="submit" class="new-item-submit-button" onClick={handleEditItem}>
                        {template ? "Save" : "Add"}
                    </button>
                </div>
            </div>
        </div>
    );
}
