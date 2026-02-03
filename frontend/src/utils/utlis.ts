import { ErrorResponse } from "../../../libs/sdk/types.gen";

export const formatDate = (date: string) => {
    return new Intl.DateTimeFormat("en-CA", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).format(new Date(date));
};

export const formattedStringToDate = (date: string): Date => {
    return new Date(date);
};

export const formatDateToSet = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day}T${hours}:${minutes}`;
};

export const formatCurrency = (value: number) => {
    return value.toLocaleString("hu-HU", {
        style: "currency",
        currency: "HUF",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
        useGrouping: true,
    });
};

export const uniqueId = (prefix = "id") => {
    return prefix + "_" + Math.random().toString(36).substr(2, 9);
};

export const isErrorResponse = <T>(obj: ErrorResponse | T): obj is ErrorResponse => {
    return (
        typeof obj === "object" &&
        obj !== null &&
        Object.keys(obj).length === 1 &&
        "message" in obj &&
        typeof obj["message"] === "string"
    );
};

export const mapById = <T extends { id: string }>(list: T[]): Record<string, T> => {
    return list.reduce(
        (acc, item) => {
            acc[item.id] = item;
            return acc;
        },
        {} as Record<string, T>,
    );
};

export const removeDuplicate = <T extends { id: string }>(list: T[]): T[] => {
    return [...new Map(list.map((item) => [item.id, item])).values()];
};

export const removeNullishValuesFromList = <T>(list: (T | null | undefined)[]): T[] => {
    return list.filter((item): item is T => item !== null && item !== undefined);
};

declare global {
    interface Array<T> {
        pipe<U>(fn: (arr: T[]) => U[]): U[];
    }
}

Array.prototype.pipe = function <T, U>(fn: (arr: T[]) => U[]): U[] {
    return fn(this);
};
