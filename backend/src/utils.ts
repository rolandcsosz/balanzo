export const getErrorMessage = (error: unknown): string => {
    if (error instanceof Error) {
        return error.message;
    } else if (typeof error === "string") {
        return error;
    } else if (typeof error === "object" && error !== null && "message" in error && typeof error.message === "string") {
        return error.message;
    }
    return "Unknown error";
};

export const getErrorCode = (error: unknown): string => {
    if (typeof error === "object" && error !== null && "code" in error && typeof error.code === "string") {
        return error.code;
    }
    return "";
};

export const parseRows = <T>(rows: unknown): T[] => {
    if (!Array.isArray(rows)) {
        return [];
    }

    try {
        return rows.map((row) => ({ ...(row as T) }));
    } catch {
        return [];
    }
};

export const checkFields = <T>(item: T): item is T => {
    for (const key in item) {
        if (item[key as keyof T] === undefined) {
            return false;
        }
    }
    return true;
};

export const getErrorMessageForDate = (date: string): null | Error => {
    const isoRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?$/;
    if (!isoRegex.test(date)) {
        return {
            name: "InvalidDateError",
            message: "Invalid date format. Expected ISO 8601 format.",
        };
    }
    const parsed = new Date(date);
    if (isNaN(parsed.getTime())) {
        return {
            name: "InvalidDateError",
            message: "Invalid date. Expected ISO 8601 format.",
        };
    }
    return null;
};

export const mapIdentity = <TIn extends TOut, TOut>(input: TIn): TOut => input;
