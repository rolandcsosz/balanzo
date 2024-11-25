import './MetricCard.scss';
export interface MetricCardProps {
    title: string;
    value: number;
}

const formatNumber = (value: number) => {
    return value.toLocaleString("hu-HU", {
        style: "currency",
        currency: "HUF",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
        useGrouping: true,
    });
}

export function MetricCard({ title, value }: MetricCardProps) {
    return (
        <section class="card">
            <h2 class="title">{title}</h2>
            <p class={`value ${value < 0 ? "negative" : "positive"}`}>{formatNumber(value)}</p>
        </section>
    );
};