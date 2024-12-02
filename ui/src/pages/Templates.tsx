import { useDevice } from '../hooks/useDevice';
import '../components/TransactionCard.scss';
import { useModel } from '../hooks/useModel';
import { TemplateCard } from '../components/TemplateCard';
import { useBottomSheet } from '../hooks/useBottomSheet';
import { EditItem } from './EditItem';
import { EditTemplate } from './EditTemplate';

export function Templates() {
    const { templates, refetchData } = useModel(); // Fetch templates and refetch function from the model hook
    const isMobile = useDevice(); // Determine if the device is mobile
    const { isOpen, content, openSheet, closeSheet } = useBottomSheet(); // Bottom sheet state and control functions

    return (
        <div class="template-grid-container">
            {templates.map((template, index) => (
                <TemplateCard
                    key={index}
                    template={template}
                    onUseTemplate={() => {
                        openSheet(
                            <EditItem template={template} onFinished={closeSheet} /> // Open bottom sheet with EditItem component
                        );
                    }}
                    onEditTemplate={() => {
                        openSheet(
                            <EditTemplate template={template} onFinished={() => { refetchData(); closeSheet(); }} /> // Open bottom sheet with EditTemplate component and refetch data on finish
                        );
                    }}
                />
            ))}
            <TemplateCard
                key={"add"}
                template={null}
                onUseTemplate={() => {
                    openSheet(
                        <EditTemplate template={null} onFinished={() => { refetchData(); closeSheet(); }} /> // Open bottom sheet with EditTemplate component for adding a new template
                    );
                }}
            />
        </div>
    );
};
