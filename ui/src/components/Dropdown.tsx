import { useEffect } from "preact/hooks";
import "./InputField.scss";

// Dropdown component definition
export function Dropdown({ options, selected, onSelectedChange, mini }) {
  // Effect to set the initial selected option if none is selected
  useEffect(() => {
    if (options.length > 0 && !selected) {
      onSelectedChange(options[0]);
    }
  }, [options, selected, onSelectedChange]);

  // Handle change event for the select element
  const handleChange = (event) => {
    onSelectedChange(event.target.value);
  };

  // Render the select element with options
  return (
    <select
      className={`input-field ${mini ? "mini" : ""}`}
      value={selected}
      onChange={handleChange}
    >
      {options.map((option: string, index: number) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
