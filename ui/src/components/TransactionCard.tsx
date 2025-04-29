import openButtonUrl from "../assets/open-button.svg";
import { useBottomSheet } from "../hooks/useBottomSheet";
import { EditItem } from "../pages/EditItem";
import { formatCurrency } from "../utils/utlis";
import "./TransactionCard.scss";

// TransactionCard component to display transaction details
export const TransactionCard = ({ transaction, onChange }) => {
    const { isOpen, content, openSheet, closeSheet } = useBottomSheet();

    return (
        // Main container for the transaction card
        <article class="transaction-card">
            <header class="transaction-card-header">
                {/* Display the transaction item name */}
                <h3 class="transaction-card-item-name">{transaction.item}</h3>
                <span>-</span>
                {/* Display the formatted transaction amount */}
                <span class="transaction-card-amount">{formatCurrency(transaction.amount)}</span>
                {/* Button to open the bottom sheet for editing the transaction */}
                <button
                    class="transaction-card-icon-wrapper"
                    onClick={() => {
                        openSheet(
                            <EditItem
                                transaction={transaction}
                                onFinished={() => {
                                    onChange();
                                    closeSheet();
                                }}
                            />,
                        );
                    }}
                >
                    <img loading="lazy" src={openButtonUrl} alt="" class="transaction-card-icon" />
                </button>
            </header>
            <div class="transaction-card-tags">
                {/* Display the main category of the transaction */}
                <span class="transaction-card-category-tag">{transaction.subcategory.mainCategory.name}</span>
                {/* Display the subcategory of the transaction */}
                <span class="transaction-card-store-tag">{transaction.subcategory.name}</span>
            </div>
        </article>
    );
};
