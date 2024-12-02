
import openButtonUrl from '../assets/open-button.svg';
import { useBottomSheet } from '../hooks/useBottomSheet';
import { NewItem } from '../pages/NewItem';
import { formatCurrency } from '../utils/utlis';
import './TransactionCard.scss';


export const TransactionCard = ({ transaction, onChange }) => {
    const { isOpen, content, openSheet, closeSheet } = useBottomSheet();

    return (
        <article class="transaction-card">
            <header class="transaction-card-header">
                <h3 class="transaction-card-item-name">{transaction.item}</h3>
                <span>-</span>
                <span class="transaction-card-amount">{formatCurrency(transaction.amount)}</span>
                <button class="transaction-card-icon-wrapper" onClick={() => { openSheet(<NewItem transaction={transaction} onFinished={() => { onChange(); closeSheet(); }} />) }}>
                    <img
                        loading="lazy"
                        src={openButtonUrl}
                        alt=""
                        class="transaction-card-icon"
                    />
                </button>
            </header>
            <div class="transaction-card-tags">
                <span class="transaction-card-category-tag">{transaction.subcategory.mainCategory.name}</span>
                <span class="transaction-card-store-tag">{transaction.subcategory.name}</span>
            </div>
        </article>
    );
};