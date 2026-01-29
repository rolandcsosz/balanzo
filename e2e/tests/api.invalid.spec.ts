import { test, expect } from "@playwright/test";
import {
    createMainCategory,
    createSubcategory,
    createTransaction,
    createTemplate,
    updateMainCategory,
    updateSubcategory,
    updateTransaction,
    updateTemplate,
} from "../../libs/sdk/sdk.gen";
import { setupAuthenticatedClient, getValidIds, ValidIds } from "./helpers";
import { MainCategoryRequest, SubcategoryRequest, TemplateRequest, TransactionRequest } from "../../libs/sdk/types.gen";

type InvalidTestParam<T> = {
    createFunction: Function;
    updateFunction: Function;
    idToUpdate: string;
    param: T;
};

const testInvalidCreationOrUpdate = async <T>(config: InvalidTestParam<T>) => {
    const createResponse = await config.createFunction({
        body: config.param,
    });

    expect(createResponse.error).toBeDefined();
    expect(createResponse.response.status).toBe(400);

    const updateResponse = await config.updateFunction({
        path: { id: config.idToUpdate },
        body: config.param,
    });

    expect(updateResponse.error).toBeDefined();
    expect(updateResponse.response.status).toBe(400);
};

test.describe("API - Invalid date and foreign key test on create or update", () => {
    let validIds: ValidIds;

    test.beforeAll(async () => {
        await setupAuthenticatedClient();

        validIds = await getValidIds();
    });

    test("Should reject main category with invalid expenseTypeId", async () => {
        await testInvalidCreationOrUpdate({
            createFunction: createMainCategory,
            updateFunction: updateMainCategory,
            idToUpdate: validIds.mainCategoryId,
            param: {
                name: `Test Invalid Expense Type ${Date.now()}`,
                expenseTypeId: "invalid-uuid-12345",
                transactionTypeId: validIds.transactionTypeId,
            } satisfies MainCategoryRequest,
        });
    });

    test("Should reject main category with invalid transactionTypeId", async () => {
        await testInvalidCreationOrUpdate({
            createFunction: createMainCategory,
            updateFunction: updateMainCategory,
            idToUpdate: validIds.mainCategoryId,
            param: {
                name: `Test Invalid Transaction Type ${Date.now()}`,
                expenseTypeId: validIds.expenseTypeId,
                transactionTypeId: "invalid-uuid-12345",
            } satisfies MainCategoryRequest,
        });
    });

    test("Should reject subcategory with invalid mainCategoryId", async () => {
        await testInvalidCreationOrUpdate({
            createFunction: createSubcategory,
            updateFunction: updateSubcategory,
            idToUpdate: validIds.subcategoryId,
            param: {
                name: `Test Invalid Main Category ${Date.now()}`,
                mainCategoryId: "invalid-uuid-12345",
                expenseTypeId: validIds.expenseTypeId,
            } satisfies SubcategoryRequest,
        });
    });

     test("Should reject subcategory with invalid expenseTypeId", async () => {
        await testInvalidCreationOrUpdate({
            createFunction: createSubcategory,
            updateFunction: updateSubcategory,
            idToUpdate: validIds.subcategoryId,
            param: {
                name: `Test Invalid Main Category ${Date.now()}`,
                mainCategoryId: validIds.mainCategoryId,
                expenseTypeId: "invalid-uuid-12345",
            } satisfies SubcategoryRequest,
        });
    });

    test("Should reject transaction with invalid subcategoryId", async () => {
        await testInvalidCreationOrUpdate({
            createFunction: createTransaction,
            updateFunction: updateTransaction,
            idToUpdate: validIds.transactionId,
            param: {
                item: "Test Invalid Subcategory",
                amount: 100,
                date: new Date().toISOString(),
                subcategoryId: "invalid-uuid-12345",
            } satisfies TransactionRequest,
        });
    });

    test("Should reject transaction with invalid date format", async () => {
        await testInvalidCreationOrUpdate({
            createFunction: createTransaction,
            updateFunction: updateTransaction,
            idToUpdate: validIds.transactionId,
            param: {
                item: "Test Invalid Date",
                amount: 100,
                date: "not-a-valid-date",
                subcategoryId: validIds.subcategoryId,
            } satisfies TransactionRequest,
        });
    });

    // TODO: Implement negative amount validation in the API
    /*test('Should reject Transaction with negative amount', async () => {
        await testInvalidCreationOrUpdate({
            createFunction: createTransaction,
            updateFunction: updateTransaction,
            idToUpdate: validIds.transactionId,
            param: {
                item: 'Test Negative Amount',
                amount: -100,
                date: new Date().toISOString(),
                subcategoryId: validIds.subcategoryId,
            } satisfies TransactionRequest
        });
    });*/

    test("Should reject Template with invalid subcategoryId", async () => {
        await testInvalidCreationOrUpdate({
            createFunction: createTemplate,
            updateFunction: updateTemplate,
            idToUpdate: validIds.templateId,
            param: {
                name: "Test Invalid Subcategory",
                itemName: "Test Item",
                amount: 50,
                date: new Date().toISOString(),
                subcategoryId: "invalid-uuid-12345",
            } satisfies TemplateRequest,
        });
    });

    test("Should reject Template with invalid date format", async () => {
        await testInvalidCreationOrUpdate({
            createFunction: createTemplate,
            updateFunction: updateTemplate,
            idToUpdate: validIds.templateId,
            param: {
                name: "Test Invalid Date",
                itemName: "Test Item",
                amount: 50,
                date: "invalid-date-format",
                subcategoryId: validIds.subcategoryId,
            } satisfies TemplateRequest,
        });
    });

    // TODO: Implement negative amount validation in the API
    /*test('Should reject Template with negative amount', async () => {
        await testInvalidCreationOrUpdate({
            createFunction: createTemplate,
            updateFunction: updateTemplate,
            idToUpdate: validIds.templateId,
            param: {
                name: 'Test Invalid Subcategory',
                itemName: 'Test Item',
                amount: -50,
                date: new Date().toISOString(),
                subcategoryId: validIds.subcategoryId,
            } satisfies TemplateRequest
        });
    });*/
});
