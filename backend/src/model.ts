export interface User {
    id: number;
    role: string;
    name: string;
    email: string;
}

export interface Subcategory {
    id: string;
    name: string;
    mainCategoryId: string;
    expenseTypeId: string;
}

export interface SubcategoryRequest {
    name: string;
    mainCategoryId: string;
    expenseTypeId: string;
}

export interface MainCategory {
    id: string;
    name: string;
    expenseTypeId: string;
    transactionTypeId: string;
}

export interface MainCategoryRequest {
    name: string;
    expenseTypeId: string;
    transactionTypeId: string;
}

export interface Transaction {
    id: string;
    item: string;
    amount: number;
    date: string;
    subcategoryId: string;
}

export interface TransactionRequest {
    item: string;
    amount: number;
    date: string;
    subcategoryId: string;
}

export interface ExpenseType {
    id: string;
    name: string;
}

export interface ExpenseTypeRequest {
    name: string;
}

export interface TransactionType {
    id: string;
    name: string;
}

export interface TransactionTypeRequest {
    name: string;
}

export interface Template {
    id: string;
    name: string;
    itemName: string;
    amount: number | null;
    date: string | null;
    subcategoryId: string;
}

export interface TemplateRequest {
    name: string;
    itemName: string;
    amount: number | null;
    date: string | null;
    subcategoryId: string;
}

export interface ErrorResponse {
    message: string;
}

export interface SuccessResponse {
    message: string;
}

export const successResponse: SuccessResponse = {
    message: "OK",
};

export interface LogedInUser {
    id: string;
    role: string;
}
