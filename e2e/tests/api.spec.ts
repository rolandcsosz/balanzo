import { test, expect } from '@playwright/test';
import { login, getTransactionTypes, getExpenseTypes } from '../../libs/sdk/sdk.gen';
import { ErrorResponse, LoginResponse } from '../../libs/sdk/types.gen';
import { client } from '../../libs/sdk/client.gen';

const API_URL = process.env.API_URL || "";
const TEST_EMAIL = process.env.TEST_EMAIL || "";
const TEST_PASSWORD = process.env.TEST_PASSWORD || "";

client.setConfig({
    baseUrl: API_URL,
});

type ResponseType<T> =
    | {
        data: undefined;
        error: unknown;
    }
    | {
        data: ErrorResponse | T;
        error: undefined;
    } & {
        request: Request;
        response: Response;
    };

const isErrorResponse = <T>(obj: ErrorResponse | T): obj is ErrorResponse => {
    return typeof obj === 'object' && obj !== null && Object.keys(obj).length === 1 && 'message' in obj && typeof obj['message'] === 'string';
}

const checkResponseBody = <T>(response: ResponseType<ErrorResponse | T>): T => {

    if (isErrorResponse(response.error)) {
        throw new Error(response.error.message);
    }

    if (isErrorResponse(response.data)) {
        throw new Error(response.data.message);
    }

    if (!response.data) {
        throw new Error('No data in response');
    }

    return response.data;
};

test.beforeAll(async () => {
    if (!API_URL || !TEST_EMAIL || !TEST_PASSWORD) {
        throw new Error('API_URL, TEST_EMAIL, and TEST_PASSWORD must be set in environment variables');
    }

    const loginResponse: ResponseType<LoginResponse> = await login({
        body: {
            email: TEST_EMAIL,
            password: TEST_PASSWORD
        },
    })

    const data = checkResponseBody(loginResponse);

    client.setConfig({
        baseUrl: API_URL,
        auth: () => data.token,
    });
});


test.describe('API - Authenticated', () => {

    test('Get Transaction Types', async () => {

        const response = await getTransactionTypes();

        if (!response.data) {
            throw new Error('No data in response');
        }

        if (isErrorResponse(response.data)) {
            throw new Error(`API returned error: ${response.data.message}`);
        }

        expect(response.data.length).toBeGreaterThan(0);
    });

    test('Get Expense Types', async () => {

        const response = await getExpenseTypes();

        if (!response.data) {
            throw new Error('No data in response');
        }

        if (isErrorResponse(response.data)) {
            throw new Error(`API returned error: ${response.data.message}`);
        }

        expect(response.data.length).toBeGreaterThan(0);
    });
});