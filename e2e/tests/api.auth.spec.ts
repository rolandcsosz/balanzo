import { test, expect } from '@playwright/test';
import { getTransactions, getMainCategories, getSubcategories, getTemplates, getTransactionTypes, getExpenseTypes, getTransaction, createTransaction, updateTransaction, deleteTransaction, getMainCategory, createMainCategory, updateMainCategory, deleteMainCategory, getSubcategory, createSubcategory, updateSubcategory, deleteSubcategory, getTemplate, createTemplate, updateTemplate, deleteTemplate } from '../../libs/sdk/sdk.gen';
import { client } from '../../libs/sdk/client.gen';
import { setupUnauthenticatedClient } from './helpers';
import { ErrorResponse, MainCategoryRequest, SubcategoryRequest, TemplateRequest, TransactionRequest } from '../../libs/sdk/types.gen';

const API_URL = process.env.API_URL || "";

type GetAllAction<T> = {
    kind: "getAll";
    call: () => Promise<ResponseStructure<T>>;
};

type GetOneAction<T> = {
    kind: "getOne";
    call: (config: { path: { id: string } }) => Promise<ResponseStructure<T>>;
};

type CreateAction<T> = {
    kind: "create";
    call: (config: { body: T }) => Promise<ResponseStructure<T>>;
};

type UpdateAction<T> = {
    kind: "update";
    call: (config: { path: { id: string }; body: T }) => Promise<ResponseStructure<T>>;
};

type DeleteAction<T> = {
    kind: "delete";
    call: (config: { path: { id: string } }) => Promise<ResponseStructure<T>>;
};

type EndpointAction<T> =
    | GetAllAction<T>
    | GetOneAction<T>
    | CreateAction<T>
    | UpdateAction<T>
    | DeleteAction<T>;


type ConfigItem<T> = {
    baseEndpoint: string;
    sampleData: T;
    actions: EndpointAction<T>[];
};

type ResponseStructure<T> = ({
    data: ErrorResponse | T;
    error: undefined;
} | {
    data: undefined;
    error: unknown;
}) & {
    request: Request,
    response: Response
};

const config: ConfigItem<any>[] = [
    {
        baseEndpoint: "/transactions",
        sampleData: {
            item: "Sample Item",
            amount: 100,
            date: new Date().toISOString(),
            subcategoryId: "sample-subcategory-id",
        } satisfies TransactionRequest,
        actions: [
            { kind: "getAll", call: getTransactions },
            { kind: "getOne", call: getTransaction },
            { kind: "create", call: createTransaction },
            { kind: "update", call: updateTransaction },
            { kind: "delete", call: deleteTransaction },
        ]
    },
    {
        baseEndpoint: "/subcategories",
        sampleData: {
            name: "Sample Subcategory",
            mainCategoryId: "sample-main-category-id",
        } satisfies SubcategoryRequest,
        actions: [
            { kind: "getAll", call: getSubcategories },
            { kind: "getOne", call: getSubcategory },
            { kind: "create", call: createSubcategory },
            { kind: "update", call: updateSubcategory },
            { kind: "delete", call: deleteSubcategory },
        ]
    },
    {
        baseEndpoint: "/main_categories",
        sampleData: {
            name: "Sample Main Category",
            expenseTypeId: "sample-expense-type-id",
            transactionTypeId: "sample-transaction-type-id",
        } satisfies MainCategoryRequest,
        actions: [
            { kind: "getAll", call: getMainCategories },
            { kind: "getOne", call: getMainCategory },
            { kind: "create", call: createMainCategory },
            { kind: "update", call: updateMainCategory },
            { kind: "delete", call: deleteMainCategory },
        ]
    },
    {
        baseEndpoint: "/templates",
        sampleData: {
            name: "Sample Template",
            itemName: "Sample Item",
            amount: 50,
            date: null,
            subcategoryId: "sample-subcategory-id",
        } satisfies TemplateRequest,
        actions: [
            { kind: "getAll", call: getTemplates },
            { kind: "getOne", call: getTemplate },
            { kind: "create", call: createTemplate },
            { kind: "update", call: updateTemplate },
            { kind: "delete", call: deleteTemplate },
        ]
    },
    {
        baseEndpoint: "/transaction_types",
        sampleData: {},
        actions: [
            { kind: "getAll", call: getTransactionTypes },
        ]
    },
    {
        baseEndpoint: "/expense_types",
        sampleData: {},
        actions: [
            { kind: "getAll", call: getExpenseTypes },
        ]
    },
];


test.beforeAll(async () => {
    client.setConfig({
        baseUrl: API_URL,
    });
});

async function runUnauthenticatedActions<T>(item: ConfigItem<T>) {
    for (const action of item.actions) {
        let response : ResponseStructure<T>;

        switch (action.kind) {
            case "getAll":
                response = await action.call();
                break;

            case "getOne":
            case "delete":
                response = await action.call({ path: { id: "sample-id" } });
                break;

            case "create":
                response = await action.call({ body: item.sampleData });
                break;

            case "update":
                response = await action.call({
                    path: { id: "sample-id" },
                    body: item.sampleData,
                });
                break;
        }

        expect(response.error).toBeDefined();
        expect(response.response.status).toBe(401);
    }
}


test.describe('API - Authentication Tests', () => {
    for (const item of config) {
        test(`Should reject ${item.baseEndpoint} requests without token`, async () => {
            setupUnauthenticatedClient();
            await runUnauthenticatedActions(item);
        });
    }
});