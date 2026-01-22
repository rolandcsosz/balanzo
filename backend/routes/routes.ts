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
                subSchemas: [{ dataType: "datetime" }, { dataType: "enum", enums: [null] }],
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
                subSchemas: [{ dataType: "datetime" }, { dataType: "enum", enums: [null] }],
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

    const argsTransactionTypeController_getAll: Record<string, TsoaRoute.ParameterSchema> = {};
    app.get(
        "/transaction_types",
        authenticateMiddleware([{ jwt: [] }]),
        ...fetchMiddlewares<RequestHandler>(TransactionTypeController),
        ...fetchMiddlewares<RequestHandler>(TransactionTypeController.prototype.getAll),

        async function TransactionTypeController_getAll(request: ExRequest, response: ExResponse, next: any) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsTransactionTypeController_getAll,
                    request,
                    response,
                });

                const controller = new TransactionTypeController();

                await templateService.apiHandler({
                    methodName: "getAll",
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
    const argsTransactionController_create: Record<string, TsoaRoute.ParameterSchema> = {
        body: { in: "body", name: "body", required: true, ref: "TransactionRequest" },
    };
    app.post(
        "/transactions",
        authenticateMiddleware([{ jwt: [] }]),
        ...fetchMiddlewares<RequestHandler>(TransactionController),
        ...fetchMiddlewares<RequestHandler>(TransactionController.prototype.create),

        async function TransactionController_create(request: ExRequest, response: ExResponse, next: any) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsTransactionController_create,
                    request,
                    response,
                });

                const controller = new TransactionController();

                await templateService.apiHandler({
                    methodName: "create",
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
    const argsTransactionController_getAll: Record<string, TsoaRoute.ParameterSchema> = {};
    app.get(
        "/transactions",
        authenticateMiddleware([{ jwt: [] }]),
        ...fetchMiddlewares<RequestHandler>(TransactionController),
        ...fetchMiddlewares<RequestHandler>(TransactionController.prototype.getAll),

        async function TransactionController_getAll(request: ExRequest, response: ExResponse, next: any) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsTransactionController_getAll,
                    request,
                    response,
                });

                const controller = new TransactionController();

                await templateService.apiHandler({
                    methodName: "getAll",
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
    const argsTransactionController_getOne: Record<string, TsoaRoute.ParameterSchema> = {
        id: { in: "path", name: "id", required: true, dataType: "string" },
    };
    app.get(
        "/transactions/:id",
        authenticateMiddleware([{ jwt: [] }]),
        ...fetchMiddlewares<RequestHandler>(TransactionController),
        ...fetchMiddlewares<RequestHandler>(TransactionController.prototype.getOne),

        async function TransactionController_getOne(request: ExRequest, response: ExResponse, next: any) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsTransactionController_getOne,
                    request,
                    response,
                });

                const controller = new TransactionController();

                await templateService.apiHandler({
                    methodName: "getOne",
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
    const argsTransactionController_update: Record<string, TsoaRoute.ParameterSchema> = {
        id: { in: "path", name: "id", required: true, dataType: "string" },
        body: { in: "body", name: "body", required: true, ref: "TransactionRequest" },
    };
    app.put(
        "/transactions/:id",
        authenticateMiddleware([{ jwt: [] }]),
        ...fetchMiddlewares<RequestHandler>(TransactionController),
        ...fetchMiddlewares<RequestHandler>(TransactionController.prototype.update),

        async function TransactionController_update(request: ExRequest, response: ExResponse, next: any) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsTransactionController_update,
                    request,
                    response,
                });

                const controller = new TransactionController();

                await templateService.apiHandler({
                    methodName: "update",
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
    const argsTransactionController_delete: Record<string, TsoaRoute.ParameterSchema> = {
        id: { in: "path", name: "id", required: true, dataType: "string" },
    };
    app.delete(
        "/transactions/:id",
        authenticateMiddleware([{ jwt: [] }]),
        ...fetchMiddlewares<RequestHandler>(TransactionController),
        ...fetchMiddlewares<RequestHandler>(TransactionController.prototype.delete),

        async function TransactionController_delete(request: ExRequest, response: ExResponse, next: any) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsTransactionController_delete,
                    request,
                    response,
                });

                const controller = new TransactionController();

                await templateService.apiHandler({
                    methodName: "delete",
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
    const argsTemplateController_create: Record<string, TsoaRoute.ParameterSchema> = {
        body: { in: "body", name: "body", required: true, ref: "TemplateRequest" },
    };
    app.post(
        "/templates",
        authenticateMiddleware([{ jwt: [] }]),
        ...fetchMiddlewares<RequestHandler>(TemplateController),
        ...fetchMiddlewares<RequestHandler>(TemplateController.prototype.create),

        async function TemplateController_create(request: ExRequest, response: ExResponse, next: any) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsTemplateController_create,
                    request,
                    response,
                });

                const controller = new TemplateController();

                await templateService.apiHandler({
                    methodName: "create",
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
    const argsTemplateController_getAll: Record<string, TsoaRoute.ParameterSchema> = {};
    app.get(
        "/templates",
        authenticateMiddleware([{ jwt: [] }]),
        ...fetchMiddlewares<RequestHandler>(TemplateController),
        ...fetchMiddlewares<RequestHandler>(TemplateController.prototype.getAll),

        async function TemplateController_getAll(request: ExRequest, response: ExResponse, next: any) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsTemplateController_getAll,
                    request,
                    response,
                });

                const controller = new TemplateController();

                await templateService.apiHandler({
                    methodName: "getAll",
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
    const argsTemplateController_getOne: Record<string, TsoaRoute.ParameterSchema> = {
        id: { in: "path", name: "id", required: true, dataType: "string" },
    };
    app.get(
        "/templates/:id",
        authenticateMiddleware([{ jwt: [] }]),
        ...fetchMiddlewares<RequestHandler>(TemplateController),
        ...fetchMiddlewares<RequestHandler>(TemplateController.prototype.getOne),

        async function TemplateController_getOne(request: ExRequest, response: ExResponse, next: any) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsTemplateController_getOne,
                    request,
                    response,
                });

                const controller = new TemplateController();

                await templateService.apiHandler({
                    methodName: "getOne",
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
    const argsTemplateController_update: Record<string, TsoaRoute.ParameterSchema> = {
        id: { in: "path", name: "id", required: true, dataType: "string" },
        body: { in: "body", name: "body", required: true, ref: "TemplateRequest" },
    };
    app.put(
        "/templates/:id",
        authenticateMiddleware([{ jwt: [] }]),
        ...fetchMiddlewares<RequestHandler>(TemplateController),
        ...fetchMiddlewares<RequestHandler>(TemplateController.prototype.update),

        async function TemplateController_update(request: ExRequest, response: ExResponse, next: any) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsTemplateController_update,
                    request,
                    response,
                });

                const controller = new TemplateController();

                await templateService.apiHandler({
                    methodName: "update",
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
    const argsTemplateController_delete: Record<string, TsoaRoute.ParameterSchema> = {
        id: { in: "path", name: "id", required: true, dataType: "string" },
    };
    app.delete(
        "/templates/:id",
        authenticateMiddleware([{ jwt: [] }]),
        ...fetchMiddlewares<RequestHandler>(TemplateController),
        ...fetchMiddlewares<RequestHandler>(TemplateController.prototype.delete),

        async function TemplateController_delete(request: ExRequest, response: ExResponse, next: any) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsTemplateController_delete,
                    request,
                    response,
                });

                const controller = new TemplateController();

                await templateService.apiHandler({
                    methodName: "delete",
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
    const argsSubcategoryController_getAll: Record<string, TsoaRoute.ParameterSchema> = {};
    app.get(
        "/subcategories",
        authenticateMiddleware([{ jwt: [] }]),
        ...fetchMiddlewares<RequestHandler>(SubcategoryController),
        ...fetchMiddlewares<RequestHandler>(SubcategoryController.prototype.getAll),

        async function SubcategoryController_getAll(request: ExRequest, response: ExResponse, next: any) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSubcategoryController_getAll,
                    request,
                    response,
                });

                const controller = new SubcategoryController();

                await templateService.apiHandler({
                    methodName: "getAll",
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
    const argsSubcategoryController_getOne: Record<string, TsoaRoute.ParameterSchema> = {
        id: { in: "path", name: "id", required: true, dataType: "string" },
    };
    app.get(
        "/subcategories/:id",
        authenticateMiddleware([{ jwt: [] }]),
        ...fetchMiddlewares<RequestHandler>(SubcategoryController),
        ...fetchMiddlewares<RequestHandler>(SubcategoryController.prototype.getOne),

        async function SubcategoryController_getOne(request: ExRequest, response: ExResponse, next: any) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSubcategoryController_getOne,
                    request,
                    response,
                });

                const controller = new SubcategoryController();

                await templateService.apiHandler({
                    methodName: "getOne",
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
    const argsSubcategoryController_create: Record<string, TsoaRoute.ParameterSchema> = {
        body: { in: "body", name: "body", required: true, ref: "SubcategoryRequest" },
    };
    app.post(
        "/subcategories",
        authenticateMiddleware([{ jwt: [] }]),
        ...fetchMiddlewares<RequestHandler>(SubcategoryController),
        ...fetchMiddlewares<RequestHandler>(SubcategoryController.prototype.create),

        async function SubcategoryController_create(request: ExRequest, response: ExResponse, next: any) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSubcategoryController_create,
                    request,
                    response,
                });

                const controller = new SubcategoryController();

                await templateService.apiHandler({
                    methodName: "create",
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
    const argsSubcategoryController_update: Record<string, TsoaRoute.ParameterSchema> = {
        id: { in: "path", name: "id", required: true, dataType: "string" },
        body: { in: "body", name: "body", required: true, ref: "SubcategoryRequest" },
    };
    app.put(
        "/subcategories/:id",
        authenticateMiddleware([{ jwt: [] }]),
        ...fetchMiddlewares<RequestHandler>(SubcategoryController),
        ...fetchMiddlewares<RequestHandler>(SubcategoryController.prototype.update),

        async function SubcategoryController_update(request: ExRequest, response: ExResponse, next: any) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSubcategoryController_update,
                    request,
                    response,
                });

                const controller = new SubcategoryController();

                await templateService.apiHandler({
                    methodName: "update",
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
    const argsSubcategoryController_delete: Record<string, TsoaRoute.ParameterSchema> = {
        id: { in: "path", name: "id", required: true, dataType: "string" },
    };
    app.delete(
        "/subcategories/:id",
        authenticateMiddleware([{ jwt: [] }]),
        ...fetchMiddlewares<RequestHandler>(SubcategoryController),
        ...fetchMiddlewares<RequestHandler>(SubcategoryController.prototype.delete),

        async function SubcategoryController_delete(request: ExRequest, response: ExResponse, next: any) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsSubcategoryController_delete,
                    request,
                    response,
                });

                const controller = new SubcategoryController();

                await templateService.apiHandler({
                    methodName: "delete",
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
    const argsMainCategoryController_create: Record<string, TsoaRoute.ParameterSchema> = {
        body: { in: "body", name: "body", required: true, ref: "MainCategoryRequest" },
    };
    app.post(
        "/main_categories",
        authenticateMiddleware([{ jwt: [] }]),
        ...fetchMiddlewares<RequestHandler>(MainCategoryController),
        ...fetchMiddlewares<RequestHandler>(MainCategoryController.prototype.create),

        async function MainCategoryController_create(request: ExRequest, response: ExResponse, next: any) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsMainCategoryController_create,
                    request,
                    response,
                });

                const controller = new MainCategoryController();

                await templateService.apiHandler({
                    methodName: "create",
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
    const argsMainCategoryController_getAll: Record<string, TsoaRoute.ParameterSchema> = {};
    app.get(
        "/main_categories",
        authenticateMiddleware([{ jwt: [] }]),
        ...fetchMiddlewares<RequestHandler>(MainCategoryController),
        ...fetchMiddlewares<RequestHandler>(MainCategoryController.prototype.getAll),

        async function MainCategoryController_getAll(request: ExRequest, response: ExResponse, next: any) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsMainCategoryController_getAll,
                    request,
                    response,
                });

                const controller = new MainCategoryController();

                await templateService.apiHandler({
                    methodName: "getAll",
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
    const argsMainCategoryController_getOne: Record<string, TsoaRoute.ParameterSchema> = {
        id: { in: "path", name: "id", required: true, dataType: "string" },
    };
    app.get(
        "/main_categories/:id",
        authenticateMiddleware([{ jwt: [] }]),
        ...fetchMiddlewares<RequestHandler>(MainCategoryController),
        ...fetchMiddlewares<RequestHandler>(MainCategoryController.prototype.getOne),

        async function MainCategoryController_getOne(request: ExRequest, response: ExResponse, next: any) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsMainCategoryController_getOne,
                    request,
                    response,
                });

                const controller = new MainCategoryController();

                await templateService.apiHandler({
                    methodName: "getOne",
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
    const argsMainCategoryController_update: Record<string, TsoaRoute.ParameterSchema> = {
        id: { in: "path", name: "id", required: true, dataType: "string" },
        body: { in: "body", name: "body", required: true, ref: "MainCategoryRequest" },
    };
    app.put(
        "/main_categories/:id",
        authenticateMiddleware([{ jwt: [] }]),
        ...fetchMiddlewares<RequestHandler>(MainCategoryController),
        ...fetchMiddlewares<RequestHandler>(MainCategoryController.prototype.update),

        async function MainCategoryController_update(request: ExRequest, response: ExResponse, next: any) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsMainCategoryController_update,
                    request,
                    response,
                });

                const controller = new MainCategoryController();

                await templateService.apiHandler({
                    methodName: "update",
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
    const argsMainCategoryController_delete: Record<string, TsoaRoute.ParameterSchema> = {
        id: { in: "path", name: "id", required: true, dataType: "string" },
    };
    app.delete(
        "/main_categories/:id",
        authenticateMiddleware([{ jwt: [] }]),
        ...fetchMiddlewares<RequestHandler>(MainCategoryController),
        ...fetchMiddlewares<RequestHandler>(MainCategoryController.prototype.delete),

        async function MainCategoryController_delete(request: ExRequest, response: ExResponse, next: any) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsMainCategoryController_delete,
                    request,
                    response,
                });

                const controller = new MainCategoryController();

                await templateService.apiHandler({
                    methodName: "delete",
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
    const argsExpenseTypeController_getAll: Record<string, TsoaRoute.ParameterSchema> = {};
    app.get(
        "/expense_types",
        authenticateMiddleware([{ jwt: [] }]),
        ...fetchMiddlewares<RequestHandler>(ExpenseTypeController),
        ...fetchMiddlewares<RequestHandler>(ExpenseTypeController.prototype.getAll),

        async function ExpenseTypeController_getAll(request: ExRequest, response: ExResponse, next: any) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args: argsExpenseTypeController_getAll,
                    request,
                    response,
                });

                const controller = new ExpenseTypeController();

                await templateService.apiHandler({
                    methodName: "getAll",
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
