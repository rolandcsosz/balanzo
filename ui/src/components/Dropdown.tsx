import { useEffect } from "preact/hooks";
import "./InputField.scss";

export function Dropdown({ options, selected, onSelectedChange }) {
  useEffect(() => {
    if (options.length > 0 && !selected) {
      onSelectedChange(options[0]);
    }
  }, [options, selected, onSelectedChange]);

  const handleChange = (event) => {
    onSelectedChange(event.target.value);
  };

  return (
    <select
      class="input-field"
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
