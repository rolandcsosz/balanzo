import { UseMutateFunction, useMutation, useQuery } from "@tanstack/react-query";
import { FetchResponse, ResponseStructure } from "../types";
import { useApi } from "./useApi";
import {
    CreateMainCategoryData,
    CreateSubcategoryData,
    CreateTemplateData,
    CreateTransactionData,
    DeleteMainCategoryData,
    DeleteSubcategoryData,
    DeleteTemplateData,
    DeleteTransactionData,
    ErrorResponse,
    ExpenseType,
    MainCategory,
    Subcategory,
    Template,
    Transaction,
    TransactionType,
    UpdateMainCategoryData,
    UpdateSubcategoryData,
    UpdateTemplateData,
    UpdateTransactionData,
} from "../../../libs/sdk/types.gen";
import {
    createMainCategory,
    createSubcategory,
    createTemplate,
    createTransaction,
    deleteMainCategory,
    deleteSubcategory,
    deleteTemplate,
    deleteTransaction,
    getExpenseTypes,
    getMainCategories,
    getSubcategories,
    getTemplates,
    getTransactions,
    getTransactionTypes,
    updateMainCategory,
    updateSubcategory,
    updateTemplate,
    updateTransaction,
    Options,
} from "../../../libs/sdk/sdk.gen";
import { isErrorResponse } from "../utils/utlis";

type RequestFnType = <P, R>(
    apiCall: (params: P) => Promise<ErrorResponse | R>,
    params: P,
) => Promise<FetchResponse<R | null>>;

const fetchData = async <P, R>(
    request: RequestFnType,
    apiCall: (params: P) => Promise<R | ErrorResponse>,
    params: P,
    defaultValue: R,
): Promise<R> => {
    const response = await request<P, R | ErrorResponse>(apiCall, params);

    if (!response || !response.ok || !response.data) {
        return defaultValue;
    }

    if (isErrorResponse(response.data)) {
        return defaultValue;
    }

    return response.data;
};

const throwIfError = (response: FetchResponse<any>, errorMessage: string): void => {
    if (!response || !response.ok || !response.data) {
        throw new Error(response?.error || errorMessage);
    }
    return response.data;
};

const unwrapApiResponse = async <T>(promise: Promise<ResponseStructure<T>>): Promise<T | ErrorResponse> => {
    const res = await promise;
    return res.data ?? { message: "Unknown error" };
};

const createFetcher = <T>(apiFn: (params: any) => Promise<ResponseStructure<T>>, initialData: T) => {
    return (request: RequestFnType) =>
        fetchData(request, (params) => unwrapApiResponse(apiFn(params)), undefined, initialData);
};

type QueryConfig<T> = {
    key: string;
    fetchFn: (request: RequestFnType) => Promise<T>;
    defaultData?: T;
};

type QueryConfigItem = (typeof queryConfigs)[number];

type QueryResults = {
    [K in QueryConfigItem["key"]]: {
        data: Extract<QueryConfigItem, { key: K }>["fetchFn"] extends (...args: any) => Promise<infer R> ? R : never;
        refetch: () => Promise<
            Extract<QueryConfigItem, { key: K }>["fetchFn"] extends (...args: any) => Promise<infer R> ? R : never
        >;
    };
};

type MutationResults = {
    [key: string]: UseMutateFunction<any, any, any, unknown>;
};

const queryConfigs: QueryConfig<any>[] = [
    { key: "transaction", fetchFn: createFetcher<Transaction[]>(getTransactions, []) },
    { key: "expenseType", fetchFn: createFetcher<ExpenseType[]>(getExpenseTypes, []), defaultData: [] },
    { key: "transactionType", fetchFn: createFetcher<TransactionType[]>(getTransactionTypes, []), defaultData: [] },
    { key: "mainCategory", fetchFn: createFetcher<MainCategory[]>(getMainCategories, []), defaultData: [] },
    { key: "subcategory", fetchFn: createFetcher<Subcategory[]>(getSubcategories, []), defaultData: [] },
    { key: "template", fetchFn: createFetcher<Template[]>(getTemplates, []), defaultData: [] },
];

type MutationConfig<TParams, TResult> = {
    id: `${string}.${"create" | "update" | "delete"}`;
    key: string;
    command: "create" | "update" | "delete";
    apiFn: (params: TParams) => Promise<ResponseStructure<TResult>>;
};

const mutationConfigs: MutationConfig<any, any>[] = [
    {
        id: "transaction.create",
        key: "transaction",
        command: "create",
        apiFn: createTransaction,
    },
    {
        id: "transaction.update",
        key: "transaction",
        command: "update",
        apiFn: updateTransaction,
    },
    {
        id: "transaction.delete",
        key: "transaction",
        command: "delete",
        apiFn: deleteTransaction,
    },
    {
        id: "mainCategory.create",
        key: "mainCategory",
        command: "create",
        apiFn: createMainCategory,
    },
    {
        id: "mainCategory.update",
        key: "mainCategory",
        command: "update",
        apiFn: updateMainCategory,
    },
    {
        id: "mainCategory.delete",
        key: "mainCategory",
        command: "delete",
        apiFn: deleteMainCategory,
    },

    {
        id: "subcategory.create",
        key: "subcategory",
        command: "create",
        apiFn: createSubcategory,
    },
    {
        id: "subcategory.update",
        key: "subcategory",
        command: "update",
        apiFn: updateSubcategory,
    },
    {
        id: "subcategory.delete",
        key: "subcategory",
        command: "delete",
        apiFn: deleteSubcategory,
    },
    {
        id: "template.create",
        key: "template",
        command: "create",
        apiFn: createTemplate,
    },
    {
        id: "template.update",
        key: "template",
        command: "update",
        apiFn: updateTemplate,
    },
    {
        id: "template.delete",
        key: "template",
        command: "delete",
        apiFn: deleteTemplate,
    },
];

function buildEntity<
    TList,
    TCreate = never,
    TUpdate = never,
    TDelete = never,
    TCreateReturn = any,
    TUpdateReturn = any,
    TDeleteReturn = any,
>(key: string, queryResults: QueryResults, mutationResults: MutationResults) {
    return {
        list: (queryResults[key]?.data || []) as TList[],
        create: mutationResults[`${key}.create`] as UseMutateFunction<TCreateReturn, unknown, TCreate, unknown>,
        update: mutationResults[`${key}.update`] as UseMutateFunction<TUpdateReturn, unknown, TUpdate, unknown>,
        delete: mutationResults[`${key}.delete`] as UseMutateFunction<TDeleteReturn, unknown, TDelete, unknown>,
        refetch: queryResults[key]?.refetch as () => Promise<TList[]>,
    };
}

export const useModel = () => {
    const { request } = useApi();

    const queryResults: QueryResults = {};
    const mutationResults: MutationResults = {};

    queryConfigs.forEach((cfg) => {
        const { data, refetch } = useQuery<ReturnType<typeof cfg.fetchFn> extends Promise<infer R> ? R : never>({
            queryKey: [cfg.key],
            queryFn: () => cfg.fetchFn(request),
        });

        queryResults[cfg.key] = { data, refetch };
    });

    mutationConfigs.forEach((cfg) => {
        const { mutate } = useMutation({
            mutationFn: async (body: any) => {
                const response = await request<any, any>((params) => unwrapApiResponse(cfg.apiFn(params)), body);
                throwIfError(response, `Failed to ${cfg.command} ${cfg.key}.`);
                return response.data;
            },
            onSuccess: () => {
                queryResults[cfg.key]?.refetch?.();
            },
            onError: (error) => console.error(`Error in ${cfg.key}:`, error),
        });
        mutationResults[cfg.id] = mutate;
    });

    return {
        transaction: buildEntity<
            Transaction,
            Options<CreateTransactionData>,
            Options<UpdateTransactionData>,
            Options<DeleteTransactionData>
        >("transaction", queryResults, mutationResults),
        mainCategory: buildEntity<
            MainCategory,
            Options<CreateMainCategoryData>,
            Options<UpdateMainCategoryData>,
            Options<DeleteMainCategoryData>
        >("mainCategory", queryResults, mutationResults),
        subcategory: buildEntity<
            Subcategory,
            Options<CreateSubcategoryData>,
            Options<UpdateSubcategoryData>,
            Options<DeleteSubcategoryData>
        >("subcategory", queryResults, mutationResults),
        expenseType: buildEntity<ExpenseType, never, never, never>("expenseType", queryResults, mutationResults),
        transactionType: buildEntity<TransactionType, never, never, never>(
            "transactionType",
            queryResults,
            mutationResults,
        ),
        template: buildEntity<
            Template,
            Options<CreateTemplateData>,
            Options<UpdateTemplateData>,
            Options<DeleteTemplateData>
        >("template", queryResults, mutationResults),
        refetchData: () => {
            Object.values(queryResults).forEach(({ refetch }) => refetch());
        },
    };
};
