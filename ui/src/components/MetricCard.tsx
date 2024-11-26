import { formatCurrency } from '../utils/utlis';
import './MetricCard.scss';

export interface MetricCardProps {
    title: string;
    value: number;
}

export function MetricCard({ title, value }: MetricCardProps) {
    return (
        <section class="card">
            <h2 class="title">{title}</h2>
            <p class={`value ${value < 0 ? "negative" : "positive"}`}>{formatCurrency(value)}</p>
        </section>
    );
};