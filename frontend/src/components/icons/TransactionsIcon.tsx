import styles from "./Icon.module.scss";
import { IconProps } from "./IconProps";

const TransactionsIcon = ({ isActive, isFilled }: IconProps) => {
    if (isFilled) {
        return (
            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M27.125 10.3332H3.875V5.1665H27.125V10.3332ZM27.125 12.9165H3.875V18.0832H27.125V12.9165ZM27.125 20.6665H3.875V25.8332H27.125V20.6665Z"
                    className={isActive ? styles.active : styles.inactive}
                />
            </svg>
        );
    }

    return (
        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M24.5417 3.875H6.45833C5.0375 3.875 3.875 5.0375 3.875 6.45833V24.5417C3.875 25.9625 5.0375 27.125 6.45833 27.125H24.5417C25.9625 27.125 27.125 25.9625 27.125 24.5417V6.45833C27.125 5.0375 25.9625 3.875 24.5417 3.875ZM24.5417 6.45833V10.3333H6.45833V6.45833H24.5417ZM24.5417 12.9167V18.0833H6.45833V12.9167H24.5417ZM6.45833 24.5417V20.6667H24.5417V24.5417H6.45833Z"
                className={isActive ? styles.active : styles.inactive}
            />
        </svg>
    );
};

export default TransactionsIcon;
