import styles from "./Home.module.scss";
import { MetricCard } from "../components/MetricCard";
import { Chart } from "../components/Chart";
import { MonthInfo } from "../types";
import { useDevice } from "../hooks/useDevice";
import { useModel } from "../hooks/useModel";
import { useCallback, useMemo } from "preact/hooks";

const colors = ["#3772FF", "#5F8EFF", "#87AAFF", "#AFC7FF", "#D7E3FF", "#EFF4FF"];
const ignoerdSubcategories = ["Rent"];

export function Home({ selectedMonth }: { selectedMonth: MonthInfo }) {
    const { transactions } = useModel();
    const isMobile = useDevice();

    const getFilteredExpenses = useCallback(
        (expenseType: string, filterIgnored = true) => {
            if (!transactions.length || !selectedMonth) return [];

            const preFiltered = transactions
                .filter((item) => {
                    const date = new Date(item.date);
                    return date >= selectedMonth.startDate && date <= selectedMonth.endDate;
                })
                .filter((item) => item.subcategory?.mainCategory?.transactionType?.name === expenseType);
            return filterIgnored ?
                    preFiltered.filter((item) => {
                        const categoryName = item.subcategory?.name;
                        return categoryName && !ignoerdSubcategories.includes(categoryName);
                    })
                :   preFiltered;
        },
        [transactions, selectedMonth],
    );

    const sunburstData = useMemo(() => {
        const filteredTransactions = getFilteredExpenses("Expense");
        let labels = [];
        let parents = [];
        let values = [];

        const mainCategories = [
            ...new Set(
                filteredTransactions
                    .filter((item) => item.subcategory?.mainCategory?.name)
                    .map((item) => item.subcategory.mainCategory.name),
            ),
        ];

        const subcategories = [
            ...new Set(
                filteredTransactions.filter((item) => item.subcategory?.name).map((item) => item.subcategory.name),
            ),
        ];

        const totalAmount = filteredTransactions.reduce((sum, item) => sum + (item.amount || 0), 0);

        labels.push("Spendings");
        parents.push("");
        values.push(totalAmount);

        mainCategories.forEach((category) => {
            if (!category) return;

            labels.push(category);
            parents.push("Spendings");
            const categoryAmount = filteredTransactions
                .filter((item) => item.subcategory?.mainCategory?.name === category)
                .reduce((sum, item) => sum + (item.amount || 0), 0);
            values.push(categoryAmount);
        });

        subcategories.forEach((subcategory) => {
            if (!subcategory) return;

            const transaction = filteredTransactions.find((item) => item.subcategory?.name === subcategory);
            if (!transaction?.subcategory?.mainCategory?.name) return;

            labels.push(subcategory);
            parents.push(transaction.subcategory.mainCategory.name);
            const subcategoryAmount = filteredTransactions
                .filter((item) => item.subcategory?.name === subcategory)
                .reduce((sum, item) => sum + (item.amount || 0), 0);
            values.push(subcategoryAmount);
        });

        return {
            type: "sunburst",
            labels,
            parents,
            values,
            branchvalues: "total",
            marker: {
                colors: values,
                colorscale: [
                    [0.0, "#EFF4FF"],
                    [0.2, "#D7E3FF"],
                    [0.4, "#AFC7FF"],
                    [0.6, "#87AAFF"],
                    [0.8, "#5F8EFF"],
                    [1.0, "#3772FF"],
                ],
            },
        };
    }, [transactions, selectedMonth]);

    const mainBarChartData = useMemo(() => {
        const filteredTransactions = getFilteredExpenses("Expense");

        const mainCategories = [
            ...new Set(
                filteredTransactions
                    .filter((item) => item.subcategory?.mainCategory?.name)
                    .map((item) => item.subcategory.mainCategory.name),
            ),
        ];

        let barChartData = mainCategories.map((category) => ({
            data: [],
            type: "bar",
            x: [category],
            y: [
                filteredTransactions
                    .filter((item) => item.subcategory?.mainCategory?.name === category)
                    .reduce((sum, item) => sum + (item.amount || 0), 0),
            ],
            marker: {
                color: colors[0],
            },
        }));

        return barChartData.sort((a, b) => b.y[0] - a.y[0]);
    }, [transactions, selectedMonth]);

    const subBarChartData = useMemo(() => {
        const filteredTransactions = getFilteredExpenses("Expense");

        const subcategories = [
            ...new Set(
                filteredTransactions.filter((item) => item.subcategory?.name).map((item) => item.subcategory.name),
            ),
        ];

        let barChartData = subcategories.map((subcategory) => ({
            type: "bar",
            x: [subcategory],
            y: [
                filteredTransactions
                    .filter((item) => item.subcategory?.name === subcategory)
                    .reduce((sum, item) => sum + (item.amount || 0), 0),
            ],
            marker: {
                color: colors[0],
            },
        }));

        return barChartData.sort((a, b) => b.y[0] - a.y[0]);
    }, [transactions, selectedMonth]);

    const stackedBarChartData = useMemo(() => {
        const filteredTransactions = getFilteredExpenses("Expense");

        const mainCategories: { name: string; sum: number; subcategories: { name: string; sum: number }[] }[] = [
            ...new Set(
                filteredTransactions
                    .filter((item) => item.subcategory?.mainCategory?.name)
                    .map((item) => item.subcategory.mainCategory.name),
            ),
        ]
            .map((name) => ({
                name,
                sum: filteredTransactions
                    .filter((item) => item.subcategory?.mainCategory?.name === name)
                    .reduce((sum, item) => sum + (item.amount || 0), 0),
                subcategories: filteredTransactions
                    .filter((item) => item.subcategory?.mainCategory?.name === name && item.subcategory?.name)
                    .map((item) => ({
                        name: item.subcategory!.name!,
                        sum: filteredTransactions
                            .filter((subItem) => subItem.subcategory?.name === item.subcategory?.name)
                            .reduce((subSum, subItem) => subSum + (subItem.amount || 0), 0),
                    }))
                    .sort((a, b) => b.sum - a.sum),
            }))
            .sort((a, b) => b.sum - a.sum);

        const subcategories: { name: string; sum: number; indexInCategory: number }[] = [
            ...new Set(
                filteredTransactions.filter((item) => item.subcategory?.name).map((item) => item.subcategory?.name),
            ),
        ]
            .map((name) => {
                const mainCategory = filteredTransactions.find((item) => item.subcategory?.name === name)?.subcategory
                    ?.mainCategory?.name;
                const subcategoriesInOrder = mainCategories.find((item) => item.name === mainCategory)?.subcategories;

                return {
                    name,
                    sum: filteredTransactions
                        .filter((item) => item.subcategory?.name === name)
                        .reduce((sum, item) => sum + (item.amount || 0), 0),
                    indexInCategory: subcategoriesInOrder?.findIndex((item) => item.name === name) || 0,
                };
            })
            .sort((a, b) => b.sum - a.sum);

        const result = subcategories.map((subcategory) => {
            const categoryData = mainCategories.map((category) => {
                return filteredTransactions
                    .filter(
                        (item) =>
                            item.subcategory?.name === subcategory.name &&
                            item.subcategory?.mainCategory?.name === category.name,
                    )
                    .reduce((sum, item) => sum + (item.amount || 0), 0);
            });

            return {
                x: mainCategories.map((category) => category.name),
                y: categoryData,
                name: subcategory.name,
                type: "bar",
                marker:
                    subcategory.indexInCategory > colors.length - 1 ?
                        { color: colors[colors.length - 1] }
                    :   { color: colors[subcategory.indexInCategory] },
            };
        });

        return result;
    }, [transactions, selectedMonth]);

    const expenseTypePieChartData = useMemo(() => {
        const filteredTransactions = getFilteredExpenses("Expense", false);

        const expenseTypes = [...new Set(filteredTransactions.map((item) => item.subcategory.expenseType.name))].sort();

        const labels = expenseTypes;
        const values = expenseTypes.map((type) =>
            filteredTransactions
                .filter((item) => item.subcategory?.expenseType?.name === type)
                .reduce((sum, item) => sum + (item.amount || 0), 0),
        );

        const colorMap = {
            Discretionary: colors[0],
            Variable: colors[1],
            Fixed: colors[2],
            Intermittent: colors[3],
        };

        return {
            type: "pie",
            labels,
            values,
            textinfo: "percent+label",
            hoverinfo: "label+percent+value",
            marker: {
                colors: labels.map((label) => colorMap[label] || colors[0]),
            },
        };
    }, [transactions, selectedMonth]);

    const income = useMemo(() => {
        const filteredTransactions = getFilteredExpenses("Income", false);
        return filteredTransactions.reduce((sum, item) => sum + (item.amount || 0), 0);
    }, [transactions, selectedMonth]);

    const spending = useMemo(() => {
        const filteredTransactions = getFilteredExpenses("Expense", false);
        return filteredTransactions.reduce((sum, item) => sum + (item.amount || 0), 0) * -1;
    }, [transactions, selectedMonth]);

    const balance = useMemo(() => {
        return income + spending;
    }, [income, spending]);

    return (
        <div>
            <div className={styles.cardList}>
                <MetricCard title="Income" value={income} />
                <MetricCard title="Spendings" value={spending} />
                <MetricCard title="Balance" value={balance} />
            </div>

            <div class={styles.gridContainer}>
                <div class={styles.gridItem}>
                    <div class={styles.content}>
                        <Chart data={expenseTypePieChartData} title="Budget Allocation" />
                    </div>
                </div>
                <div class={styles.gridItem}>
                    <div class={styles.content}>
                        <Chart data={stackedBarChartData} title="Grouped Categories" />
                    </div>
                </div>
                <div class={styles.gridItem}>
                    <div class={styles.content}>
                        <Chart data={mainBarChartData} title="Main Categories" />
                    </div>
                </div>
                <div class={styles.gridItem}>
                    <div class={styles.content}>
                        <Chart data={subBarChartData} title="Subcategories" />
                    </div>
                </div>
                <div class={styles.gridItem}>
                    <div class={styles.content}>
                        <Chart data={sunburstData} title="Spending Breakdown" />
                    </div>
                </div>
            </div>
        </div>
    );
}
