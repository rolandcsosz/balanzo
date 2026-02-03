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
            <div className={styles.transactionCardHeader}>
                <div className={styles.transactionCardItemInfo}>
                    <div className={styles.transactionCardItemName}>{transaction.item}</div>
                    <div className={styles.transactionPriceWrapper}>
                        <div>-</div>
                        <div className={styles.transactionCardAmount}>{formatCurrency(transaction?.amount || 0)}</div>
                    </div>
                </div>
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
            </div>
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
