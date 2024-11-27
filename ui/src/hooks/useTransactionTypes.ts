import { useState, useEffect } from 'preact/hooks';
import { useApiClient } from '../hooks/useApiClient';
import { ExpenseType } from '../types';

export const useTransactionTypes = (): ExpenseType[] => {
    const { fetchWithAuth } = useApiClient();
    const [transactionTypes, setTransactionTypes] = useState<ExpenseType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
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
        };

        fetchData();
    }, []);

    return transactionTypes;
};
