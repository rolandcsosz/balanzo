export function formatDate(date: string) {
    return new Intl.DateTimeFormat("en-CA", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).format(new Date(date));
}

export function formatCurrency(value: number) {
    return value.toLocaleString("hu-HU", {
        style: "currency",
        currency: "HUF",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
        useGrouping: true,
    });
}
