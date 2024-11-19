import './SidebarButton.scss'
import { ComponentType } from 'preact';

interface SidebarButtonProps {
    Icon: ComponentType<{ isActive: boolean, isFilled: boolean }>;
    label: string;
    isActive?: boolean;
    onClick?: () => void;
}

export function SidebarButton({ Icon, label, isActive, onClick }: SidebarButtonProps) {
    return (
        <button
            class={`nav-button ${isActive ? "active" : ""}`}
            onClick={onClick}
            aria-current={isActive ? "page" : undefined}
        >
            <Icon isActive={isActive} isFilled={isActive} />
            <span class="nav-label">{label}</span>
        </button>
    );
};