import { Transaction } from "../../../libs/sdk/types.gen";
import openButtonUrl from "../assets/open-button.svg";
import { useBottomSheet } from "../hooks/useBottomSheet";
import { useEntityQuery } from "../hooks/useEntityQuery";
import EditOrNewForm from "../pages/EditOrNewForm";
import { formatCurrency } from "../utils/utlis";
import styles from "./TransactionCard.module.scss";

interface TransactionCardProps {
    transaction: Transaction;
    onChange: () => void;
}

const TransactionCard = ({ transaction, onChange }: TransactionCardProps) => {
    const { openSheet, closeSheet } = useBottomSheet();
    const { store } = useEntityQuery();

    return (
        <article className={styles.transactionCard}>
            <header className={styles.transactionCardHeader}>
                <h3 className={styles.transactionCardItemName}>{transaction.item}</h3>
                <span>-</span>
                <span className={styles.transactionCardAmount}>{formatCurrency(transaction?.amount || 0)}</span>
                <button
                    className={styles.transactionCardIconWrapper}
                    onClick={() => {
                        openSheet(
                            <EditOrNewForm
                                item={transaction}
                                onFinished={() => {
                                    onChange();
                                    closeSheet();
                                }}
                            />,
                        );
                    }}
                >
                    <img loading="lazy" src={openButtonUrl} alt="" className={styles.transactionCardIcon} />
                </button>
            </header>
            <div className={styles.transactionCardTags}>
                <span className={styles.transactionCardCategoryTag}>
                    {store.subcategory(transaction.subcategoryId).mainCategory().tryGet()?.name || ""}
                </span>
                <span className={styles.transactionCardStoreTag}>
                    {store.subcategory(transaction.subcategoryId).tryGet()?.name}
                </span>
            </div>
        </article>
    );
};

export default TransactionCard;
