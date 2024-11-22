export type User = {
    email: string;
    token: string;
}

export type ExpenseType = {
    _id: string;
    name: string;
}

export type MainCategory = {
    _id: string;
    name: string;
    expenseType: ExpenseType;
};

export type Transaction = {
    _id: string;
    item: string;
    amount: number;
    date: string;
    subcategory: Subcategory;
    type: string;
};

export type Subcategory = {
    _id: string;
    name: string;
    mainCategory: MainCategory;
    expenseType: ExpenseType;
};