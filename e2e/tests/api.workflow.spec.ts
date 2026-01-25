import { test, expect } from '@playwright/test';
import {
    createMainCategory,
    createSubcategory,
    createTransaction,
    createTemplate,
    updateMainCategory,
    updateSubcategory,
    updateTransaction,
    updateTemplate,
} from '../../libs/sdk/sdk.gen';
import { setupAuthenticatedClient, checkResponseBody, ValidIds, getValidIds } from './helpers';


test.describe('API - Complex Workflow Tests', () => {
    let valiodIds: ValidIds;

    test.beforeAll(async () => {
        await setupAuthenticatedClient();
        valiodIds = await getValidIds();
    });

    test('Workflow: Create Main Category -> Subcategory -> Transaction -> Template', async () => {

        const mainCatResponse = await createMainCategory({
            body: {
                name: `Workflow Main Category ${Date.now()}`,
                expenseTypeId: valiodIds.expenseTypeId,
                transactionTypeId: valiodIds.transactionTypeId,
            },
        });
        const mainCatData = checkResponseBody(mainCatResponse);
        const mainCategoryId = mainCatData.id;
        expect(mainCategoryId).toBeDefined();

        const subcatResponse = await createSubcategory({
            body: {
                name: `Workflow Subcategory ${Date.now()}`,
                mainCategoryId,
            },
        });
        const subcatData = checkResponseBody(subcatResponse);
        const subcategoryId = subcatData.id;
        expect(subcategoryId).toBeDefined();

        const transactionResponse = await createTransaction({
            body: {
                item: `Workflow Transaction ${Date.now()}`,
                amount: 150.75,
                date: new Date().toISOString(),
                subcategoryId,
            },
        });
        const transactionData = checkResponseBody(transactionResponse);
        const transactionId = transactionData.id;
        expect(transactionId).toBeDefined();

        const templateResponse = await createTemplate({
            body: {
                name: `Workflow Template ${Date.now()}`,
                itemName: `Workflow Item ${Date.now()}`,
                amount: 75.50,
                date: new Date().toISOString(),
                subcategoryId,
            },
        });
        const templateData = checkResponseBody(templateResponse);
        const templateId = templateData.id;
        expect(templateId).toBeDefined();
    });

    test('Workflow: Update Main Category -> Subcategory -> Transaction -> Template', async () => {
        const mainCatResponse = await createMainCategory({
            body: {
                name: `Update Workflow Main Category ${Date.now()}`,
                expenseTypeId: valiodIds.expenseTypeId,
                transactionTypeId: valiodIds.transactionTypeId,
            },
        });
        const mainCatData = checkResponseBody(mainCatResponse);
        const mainCategoryId = mainCatData.id;

        const subcatResponse = await createSubcategory({
            body: {
                name: `Update Workflow Subcategory ${Date.now()}`,
                mainCategoryId,
            },
        });
        const subcatData = checkResponseBody(subcatResponse);
        const subcategoryId = subcatData.id;

        const transactionResponse = await createTransaction({
            body: {
                item: `Update Workflow Transaction ${Date.now()}`,
                amount: 200,
                date: new Date().toISOString(),
                subcategoryId,
            },
        });
        const transactionData = checkResponseBody(transactionResponse);
        const transactionId = transactionData.id;

        const templateResponse = await createTemplate({
            body: {
                name: `Update Workflow Template ${Date.now()}`,
                itemName: `Update Workflow Item ${Date.now()}`,
                amount: 100,
                date: new Date().toISOString(),
                subcategoryId,
            },
        });
        const templateData = checkResponseBody(templateResponse);
        const templateId = templateData.id;

        const updatedMainCatResponse = await updateMainCategory({
            path: { id: mainCategoryId },
            body: {
                name: `Updated Workflow Main Category ${Date.now()}`,
                expenseTypeId: valiodIds.expenseTypeId,
                transactionTypeId: valiodIds.transactionTypeId,
            },
        });
        const updatedMainCatData = checkResponseBody(updatedMainCatResponse);
        expect(updatedMainCatData.name).toContain('Updated Workflow Main Category');

        const updatedSubcatResponse = await updateSubcategory({
            path: { id: subcategoryId },
            body: {
                name: `Updated Workflow Subcategory ${Date.now()}`,
                mainCategoryId,
            },
        });
        const updatedSubcatData = checkResponseBody(updatedSubcatResponse);
        expect(updatedSubcatData.name).toContain('Updated Workflow Subcategory');

        const updatedTransactionResponse = await updateTransaction({
            path: { id: transactionId },
            body: {
                item: `Updated Workflow Transaction ${Date.now()}`,
                amount: 250,
                date: new Date().toISOString(),
                subcategoryId,
            },
        });
        const updatedTransactionData = checkResponseBody(updatedTransactionResponse);
        expect(updatedTransactionData.item).toContain('Updated Workflow Transaction');
        expect(updatedTransactionData.amount).toBe(250);

        const updatedTemplateResponse = await updateTemplate({
            path: { id: templateId },
            body: {
                name: `Updated Workflow Template ${Date.now()}`,
                itemName: `Updated Workflow Item ${Date.now()}`,
                amount: 150,
                date: new Date().toISOString(),
                subcategoryId,
            },
        });
        const updatedTemplateData = checkResponseBody(updatedTemplateResponse);
        expect(updatedTemplateData.name).toContain('Updated Workflow Template');
        expect(updatedTemplateData.amount).toBe(150);
    });

});
