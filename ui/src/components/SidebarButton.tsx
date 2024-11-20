import './SidebarButton.scss'
import { ComponentType } from 'preact';
import { IconProps } from './icons/IconProps';

interface SidebarButtonProps {
    Icon: ComponentType<IconProps>;
    label: string;
    isActive?: boolean;
    isFilled?: boolean;
    isLabelVisible?: boolean;
    isButtonBackgroundVisible?: boolean;
    onClick?: () => void;
}

export function SidebarButton({ Icon, label, isActive = false, isFilled = false, isLabelVisible = true, isButtonBackgroundVisible = true, onClick }: SidebarButtonProps) {
    return (
        <button
            class={`nav-button ${isActive && isButtonBackgroundVisible ? " active" : ""}`}
            onClick={onClick}
        >
            <Icon isActive={isActive} isFilled={isFilled} />
            {isLabelVisible && <span class="nav-label">{label}</span>}
        </button>
    );
};