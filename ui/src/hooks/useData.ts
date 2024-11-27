import { useState, useEffect } from 'preact/hooks';
import { useSubcategories } from './useSubcategories';
import { MainCategory, Subcategory, Transaction } from '../types';
import { useMainCategories } from './useMainCategories';
import { useExpenseTypes } from './useExpenseTypes';
import { useTransactions } from './useTransactions';
import { useTransactionTypes } from './useTransactionTypes';

export const useData = () => {
    const transactions = useTransactions();
    const unsortedMainCategories = useMainCategories();
    const unsortedSubcategories = useSubcategories();
    const expenseTypes = useExpenseTypes();
    const transactionTypes = useTransactionTypes();

    const [mainCategoryCounts, setMainCategoryCounts] = useState<{ [key: string]: number }>({});
    const [subcategoriesCounts, setSubcategoriesCounts] = useState<{ [key: string]: number }>({});
    const [mainCategories, setMainCategories] = useState<MainCategory[]>([]);
    const [subcategories, setSubcategories] = useState<Subcategory[]>([]);

    const updateCounts = () => {
        const mainCategoryCounts = unsortedMainCategories.reduce((acc, mainCategory) => {
            acc[mainCategory.name] = transactions.filter((transaction) => transaction.subcategory.mainCategory.name === mainCategory.name).length;
            return acc;
        }, {});

        const subcategoriesCounts = unsortedSubcategories.reduce((acc, subcategory) => {
            acc[subcategory.name] = transactions.filter((transaction) => transaction.subcategory.name === subcategory.name).length;
            return acc;
        }, {});

        setMainCategoryCounts(mainCategoryCounts);
        setSubcategoriesCounts(subcategoriesCounts);
    };

    const sortCategories = () => {
        setMainCategories(unsortedMainCategories.sort((a, b) => {
            const countA = mainCategoryCounts[a.name] ?? 0;
            const countB = mainCategoryCounts[b.name] ?? 0;
            return countB - countA;
        }));


        setSubcategories(unsortedSubcategories.sort((a, b) => {
            const countA = subcategoriesCounts[a.name] ?? 0;
            const countB = subcategoriesCounts[b.name] ?? 0;
            return countB - countA;
        }));
    }

    useEffect(() => {
        updateCounts();
        sortCategories();
    }, [transactions, unsortedMainCategories, unsortedSubcategories]);

    return { transactions, mainCategories, subcategories, expenseTypes, transactionTypes };
};
