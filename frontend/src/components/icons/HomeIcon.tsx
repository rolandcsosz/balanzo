import styles from "./Icon.module.scss";
import { IconProps } from "./IconProps";

const HomeIcon = ({ isActive, isFilled }: IconProps) => {
    if (isFilled) {
        return (
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14.1666 29.0418V20.5418H19.8333V29.0418H26.9166V17.7085H31.1666L16.9999 4.9585L2.83325 17.7085H7.08325V29.0418H14.1666Z"
                    className={isActive ? styles.active : styles.inactive}
                />
            </svg>
        );
    }

    return (
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M16.9999 8.76933L24.0833 15.1443V26.2085H21.2499V17.7085H12.7499V26.2085H9.91659V15.1443L16.9999 8.76933ZM16.9999 4.9585L2.83325 17.7085H7.08325V29.0418H15.5833V20.5418H18.4166V29.0418H26.9166V17.7085H31.1666L16.9999 4.9585Z"
                className={isActive ? styles.active : styles.inactive}
            />
        </svg>
    );
};

export default HomeIcon;
