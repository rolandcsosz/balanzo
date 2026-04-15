import { GraphDef, GraphEdges, ValidSchema } from "entity-walker";
import {
    ErrorResponse,
    ExpenseType,
    MainCategory,
    Subcategory,
    Template,
    Transaction,
    TransactionType,
} from "../../libs/sdk/types.gen";

export type User = {
    email: string;
    token: string;
};

export type MonthInfo = {
    startDate: Date;
    endDate: Date;
    name: string;
};

export type FetchResponse<T> = {
    ok: boolean;
    data?: T;
    error?: string | null;
};

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

export type Schema = ValidSchema<{
    transaction: Transaction;
    subcategory: Subcategory;
    mainCategory: MainCategory;
    expenseType: ExpenseType;
    transactionType: TransactionType;
    template: Template;
}>;

export const edges = {
    transaction: {
        subcategory: { bidirectional: true, resolve: (t) => t.subcategoryId },
    },
    subcategory: {
        mainCategory: { bidirectional: true, resolve: (s) => s.mainCategoryId },
        expenseType: { bidirectional: true, resolve: (s) => s.expenseTypeId },
    },
    mainCategory: {
        expenseType: { bidirectional: true, resolve: (m) => m.expenseTypeId },
        transactionType: { bidirectional: true, resolve: (m) => m.transactionTypeId },
    },
    template: {
        subcategory: { bidirectional: true, resolve: (t) => t.subcategoryId },
    },
} as const satisfies GraphEdges<Schema>;

export type CustomGraph = GraphDef<Schema, typeof edges>;
