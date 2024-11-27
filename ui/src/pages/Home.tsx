import './Home.scss';
import { MetricCard } from '../components/MetricCard';
import { Chart, ChartSize } from '../components/Chart';
import { useTransactions } from '../hooks/useTransactions';
import { Transaction } from '../types';
import { useDevice } from '../hooks/useDevice';

export function Home() {
    const transactions = useTransactions();
    const isMobile = useDevice();

    const filterExpenseTransactions = (data: Transaction[]) => {
        return data.filter((item) => item.subcategory.mainCategory.transactionType.name === "Expense");
    }

    const createDataForSunburst = (data: Transaction[]) => {
        let labels = [];
        let parents = [];
        let values = [];
        const mainCategories = [...new Set(data.map((item) => item.subcategory.mainCategory.name))];
        const subcategories = [...new Set(data.map((item) => item.subcategory.name))];
        const totalAmount = data.reduce((sum, item) => sum + item.amount, 0);

        labels.push("Spendings");
        parents.push("");
        values.push(totalAmount);

        mainCategories.forEach((category, index) => {
            labels.push(category);
            parents.push("Spendings");
            values.push(data.filter((item) => item.subcategory.mainCategory.name === category).reduce((sum, item) => sum + item.amount, 0));
        });

        subcategories.forEach((subcategory) => {
            labels.push(subcategory);
            parents.push(mainCategories.find((mainCategory) => data.find((item) => item.subcategory.name === subcategory).subcategory.mainCategory.name === mainCategory));
            values.push(data.filter((item) => item.subcategory.name === subcategory).reduce((sum, item) => sum + item.amount, 0));
        });

        return {
            type: "sunburst",
            labels: labels,
            parents: parents,
            values: values,
            branchvalues: "total",
            marker: {
                colorscale: "Blues",
            }
        };
    }

    const createDataForMainBarChart = (data: Transaction[]) => {
        const mainCategories = [...new Set(data.map((item) => item.subcategory.mainCategory.name))];
        let barChartData = [];

        mainCategories.forEach((category) => {
            barChartData.push({
                data: [],
                type: 'bar',
                x: [category],
                y: [data.filter((item) => item.subcategory.mainCategory.name === category).reduce((sum, item) => sum + item.amount, 0)],
                marker: {
                    color: "#3772ff",
                },
            });
        });

        barChartData.sort((a, b) => b.y[0] - a.y[0]);

        return barChartData;
    }

    const createDataForSubBarChart = (data: Transaction[]) => {
        const subcategories = [...new Set(data.map((item) => item.subcategory.name))];
        let barChartData = [];

        subcategories.forEach((subcategory) => {
            barChartData.push({
                type: 'bar',
                x: [subcategory],
                y: [data.filter((item) => item.subcategory.name === subcategory).reduce((sum, item) => sum + item.amount, 0)],
                marker: {
                    color: "#3772ff",
                },
            });
        });

        barChartData.sort((a, b) => b.y[0] - a.y[0]);

        return barChartData;
    }

    const getIncome = (data: Transaction[]) => {
        return data.filter((item) => item.subcategory.mainCategory.transactionType.name === "Income").reduce((sum, item) => sum + item.amount, 0);
    }

    const getSpending = (data: Transaction[]) => {
        return data.filter((item) => item.subcategory.mainCategory.transactionType.name === "Expense").reduce((sum, item) => sum + item.amount, 0) * -1;
    }

    const getBalance = (data: Transaction[]) => {
        return getIncome(data) + getSpending(data);
    }

    const createDataForStackedBarChart = (data: Transaction[]) => {
        const mainCategories = [...new Set(data.map((item) => item.subcategory.mainCategory.name))];
        const subcategories = [...new Set(data.map((item) => item.subcategory.name))];
        const barChartData = [];

        const sortedCategories = mainCategories.sort((a, b) =>
            data.filter((item) => item.subcategory.mainCategory.name === b).reduce((sum, item) => sum + item.amount, 0) -
            data.filter((item) => item.subcategory.mainCategory.name === a).reduce((sum, item) => sum + item.amount, 0)
        );

        subcategories.forEach((subcategory) => {
            const yValues = sortedCategories.map((category) =>
                data.filter((item) =>
                    item.subcategory.mainCategory.name === category &&
                    item.subcategory.name === subcategory
                ).reduce((sum, item) => sum + item.amount, 0) || 0
            );

            barChartData.push({
                type: 'bar',
                x: sortedCategories,
                y: yValues,
                name: subcategory,
                marker: {
                    color: "#3772FF",
                },
            });
        });

        return barChartData;
    };

    const createDataForExpenseTypePieChart = (data: Transaction[]) => {
        const expenseTypes = [...new Set(data.map((item) => item.subcategory.expenseType.name))].sort();
        let labels = [];
        let values = [];
        let colors = ["#3772FF", "#5F8EFF", "#87AAFF", "#AFC7FF"];

        expenseTypes.forEach((type, index) => {
            labels.push(type);
            values.push(data.filter((item) => item.subcategory.expenseType.name === type).reduce((sum, item) => sum + item.amount, 0));
        });

        return {
            type: 'pie',
            labels: labels,
            values: values,
            textinfo: 'none',
            hoverinfo: 'label+percent+value',
            marker: {
                colors: colors,
            },
        };
    }

    return (
        <div class="dashboard">
            <div class="card-list">
                <MetricCard title="Income" value={getIncome(transactions)} />
                <MetricCard title="Spendings" value={getSpending(transactions)} />
                <MetricCard title="Balance" value={getBalance(transactions)} />
            </div>
            <div class="card-list">
                <Chart data={createDataForExpenseTypePieChart(filterExpenseTransactions(transactions))} size={isMobile ? ChartSize.FILL_CONTENT : ChartSize.SMALL} title='Budget Allocation' showLegend={true} />
                <Chart data={createDataForStackedBarChart(filterExpenseTransactions(transactions))} size={isMobile ? ChartSize.FILL_CONTENT : ChartSize.MEDIUM} title='Grouped Categories' />
            </div>
            <div class="card-list">
                <Chart data={createDataForMainBarChart(filterExpenseTransactions(transactions))} size={isMobile ? ChartSize.FILL_CONTENT : ChartSize.SMALL} title="Main Categories" />
                <Chart data={createDataForSubBarChart(filterExpenseTransactions(transactions))} size={isMobile ? ChartSize.FILL_CONTENT : ChartSize.SMALL} title='Subcategories' />
                <Chart data={createDataForSunburst(filterExpenseTransactions(transactions))} size={isMobile ? ChartSize.FILL_CONTENT : ChartSize.SMALL} title='Spending Breakdown' />
            </div>
        </div>
    );
};