import './Icon.scss'
import { IconProps } from './IconProps';

export const TemplatesIcon = ({ isActive, isFilled }:IconProps) => {
    if (isFilled) {
        return (
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 2.5C6.125 2.5 5.0125 3.625 5.0125 5L5 25C5 26.375 6.1125 27.5 7.4875 27.5H22.5C23.875 27.5 25 26.375 25 25V10L17.5 2.5H7.5ZM16.25 11.25V4.375L23.125 11.25H16.25Z" class={isActive ? "active" : "inactive"} />
            </svg>

        );
    }

    return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 2.5H7.5C6.125 2.5 5.0125 3.625 5.0125 5L5 25C5 26.375 6.1125 27.5 7.4875 27.5H22.5C23.875 27.5 25 26.375 25 25V10L17.5 2.5ZM7.5 25V5H16.25V11.25H22.5V25H7.5Z" class={isActive ? "active" : "inactive"} />
        </svg>
    );
};
