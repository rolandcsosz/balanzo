export function formatDate(date: string) {
    return new Intl.DateTimeFormat("en-CA", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).format(new Date(date));
}

export function formattedStringToDate(date: string): Date {
    return new Date(date);
}

export function formatDateToSet(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day}T${hours}:${minutes}`;
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
