import { useDevice } from "../hooks/useDevice";
import { TransactionRow } from "../components/TransactionTableRow";
import { TransactionCard } from "../components/TransactionCard";
import { formatDate } from "../utils/utlis";
import { DateDivider } from "../components/DateDivider";
import { useModel } from "../hooks/useModel";
import { useEffect } from "preact/hooks";
import styles from "./Transactions.module.scss";

export function Transactions() {
    const { transactions, refetchData } = useModel(); // Fetch transactions and refetch function from the model
    const isMobile = useDevice(); // Determine if the device is mobile

    useEffect(() => {
        refetchData(); // ✅ Always refetch when Transactions mounts
    }, []);

    return isMobile ?
            <div className={styles.transactionCards}>
                {transactions.map((transaction, index) => {
                    const currentDate = formatDate(transaction.date); // Format the current transaction date
                    const nextDate = index < transactions.length - 1 ? formatDate(transactions[index + 1].date) : null; // Format the next transaction date if it exists
                    return (
                        <div key={transaction._id}>
                            {
                                index === 0 && (
                                    <div class={styles.transactionDateDivider}>
                                        <DateDivider date={currentDate} />
                                    </div>
                                ) /* Render date divider before the first card */
                            }
                            <TransactionCard transaction={transaction} onChange={refetchData} />{" "}
                            {/* Render transaction card */}
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
                    <TransactionRow key={transaction._id} transaction={transaction} onChange={refetchData} /> // Render transaction row
                ))}
            </div>;
}
