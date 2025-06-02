import styles from "./Home.module.scss";
import { MetricCard } from "../components/MetricCard";
import { Chart } from "../components/Chart";
import { MonthInfo } from "../types";
import { useDevice } from "../hooks/useDevice";
import { useModel } from "../hooks/useModel";
import { useCallback, useMemo } from "preact/hooks";
import { uniqueId } from "../utils/utlis";

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
        const labels = [];
        const parents = [];
        const values = [];
        const ids = [];

        const mainCategories: { name: string; id: string }[] = filteredTransactions
            .map((item) => ({ name: item.subcategory.mainCategory.name, id: item.subcategory.mainCategory._id }))
            .filter((item, index, self) => index === self.findIndex((t) => t.id === item.id && t.name === item.name));
        const subcategories: { name: string; id: string; parentId: string }[] = filteredTransactions
            .map((item) => ({
                name: item.subcategory.name,
                id: item.subcategory._id,
                parentId: item.subcategory.mainCategory._id,
            }))
            .filter(
                (item, index, self) =>
                    index ===
                    self.findIndex((t) => t.id === item.id && t.name === item.name && t.parentId === item.parentId),
            );

        const totalAmount = filteredTransactions.reduce((sum, item) => sum + (item.amount || 0), 0);
        const spendingsId = uniqueId();

        labels.push("Spendings");
        ids.push(spendingsId);
        parents.push("");
        values.push(totalAmount);

        mainCategories.forEach((category) => {
            if (!category) {
                return;
            }

            labels.push(category.name);
            ids.push(category.id);
            parents.push(spendingsId);
            const categoryAmount = filteredTransactions
                .filter((item) => item.subcategory.mainCategory._id === category.id)
                .reduce((sum, item) => sum + (item.amount || 0), 0);
            values.push(categoryAmount);
        });

        subcategories.forEach((subcategory) => {
            if (!subcategory) {
                return;
            }

            const transaction = filteredTransactions.filter((item) => item.subcategory._id === subcategory.id);
            labels.push(subcategory.name);
            ids.push(subcategory.id);
            parents.push(subcategory.parentId);

            if (!transaction || transaction.length === 0) {
                values.push(0);
                return;
            }

            const subcategoryAmount = transaction.reduce((sum, item) => sum + (item.amount || 0), 0);
            values.push(subcategoryAmount);
        });

        console.log(values);

        return {
            type: "sunburst",
            labels,
            parents,
            values,
            ids,
            branchvalues: "total",
            marker: {
                colors: values,
                colorscale: [
                    // Custom scale for better visualization
                    [0.0, "#EFF4FF"],
                    [0.05, "#D7E3FF"],
                    [0.1, "#AFC7FF"],
                    [0.15, "#87AAFF"],
                    [0.2, "#5F8EFF"],
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

        const mainCategories = [
            ...new Set(
                filteredTransactions
                    .filter((item) => item.subcategory?.mainCategory?.name)
                    .map((item) => item.subcategory.mainCategory.name),
            ),
        ].map((name) => {
            const subcategoriesRaw = filteredTransactions
                .filter((item) => item.subcategory?.mainCategory?.name === name && item.subcategory?.name)
                .map((item) => item.subcategory!.name!);

            const uniqueSubcategories = [...new Set(subcategoriesRaw)];

            const subcategories = uniqueSubcategories
                .map((subName) => {
                    const sum = filteredTransactions
                        .filter((item) => item.subcategory?.name === subName)
                        .reduce((acc, item) => acc + (item.amount || 0), 0);
                    return { name: subName, sum };
                })
                .sort((a, b) => b.sum - a.sum); // Descending order

            return { name, subcategories };
        });

        const traces: any[] = [];

        mainCategories.forEach((mainCategory) => {
            mainCategory.subcategories.forEach((subcategory, index) => {
                const yValues = mainCategories.map((cat) => {
                    if (cat.name !== mainCategory.name) return 0;

                    const matching = filteredTransactions.filter(
                        (item) =>
                            item.subcategory?.mainCategory?.name === cat.name &&
                            item.subcategory?.name === subcategory.name,
                    );

                    return matching.reduce((acc, item) => acc + (item.amount || 0), 0);
                });

                traces.push({
                    x: mainCategories.map((cat) => cat.name),
                    y: yValues,
                    name: subcategory.name,
                    type: "bar",
                    marker: {
                        color: colors[Math.min(index, colors.length - 1)],
                    },
                });
            });
        });

        return traces;
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
