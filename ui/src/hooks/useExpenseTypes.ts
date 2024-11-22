import { useState, useEffect } from 'preact/hooks';
import { useApiClient } from '../hooks/useApiClient';
import { ExpenseType } from '../types';

export const useExpenseTypes = (): ExpenseType[] => {
    const { fetchWithAuth } = useApiClient();
    const [expenseTypes, setExpenseTypes] = useState<ExpenseType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
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
                console.error(`Error fetching expenseTypes and subcategories: ${error}`);
            }
        };

        fetchData();
    }, []);

    return expenseTypes;
};
