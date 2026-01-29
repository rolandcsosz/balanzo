import openButtonUrl from "../assets/open-button.svg";
import arrowUrl from "../assets/arrow.svg";
import styles from "./TemplateCard.module.scss";
import { Template } from "../../../libs/sdk/types.gen";

interface TemplateCardProps {
    template?: Template;
    onUseTemplate: () => void;
    onEditTemplate?: () => void;
}

const TemplateCard = ({ template, onUseTemplate, onEditTemplate = () => {} }: TemplateCardProps) => {
    return (
        <div className={`${styles.templateCard} ${template ? "" : styles.new}`}>
            <div className={styles.templateCardHeader}>
                <div className={styles.templateCardTitle}>{template ? template.name : "New"}</div>
            </div>
            {template && (
                <div className={styles.templateIconWrapper} onClick={onEditTemplate}>
                    <img loading="lazy" src={openButtonUrl} className="templateIcon" alt="" />
                </div>
            )}
            <div className={styles.templateActionButton} onClick={onUseTemplate}>
                <div className={styles.templateActionText}>{template ? "Use template" : "Add new"}</div>
                <img loading="lazy" src={arrowUrl} className="templateActionIcon" alt="" />
            </div>
        </div>
    );
};

export default TemplateCard;
