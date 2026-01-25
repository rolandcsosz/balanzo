import { test, expect } from '@playwright/test';
import {
    getTransactions,
    getTransaction,
    createTransaction,
    updateTransaction,
    deleteTransaction,
    getMainCategories,
    getMainCategory,
    createMainCategory,
    updateMainCategory,
    deleteMainCategory,
    getSubcategories,
    getSubcategory,
    createSubcategory,
    updateSubcategory,
    deleteSubcategory,
    getTemplates,
    getTemplate,
    createTemplate,
    updateTemplate,
    deleteTemplate,
    getTransactionTypes,
    getExpenseTypes,
} from '../../libs/sdk/sdk.gen';

import { setupUnauthenticatedClient, checkResponseBody, setupAuthenticatedClient, getValidIds, ValidIds, ResponseStructure } from './helpers';

import {
    TransactionRequest,
    MainCategoryRequest,
    SubcategoryRequest,
    TemplateRequest,
    ErrorResponse,
} from '../../libs/sdk/types.gen';


type GetAllAction<T> = {
    kind: 'getAll';
    call: () => Promise<ResponseStructure<T[]>>;
};

type CreateAction<T> = {
    kind: 'create';
    call: (config: { body: T }) => Promise<ResponseStructure<T>>;
};

type GetOneAction<T> = {
    kind: 'getOne';
    call: (config: { path: { id: string } }) => Promise<ResponseStructure<T>>;
};

type UpdateAction<T> = {
    kind: 'update';
    call: (config: { path: { id: string }; body: T }) => Promise<ResponseStructure<T>>;
};

type DeleteAction = {
    kind: 'delete';
    call: (config: { path: { id: string } }) => Promise<ResponseStructure<unknown>>;
};

type EndpointAction<T> =
    | GetAllAction<T>
    | CreateAction<T>
    | GetOneAction<T>
    | UpdateAction<T>
    | DeleteAction;

type Validator<T> = {
    list?: (items: T[]) => void;
    single?: (item: T) => void;
};

type ConfigItem<T> = {
    baseEndpoint: string;
    sampleData: T;
    actions: EndpointAction<T>[];
    validate?: Validator<T>;
};

type ConfigFactory<T> = (ids: ValidIds) => ConfigItem<T>;

// Action order matters for CRUD flow. Get all -> Create(Id) -> Get one(Id) -> Update(Id) -> Delete(Id)
const configFactories: ConfigFactory<any>[] = [
    (validIds) => ({
        baseEndpoint: '/transactions',
        sampleData: {
            item: 'Sample Item',
            amount: 100,
            date: new Date().toISOString(),
            subcategoryId: validIds.subcategoryId,
        } satisfies TransactionRequest,

        validate: {
            list: items => {
                expect(items.length).toBeGreaterThan(0);
                for (const item of items) {
                    expect(item).toHaveProperty('id');
                    expect(item).toHaveProperty('item');
                }
            },
            single: item => {
                expect(item).toHaveProperty('id');
                expect(item).toHaveProperty('item');
            },
        },

        actions: [
            { kind: 'getAll', call: getTransactions },
            { kind: 'create', call: createTransaction },
            { kind: 'getOne', call: getTransaction },
            { kind: 'update', call: updateTransaction },
            { kind: 'delete', call: deleteTransaction },
        ],
    }),
    (validIds) => ({
        baseEndpoint: '/main_categories',
        sampleData: {
            name: 'Sample Main Category',
            expenseTypeId: validIds.expenseTypeId,
            transactionTypeId: validIds.transactionTypeId,
        } satisfies MainCategoryRequest,

        actions: [
            { kind: 'getAll', call: getMainCategories },
            { kind: 'create', call: createMainCategory },
            { kind: 'getOne', call: getMainCategory },
            { kind: 'update', call: updateMainCategory },
            { kind: 'delete', call: deleteMainCategory },
        ],
    }),
    (validIds) => ({
        baseEndpoint: '/subcategories',
        sampleData: {
            name: 'Sample Subcategory',
            mainCategoryId: validIds.mainCategoryId,
        } satisfies SubcategoryRequest,

        actions: [
            { kind: 'getAll', call: getSubcategories },
            { kind: 'create', call: createSubcategory },
            { kind: 'getOne', call: getSubcategory },
            { kind: 'update', call: updateSubcategory },
            { kind: 'delete', call: deleteSubcategory },
        ],
    }),
    (validIds) => ({
        baseEndpoint: '/templates',
        sampleData: {
            name: 'Sample Template',
            itemName: 'Sample Item',
            amount: 50,
            date: null,
            subcategoryId: validIds.subcategoryId,
        } satisfies TemplateRequest,

        actions: [
            { kind: 'getAll', call: getTemplates },
            { kind: 'create', call: createTemplate },
            { kind: 'getOne', call: getTemplate },
            { kind: 'update', call: updateTemplate },
            { kind: 'delete', call: deleteTemplate },
        ],
    }),
    (validIds) => ({
        baseEndpoint: '/transaction_types',
        sampleData: {},
        actions: [{ kind: 'getAll', call: getTransactionTypes }],
    }),
    (validIds) => ({
        baseEndpoint: '/expense_types',
        sampleData: {},
        actions: [{ kind: 'getAll', call: getExpenseTypes }],
    }),
];

async function runUnauthorizedChecks<T>(item: ConfigItem<T>) {
    for (const action of item.actions) {
        let response: ResponseStructure<any>;

        switch (action.kind) {
            case 'getAll':
                response = await action.call();
                break;
            case 'getOne':
            case 'delete':
                response = await action.call({ path: { id: 'x' } });
                break;
            case 'create':
                response = await action.call({ body: item.sampleData });
                break;
            case 'update':
                response = await action.call({
                    path: { id: 'x' },
                    body: item.sampleData,
                });
                break;
        }

        expect(response.response.status).toBe(401);
    }
}

async function runCrudFlow<T extends { id?: string }>(
    item: ConfigItem<T>
) {
    let createdId: string | undefined;

    for (const action of item.actions) {

        switch (action.kind) {
            case 'getAll': {
                const res = await action.call();
                const items = checkResponseBody(res);
                item.validate?.list?.(items);
                break;
            }

            case 'create': {
                const res = await action.call({ body: item.sampleData });
                const created = checkResponseBody(res);
                expect(created.id).toBeDefined();
                createdId = created.id;
                item.validate?.single?.(created);
                break;
            }

            case 'getOne': {
                expect(createdId).toBeDefined();
                const res = await action.call({ path: { id: createdId! } });
                const entity = checkResponseBody(res);
                item.validate?.single?.(entity);
                break;
            }

            case 'update': {
                expect(createdId).toBeDefined();
                const res = await action.call({
                    path: { id: createdId! },
                    body: item.sampleData,
                });
                const updated = checkResponseBody(res);
                item.validate?.single?.(updated);
                break;
            }

            case 'delete': {
                expect(createdId).toBeDefined();
                const res = await action.call({ path: { id: createdId! } });
                expect(res.response.status).toBe(200);
                break;
            }
        }
    }
}

test.describe('API - Authentication Tests', async () => {
    const validIds: ValidIds = {
        expenseTypeId: 'valid-expense-type-id',
        transactionTypeId: 'valid-transaction-type-id',
        mainCategoryId: 'valid-main-category-id',
        subcategoryId: 'valid-subcategory-id',
        transactionId: 'valid-transaction-id',
        templateId: 'valid-template-id',
    };

    test.beforeAll(async () => {
        setupUnauthenticatedClient();
    });

    for (const factory of configFactories) {
        test(factory({} as ValidIds).baseEndpoint + ' rejects unauthenticated requests', async () => {
            const item = factory(validIds);
            await runUnauthorizedChecks(item);
        });
    }
});


test.describe('API - CRUD Tests', () => {
    let validIds: ValidIds;

    test.beforeAll(async () => {
        await setupAuthenticatedClient();
        validIds = await getValidIds();
    });

    for (const factory of configFactories) {
        test(factory({} as ValidIds).baseEndpoint + ' CRUD works', async () => {
            const item = factory(validIds);
            await runCrudFlow(item);
        });
    }
});

