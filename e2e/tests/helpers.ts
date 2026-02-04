import { client } from "../../libs/sdk/client.gen";
import {
    getExpenseTypes,
    getMainCategories,
    getSubcategories,
    getTemplates,
    getTransactionTypes,
    login,
} from "../../libs/sdk/sdk.gen";
import { ErrorResponse, LoginSuccessResponse } from "../../libs/sdk/types.gen";

const API_URL = process.env.API_URL || "http://localhost:3000";
const TEST_EMAIL = process.env.TEST_EMAIL || "admin@admin.com";
const TEST_PASSWORD = process.env.TEST_PASSWORD || "pw123";

export type ResponseStructure<T> = (
    | {
        data: ErrorResponse | T;
        error: undefined;
    }
    | {
        data: undefined;
        error: unknown;
    }
) & {
    request: Request;
    response: Response;
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

export const checkResponseBody = <T>(response: ResponseStructure<ErrorResponse | T>): T => {
    if (isErrorResponse(response.error)) {
        throw new Error(response.error.message);
    }

    if (isErrorResponse(response.data)) {
        throw new Error(response.data.message);
    }

    if (!response.data) {
        throw new Error("No data in response");
    }

    return response.data;
};

export const getAuthToken = async (): Promise<string> => {
    if (!API_URL || !TEST_EMAIL || !TEST_PASSWORD) {
        throw new Error("API_URL, TEST_EMAIL, and TEST_PASSWORD must be set in environment variables");
    }

    const loginResponse: ResponseStructure<LoginSuccessResponse | ErrorResponse> = await login({
        body: {
            email: TEST_EMAIL,
            password: TEST_PASSWORD,
        },
    });

    const data = checkResponseBody(loginResponse);
    if (isErrorResponse(data)) {
        throw new Error(data.message);
    }
    return data.token;
};

export const setupAuthenticatedClient = async () => {
    client.setConfig({
        baseUrl: API_URL,
    });

    const token = await getAuthToken();

    client.setConfig({
        baseUrl: API_URL,
        auth: () => token,
    });
};

export const setupUnauthenticatedClient = () => {
    client.setConfig({
        baseUrl: API_URL,
        auth: undefined,
    });
};

export const setupInvalidTokenClient = () => {
    client.setConfig({
        baseUrl: API_URL,
        auth: () => "invalid-token-12345",
    });
};

export type ValidIds = {
    expenseTypeId: string;
    transactionTypeId: string;
    mainCategoryId: string;
    subcategoryId: string;
    transactionId: string;
    templateId: string;
};

export const getValidIds = async (): Promise<ValidIds> => {
    let validIds: ValidIds = {
        expenseTypeId: "",
        transactionTypeId: "",
        mainCategoryId: "",
        subcategoryId: "",
        transactionId: "",
        templateId: "",
    };

    const config: { [key in keyof ValidIds]: () => Promise<ResponseStructure<ErrorResponse | { id: string }[]>> } = {
        expenseTypeId: getExpenseTypes,
        transactionTypeId: getTransactionTypes,
        mainCategoryId: getMainCategories,
        subcategoryId: getSubcategories,
        transactionId: getTemplates,
        templateId: getTemplates,
    };

    for (const [key, func] of Object.entries(config)) {
        if (!func) {
            throw new Error(`Function for ${key} is not defined`);
        }

        const response = await func();
        const items = checkResponseBody(response);
        if (items.length === 0) {
            throw new Error(`No ${key} found. Please seed the database.`);
        }
        validIds[key as keyof ValidIds] = items[0].id;
    }

    return validIds;
};
