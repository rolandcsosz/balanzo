import styles from "./TransactionTableRow.module.scss";
import openButtonUrl from "../assets/open-button.svg";
import { useBottomSheet } from "../hooks/useBottomSheet";
import { formatDate, formatCurrency } from "../utils/utlis";
import { EditItemForm } from "../pages/EditItemForm";
import { Transaction } from "../../../libs/sdk/types.gen";
import { useEntityQuery } from "../hooks/useEntityQuery";

interface TransactionRowProps {
    transaction: Transaction;
    onChange: () => void;
}

export const TransactionRow = ({ transaction, onChange }: TransactionRowProps) => {
    const { isOpen, content, openSheet, closeSheet } = useBottomSheet();
    const { store } = useEntityQuery();

    return (
        <div className={styles.transactionRow}>
            <div className={`${styles.transactionRowCell} ${styles.transactionRowItemCell}`}>{transaction.item}</div>
            <div className={`${styles.transactionRowCell} ${styles.transactionRowAmountCell}`}>
                {formatCurrency(transaction.amount)}
            </div>
            <div className={styles.transactionRowCell}>
                <span className={styles.transactionRowCategoryPill}>
                    {store.subcategory(transaction.subcategoryId).mainCategory().tryGet()?.name || ""}
                </span>
            </div>
            <div className={styles.transactionRowCell}>
                <span className={styles.transactionRowSubcategoryPill}>
                    {store.subcategory(transaction.subcategoryId).tryGet()?.name || ""}
                </span>
            </div>
            <div className={`${styles.transactionRowCell} ${styles.transactionRowDateCell}`}>
                {formatDate(transaction.date)}
            </div>

            <div className={styles.transactionRowActionCell}>
                <button
                    className={styles.transactionRowActionButton}
                    onClick={() => {
                        openSheet(
                            <EditItemForm
                                transactionToEdit={transaction}
                                onFinished={() => {
                                    onChange();
                                    closeSheet();
                                }}
                            />,
                        );
                    }}
                >
                    <img src={openButtonUrl} alt="Action" className={styles.transactionRowActionIcon} loading="lazy" />
                </button>
            </div>
        </div>
    );
};
