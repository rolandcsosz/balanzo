
import './Table.scss';
import openButtonUrl from '../assets/open-button.svg';

export const TransactionRow = ({ transaction }) => {
    return (
        <div class="row">
            <div class="cell itemCell">{transaction.item}</div>
            <div class="cell amountCell">{transaction.amount}</div>
            <div class="cell">
                <span class="categoryPill">{transaction.subcategory.mainCategory.name}</span>
            </div>
            <div class="cell">
                <span class="subcategoryPill">{transaction.subcategory.name}</span>
            </div>
            <div class="cell dateCell">{transaction.date}</div>
            <div class=" cell actionCell">
                <button class="actionButton">
                    <img
                        src={openButtonUrl}
                        alt="Action"
                        class="actionIcon"
                        loading="lazy"
                    />
                </button>
            </div>
        </div>
    );
};