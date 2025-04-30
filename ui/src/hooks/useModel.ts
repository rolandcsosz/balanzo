import { useQuery } from "@tanstack/react-query";
import { ExpenseType, MainCategory, Subcategory, Transaction, Template } from "../types";
import { useApiClient } from "../hooks/useApiClient";
import { Console } from "console";

const fetchExpenseTypes = async (fetchWithAuth: Function) => {
    const response = await fetchWithAuth(import.meta.env.VITE_BACKEND_URL + "/expense_types", "GET", "");
    if (!response || !response.ok) {
        return [];
    }
    return response.json();
};

const fetchTransactionTypes = async (fetchWithAuth: Function) => {
    const response = await fetchWithAuth(import.meta.env.VITE_BACKEND_URL + "/transaction_types", "GET", "");
    if (!response || !response.ok) {
        return [];
    }
    return response.json();
};

const fetchMainCategories = async (
    fetchWithAuth: Function,
    expenseTypes: ExpenseType[],
    transactionTypes: ExpenseType[],
) => {
    if (!expenseTypes.length || !transactionTypes.length) return [];
    const response = await fetchWithAuth(import.meta.env.VITE_BACKEND_URL + "/main_categories", "GET", "");
    const data = await response.json();
    console.log("main categories", data);

    const T = data.map((category) => ({
        ...category,
        expenseType: expenseTypes.find((et) => et._id === category.expenseType) || null,
        transactionType: transactionTypes.find((tt) => tt._id === category.transactionType) || null,
    }));

    console.log("main categories with types", T);
    return T;
};

const fetchSubcategories = async (
    fetchWithAuth: Function,
    expenseTypes: ExpenseType[],
    mainCategories: MainCategory[],
) => {
    if (!mainCategories.length) return [];
    const response = await fetchWithAuth(import.meta.env.VITE_BACKEND_URL + "/subcategories", "GET", "");
    const data = await response.json();

    return data.map((subcategory) => ({
        ...subcategory,
        expenseType: expenseTypes.find((et) => et._id === subcategory.expenseType),
        mainCategory: mainCategories.find((mc) => mc._id === subcategory.mainCategory),
    }));
};

const fetchTransactions = async (fetchWithAuth: Function, subcategories: Subcategory[]) => {
    if (!subcategories.length) return [];
    const response = await fetchWithAuth(import.meta.env.VITE_BACKEND_URL + "/transactions", "GET", "");
    const data = await response.json();

    console.log("transactions", data);

    return data
        .map((transaction) => ({
            ...transaction,
            subcategory: subcategories.find((sc) => sc._id === transaction.subcategory) || null,
        }))
        .sort((a: Transaction, b: Transaction) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

const fetchTemplates = async (fetchWithAuth: Function, subcategories: Subcategory[]) => {
    if (!subcategories.length) return [];
    const response = await fetchWithAuth(import.meta.env.VITE_BACKEND_URL + "/templates", "GET", "");
    const data = await response.json();

    return data.map((template) => ({
        ...template,
        subcategory: subcategories.find((sc) => sc._id === template.subcategory),
    }));
};

export const useModel = () => {
    const { fetchWithAuth } = useApiClient();

    // Queries using react-query (useQuery)
    const { data: expenseTypes = [], refetch: refetchExpenseTypes } = useQuery<ExpenseType[]>({
        queryKey: ["expenseTypes"],
        queryFn: () => fetchExpenseTypes(fetchWithAuth),
    });

    const { data: transactionTypes = [], refetch: refetchTransactionTypes } = useQuery<ExpenseType[]>({
        queryKey: ["transactionTypes"],
        queryFn: () => fetchTransactionTypes(fetchWithAuth),
    });
    const { data: mainCategories = [], refetch: refetchMainCategories } = useQuery<MainCategory[]>({
        queryKey: ["mainCategories", expenseTypes, transactionTypes],
        queryFn: () => fetchMainCategories(fetchWithAuth, expenseTypes, transactionTypes),
    });

    const { data: subcategories = [], refetch: refetchSubcategories } = useQuery<Subcategory[]>({
        queryKey: ["subcategories", mainCategories],
        queryFn: () => fetchSubcategories(fetchWithAuth, expenseTypes, mainCategories),
    });

    const { data: transactions = [], refetch: refetchTransactions } = useQuery<Transaction[]>({
        queryKey: ["transactions", subcategories],
        queryFn: () => fetchTransactions(fetchWithAuth, subcategories),
    });

    const { data: templates = [], refetch: refetchTemplates } = useQuery<Template[]>({
        queryKey: ["templates", subcategories],
        queryFn: () => fetchTemplates(fetchWithAuth, subcategories),
    });

    const refetchData = () => {
        refetchExpenseTypes();
        refetchTransactionTypes();
        refetchMainCategories();
        refetchSubcategories();
        refetchTransactions();
        refetchTemplates();
    };

    return {
        transactions,
        mainCategories,
        subcategories,
        expenseTypes,
        transactionTypes,
        templates,
        refetchData,
    };
};
