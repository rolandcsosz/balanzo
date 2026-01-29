import styles from "./InputField.module.scss";

interface InputFieldProps {
    type: "number" | "text" | "password" | "email" | "datetime-local";
    placeholder: string;
    value: number | string;
    onChange: (value: string) => void;
    mini?: boolean;
    labelLike?: boolean;
    largeText?: boolean;
}

const InputField = ({ type, placeholder, value, onChange, mini, labelLike, largeText }: InputFieldProps) => {
    return (
        <input
            className={`${styles.inputField} ${mini ? styles.mini : ""} ${labelLike ? styles.labelLike : ""} ${largeText ? styles.largeText : ""}`}
            type={type}
            placeholder={placeholder}
            value={value}
            aria-label={placeholder}
            onInput={(e: any) => onChange(e.target.value)}
        />
    );
};

export default InputField;
