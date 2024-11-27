import { useEffect, useState } from "preact/hooks";
import "./InputField.scss";

export function Dropdown({ options, onSelectedChange }) {

  useEffect(() => {
    if (options.length === 0) {
      return;
    }

    onSelectedChange(options[0]);
  }, []);

  const handleChange = (event) => {
    onSelectedChange(event.target.value);
  };

  return (
    <select class="input-field" onChange={handleChange}>
      {options.map((option: string, index: number) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
