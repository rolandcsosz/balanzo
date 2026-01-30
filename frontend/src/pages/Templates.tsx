import styles from "./Templates.module.scss";
import { useModel } from "../hooks/useModel";
import TemplateCard from "../components/TemplateCard";
import { useBottomSheet } from "../hooks/useBottomSheet";
import EditOrNewForm from "./EditOrNewForm";
import { useMemo } from "preact/hooks";
import { useEntityQuery } from "../hooks/useEntityQuery";

const Templates = () => {
    const { template, transaction, refetchData } = useModel();
    const templates = template.list;
    const transactions = transaction.list;
    const { openSheet, closeSheet } = useBottomSheet();
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
        <div className={styles.templateGridContainer}>
            {getOrerderedTemplates.map((template, index) => (
                <TemplateCard
                    key={index}
                    template={template}
                    onUseTemplate={() => {
                        openSheet(
                            <EditOrNewForm
                                item={template}
                                onFinished={() => {
                                    refetchData();
                                    closeSheet();
                                }}
                            />,
                        );
                    }}
                    onEditTemplate={() => {
                        openSheet(
                            <EditOrNewForm
                                item={template}
                                onFinished={() => {
                                    refetchData();
                                    closeSheet();
                                }}
                            />,
                        );
                    }}
                />
            ))}
            <TemplateCard
                key={"add"}
                onUseTemplate={() => {
                    openSheet(
                        <EditOrNewForm
                            typeToAdd="template"
                            onFinished={() => {
                                refetchData();
                                closeSheet();
                            }}
                        />,
                    );
                }}
            />
        </div>
    );
};

export default Templates;
