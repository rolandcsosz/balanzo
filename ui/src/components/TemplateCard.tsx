import openButtonUrl from "../assets/open-button.svg";
import arrowUrl from "../assets/arrow.svg";
import "./TemplateCard.scss";
import { Template } from "../types";

interface TemplateCardProps {
    template: Template | null;
    onUseTemplate: () => void;
    onEditTemplate?: () => void;
}

export const TemplateCard = ({ template, onUseTemplate, onEditTemplate = () => {} }) => {
    return (
        <article className={`template-card ${template ? "" : "new"}`}>
            {/* Header section with template name or "New" */}
            <div class="template-card-header">
                <div class="template-card-title">{template ? template.name : "New"}</div>
            </div>
            {template && (
                // Icon wrapper for editing template
                <div class="template-icon-wrapper" onClick={onEditTemplate}>
                    <img loading="lazy" src={openButtonUrl} class="template-icon" alt="" />
                </div>
            )}
            {/* Action button for using or adding template */}
            <div class="template-action-button" onClick={onUseTemplate}>
                <div class="template-action-text">{template ? "Use template" : "Add new"}</div>
                <img loading="lazy" src={arrowUrl} class="template-action-icon" alt="" />
            </div>
        </article>
    );
};
