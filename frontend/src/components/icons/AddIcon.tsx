import styles from "./Icon.module.scss";
import { IconProps } from "./IconProps";
import addButtonUrl from "../../assets/add-button.svg";

const AddIcon = ({ isActive, isFilled }: IconProps) => {
    return (
        <button className={styles.addButton} aria-label="Add new category">
            <img src={addButtonUrl} alt="" className="add-icon" />
        </button>
    );
};

export default AddIcon;
