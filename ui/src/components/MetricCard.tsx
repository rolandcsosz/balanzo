import { formatCurrency } from "../utils/utlis";
import "./MetricCard.scss";

// Define the properties for the MetricCard component
export interface MetricCardProps {
    title: string; // The title of the metric
    value: number; // The value of the metric
}

// MetricCard component to display a metric with a title and formatted value
export function MetricCard({ title, value }: MetricCardProps) {
    return (
        <section class="card">
            <h2 class="title">{title}</h2>
            {/* Apply a class based on whether the value is positive or negative */}
            <p class={`value ${value < 0 ? "negative" : "positive"}`}>{formatCurrency(value)}</p>
        </section>
    );
}
