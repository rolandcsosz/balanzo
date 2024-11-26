
import { MetricCard } from '../components/MetricCard';
import { Chart, ChartSize } from '../components/Chart';
import { useTransactions } from '../hooks/useTransactions';
import { Transaction } from '../types';
import { useDevice } from '../hooks/useDevice';
import { TransactionRow } from '../components/TransactionTableRow';
import { TransactionCard } from '../components/TransactionCard';
import './Transactions.scss';

export function Transactions() {
    const transactions = useTransactions();
    const isMobile = useDevice();

    return (
        isMobile ? (
            <div class="transaction-cards">
                {transactions.map(transaction => (
                    <TransactionCard key={transaction._id} transaction={transaction} />
                ))}
            </div>
        ) : (

            <div class="transaction-table">
                <header class="transaction-header">
                    <div class="transaction-header-cell">Item</div>
                    <div class="transaction-header-cell">Amount</div>
                    <div class="transaction-header-cell">Main category</div>
                    <div class="transaction-header-cell">Subcategory</div>
                    <div class="transaction-header-cell">Date</div>
                    <div class="transaction-action-cell"></div>
                </header>
                {transactions.map(transaction => (
                    <TransactionRow key={transaction._id} transaction={transaction} />
                ))}
            </div>)
    );
};