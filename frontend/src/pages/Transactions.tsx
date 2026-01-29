import { useDevice } from "../hooks/useDevice";
import { TransactionRow } from "../components/TransactionTableRow";
import { TransactionCard } from "../components/TransactionCard";
import { formatDate } from "../utils/utlis";
import { DateDivider } from "../components/DateDivider";
import { useModel } from "../hooks/useModel";
import styles from "./Transactions.module.scss";

export function Transactions() {
    const { transaction, refetchData } = useModel();
    const transactions = transaction.list;
    const isMobile = useDevice();

    return isMobile ?
            <div className={styles.transactionCards}>
                {transactions.map((transaction, index) => {
                    const currentDate = formatDate(transaction.date);
                    const nextDate = index < transactions.length - 1 ? formatDate(transactions[index + 1].date) : null;
                    return (
                        <div key={transaction.id}>
                            {index === 0 && (
                                <div class={styles.transactionDateDivider}>
                                    <DateDivider date={currentDate} />
                                </div>
                            )}
                            <TransactionCard transaction={transaction} onChange={refetchData} />{" "}
                            {nextDate && currentDate !== nextDate && (
                                <div class={styles.transactionDateDivider}>
                                    <DateDivider date={nextDate} />
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        :   <div className={styles.transactionTable}>
                <header className={styles.transactionHeader}>
                    <div className={styles.transactionHeaderCell}>Item</div>
                    <div className={styles.transactionHeaderCell}>Amount</div>
                    <div className={styles.transactionHeaderCell}>Main category</div>
                    <div className={styles.transactionHeaderCell}>Subcategory</div>
                    <div className={styles.transactionHeaderCell}>Date</div>
                    <div className={styles.transactionRowActionCell}></div>
                </header>
                {transactions.map((transaction) => (
                    <TransactionRow key={transaction.id} transaction={transaction} onChange={refetchData} />
                ))}
            </div>;
}
