import './SidebarButton.scss'
import { ComponentType } from 'preact';
import { useDevice } from '../hooks/useDevice';

interface SidebarButtonProps {
    Icon: ComponentType<{ isActive: boolean, isFilled: boolean }>;
    label: string;
    isActive?: boolean;
    isFilled?: boolean;
    isLabelVisible?: boolean;
    isButtonBackgroundVisible?: boolean;
    onClick?: () => void;
}

export function SidebarButton({ Icon, label, isActive = false, isFilled = false, isLabelVisible = true, isButtonBackgroundVisible = true, onClick }: SidebarButtonProps) {
    const isMobile = useDevice();
    return (
        <button
            class={`nav-button ${isMobile ? "mobile" : "desktop"}` + (isActive && isButtonBackgroundVisible ? " active" : "")}
            onClick={onClick}
        >
            <Icon isActive={isActive} isFilled={isFilled} />
            {isLabelVisible && <span class="nav-label">{label}</span>}
        </button>
    );
};