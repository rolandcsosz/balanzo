/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import type { TsoaRoute } from "@tsoa/runtime";
import { fetchMiddlewares, ExpressTemplateService } from "@tsoa/runtime";
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { TransactionTypeController } from "./../controllers/transactionTypeController.js";
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { TransactionController } from "./../controllers/transactionController.js";
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { TemplateController } from "./../controllers/templateController.js";
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { SubcategoryController } from "./../controllers/subategoryController.js";
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { MainCategoryController } from "./../controllers/mainCategoryController.js";
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { LoginController } from "./../controllers/loginController.js";
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ExpenseTypeController } from "./../controllers/expenseTypeController.js";
import { expressAuthentication } from "./auth.js";
// @ts-ignore - no great way to install types from subpackage
import type { Request as ExRequest, Response as ExResponse, RequestHandler, Router } from "express";

const expressAuthenticationRecasted = expressAuthentication as (
    req: ExRequest,
    securityName: string,
    scopes?: string[],
    res?: ExResponse,
) => Promise<any>;

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    ErrorResponse: {
        dataType: "refObject",
        properties: {
            message: { dataType: "string", required: true },
        },
        additionalProperties: false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    TransactionType: {
        dataType: "refObject",
        properties: {
            id: { dataType: "string", required: true },
            name: { dataType: "string", required: true },
        },
        additionalProperties: false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    Transaction: {
        dataType: "refObject",
        properties: {
            id: { dataType: "string", required: true },
            item: { dataType: "string", required: true },
            amount: { dataType: "double", required: true },
            date: { dataType: "string", required: true },
            subcategoryId: { dataType: "string", required: true },
        },
        additionalProperties: false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    TransactionRequest: {
        dataType: "refObject",
        properties: {
            item: { dataType: "string", required: true },
            amount: { dataType: "double", required: true },
            date: { dataType: "string", required: true },
            subcategoryId: { dataType: "string", required: true },
        },
        additionalProperties: false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SuccessResponse: {
        dataType: "refObject",
        properties: {
            message: { dataType: "string", required: true },
        },
        additionalProperties: false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    Template: {
        dataType: "refObject",
        properties: {
            id: { dataType: "string", required: true },
            name: { dataType: "string", required: true },
            itemName: { dataType: "string", required: true },
            amount: {
                dataType: "union",
                subSchemas: [{ dataType: "double" }, { dataType: "enum", enums: [null] }],
                required: true,
            },
            date: {
                dataType: "union",
                subSchemas: [{ dataType: "string" }, { dataType: "enum", enums: [null] }],
                required: true,
            },
            subcategoryId: { dataType: "string", required: true },
        },
        additionalProperties: false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    TemplateRequest: {
        dataType: "refObject",
        properties: {
            name: { dataType: "string", required: true },
            itemName: { dataType: "string", required: true },
            amount: {
                dataType: "union",
                subSchemas: [{ dataType: "double" }, { dataType: "enum", enums: [null] }],
                required: true,
            },
            date: {
                dataType: "union",
                subSchemas: [{ dataType: "string" }, { dataType: "enum", enums: [null] }],
                required: true,
            },
            subcategoryId: { dataType: "string", required: true },
        },
        additionalProperties: false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    Subcategory: {
        dataType: "refObject",
        properties: {
            id: { dataType: "string", required: true },
            name: { dataType: "string", required: true },
            mainCategoryId: { dataType: "string", required: true },
        },
        additionalProperties: false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SubcategoryRequest: {
        dataType: "refObject",
        properties: {
            name: { dataType: "string", required: true },
            mainCategoryId: { dataType: "string", required: true },
        },
        additionalProperties: false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    MainCategory: {
        dataType: "refObject",
        properties: {
            id: { dataType: "string", required: true },
            name: { dataType: "string", required: true },
            expenseTypeId: { dataType: "string", required: true },
            transactionTypeId: { dataType: "string", required: true },
        },
        additionalProperties: false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    MainCategoryRequest: {
        dataType: "refObject",
        properties: {
            name: { dataType: "string", required: true },
            expenseTypeId: { dataType: "string", required: true },
            transactionTypeId: { dataType: "string", required: true },
        },
        additionalProperties: false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    LoginSuccessResponse: {
        dataType: "refObject",
        properties: {
            role: {
                dataType: "union",
                subSchemas: [
                    { dataType: "enum", enums: ["user"] },
                    { dataType: "enum", enums: ["caregiver"] },
                ],
                required: true,
            },
            token: { dataType: "string", required: true },
            user: {
                dataType: "nestedObjectLiteral",
                nestedProperties: {
                    email: { dataType: "string", required: true },
                    name: { dataType: "string", required: true },
                    id: { dataType: "string", required: true },
                },
                required: true,
            },
        },
        additionalProperties: false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    LoginRequest: {
        dataType: "refObject",
        properties: {
            email: { dataType: "string", required: true },
            password: { dataType: "string", required: true },
        },
        additionalProperties: false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ExpenseType: {
        dataType: "refObject",
        properties: {
            id: { dataType: "string", required: true },
            name: { dataType: "string", required: true },
        },
        additionalProperties: false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new ExpressTemplateService(models, {
    noImplicitAdditionalProperties: "throw-on-extras",
    bodyCoercion: true,
});

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(app: Router) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################

    const argsTransactionTypeController_getTransactionTypes: Record<string, TsoaRoute.ParameterSchema> = {};
    app.get(
        "/transaction_types",
        authenticateMiddleware([{ jwt: [] }]),
        ...fetchMiddlewares<RequestHandler>(TransactionTypeController),
        ...fetchMiddlewares<RequestHandler>(TransactionTypeController.prototype.getTransactionTypes),

        async function TransactionTypeController_getTransactionTypes(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsTransactionTypeController_getTransactionTypes,
                    request,
                    response,
                });

                const controller = new TransactionTypeController();

                await templateService.apiHandler({
                    methodName: "getTransactionTypes",
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsTransactionController_createTransaction: Record<string, TsoaRoute.ParameterSchema> = {
        body: { in: "body", name: "body", required: true, ref: "TransactionRequest" },
    };
    app.post(
        "/transactions",
        authenticateMiddleware([{ jwt: [] }]),
        ...fetchMiddlewares<RequestHandler>(TransactionController),
        ...fetchMiddlewares<RequestHandler>(TransactionController.prototype.createTransaction),

        async function TransactionController_createTransaction(request: ExRequest, response: ExResponse, next: any) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsTransactionController_createTransaction,
                    request,
                    response,
                });

                const controller = new TransactionController();

                await templateService.apiHandler({
                    methodName: "createTransaction",
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsTransactionController_getTransactions: Record<string, TsoaRoute.ParameterSchema> = {};
    app.get(
        "/transactions",
        authenticateMiddleware([{ jwt: [] }]),
        ...fetchMiddlewares<RequestHandler>(TransactionController),
        ...fetchMiddlewares<RequestHandler>(TransactionController.prototype.getTransactions),

        async function TransactionController_getTransactions(request: ExRequest, response: ExResponse, next: any) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsTransactionController_getTransactions,
                    request,
                    response,
                });

                const controller = new TransactionController();

                await templateService.apiHandler({
                    methodName: "getTransactions",
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsTransactionController_getTransaction: Record<string, TsoaRoute.ParameterSchema> = {
        id: { in: "path", name: "id", required: true, dataType: "string" },
    };
    app.get(
        "/transactions/:id",
        authenticateMiddleware([{ jwt: [] }]),
        ...fetchMiddlewares<RequestHandler>(TransactionController),
        ...fetchMiddlewares<RequestHandler>(TransactionController.prototype.getTransaction),

        async function TransactionController_getTransaction(request: ExRequest, response: ExResponse, next: any) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsTransactionController_getTransaction,
                    request,
                    response,
                });

                const controller = new TransactionController();

                await templateService.apiHandler({
                    methodName: "getTransaction",
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsTransactionController_updateTransaction: Record<string, TsoaRoute.ParameterSchema> = {
        id: { in: "path", name: "id", required: true, dataType: "string" },
        body: { in: "body", name: "body", required: true, ref: "TransactionRequest" },
    };
    app.put(
        "/transactions/:id",
        authenticateMiddleware([{ jwt: [] }]),
        ...fetchMiddlewares<RequestHandler>(TransactionController),
        ...fetchMiddlewares<RequestHandler>(TransactionController.prototype.updateTransaction),

        async function TransactionController_updateTransaction(request: ExRequest, response: ExResponse, next: any) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsTransactionController_updateTransaction,
                    request,
                    response,
                });

                const controller = new TransactionController();

                await templateService.apiHandler({
                    methodName: "updateTransaction",
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsTransactionController_deleteTransaction: Record<string, TsoaRoute.ParameterSchema> = {
        id: { in: "path", name: "id", required: true, dataType: "string" },
    };
    app.delete(
        "/transactions/:id",
        authenticateMiddleware([{ jwt: [] }]),
        ...fetchMiddlewares<RequestHandler>(TransactionController),
        ...fetchMiddlewares<RequestHandler>(TransactionController.prototype.deleteTransaction),

        async function TransactionController_deleteTransaction(request: ExRequest, response: ExResponse, next: any) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsTransactionController_deleteTransaction,
                    request,
                    response,
                });

                const controller = new TransactionController();

                await templateService.apiHandler({
                    methodName: "deleteTransaction",
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsTemplateController_createTemplate: Record<string, TsoaRoute.ParameterSchema> = {
        body: { in: "body", name: "body", required: true, ref: "TemplateRequest" },
    };
    app.post(
        "/templates",
        authenticateMiddleware([{ jwt: [] }]),
        ...fetchMiddlewares<RequestHandler>(TemplateController),
        ...fetchMiddlewares<RequestHandler>(TemplateController.prototype.createTemplate),

        async function TemplateController_createTemplate(request: ExRequest, response: ExResponse, next: any) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsTemplateController_createTemplate,
                    request,
                    response,
                });

                const controller = new TemplateController();

                await templateService.apiHandler({
                    methodName: "createTemplate",
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsTemplateController_getTemplates: Record<string, TsoaRoute.ParameterSchema> = {};
    app.get(
        "/templates",
        authenticateMiddleware([{ jwt: [] }]),
        ...fetchMiddlewares<RequestHandler>(TemplateController),
        ...fetchMiddlewares<RequestHandler>(TemplateController.prototype.getTemplates),

        async function TemplateController_getTemplates(request: ExRequest, response: ExResponse, next: any) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsTemplateController_getTemplates,
                    request,
                    response,
                });

                const controller = new TemplateController();

                await templateService.apiHandler({
                    methodName: "getTemplates",
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsTemplateController_getTemplate: Record<string, TsoaRoute.ParameterSchema> = {
        id: { in: "path", name: "id", required: true, dataType: "string" },
    };
    app.get(
        "/templates/:id",
        authenticateMiddleware([{ jwt: [] }]),
        ...fetchMiddlewares<RequestHandler>(TemplateController),
        ...fetchMiddlewares<RequestHandler>(TemplateController.prototype.getTemplate),

        async function TemplateController_getTemplate(request: ExRequest, response: ExResponse, next: any) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsTemplateController_getTemplate,
                    request,
                    response,
                });

                const controller = new TemplateController();

                await templateService.apiHandler({
                    methodName: "getTemplate",
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsTemplateController_updateTemplate: Record<string, TsoaRoute.ParameterSchema> = {
        id: { in: "path", name: "id", required: true, dataType: "string" },
        body: { in: "body", name: "body", required: true, ref: "TemplateRequest" },
    };
    app.put(
        "/templates/:id",
        authenticateMiddleware([{ jwt: [] }]),
        ...fetchMiddlewares<RequestHandler>(TemplateController),
        ...fetchMiddlewares<RequestHandler>(TemplateController.prototype.updateTemplate),

        async function TemplateController_updateTemplate(request: ExRequest, response: ExResponse, next: any) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsTemplateController_updateTemplate,
                    request,
                    response,
                });

                const controller = new TemplateController();

                await templateService.apiHandler({
                    methodName: "updateTemplate",
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsTemplateController_deleteTemplate: Record<string, TsoaRoute.ParameterSchema> = {
        id: { in: "path", name: "id", required: true, dataType: "string" },
    };
    app.delete(
        "/templates/:id",
        authenticateMiddleware([{ jwt: [] }]),
        ...fetchMiddlewares<RequestHandler>(TemplateController),
        ...fetchMiddlewares<RequestHandler>(TemplateController.prototype.deleteTemplate),

        async function TemplateController_deleteTemplate(request: ExRequest, response: ExResponse, next: any) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsTemplateController_deleteTemplate,
                    request,
                    response,
                });

                const controller = new TemplateController();

                await templateService.apiHandler({
                    methodName: "deleteTemplate",
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSubcategoryController_getSubcategories: Record<string, TsoaRoute.ParameterSchema> = {};
    app.get(
        "/subcategories",
        authenticateMiddleware([{ jwt: [] }]),
        ...fetchMiddlewares<RequestHandler>(SubcategoryController),
        ...fetchMiddlewares<RequestHandler>(SubcategoryController.prototype.getSubcategories),

        async function SubcategoryController_getSubcategories(request: ExRequest, response: ExResponse, next: any) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSubcategoryController_getSubcategories,
                    request,
                    response,
                });

                const controller = new SubcategoryController();

                await templateService.apiHandler({
                    methodName: "getSubcategories",
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSubcategoryController_getSubcategory: Record<string, TsoaRoute.ParameterSchema> = {
        id: { in: "path", name: "id", required: true, dataType: "string" },
    };
    app.get(
        "/subcategories/:id",
        authenticateMiddleware([{ jwt: [] }]),
        ...fetchMiddlewares<RequestHandler>(SubcategoryController),
        ...fetchMiddlewares<RequestHandler>(SubcategoryController.prototype.getSubcategory),

        async function SubcategoryController_getSubcategory(request: ExRequest, response: ExResponse, next: any) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSubcategoryController_getSubcategory,
                    request,
                    response,
                });

                const controller = new SubcategoryController();

                await templateService.apiHandler({
                    methodName: "getSubcategory",
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSubcategoryController_createSubcategory: Record<string, TsoaRoute.ParameterSchema> = {
        body: { in: "body", name: "body", required: true, ref: "SubcategoryRequest" },
    };
    app.post(
        "/subcategories",
        authenticateMiddleware([{ jwt: [] }]),
        ...fetchMiddlewares<RequestHandler>(SubcategoryController),
        ...fetchMiddlewares<RequestHandler>(SubcategoryController.prototype.createSubcategory),

        async function SubcategoryController_createSubcategory(request: ExRequest, response: ExResponse, next: any) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSubcategoryController_createSubcategory,
                    request,
                    response,
                });

                const controller = new SubcategoryController();

                await templateService.apiHandler({
                    methodName: "createSubcategory",
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSubcategoryController_updateSubcategory: Record<string, TsoaRoute.ParameterSchema> = {
        id: { in: "path", name: "id", required: true, dataType: "string" },
        body: { in: "body", name: "body", required: true, ref: "SubcategoryRequest" },
    };
    app.put(
        "/subcategories/:id",
        authenticateMiddleware([{ jwt: [] }]),
        ...fetchMiddlewares<RequestHandler>(SubcategoryController),
        ...fetchMiddlewares<RequestHandler>(SubcategoryController.prototype.updateSubcategory),

        async function SubcategoryController_updateSubcategory(request: ExRequest, response: ExResponse, next: any) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSubcategoryController_updateSubcategory,
                    request,
                    response,
                });

                const controller = new SubcategoryController();

                await templateService.apiHandler({
                    methodName: "updateSubcategory",
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSubcategoryController_deleteSubcategory: Record<string, TsoaRoute.ParameterSchema> = {
        id: { in: "path", name: "id", required: true, dataType: "string" },
    };
    app.delete(
        "/subcategories/:id",
        authenticateMiddleware([{ jwt: [] }]),
        ...fetchMiddlewares<RequestHandler>(SubcategoryController),
        ...fetchMiddlewares<RequestHandler>(SubcategoryController.prototype.deleteSubcategory),

        async function SubcategoryController_deleteSubcategory(request: ExRequest, response: ExResponse, next: any) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSubcategoryController_deleteSubcategory,
                    request,
                    response,
                });

                const controller = new SubcategoryController();

                await templateService.apiHandler({
                    methodName: "deleteSubcategory",
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsMainCategoryController_createMainCategory: Record<string, TsoaRoute.ParameterSchema> = {
        body: { in: "body", name: "body", required: true, ref: "MainCategoryRequest" },
    };
    app.post(
        "/main_categories",
        authenticateMiddleware([{ jwt: [] }]),
        ...fetchMiddlewares<RequestHandler>(MainCategoryController),
        ...fetchMiddlewares<RequestHandler>(MainCategoryController.prototype.createMainCategory),

        async function MainCategoryController_createMainCategory(request: ExRequest, response: ExResponse, next: any) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsMainCategoryController_createMainCategory,
                    request,
                    response,
                });

                const controller = new MainCategoryController();

                await templateService.apiHandler({
                    methodName: "createMainCategory",
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsMainCategoryController_getMainCategories: Record<string, TsoaRoute.ParameterSchema> = {};
    app.get(
        "/main_categories",
        authenticateMiddleware([{ jwt: [] }]),
        ...fetchMiddlewares<RequestHandler>(MainCategoryController),
        ...fetchMiddlewares<RequestHandler>(MainCategoryController.prototype.getMainCategories),

        async function MainCategoryController_getMainCategories(request: ExRequest, response: ExResponse, next: any) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsMainCategoryController_getMainCategories,
                    request,
                    response,
                });

                const controller = new MainCategoryController();

                await templateService.apiHandler({
                    methodName: "getMainCategories",
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsMainCategoryController_getMainCategory: Record<string, TsoaRoute.ParameterSchema> = {
        id: { in: "path", name: "id", required: true, dataType: "string" },
    };
    app.get(
        "/main_categories/:id",
        authenticateMiddleware([{ jwt: [] }]),
        ...fetchMiddlewares<RequestHandler>(MainCategoryController),
        ...fetchMiddlewares<RequestHandler>(MainCategoryController.prototype.getMainCategory),

        async function MainCategoryController_getMainCategory(request: ExRequest, response: ExResponse, next: any) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsMainCategoryController_getMainCategory,
                    request,
                    response,
                });

                const controller = new MainCategoryController();

                await templateService.apiHandler({
                    methodName: "getMainCategory",
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsMainCategoryController_updateMainCategory: Record<string, TsoaRoute.ParameterSchema> = {
        id: { in: "path", name: "id", required: true, dataType: "string" },
        body: { in: "body", name: "body", required: true, ref: "MainCategoryRequest" },
    };
    app.put(
        "/main_categories/:id",
        authenticateMiddleware([{ jwt: [] }]),
        ...fetchMiddlewares<RequestHandler>(MainCategoryController),
        ...fetchMiddlewares<RequestHandler>(MainCategoryController.prototype.updateMainCategory),

        async function MainCategoryController_updateMainCategory(request: ExRequest, response: ExResponse, next: any) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsMainCategoryController_updateMainCategory,
                    request,
                    response,
                });

                const controller = new MainCategoryController();

                await templateService.apiHandler({
                    methodName: "updateMainCategory",
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsMainCategoryController_deleteMainCategory: Record<string, TsoaRoute.ParameterSchema> = {
        id: { in: "path", name: "id", required: true, dataType: "string" },
    };
    app.delete(
        "/main_categories/:id",
        authenticateMiddleware([{ jwt: [] }]),
        ...fetchMiddlewares<RequestHandler>(MainCategoryController),
        ...fetchMiddlewares<RequestHandler>(MainCategoryController.prototype.deleteMainCategory),

        async function MainCategoryController_deleteMainCategory(request: ExRequest, response: ExResponse, next: any) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsMainCategoryController_deleteMainCategory,
                    request,
                    response,
                });

                const controller = new MainCategoryController();

                await templateService.apiHandler({
                    methodName: "deleteMainCategory",
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsLoginController_login: Record<string, TsoaRoute.ParameterSchema> = {
        body: { in: "body", name: "body", required: true, ref: "LoginRequest" },
    };
    app.post(
        "/login",
        ...fetchMiddlewares<RequestHandler>(LoginController),
        ...fetchMiddlewares<RequestHandler>(LoginController.prototype.login),

        async function LoginController_login(request: ExRequest, response: ExResponse, next: any) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsLoginController_login,
                    request,
                    response,
                });

                const controller = new LoginController();

                await templateService.apiHandler({
                    methodName: "login",
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsExpenseTypeController_getExpenseTypes: Record<string, TsoaRoute.ParameterSchema> = {};
    app.get(
        "/expense_types",
        authenticateMiddleware([{ jwt: [] }]),
        ...fetchMiddlewares<RequestHandler>(ExpenseTypeController),
        ...fetchMiddlewares<RequestHandler>(ExpenseTypeController.prototype.getExpenseTypes),

        async function ExpenseTypeController_getExpenseTypes(request: ExRequest, response: ExResponse, next: any) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsExpenseTypeController_getExpenseTypes,
                    request,
                    response,
                });

                const controller = new ExpenseTypeController();

                await templateService.apiHandler({
                    methodName: "getExpenseTypes",
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function authenticateMiddleware(security: TsoaRoute.Security[] = []) {
        return async function runAuthenticationMiddleware(request: any, response: any, next: any) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            // keep track of failed auth attempts so we can hand back the most
            // recent one.  This behavior was previously existing so preserving it
            // here
            const failedAttempts: any[] = [];
            const pushAndRethrow = (error: any) => {
                failedAttempts.push(error);
                throw error;
            };

            const secMethodOrPromises: Promise<any>[] = [];
            for (const secMethod of security) {
                if (Object.keys(secMethod).length > 1) {
                    const secMethodAndPromises: Promise<any>[] = [];

                    for (const name in secMethod) {
                        secMethodAndPromises.push(
                            expressAuthenticationRecasted(request, name, secMethod[name], response).catch(
                                pushAndRethrow,
                            ),
                        );
                    }

                    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

                    secMethodOrPromises.push(
                        Promise.all(secMethodAndPromises).then((users) => {
                            return users[0];
                        }),
                    );
                } else {
                    for (const name in secMethod) {
                        secMethodOrPromises.push(
                            expressAuthenticationRecasted(request, name, secMethod[name], response).catch(
                                pushAndRethrow,
                            ),
                        );
                    }
                }
            }

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            try {
                request["user"] = await Promise.any(secMethodOrPromises);

                // Response was sent in middleware, abort
                if (response.writableEnded) {
                    return;
                }

                next();
            } catch (err) {
                // Show most recent error as response
                const error = failedAttempts.pop();
                error.status = error.status || 401;

                // Response was sent in middleware, abort
                if (response.writableEnded) {
                    return;
                }
                next(error);
            }

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        };
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
