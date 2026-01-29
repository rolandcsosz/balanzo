import styles from "./SidebarButton.module.scss";
import { ComponentType } from "preact";
import { IconProps } from "./icons/IconProps";

interface SidebarButtonProps {
    Icon: ComponentType<IconProps>;
    label: string;
    isActive?: boolean;
    isFilled?: boolean;
    isLabelVisible?: boolean;
    isButtonBackgroundVisible?: boolean;
    onClick?: () => void;
}

const SidebarButton = ({
    Icon,
    label,
    isActive = false,
    isFilled = false,
    isLabelVisible = true,
    isButtonBackgroundVisible = true,
    onClick,
}: SidebarButtonProps) => {
    return (
        <div
            className={`${styles.navButton} ${isActive && isButtonBackgroundVisible ? styles.active : ""}`}
            onClick={onClick}
        >
            <Icon isActive={isActive} isFilled={isFilled} />
            {isLabelVisible && <span className={styles.navLabel}>{label}</span>}
        </div>
    );
};

export default SidebarButton;
