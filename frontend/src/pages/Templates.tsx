import { useDevice } from "../hooks/useDevice";
import "../components/TransactionCard.scss";
import { useModel } from "../hooks/useModel";
import { TemplateCard } from "../components/TemplateCard";
import { useBottomSheet } from "../hooks/useBottomSheet";
import { EditItemForm } from "./EditItemForm";
import { EditTemplate } from "./EditTemplate";
import { useMemo } from "preact/hooks";
import { useEntityQuery } from "../hooks/useEntityQuery";

export function Templates() {
    const { template, transaction, refetchData } = useModel();
    const templates = template.list;
    const transactions = transaction.list;
    const isMobile = useDevice();
    const { isOpen, content, openSheet, closeSheet } = useBottomSheet();
    const { store } = useEntityQuery();

    const getOrerderedTemplates = useMemo(() => {
        return templates.sort((a, b) => {
            const aCount = transactions.filter(
                (t) =>
                    store.subcategory(t.subcategoryId).tryGet()?.id === store.subcategory(a.subcategoryId).tryGet()?.id,
            ).length;
            const bCount = transactions.filter(
                (t) =>
                    store.subcategory(t.subcategoryId).tryGet()?.id === store.subcategory(b.subcategoryId).tryGet()?.id,
            ).length;
            return bCount - aCount;
        });
    }, [templates, transactions]);

    return (
        <div class="template-grid-container">
            {getOrerderedTemplates.map((template, index) => (
                <TemplateCard
                    key={index}
                    template={template}
                    onUseTemplate={() => {
                        openSheet(
                            <EditItemForm
                                templateToEdit={template}
                                transactionToEdit={null}
                                onFinished={() => {
                                    refetchData();
                                    closeSheet();
                                }}
                            />, // Open bottom sheet with EditItemForm component
                        );
                    }}
                    onEditTemplate={() => {
                        openSheet(
                            <EditTemplate
                                templateToEdit={template}
                                onFinished={() => {
                                    refetchData();
                                    closeSheet();
                                }}
                            />, // Open bottom sheet with EditTemplate component and refetch data on finish
                        );
                    }}
                />
            ))}
            <TemplateCard
                key={"add"}
                template={null}
                onUseTemplate={() => {
                    openSheet(
                        <EditTemplate
                            templateToEdit={null}
                            onFinished={() => {
                                refetchData();
                                closeSheet();
                            }}
                        />, // Open bottom sheet with EditTemplate component for adding a new template
                    );
                }}
            />
        </div>
    );
}
