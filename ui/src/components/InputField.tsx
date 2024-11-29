import './InputField.scss';

interface InputFieldProps {
    type: string;
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
            className={`input-field ${mini ? "mini" : ""} ${labelLike ? "label-like" : ""} ${largeText ? "large-text" : ""}`}
            type={type}
            placeholder={placeholder}
            value={value}
            aria-label={placeholder}
            onInput={(e: any) => onChange(e.target.value)}
        />
    );
};

export default InputField;
