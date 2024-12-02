import './InputField.scss';

// Define the props for the InputField component
interface InputFieldProps {
    type: string; // The type of the input field (e.g., text, number, etc.)
    placeholder: string; // The placeholder text for the input field
    value: number | string; // The current value of the input field
    onChange: (value: string) => void; // Function to call when the input value changes
    mini?: boolean; // Optional prop to apply mini styling
    labelLike?: boolean; // Optional prop to apply label-like styling
    largeText?: boolean; // Optional prop to apply large text styling
}

// Define the InputField component
const InputField = ({ type, placeholder, value, onChange, mini, labelLike, largeText }: InputFieldProps) => {
    return (
        <input
            className={`input-field ${mini ? "mini" : ""} ${labelLike ? "label-like" : ""} ${largeText ? "large-text" : ""}`} // Apply conditional classes based on props
            type={type} // Set the input type
            placeholder={placeholder} // Set the placeholder text
            value={value} // Set the current value of the input
            aria-label={placeholder} // Set the aria-label for accessibility
            onInput={(e: any) => onChange(e.target.value)} // Handle input changes and call onChange with the new value
        />
    );
};

export default InputField; // Export the InputField component
