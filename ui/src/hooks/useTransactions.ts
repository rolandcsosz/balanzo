import { useState, useEffect } from 'preact/hooks';
import { useSubcategories } from './useSubcategories';
import { useApiClient } from '../hooks/useApiClient';
import { Transaction } from '../types';

export const useTransactions = (): Transaction[] => {
    const { fetchWithAuth } = useApiClient();
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const subcategories = useSubcategories();

    useEffect(() => {
        const fetchData = async () => {

            if (!subcategories.length) {
                return;
            }

            try {
                const transactionsResponse = await fetchWithAuth(
                    'http://localhost:3000/transactions',
                    'GET',
                    ''
                );
                if (!transactionsResponse.ok) {
                    console.error(
                        `Error fetching transactions: ${transactionsResponse.statusText}`
                    );
                    setTransactions([]);
                    return;
                }

                let transactions = await transactionsResponse.json();
                transactions = transactions.map((transaction) => {
                    const matchedSubcategory = subcategories.find(
                        (subcategory) => subcategory._id === transaction.subcategory
                    );
                    if (matchedSubcategory) {
                        transaction.subcategory = matchedSubcategory;
                    } else {
                        console.warn(
                            `No matching subcategory found for transaction: ${transaction._id}`
                        );
                    }
                    return transaction;
                });

                transactions.sort((a, b) => {
                    return new Date(b.date).getTime() - new Date(a.date).getTime();
                });

                setTransactions(transactions);
            } catch (error) {
                setTransactions([]);
                console.error(
                    `Error fetching transactions and subcategories: ${error}`
                );
            }
        };

        fetchData();
    }, [subcategories]);

    return transactions;
};
