
import './TransactionRow.scss';
import openButtonUrl from '../assets/open-button.svg';
import { useBottomSheet } from '../hooks/useBottomSheet';
import { formatDate } from '../utils/utlis';


export const TransactionRow = ({ transaction }) => {
    const { isOpen, content, openSheet, closeSheet } = useBottomSheet();

    return (
        <div class="transaction-row">
            <div class="transaction-cell transaction-item-cell">{transaction.item}</div>
            <div class="transaction-cell transaction-amount-cell">{transaction.amount}</div>
            <div class="transaction-cell">
                <span class="transaction-category-pill">{transaction.subcategory.mainCategory.name}</span>
            </div>
            <div class="transaction-cell">
                <span class="transaction-subcategory-pill">{transaction.subcategory.name}</span>
            </div>
            <div class="transaction-cell transaction-date-cell">{formatDate(transaction.date)}</div>
            <div class="transaction-action-cell">
                <button class="transaction-action-button" onClick={() => { openSheet(<div>Heyy</div>) }}>
                    <img
                        src={openButtonUrl}
                        alt="Action"
                        class="transaction-action-icon"
                        loading="lazy"
                    />
                </button>
            </div>
        </div>
    );
};