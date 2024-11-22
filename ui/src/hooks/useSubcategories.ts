import { useState, useEffect } from 'preact/hooks';
import { useApiClient } from '../hooks/useApiClient';
import { useExpenseTypes } from './useExpenseTypes';
import { useMainCategories } from './useMainCategories';
import { Subcategory } from '../types';

export const useSubcategories = (): Subcategory[] => {
    const { fetchWithAuth } = useApiClient();
    const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
    const expenseTypes = useExpenseTypes();
    const mainCategories = useMainCategories();

    useEffect(() => {
        if (!expenseTypes.length || !mainCategories.length) {
            return;
        }
        const fetchData = async () => {
            try {
                const subcategoriesResponse = await fetchWithAuth('http://localhost:3000/subcategories', 'GET', '');
                if (!subcategoriesResponse.ok) {
                    console.error(`Error fetching subcategories: ${subcategoriesResponse.statusText}`);
                    setSubcategories([]);
                    return;
                }

                let subcategories = await subcategoriesResponse.json();
                subcategories.map((mainCategory) => {
                    const matchedExpenseType = expenseTypes.filter((expenseType) => expenseType._id === mainCategory.expenseType)[0];
                    if (matchedExpenseType) {
                        mainCategory.expenseType = matchedExpenseType;
                    } else {
                        console.warn(`No matching expense type found for main category: ${mainCategory._id}`);
                    }
                });

                subcategories.map((subcategory) => {
                    const matchedMainCategory = mainCategories.filter((mainCategory) => mainCategory._id === subcategory.mainCategory)[0];
                    if (matchedMainCategory) {
                        subcategory.mainCategory = matchedMainCategory;
                    } else {
                        console.warn(`No matching main category found for subcategory: ${subcategory._id}`);
                    }
                });

                setSubcategories(subcategories);
            } catch (error) {
                setSubcategories([]);
                console.error(`Error fetching subcategories and subcategories: ${error}`);
            }
        };

        fetchData();
    }, [mainCategories, expenseTypes]);

    return subcategories;
};
