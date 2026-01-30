import styles from "./Button.module.scss";

interface ButtonProps {
    text: string;
    onClick: () => void;
    style?: "primary" | "secondary";
}
const Button = ({ text, onClick, style = "primary" }: ButtonProps) => {
    return (
        <button
            className={`${styles.button} ${style === "primary" ? styles.primary : styles.secondary}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
