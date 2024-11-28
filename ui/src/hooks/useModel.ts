import { useState, useEffect } from 'preact/hooks';
import { ExpenseType, MainCategory, Subcategory, Transaction } from '../types';
import { useApiClient } from '../hooks/useApiClient';

export const useModel = () => {
    const { fetchWithAuth } = useApiClient();
    const [expenseTypes, setExpenseTypes] = useState<ExpenseType[]>([]);
    const [transactionTypes, setTransactionTypes] = useState<ExpenseType[]>([]);
    const [mainCategories, setMainCategories] = useState<MainCategory[]>([]);
    const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [mainCategoryCounts, setMainCategoryCounts] = useState<{ [key: string]: number }>({});
    const [subcategoriesCounts, setSubcategoriesCounts] = useState<{ [key: string]: number }>({});

    const fetchExpenseTypes = async () => {
        try {
            const expenseTypesResponse = await fetchWithAuth('http://localhost:3000/expense_types', 'GET', '');
            if (!expenseTypesResponse.ok) {
                console.error(`Error fetching expense types: ${expenseTypesResponse.statusText}`);
                setExpenseTypes([]);
                return;
            }

            setExpenseTypes(await expenseTypesResponse.json());
        } catch (error) {
            setExpenseTypes([]);
            console.error(`Error fetching expense types: ${error}`);
        }
    };

    const fetchTransactionTypes = async () => {
        try {
            const transactionTypesResponse = await fetchWithAuth('http://localhost:3000/transaction_types', 'GET', '');
            if (!transactionTypesResponse.ok) {
                console.error(`Error fetching transaction types: ${transactionTypesResponse.statusText}`);
                setTransactionTypes([]);
                return;
            }

            setTransactionTypes(await transactionTypesResponse.json());
        } catch (error) {
            setTransactionTypes([]);
            console.error(`Error fetching transaction types: ${error}`);
        }
    }

    const fetchMainCategories = async () => {
        if (!expenseTypes.length || !transactionTypes.length) {
            return;
        }

        try {
            const mainCategoriesResponse = await fetchWithAuth('http://localhost:3000/main_categories', 'GET', '');
            if (!mainCategoriesResponse.ok) {
                console.error(`Error fetching main categories: ${mainCategoriesResponse.statusText}`);
                setMainCategories([]);
                return;
            }

            let mainCategories = await mainCategoriesResponse.json();
            mainCategories = mainCategories.map((mainCategory) => {
                const matchedExpenseType = expenseTypes.find((expenseType) => expenseType._id === mainCategory.expenseType);
                if (matchedExpenseType) {
                    mainCategory.expenseType = matchedExpenseType;
                } else {
                    console.warn(`No matching expense type found for main category: ${mainCategory._id}`);
                }

                const matchedTransactionType = transactionTypes.find((transactionType) => transactionType._id === mainCategory.transactionType);
                if (matchedTransactionType) {
                    mainCategory.transactionType = matchedTransactionType;
                } else {
                    console.warn(`No matching transaction type found for main category: ${mainCategory._id}`);
                }

                return mainCategory;
            });

            setMainCategories(mainCategories);
        } catch (error) {
            setMainCategories([]);
            console.error(`Error fetching mainCategories: ${error}`);
        }
    }

    const fetchSubcategories = async () => {
        if (!mainCategories.length) {
            return;
        }

        try {
            const subcategoriesResponse = await fetchWithAuth('http://localhost:3000/subcategories', 'GET', '');
            if (!subcategoriesResponse.ok) {
                console.error(`Error fetching subcategories: ${subcategoriesResponse.statusText}`);
                setSubcategories([]);
                return;
            }

            let subcategories = await subcategoriesResponse.json();
            subcategories = subcategories.map((subcategory) => {
                const matchedMainCategory = mainCategories.find((mainCategory) => mainCategory._id === subcategory.mainCategory);
                if (matchedMainCategory) {
                    subcategory.mainCategory = matchedMainCategory;
                } else {
                    console.warn(`No matching main category found for subcategory: ${subcategory._id}`);
                }

                return subcategory;
            });

            setSubcategories(subcategories);
        } catch (error) {
            setSubcategories([]);
            console.error(`Error fetching subcategories: ${error}`);
        }
    }

    const fetchTransactions = async () => {
        if (!subcategories.length) {
            return;
        }

        try {
            const transactionsResponse = await fetchWithAuth('http://localhost:3000/transactions', 'GET', '');
            if (!transactionsResponse.ok) {
                console.error(`Error fetching transactions: ${transactionsResponse.statusText}`);
                setTransactions([]);
                return;
            }

            let transactions = await transactionsResponse.json();
            transactions = transactions.map((transaction) => {
                const matchedSubcategory = subcategories.find((subcategory) => subcategory._id === transaction.subcategory);
                if (matchedSubcategory) {
                    transaction.subcategory = matchedSubcategory;
                } else {
                    console.warn(`No matching subcategory found for transaction: ${transaction._id}`);
                }
                return transaction;
            });

            transactions.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());  // Sorting the transactions by date
            setTransactions(transactions);
        } catch (error) {
            setTransactions([]);
            console.error(`Error fetching transactions: ${error}`);
        }
    };

    const updateCounts = () => {
        if (!transactions.length || !mainCategories.length || !subcategories.length) {
            return;
        }

        const mainCategoryCounts = mainCategories.reduce((acc, mainCategory) => {
            acc[mainCategory.name] = transactions.filter((transaction) => transaction.subcategory.mainCategory.name === mainCategory.name).length;
            return acc;
        }, {});

        const subcategoriesCounts = subcategories.reduce((acc, subcategory) => {
            acc[subcategory.name] = transactions.filter((transaction) => transaction.subcategory.name === subcategory.name).length;
            return acc;
        }, {});

        setMainCategoryCounts(mainCategoryCounts);
        setSubcategoriesCounts(subcategoriesCounts);
    };

    const sortCategories = () => {
        if (!mainCategories.length || !subcategories.length) {
            return;
        }

        setMainCategories(mainCategories.sort((a, b) => {
            const countA = mainCategoryCounts[a.name] ?? 0;
            const countB = mainCategoryCounts[b.name] ?? 0;
            return countB - countA;
        }));

        setSubcategories(subcategories.sort((a, b) => {
            const countA = subcategoriesCounts[a.name] ?? 0;
            const countB = subcategoriesCounts[b.name] ?? 0;
            return countB - countA;
        }));
    }

    useEffect(() => {
        fetchExpenseTypes();
        fetchTransactionTypes();
    }, []);

    useEffect(() => {
        if (expenseTypes.length && transactionTypes.length) {
            fetchMainCategories();
        }
    }, [expenseTypes, transactionTypes]);

    useEffect(() => {
        if (mainCategories.length) {
            fetchSubcategories();
        }
    }, [mainCategories]);

    useEffect(() => {
        if (subcategories.length) {
            fetchTransactions();
        }
    }, [subcategories]);

    useEffect(() => {
        updateCounts();
        sortCategories();
    }, [transactions, mainCategories, subcategories]);

    return { transactions, mainCategories, subcategories, expenseTypes, transactionTypes };
};
