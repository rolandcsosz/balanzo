export type User = {
    email: string;
    token: string;
}

export type TransactionType = {
    _id: string;
    name: string;
}

export type ExpenseType = {
    _id: string;
    name: string;
}

export type MainCategory = {
    _id: string;
    name: string;
    expenseType: ExpenseType;
    transactionType: TransactionType;
};

export type Transaction = {
    _id: string;
    item: string;
    amount: number;
    date: string;
    subcategory: Subcategory;
};

export type Subcategory = {
    _id: string;
    name: string;
    mainCategory: MainCategory;
    expenseType: ExpenseType;
};