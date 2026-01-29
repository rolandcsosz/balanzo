import { formatCurrency } from "../utils/utlis";
import styles from "./MetricCard.module.scss";

interface MetricCardProps {
    title: string;
    value: number;
}

const MetricCard = ({ title, value }: MetricCardProps) => {
    return (
        <section className={styles.card}>
            <h2 className={styles.title}>{title}</h2>
            <p className={`${styles.value} ${value < 0 ? styles.negative : styles.positive}`}>
                {formatCurrency(value)}
            </p>
        </section>
    );
};

export default MetricCard;
