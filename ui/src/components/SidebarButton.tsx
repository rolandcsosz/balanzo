import "./SidebarButton.scss";
import { ComponentType } from "preact";
import { IconProps } from "./icons/IconProps";

interface SidebarButtonProps {
    Icon: ComponentType<IconProps>; // The icon component to be displayed
    label: string; // The label text for the button
    isActive?: boolean; // Indicates if the button is active
    isFilled?: boolean; // Indicates if the icon should be filled
    isLabelVisible?: boolean; // Indicates if the label should be visible
    isButtonBackgroundVisible?: boolean; // Indicates if the button background should be visible
    onClick?: () => void; // Click event handler
}

export function SidebarButton({
    Icon,
    label,
    isActive = false,
    isFilled = false,
    isLabelVisible = true,
    isButtonBackgroundVisible = true,
    onClick,
}: SidebarButtonProps) {
    return (
        <button
            class={`nav-button ${isActive && isButtonBackgroundVisible ? " active" : ""}`} // Apply active class if the button is active and background is visible
            onClick={onClick} // Attach the click event handler
        >
            <Icon isActive={isActive} isFilled={isFilled} /> {/* Render the icon with the provided props*/}
            {isLabelVisible && <span class="nav-label">{label}</span>} {/* Render the label if it should be visible */}
        </button>
    );
}
