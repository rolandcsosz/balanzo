import { useState, useEffect } from "preact/hooks";
import { ExpenseType, MainCategory, Subcategory, Transaction, Template } from "../types";
import { useApiClient } from "../hooks/useApiClient";
import { useCache } from "../hooks/useCache";

export const useModel = () => {
    const { fetchWithAuth } = useApiClient();
    const [expenseTypes, setExpenseTypes] = useState<ExpenseType[]>([]);
    const [transactionTypes, setTransactionTypes] = useState<ExpenseType[]>([]);
    const [mainCategories, setMainCategories] = useState<MainCategory[]>([]);
    const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [templates, setTemplates] = useState<Template[]>([]);

    const expenseTypesCache = useCache("expenseTypes");
    const transactionTypesCache = useCache("transactionTypes");
    const mainCategoriesCache = useCache("mainCategories");
    const subcategoriesCache = useCache("subcategories");
    const transactionsCache = useCache("transactions");
    const templatesCache = useCache("templates");

    const fetchData = async (
        key: string,
        fetchFn: () => Promise<any>,
        setFn: (data: any[]) => void,
        cache: ReturnType<typeof useCache>,
    ) => {
        const cachedData = cache.getCache();
        if (cachedData) {
            setFn(cachedData);
        }

        try {
            const data = await fetchFn();

            if (!data) {
                cache.setCache([]);
                setFn([]);
                return;
            }

            const isDataDifferent = JSON.stringify(data) !== JSON.stringify(cachedData);

            if (isDataDifferent) {
                cache.setCache(data);
                setFn(data);
                console.log(`Fetched ${key}:`, data.length);
                return;
            }
        } catch (error) {
            console.error(`Error fetching ${key}:`, error);
        }
    };

    const fetchExpenseTypes = async () => {
        const response = await fetchWithAuth(import.meta.env.VITE_BACKEND_URL + "/expense_types", "GET", "");
        if (!response || !response.ok) {
            return [];
        }
        return response.json();
    };

    const fetchTransactionTypes = async () => {
        const response = await fetchWithAuth(import.meta.env.VITE_BACKEND_URL + "/transaction_types", "GET", "");
        if (!response || !response.ok) {
            return [];
        }
        return response.json();
    };

    const fetchMainCategories = async () => {
        if (!expenseTypes.length || !transactionTypes.length) return [];
        const response = await fetchWithAuth(import.meta.env.VITE_BACKEND_URL + "/main_categories", "GET", "");
        if (!response || !response.ok) {
            return [];
        }
        const data = await response.json();

        return data.map((category) => {
            const matchedExpenseType = expenseTypes.find((et) => et._id === category.expenseType);
            const matchedTransactionType = transactionTypes.find((tt) => tt._id === category.transactionType);

            return {
                ...category,
                expenseType: matchedExpenseType || null,
                transactionType: matchedTransactionType || null,
            };
        });
    };

    const fetchSubcategories = async () => {
        if (!mainCategories.length) return [];
        const response = await fetchWithAuth(import.meta.env.VITE_BACKEND_URL + "/subcategories", "GET", "");
        if (!response || !response.ok) {
            return [];
        }
        const data = await response.json();
        return data.map((subcategory) => ({
            ...subcategory,
            expenseType: expenseTypes.find((et) => et._id === subcategory.expenseType),
            mainCategory: mainCategories.find((mc) => mc._id === subcategory.mainCategory),
        }));
    };

    const fetchTransactions = async () => {
        if (!subcategories.length) return [];
        const response = await fetchWithAuth(import.meta.env.VITE_BACKEND_URL + "/transactions", "GET", "");
        if (!response || !response.ok) {
            return [];
        }
        const data = await response.json();

        return data
            .map((transaction) => {
                const matchedSubcategory = subcategories.find((sc) => sc._id === transaction.subcategory);

                return {
                    ...transaction,
                    subcategory: matchedSubcategory || null,
                };
            })
            .sort((a: Transaction, b: Transaction) => new Date(b.date).getTime() - new Date(a.date).getTime());
    };

    const fetchTemplates = async () => {
        if (!subcategories.length) return [];
        const response = await fetchWithAuth(import.meta.env.VITE_BACKEND_URL + "/templates", "GET", "");
        if (!response || !response.ok) {
            return [];
        }
        const data = await response.json();
        return data.map((template) => ({
            ...template,
            subcategory: subcategories.find((sc) => sc._id === template.subcategory),
        }));
    };

    const refetchData = () => {
        fetchData("expenseTypes", fetchExpenseTypes, setExpenseTypes, expenseTypesCache);
        fetchData("transactionTypes", fetchTransactionTypes, setTransactionTypes, transactionTypesCache);
        fetchData("mainCategories", fetchMainCategories, setMainCategories, mainCategoriesCache);
        fetchData("subcategories", fetchSubcategories, setSubcategories, subcategoriesCache);
        fetchData("transactions", fetchTransactions, setTransactions, transactionsCache);
        fetchData("templates", fetchTemplates, setTemplates, templatesCache);
    };

    useEffect(() => {
        fetchData("expenseTypes", fetchExpenseTypes, setExpenseTypes, expenseTypesCache);
        fetchData("transactionTypes", fetchTransactionTypes, setTransactionTypes, transactionTypesCache);
    }, []);

    useEffect(() => {
        if (expenseTypes.length && transactionTypes.length) {
            fetchData("mainCategories", fetchMainCategories, setMainCategories, mainCategoriesCache);
        }
    }, [expenseTypes, transactionTypes]);

    useEffect(() => {
        if (mainCategories.length) {
            fetchData("subcategories", fetchSubcategories, setSubcategories, subcategoriesCache);
        }
    }, [mainCategories]);

    useEffect(() => {
        if (subcategories.length) {
            fetchData("transactions", fetchTransactions, setTransactions, transactionsCache);
            fetchData("templates", fetchTemplates, setTemplates, templatesCache);
        }
    }, [subcategories]);

    return { transactions, mainCategories, subcategories, expenseTypes, transactionTypes, templates, refetchData };
};
