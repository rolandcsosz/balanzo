import { useDevice } from '../hooks/useDevice';
import '../components/TransactionCard.scss';
import { useModel } from '../hooks/useModel';
import { TemplateCard } from '../components/TemplateCard';
import { useBottomSheet } from '../hooks/useBottomSheet';
import { NewItem } from './NewItem';
import { NewTemplate } from './NewTemplate';

export function Templates() {
  const { templates } = useModel();
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
              <NewItem template={template} onFinished={closeSheet} />
            );
          }}
          onEditTemplate={() => {
            openSheet(
              <NewTemplate template={template} onFinished={closeSheet} />
            );
          }}
        />
      ))}
      <TemplateCard
        key={"add"}
        template={null}
        onUseTemplate={() => {
          openSheet(
            <NewTemplate template={null} onFinished={closeSheet} />
          );
        }}
      />
    </div>
  );
};