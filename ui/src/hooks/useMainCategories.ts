import { useState, useEffect } from 'preact/hooks';
import { useApiClient } from '../hooks/useApiClient';
import { useExpenseTypes } from './useExpenseTypes';
import { MainCategory } from '../types';

export const useMainCategories = (): MainCategory[] => {
    const { fetchWithAuth } = useApiClient();
    const [mainCategories, setMainCategories] = useState<MainCategory[]>([]);
    const expenseTypes = useExpenseTypes();

    useEffect(() => {
        if (!expenseTypes.length) {
            return;
        }
        const fetchData = async () => {
            try {
                const mainCategoriesResponse = await fetchWithAuth('http://localhost:3000/main_categories', 'GET', '');
                if (!mainCategoriesResponse.ok) {
                    console.error(`Error fetching main categories: ${mainCategoriesResponse.statusText}`);
                    setMainCategories([]);
                    return;
                }

                let mainCategories = await mainCategoriesResponse.json();
                mainCategories.map((mainCategory) => {
                    const matchedExpenseType = expenseTypes.filter((expenseType) => expenseType._id === mainCategory.expenseType)[0];
                    if (matchedExpenseType) {
                        mainCategory.expenseType = matchedExpenseType;
                    } else {
                        console.warn(`No matching expense type found for main category: ${mainCategory._id}`);
                    }
                });

                setMainCategories(mainCategories);
            } catch (error) {
                setMainCategories([]);
                console.error(`Error fetching mainCategories and subcategories: ${error}`);
            }
        };

        fetchData();
    }, [expenseTypes]);

    return mainCategories;
};
