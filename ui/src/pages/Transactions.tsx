import './Transactions.scss';
import { MetricCard } from '../components/MetricCard';
import { Chart, ChartSize } from '../components/Chart';
import { useTransactions } from '../hooks/useTransactions';
import { Transaction } from '../types';
import { useDevice } from '../hooks/useDevice';
import { TransactionRow } from '../components/TransactionRow';
import '../components/Table.scss';

export function Transactions() {
    const transactions = useTransactions();
    const isMobile = useDevice();

    return (
        <div class="table">
            <header class="header">
                <div class="headerCell">Item</div>
                <div class="headerCell">Amount</div>
                <div class="headerCell">Main category</div>
                <div class="headerCell">Subcategory</div>
                <div class="headerCell">Date</div>
                <div class="headerCell"></div>
            </header>
            {transactions.map(transaction => (
                <TransactionRow
                    key={transaction._id}
                    transaction={transaction}
                />
            ))}
        </div>
    );
};