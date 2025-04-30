import styles from "./Home.module.scss";
import { MetricCard } from "../components/MetricCard";
import { Chart } from "../components/Chart";
import { MonthInfo } from "../types";
import { useDevice } from "../hooks/useDevice";
import { useModel } from "../hooks/useModel";
import { useMemo } from "preact/hooks";

export function Home({ selectedMonth }: { selectedMonth: MonthInfo }) {
    const { transactions } = useModel();
    const isMobile = useDevice();

    const sunburstData = useMemo(() => {
        if (!transactions.length || !selectedMonth) return null;

        const filteredTransactions = transactions.filter((item) => {
            const date = new Date(item.date);
            return date >= selectedMonth.startDate && date <= selectedMonth.endDate;
        });

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
                colorscale: "Blues",
            },
        };
    }, [transactions, selectedMonth]);

    const mainBarChartData = useMemo(() => {
        if (!transactions.length || !selectedMonth) return null;

        const filteredTransactions = transactions.filter((item) => {
            const date = new Date(item.date);
            return date >= selectedMonth.startDate && date <= selectedMonth.endDate;
        });

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
                color: "#3772ff",
            },
        }));

        return barChartData.sort((a, b) => b.y[0] - a.y[0]);
    }, [transactions, selectedMonth]);

    const subBarChartData = useMemo(() => {
        if (!transactions.length || !selectedMonth) return null;

        const filteredTransactions = transactions.filter((item) => {
            const date = new Date(item.date);
            return date >= selectedMonth.startDate && date <= selectedMonth.endDate;
        });

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
                color: "#3772ff",
            },
        }));

        return barChartData.sort((a, b) => b.y[0] - a.y[0]);
    }, [transactions, selectedMonth]);

    const stackedBarChartData = useMemo(() => {
        if (!transactions.length || !selectedMonth) return null;

        const filteredTransactions = transactions.filter((item) => {
            const date = new Date(item.date);
            return date >= selectedMonth.startDate && date <= selectedMonth.endDate;
        });

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

        const sortedCategories = mainCategories.sort(
            (a, b) =>
                filteredTransactions
                    .filter((item) => item.subcategory?.mainCategory?.name === b)
                    .reduce((sum, item) => sum + (item.amount || 0), 0) -
                filteredTransactions
                    .filter((item) => item.subcategory?.mainCategory?.name === a)
                    .reduce((sum, item) => sum + (item.amount || 0), 0),
        );

        return subcategories.map((subcategory) => {
            const yValues = sortedCategories.map(
                (category) =>
                    filteredTransactions
                        .filter(
                            (item) =>
                                item.subcategory?.mainCategory?.name === category &&
                                item.subcategory?.name === subcategory,
                        )
                        .reduce((sum, item) => sum + (item.amount || 0), 0) || 0,
            );

            return {
                type: "bar",
                x: sortedCategories,
                y: yValues,
                name: subcategory,
                marker: {
                    color: "#3772FF",
                },
            };
        });
    }, [transactions, selectedMonth]);

    const expenseTypePieChartData = useMemo(() => {
        if (!transactions.length || !selectedMonth) return null;

        const filteredTransactions = transactions.filter((item) => {
            const date = new Date(item.date);
            return date >= selectedMonth.startDate && date <= selectedMonth.endDate;
        });

        const expenseTypes = [
            ...new Set(
                filteredTransactions
                    .filter((item) => item.subcategory?.mainCategory?.expenseType?.name)
                    .map((item) => item.subcategory.mainCategory.expenseType.name),
            ),
        ].sort();

        const labels = expenseTypes;
        const values = expenseTypes.map((type) =>
            filteredTransactions
                .filter((item) => item.subcategory?.mainCategory?.expenseType?.name === type)
                .reduce((sum, item) => sum + (item.amount || 0), 0),
        );
        const colors = ["#3772FF", "#5F8EFF", "#87AAFF", "#AFC7FF"];

        return {
            type: "pie",
            labels,
            values,
            textinfo: "none",
            hoverinfo: "label+percent+value",
            marker: {
                colors,
            },
        };
    }, [transactions, selectedMonth]);

    const income = useMemo(() => {
        if (!transactions.length || !selectedMonth) return 0;

        const filteredTransactions = transactions.filter((item) => {
            const date = new Date(item.date);
            return date >= selectedMonth.startDate && date <= selectedMonth.endDate;
        });

        return filteredTransactions
            .filter((item) => item.subcategory?.mainCategory?.transactionType?.name === "Income")
            .reduce((sum, item) => sum + (item.amount || 0), 0);
    }, [transactions, selectedMonth]);

    const spending = useMemo(() => {
        if (!transactions.length || !selectedMonth) return 0;

        const filteredTransactions = transactions.filter((item) => {
            const date = new Date(item.date);
            return date >= selectedMonth.startDate && date <= selectedMonth.endDate;
        });

        return (
            filteredTransactions
                .filter((item) => item.subcategory?.mainCategory?.transactionType?.name === "Expense")
                .reduce((sum, item) => sum + (item.amount || 0), 0) * -1
        );
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
                        <Chart data={expenseTypePieChartData} title="Budget Allocation" showLegend={true} />
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
