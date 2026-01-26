import styles from "./DateDivider.module.scss";

export const DateDivider = ({ date }) => {
    return (
        <div class={styles.container}>
            <time className={styles.date}>{date}</time>
            <div className={styles.divider} aria-hidden="true" />
        </div>
    );
};
