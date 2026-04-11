import styles from "./Home.module.scss";
import MetricCard from "../components/MetricCard";
import Chart from "../components/Chart";
import { MonthInfo } from "../types";
import { useDevice } from "../hooks/useDevice";
import { useModel } from "../hooks/useModel";
import { useCallback, useMemo } from "preact/hooks";
import { uniqueId } from "../utils/utlis";
import { useEntityQuery } from "../hooks/useEntityQuery";

const colors = ["#3772FF", "#5F8EFF", "#87AAFF", "#AFC7FF", "#D7E3FF", "#EFF4FF"];
const ignoerdSubcategories = ["Rent"];

interface HomeProps {
    selectedMonth: MonthInfo;
}

const Home = ({ selectedMonth }: HomeProps) => {
    const { transaction, transactionType } = useModel();
    const transactions = transaction.list;
    const isMobile = useDevice();
    const { store } = useEntityQuery();

    const getFilteredExpenses = useCallback(
        (transactionTypeName: string, filterIgnored = true) => {
            if (!transactions.length || !selectedMonth) return null;

            const searchedTransactionType = transactionType.list.find((et) => et.name === transactionTypeName);
            if (!searchedTransactionType) return null;

            const transactionsByTransactionType = store
                .transactionType(searchedTransactionType.id)
                .mainCategoryNodes()
                .subcategoryNodes()
                .transactionNodes((t) => {
                    if (!t) return false;
                    const date = new Date(t.date);
                    return date >= selectedMonth.startDate && date <= selectedMonth.endDate;
                });

            if (!filterIgnored) {
                return transactionsByTransactionType;
            }

            return transactionsByTransactionType.where((t) => {
                const subcategory = store.subcategory(t.subcategoryId).value();
                if (!subcategory) return true;
                return !ignoerdSubcategories.includes(subcategory.name);
            });
        },
        [transactions, selectedMonth, store, transactionType],
    );

    const sunburstData = useMemo(() => {
        const filteredTransactions = getFilteredExpenses("Expense");
        const labels = [];
        const parents = [];
        const values = [];
        const ids = [];

        const mainCategories = filteredTransactions?.subcategoryNodes().mainCategoryNodes().unique().entities() || [];
        const subcategories = filteredTransactions?.subcategoryNodes().unique().entities() || [];
        const totalAmount = filteredTransactions?.entities().reduce((sum, item) => sum + (item.amount || 0), 0);
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

            const categoryAmount =
                filteredTransactions
                    ?.where((item) => store.subcategory(item.subcategoryId).mainCategory().value()?.id === category.id)
                    .entities()
                    .reduce((sum, item) => sum + (item.amount || 0), 0) || 0;
            values.push(categoryAmount);
        });

        subcategories.forEach((subcategory) => {
            if (!subcategory) {
                return;
            }

            const transaction =
                filteredTransactions
                    ?.where((item) => store.subcategory(item.subcategoryId).value()?.id === subcategory.id)
                    .entities() || [];
            labels.push(subcategory.name);
            ids.push(subcategory.id);
            parents.push(subcategory.mainCategoryId);

            if (!transaction || transaction.length === 0) {
                values.push(0);
                return;
            }

            const subcategoryAmount = transaction.reduce((sum, item) => sum + (item.amount || 0), 0);
            values.push(subcategoryAmount);
        });

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
                    [0.0, "#EFF4FF"],
                    [0.05, "#D7E3FF"],
                    [0.1, "#AFC7FF"],
                    [0.15, "#87AAFF"],
                    [0.2, "#5F8EFF"],
                    [1.0, "#3772FF"],
                ],
            },
        };
    }, [transactions, selectedMonth, store, getFilteredExpenses]);

    const mainBarChartData = useMemo(() => {
        const filteredTransactions = getFilteredExpenses("Expense");
        const filteredTrasnactionIds = filteredTransactions?.ids() || [];

        const mainCategories = [
            ...new Set(
                filteredTransactions
                    ?.subcategoryNodes()
                    .mainCategoryNodes()
                    .unique()
                    .select((mainCategoryNode) => mainCategoryNode.name) || [],
            ),
        ];

        let barChartData = mainCategories.map((category) => ({
            data: [],
            type: "bar",
            x: [category],
            y: [
                store
                    .mainCategoryNodes((item) => item.name === category)
                    .subcategoryNodes()
                    .transactionNodes((t) => filteredTrasnactionIds.includes(t.id))
                    .entities()
                    .reduce((sum, item) => sum + (item.amount || 0), 0) || 0,
            ],
            marker: {
                color: colors[0],
            },
        }));

        return barChartData.sort((a, b) => b.y[0] - a.y[0]);
    }, [transactions, selectedMonth, store]);

    const subBarChartData = useMemo(() => {
        const filteredTransactions = getFilteredExpenses("Expense");

        const subcategories = [
            ...new Set(
                filteredTransactions?.subcategoryNodes().select((subcategoryNode) => subcategoryNode.name) || [],
            ),
        ];

        let barChartData = subcategories.map((subcategory) => ({
            type: "bar",
            x: [subcategory],
            y: [
                filteredTransactions
                    ?.subcategoryNodes((item) => item.name === subcategory)
                    .transactionNodes()
                    .entities()
                    .reduce((sum, item) => sum + (item.amount || 0), 0) || 0,
            ],
            marker: {
                color: colors[0],
            },
        }));

        return barChartData.sort((a, b) => b.y[0] - a.y[0]);
    }, [transactions, selectedMonth, store]);

    const stackedBarChartData = useMemo(() => {
        const filteredTransactions = getFilteredExpenses("Expense");
        const filteredTrasnactionIds = filteredTransactions?.ids() || [];

        const mainCategories = [
            ...new Set(
                filteredTransactions
                    ?.subcategoryNodes()
                    .mainCategoryNodes()
                    .select((mainCategoryNode) => mainCategoryNode.name) || [],
            ),
        ].map((name) => {
            const subcategoriesRaw =
                store
                    .mainCategoryNodes((item) => item.name === name)
                    .subcategoryNodes()
                    .transactionNodes((t) => filteredTrasnactionIds.includes(t.id))
                    .subcategoryNodes()
                    .select((subcategoryNode) => subcategoryNode.name) || [];

            const uniqueSubcategories = [...new Set(subcategoriesRaw)];

            const subcategories = uniqueSubcategories
                .map((subName) => {
                    const sum =
                        store
                            .subcategoryNodes((item) => item.name === subName)
                            .transactionNodes((t) => filteredTrasnactionIds.includes(t.id))
                            .entities()
                            .reduce((sum, item) => sum + (item.amount || 0), 0) || 0;
                    return { name: subName, sum };
                })
                .sort((a, b) => b.sum - a.sum);

            return { name, subcategories };
        });

        const traces: any[] = [];

        mainCategories.forEach((mainCategory) => {
            mainCategory.subcategories.forEach((subcategory, index) => {
                const yValues = mainCategories.map((cat) => {
                    if (cat.name !== mainCategory.name) return 0;

                    const matching = store
                        .mainCategoryNodes((item) => item.name === mainCategory.name)
                        .subcategoryNodes((item) => item.name === subcategory.name)
                        .transactionNodes((t) => filteredTrasnactionIds.includes(t.id))
                        .entities();
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
    }, [transactions, selectedMonth, store]);

    const transactionTypePieChartData = useMemo(() => {
        const filteredTransactions = getFilteredExpenses("Expense", false);
        const filteredTrasnactionIds = filteredTransactions?.ids() || [];

        const transactionTypes = [
            ...new Set(
                filteredTransactions
                    ?.subcategoryNodes()
                    .expenseTypeNodes()
                    .select((item) => item.name) || [],
            ),
        ];

        const labels = transactionTypes;
        const values = transactionTypes.map((type) =>
            (
                store
                    .expenseTypeNodes((item) => item.name === type)
                    .subcategoryNodes()
                    .transactionNodes((item) => filteredTrasnactionIds.includes(item.id))
                    .entities() || []
            ).reduce((sum, item) => sum + (item.amount || 0), 0),
        );

        const colorMap: Record<string, string> = {
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
    }, [transactions, selectedMonth, store]);

    const income = useMemo(() => {
        const filteredTransactions = getFilteredExpenses("Income", false);
        return (filteredTransactions?.entities() || []).reduce((sum, item) => sum + (item.amount || 0), 0);
    }, [transactions, selectedMonth]);

    const spending = useMemo(() => {
        const filteredTransactions = getFilteredExpenses("Expense", false);
        return (filteredTransactions?.entities() || []).reduce((sum, item) => sum + (item.amount || 0), 0) * -1;
    }, [transactions, selectedMonth]);

    const balance = useMemo(() => {
        return income + spending;
    }, [income, spending]);

    return (
        <div className={styles.container}>
            <div className={styles.cardList}>
                <MetricCard title="Income" value={income} />
                <MetricCard title="Spendings" value={spending} />
                <MetricCard title="Balance" value={balance} />
            </div>

            <div className={styles.gridContainer}>
                <div className={styles.gridItem}>
                    <div className={styles.content}>
                        <Chart
                            data={transactionTypePieChartData}
                            title="Budget Allocation"
                            margins={{ b: 40, t: 40 }}
                        />
                    </div>
                </div>
                <div className={styles.gridItem}>
                    <div className={styles.content}>
                        <Chart data={stackedBarChartData} title="Grouped Categories" />
                    </div>
                </div>
                <div className={styles.gridItem}>
                    <div className={styles.content}>
                        <Chart data={mainBarChartData} title="Main Categories" />
                    </div>
                </div>
                <div className={styles.gridItem}>
                    <div className={styles.content}>
                        <Chart data={subBarChartData} title="Subcategories" />
                    </div>
                </div>
                <div className={styles.gridItem}>
                    <div className={styles.content}>
                        <Chart
                            data={sunburstData}
                            title="Spending Breakdown"
                            margins={{ b: 10, t: 10, l: 10, r: 10 }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
