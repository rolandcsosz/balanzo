import { useDevice } from '../hooks/useDevice';
import '../components/TransactionCard.scss';
import { useModel } from '../hooks/useModel';
import { TemplateCard } from '../components/TemplateCard';
import { useBottomSheet } from '../hooks/useBottomSheet';
import { EditItem } from './EditItem';
import { EditTemplate } from './EditTemplate';

export function Templates() {
    const { templates, refetchData } = useModel();
    const isMobile = useDevice();
    const { isOpen, content, openSheet, closeSheet } = useBottomSheet();


    return (
        <div class="template-grid-container">
            {templates.map((template, index) => (
                <TemplateCard
                    key={index}
                    template={template}
                    onUseTemplate={() => {
                        openSheet(
                            <EditItem template={template} onFinished={closeSheet} />
                        );
                    }}
                    onEditTemplate={() => {
                        openSheet(
                            <EditTemplate template={template} onFinished={() => { refetchData(); closeSheet(); }} />
                        );
                    }}
                />
            ))}
            <TemplateCard
                key={"add"}
                template={null}
                onUseTemplate={() => {
                    openSheet(
                        <EditTemplate template={null} onFinished={() => { refetchData(); closeSheet(); }} />
                    );
                }}
            />
        </div>
    );
};