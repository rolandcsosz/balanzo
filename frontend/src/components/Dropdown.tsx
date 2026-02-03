import { useEffect } from "preact/hooks";
import styles from "./Dropdown.module.scss";

interface DropdownProps {
    options: string[];
    selected: string;
    onSelectedChange: (value: string) => void;
    mini?: boolean;
    lightBorder?: boolean;
}

const Dropdown = ({ options, selected, onSelectedChange, mini, lightBorder = false }: DropdownProps) => {
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
            className={`${styles.dropdown} ${mini ? styles.mini : ""} ${lightBorder ? styles.lightBorder : ""}`}
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
};

export default Dropdown;
