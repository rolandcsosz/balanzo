import './Home.scss';
import { MetricCard } from '../components/MetricCard';
import { Chart, ChartSize } from '../components/Chart';
import { Transaction } from '../types';
import { useDevice } from '../hooks/useDevice';
import { useModel } from '../hooks/useModel';
import { useEffect, useMemo, useRef } from 'preact/hooks';

export function Home() {
    const { transactions } = useModel();
    const isMobile = useDevice();
    const prevTransactionsRef = useRef(transactions);

    useEffect(() => {
        if (JSON.stringify(prevTransactionsRef.current) !== JSON.stringify(transactions)) {
            console.log('Transactions changed:', {
                prev: prevTransactionsRef.current.length,
                current: transactions.length,
            });
            prevTransactionsRef.current = transactions;
        }
    }, [transactions]);

    const transactionsKey = useMemo(() => {
        return transactions.map(t => `${t._id}-${t.amount}`).join('|');
    }, [transactions]);

    const expenseTransactions = useMemo(() => {
        return transactions.filter((item) =>
            item.subcategory?.mainCategory?.transactionType?.name === "Expense"
        );
    }, [transactionsKey]);

    const sunburstData = useMemo(() => {
        if (!transactions.length) return null;

        let labels = [];
        let parents = [];
        let values = [];

        const mainCategories = [...new Set(transactions
            .filter(item => item.subcategory?.mainCategory?.name)
            .map((item) => item.subcategory.mainCategory.name))];

        const subcategories = [...new Set(transactions
            .filter(item => item.subcategory?.name)
            .map((item) => item.subcategory.name))];

        const totalAmount = transactions.reduce((sum, item) => sum + (item.amount || 0), 0);

        labels.push("Spendings");
        parents.push("");
        values.push(totalAmount);

        mainCategories.forEach((category) => {
            if (!category) return;

            labels.push(category);
            parents.push("Spendings");
            const categoryAmount = transactions
                .filter((item) => item.subcategory?.mainCategory?.name === category)
                .reduce((sum, item) => sum + (item.amount || 0), 0);
            values.push(categoryAmount);
        });

        subcategories.forEach((subcategory) => {
            if (!subcategory) return;

            const transaction = transactions.find((item) =>
                item.subcategory?.name === subcategory);
            if (!transaction?.subcategory?.mainCategory?.name) return;

            labels.push(subcategory);
            parents.push(transaction.subcategory.mainCategory.name);
            const subcategoryAmount = transactions
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
            }
        };
    }, [transactionsKey]);

    const mainBarChartData = useMemo(() => {
        if (!transactions.length) return null;

        const mainCategories = [...new Set(transactions
            .filter(item => item.subcategory?.mainCategory?.name)
            .map((item) => item.subcategory.mainCategory.name))];

        let barChartData = mainCategories.map((category) => ({
            data: [],
            type: 'bar',
            x: [category],
            y: [transactions
                .filter((item) => item.subcategory?.mainCategory?.name === category)
                .reduce((sum, item) => sum + (item.amount || 0), 0)
            ],
            marker: {
                color: "#3772ff",
            },
        }));

        return barChartData.sort((a, b) => b.y[0] - a.y[0]);
    }, [transactionsKey]);

    const subBarChartData = useMemo(() => {
        if (!transactions.length) return null;

        const subcategories = [...new Set(transactions
            .filter(item => item.subcategory?.name)
            .map((item) => item.subcategory.name))];

        let barChartData = subcategories.map((subcategory) => ({
            type: 'bar',
            x: [subcategory],
            y: [transactions
                .filter((item) => item.subcategory?.name === subcategory)
                .reduce((sum, item) => sum + (item.amount || 0), 0)
            ],
            marker: {
                color: "#3772ff",
            },
        }));

        return barChartData.sort((a, b) => b.y[0] - a.y[0]);
    }, [transactionsKey]);

    const stackedBarChartData = useMemo(() => {
        if (!transactions.length) return null;

        const mainCategories = [...new Set(transactions
            .filter(item => item.subcategory?.mainCategory?.name)
            .map((item) => item.subcategory.mainCategory.name))];

        const subcategories = [...new Set(transactions
            .filter(item => item.subcategory?.name)
            .map((item) => item.subcategory.name))];

        const sortedCategories = mainCategories.sort((a, b) =>
            transactions.filter((item) => item.subcategory?.mainCategory?.name === b)
                .reduce((sum, item) => sum + (item.amount || 0), 0) -
            transactions.filter((item) => item.subcategory?.mainCategory?.name === a)
                .reduce((sum, item) => sum + (item.amount || 0), 0)
        );

        return subcategories.map((subcategory) => {
            const yValues = sortedCategories.map((category) =>
                transactions.filter((item) =>
                    item.subcategory?.mainCategory?.name === category &&
                    item.subcategory?.name === subcategory
                ).reduce((sum, item) => sum + (item.amount || 0), 0) || 0
            );

            return {
                type: 'bar',
                x: sortedCategories,
                y: yValues,
                name: subcategory,
                marker: {
                    color: "#3772FF",
                },
            };
        });
    }, [transactionsKey]);

    const expenseTypePieChartData = useMemo(() => {
        if (!transactions.length) return null;

        const expenseTypes = [...new Set(transactions
            .filter(item => item.subcategory?.mainCategory?.expenseType?.name)
            .map((item) => item.subcategory.mainCategory.expenseType.name))].sort();

        const labels = expenseTypes;
        const values = expenseTypes.map(type =>
            transactions
                .filter((item) => item.subcategory?.mainCategory?.expenseType?.name === type)
                .reduce((sum, item) => sum + (item.amount || 0), 0)
        );
        const colors = ["#3772FF", "#5F8EFF", "#87AAFF", "#AFC7FF"];

        return {
            type: 'pie',
            labels,
            values,
            textinfo: 'none',
            hoverinfo: 'label+percent+value',
            marker: {
                colors,
            },
        };
    }, [transactionsKey]);

    const income = useMemo(() => {
        return transactions
            .filter((item) => item.subcategory?.mainCategory?.transactionType?.name === "Income")
            .reduce((sum, item) => sum + (item.amount || 0), 0);
    }, [transactionsKey]);

    const spending = useMemo(() => {
        return transactions
            .filter((item) => item.subcategory?.mainCategory?.transactionType?.name === "Expense")
            .reduce((sum, item) => sum + (item.amount || 0), 0) * -1;
    }, [transactionsKey]);

    const balance = useMemo(() => {
        return income + spending;
    }, [income, spending]);

    return (
        <div className="dashboard">
            <div className="card-list">
                <MetricCard title="Income" value={income} />
                <MetricCard title="Spendings" value={spending} />
                <MetricCard title="Balance" value={balance} />
            </div>
            {sunburstData && (
                <>
                    <div className="card-list">
                        <Chart
                            data={expenseTypePieChartData}
                            size={isMobile ? ChartSize.FILL_CONTENT : ChartSize.SMALL}
                            title='Budget Allocation'
                            showLegend={true}
                        />
                        <Chart
                            data={stackedBarChartData}
                            size={isMobile ? ChartSize.FILL_CONTENT : ChartSize.MEDIUM}
                            title='Grouped Categories'
                        />
                    </div>
                    <div className="card-list">
                        <Chart
                            data={mainBarChartData}
                            size={isMobile ? ChartSize.FILL_CONTENT : ChartSize.SMALL}
                            title="Main Categories"
                        />
                        <Chart
                            data={subBarChartData}
                            size={isMobile ? ChartSize.FILL_CONTENT : ChartSize.SMALL}
                            title='Subcategories'
                        />
                        <Chart
                            data={sunburstData}
                            size={isMobile ? ChartSize.FILL_CONTENT : ChartSize.SMALL}
                            title='Spending Breakdown'
                        />
                    </div>
                </>
            )}
        </div>
    );
}