
import './TransactionTableRow.scss';
import openButtonUrl from '../assets/open-button.svg';
import { useBottomSheet } from '../hooks/useBottomSheet';
import { formatDate, formatCurrency, } from '../utils/utlis';
import { NewItem } from '../pages/NewItem';
import { Transaction } from '../types';

interface TransactionRowProps {
    transaction: Transaction;
    onChange: () => void;
}



export const TransactionRow = ({ transaction, onChange }) => {
    const { isOpen, content, openSheet, closeSheet } = useBottomSheet();

    return (
        <div class="transaction-row">
            <div class="transaction-row-cell transaction-row-item-cell">{transaction.item}</div>
            <div class="transaction-row-cell transaction-row-amount-cell">{formatCurrency(transaction.amount)}</div>
            <div class="transaction-row-cell">
                <span class="transaction-row-category-pill">{transaction.subcategory.mainCategory.name}</span>
            </div>
            <div class="transaction-row-cell">
                <span class="transaction-row-subcategory-pill">{transaction.subcategory.name}</span>
            </div>
            <div class="transaction-row-cell transaction-row-date-cell">{formatDate(transaction.date)}</div>
            <div class="transaction-row-action-cell">
                <button class="transaction-row-action-button" onClick={() => { openSheet(<NewItem transaction={transaction} onFinished={() => { onChange(); closeSheet(); }} />) }}>
                    <img
                        src={openButtonUrl}
                        alt="Action"
                        class="transaction-row-action-icon"
                        loading="lazy"
                    />
                </button>
            </div>
        </div>
    );
};