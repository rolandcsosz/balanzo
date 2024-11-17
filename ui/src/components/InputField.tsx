import './InputField.scss';

interface InputFieldProps {
    type: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
}

const InputField = ({ type, placeholder, value, onChange }: InputFieldProps) => {
    return (
        <input
            class="input"
            type={type}
            placeholder={placeholder}
            value={value}
            aria-label={placeholder}
            onInput={(e: any) => onChange(e.target.value)}
        />
    );
};

export default InputField;
