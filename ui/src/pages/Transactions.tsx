import { useDevice } from '../hooks/useDevice';
import { TransactionRow } from '../components/TransactionTableRow';
import { TransactionCard } from '../components/TransactionCard';
import './Transactions.scss';
import { formatDate } from '../utils/utlis';
import { DateDivider } from '../components/DateDivider';
import { useModel } from '../hooks/useModel';

export function Transactions() {
    const { transactions, refetchData } = useModel(); // Fetch transactions and refetch function from the model
    const isMobile = useDevice(); // Determine if the device is mobile

    return (
        isMobile ? (
            <div class="transaction-cards">
                {transactions.map((transaction, index) => {
                    const currentDate = formatDate(transaction.date); // Format the current transaction date
                    const nextDate = index < transactions.length - 1 ? formatDate(transactions[index + 1].date) : null; // Format the next transaction date if it exists
                    return (
                        <>
                            <TransactionCard key={transaction._id} transaction={transaction} onChange={refetchData} /> {/* Render transaction card */}
                            {currentDate !== nextDate && (
                                <DateDivider date={nextDate} /> // Render date divider if the next transaction date is different
                            )}
                        </>
                    );
                })}
            </div>
        ) : (
            <div class="transaction-table">
                <header class="transaction-header">
                    <div class="transaction-header-cell">Item</div>
                    <div class="transaction-header-cell">Amount</div>
                    <div class="transaction-header-cell">Main category</div>
                    <div class="transaction-header-cell">Subcategory</div>
                    <div class="transaction-header-cell">Date</div>
                    <div class="transaction-row-action-cell"></div>
                </header>
                {transactions.map(transaction => (
                    <TransactionRow key={transaction._id} transaction={transaction} onChange={refetchData} /> // Render transaction row
                ))}
            </div>
        )
    );
};