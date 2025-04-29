import "./TransactionTableRow.scss";
import openButtonUrl from "../assets/open-button.svg";
import { useBottomSheet } from "../hooks/useBottomSheet";
import { formatDate, formatCurrency } from "../utils/utlis";
import { EditItem } from "../pages/EditItem";
import { Transaction } from "../types";

interface TransactionRowProps {
    transaction: Transaction;
    onChange: () => void;
}

export const TransactionRow = ({ transaction, onChange }) => {
    const { isOpen, content, openSheet, closeSheet } = useBottomSheet();

    return (
        <div class="transaction-row">
            {/* Display transaction item */}
            <div class="transaction-row-cell transaction-row-item-cell">{transaction.item}</div>

            {/* Display transaction amount */}
            <div class="transaction-row-cell transaction-row-amount-cell">{formatCurrency(transaction.amount)}</div>

            {/* Display main category */}
            <div class="transaction-row-cell">
                <span class="transaction-row-category-pill">{transaction.subcategory.mainCategory.name}</span>
            </div>

            {/* Display subcategory */}
            <div class="transaction-row-cell">
                <span class="transaction-row-subcategory-pill">{transaction.subcategory.name}</span>
            </div>

            {/* Display transaction date */}
            <div class="transaction-row-cell transaction-row-date-cell">{formatDate(transaction.date)}</div>

            {/* Action button to open bottom sheet for editing */}
            <div class="transaction-row-action-cell">
                <button
                    class="transaction-row-action-button"
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
                    <img src={openButtonUrl} alt="Action" class="transaction-row-action-icon" loading="lazy" />
                </button>
            </div>
        </div>
    );
};
