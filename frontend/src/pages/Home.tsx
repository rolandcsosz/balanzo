import styles from "./Home.module.scss";
import MetricCard from "../components/MetricCard";
import Chart from "../components/Chart";
import { MonthInfo } from "../types";
import { useDevice } from "../hooks/useDevice";
import { useModel } from "../hooks/useModel";
import { useCallback, useMemo } from "preact/hooks";
import { removeNullishValuesFromList, removeDuplicate, uniqueId } from "../utils/utlis";
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
            if (!transactions.length || !selectedMonth) return [];

            const searchedTransactionType = transactionType.list.find((et) => et.name === transactionTypeName);
            if (!searchedTransactionType) return [];

            const transactionsByTransactionType = store
                .transactionType(searchedTransactionType.id)
                .mainCategoryReferences()
                .flatMap((mcRef) => mcRef.subcategoryReferences())
                .flatMap((scRef) => scRef.transactionReferences())
                .map((t) => t.tryGet())
                .pipe(removeNullishValuesFromList);

            if (!filterIgnored) {
                return transactionsByTransactionType;
            }

            return transactionsByTransactionType
                .filter((t) => !ignoerdSubcategories.includes(store.subcategory(t.subcategoryId).tryGet()?.name || ""))
                .pipe(removeNullishValuesFromList);
        },
        [transactions, selectedMonth, store, transactionType],
    );

    const sunburstData = useMemo(() => {
        const filteredTransactions = getFilteredExpenses("Expense");
        const labels = [];
        const parents = [];
        const values = [];
        const ids = [];

        const mainCategories = filteredTransactions
            .map((item) => store.subcategory(item.subcategoryId).mainCategory())
            .map((mc) => mc.tryGet())
            .pipe(removeNullishValuesFromList)
            .pipe(removeDuplicate);

        const subcategories = filteredTransactions
            .map((item) => store.subcategory(item.subcategoryId).tryGet())
            .pipe(removeNullishValuesFromList)
            .pipe(removeDuplicate);

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
                .filter((item) => store.subcategory(item.subcategoryId).mainCategory().tryGet()?.id === category.id)
                .reduce((sum, item) => sum + (item.amount || 0), 0);
            values.push(categoryAmount);
        });

        subcategories.forEach((subcategory) => {
            if (!subcategory) {
                return;
            }

            const transaction = filteredTransactions.filter((item) => {
                store.transaction(item.id).subcategory().tryGet().id === subcategory.id;
            });
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

        console.log("Filtered Transactions:", filteredTransactions);

        const mainCategories = [
            ...new Set(
                filteredTransactions
                    .map((item) => store.subcategory(item.subcategoryId).mainCategory().tryGet()?.name || undefined)
                    .pipe(removeNullishValuesFromList),
            ),
        ];

        let barChartData = mainCategories.map((category) => ({
            data: [],
            type: "bar",
            x: [category],
            y: [
                filteredTransactions
                    .filter((item) => store.subcategory(item.subcategoryId).mainCategory().tryGet()?.name === category)
                    .reduce((sum, item) => sum + (item.amount || 0), 0),
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
                filteredTransactions
                    .map((item) => store.subcategory(item.subcategoryId).tryGet()?.name)
                    .pipe(removeNullishValuesFromList),
            ),
        ];

        let barChartData = subcategories.map((subcategory) => ({
            type: "bar",
            x: [subcategory],
            y: [
                filteredTransactions
                    .filter((item) => store.subcategory(item.subcategoryId).tryGet()?.name === subcategory)
                    .reduce((sum, item) => sum + (item.amount || 0), 0),
            ],
            marker: {
                color: colors[0],
            },
        }));

        return barChartData.sort((a, b) => b.y[0] - a.y[0]);
    }, [transactions, selectedMonth, store]);

    const stackedBarChartData = useMemo(() => {
        const filteredTransactions = getFilteredExpenses("Expense");

        const mainCategories = [
            ...new Set(
                filteredTransactions
                    .map((item) => store.subcategory(item.subcategoryId).mainCategory().tryGet()?.name)
                    .pipe(removeNullishValuesFromList),
            ),
        ].map((name) => {
            const subcategoriesRaw = filteredTransactions
                .filter((item) => store.subcategory(item.subcategoryId).mainCategory().tryGet()?.name === name)
                .map((item) => store.subcategory(item.subcategoryId).tryGet()?.name)
                .pipe(removeNullishValuesFromList);

            const uniqueSubcategories = [...new Set(subcategoriesRaw)];

            const subcategories = uniqueSubcategories
                .map((subName) => {
                    const sum = filteredTransactions
                        .filter((item) => store.subcategory(item.subcategoryId).tryGet()?.name === subName)
                        .reduce((sum, item) => sum + (item.amount || 0), 0);
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

                    const matching = filteredTransactions.filter(
                        (t) =>
                            store.subcategory(t.subcategoryId).mainCategory().tryGet()?.name === cat.name &&
                            store.subcategory(t.subcategoryId).tryGet()?.name === subcategory.name,
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
    }, [transactions, selectedMonth, store]);

    const transactionTypePieChartData = useMemo(() => {
        const filteredTransactions = getFilteredExpenses("Expense", false);

        const transactionTypes = [...new Set([])];
        //filteredTransactions.map((item) => item.subcategory.transactionType.name))].sort(); TODO

        const labels = transactionTypes;
        const values = transactionTypes.map((type) =>
            filteredTransactions
                //.filter((item) => item.subcategory?.transactionType?.name === type) TODO
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
    }, [transactions, selectedMonth, store]);

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

            <div className={styles.gridContainer}>
                <div className={styles.gridItem}>
                    <div className={styles.content}>
                        <Chart data={transactionTypePieChartData} title="Budget Allocation" />
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
                        <Chart data={sunburstData} title="Spending Breakdown" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
