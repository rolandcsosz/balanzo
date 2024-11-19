import './AddIcon.scss'
import { IconProps } from './IconProps';
import addButtonUrl from '../../assets/add-button.svg';

export const AddIcon = ({ isActive, isFilled }: IconProps) => {
    return (
        <button className="add-button" aria-label="Add new category">
            <img src={addButtonUrl} alt="" className="add-icon" />
        </button>
    );
};
