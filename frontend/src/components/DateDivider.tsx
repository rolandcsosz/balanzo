import styles from "./DateDivider.module.scss";

interface DateDividerProps {
    date: string;
}

const DateDivider = ({ date }: DateDividerProps) => {
    return (
        <div className={styles.container}>
            <time className={styles.date}>{date}</time>
            <div className={styles.divider} aria-hidden="true" />
        </div>
    );
};

export default DateDivider;
