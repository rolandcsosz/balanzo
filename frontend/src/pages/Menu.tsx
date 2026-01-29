import styles from "./Menu.module.scss";
import { useEffect, useMemo, useState } from "preact/hooks";
import { Sidebar } from "../components/Sidebar";
import Navbar from "../components/Navbar";
import largeAddUrl from "../assets/add-large.svg";
import { useDevice } from "../hooks/useDevice";
import BottomSheet from "../components/BottomSheet";
import { useBottomSheet } from "../hooks/useBottomSheet";
import Home from "./Home";
import Transactions from "./Transactions";
import EditItemForm from "./EditItemForm";
import Categories from "./Categories";
import Templates from "./Templates";
import { useModel } from "../hooks/useModel";
import Dropdown from "../components/Dropdown";
import { MonthInfo } from "../types";

const Menu = () => {
    const [menu, setMenu] = useState("Home");
    const isMobile = useDevice();
    const SidebarComponent = isMobile ? Navbar : Sidebar;
    const { openSheet, closeSheet, isOpen } = useBottomSheet();
    const { transaction, refetchData } = useModel();
    const transactions = transaction.list;
    const [selectedMonth, setSelectedMonth] = useState<string>("");
    const [monthList, setMonthList] = useState<MonthInfo[]>([]);

    useEffect(() => {
        setMonthList(getMonthList);
    }, [transactions]);

    useEffect(() => {
        if (monthList.length === 0) return;
        setSelectedMonth(monthList[0].name);
    }, [monthList]);

    const createMonthInfo = (date: Date) => {
        const startDate = new Date(date.getFullYear(), date.getMonth(), 1);
        startDate.setHours(0, 0, 0, 0);

        const endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        endDate.setHours(23, 59, 59, 999);
        return {
            name: `${date.getFullYear()} ${date.toLocaleString("default", { month: "long" })}`,
            startDate: startDate,
            endDate: endDate,
        };
    };

    const getMonthList = useMemo(() => {
        const sortedTransactions = [...transactions].sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        );

        let monthList = [];

        sortedTransactions.map((t) => {
            const date = new Date(t.date);
            const name = `${date.getFullYear()} ${date.toLocaleString("default", { month: "long" })}`;
            if (monthList.find((m) => m.name === name) === undefined) {
                monthList.push(createMonthInfo(date));
            }
        });

        return monthList;
    }, [transactions]);

    useEffect(() => {
        if (selectedMonth === undefined) {
            setSelectedMonth(getMonthList[0]);
        }
    }, [getMonthList]);

    useEffect(() => {
        const preventTouchMove = (e) => {
            e.preventDefault();
        };

        if (isOpen) {
            const scrollY = window.scrollY;
            document.body.style.position = "fixed";
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = "100%";
            document.addEventListener("touchmove", preventTouchMove, { passive: false });
        } else {
            const scrollY = document.body.style.top;
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.width = "";
            window.scrollTo(0, parseInt(scrollY || "0") * -1);
            document.removeEventListener("touchmove", preventTouchMove);
        }

        return () => {
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.width = "";
            document.removeEventListener("touchmove", preventTouchMove);
        };
    }, [isOpen]);

    return (
        <div className={styles.layout}>
            <SidebarComponent menu={menu} setMenu={setMenu} />
            <section className={styles.content}>
                <div className={styles.menuHeaderContainer}>
                    <h1 className={styles.contentTitle}>{menu === "Home" ? "Summary" : menu}</h1>
                    {menu === "Home" && (
                        <div className={styles.yearSelectorContainer}>
                            <Dropdown
                                options={monthList.map((item) => item.name)}
                                selected={selectedMonth}
                                onSelectedChange={setSelectedMonth}
                                mini={false}
                            />
                        </div>
                    )}
                </div>
                {menu === "Home" && <Home selectedMonth={monthList.find((item) => item.name == selectedMonth)} />}{" "}
                {menu === "Transactions" && <Transactions />}
                {menu === "Categories" && <Categories />}
                {menu === "Templates" && <Templates />}
                <button
                    className={styles.actionButton}
                    aria-label="Add new item"
                    onClick={() => {
                        openSheet(
                            <EditItemForm
                                onFinished={() => {
                                    refetchData();
                                    closeSheet();
                                }}
                            />,
                        );
                    }}
                >
                    <img src={largeAddUrl} alt="" />
                </button>
            </section>
            {isOpen && <div className={styles.darkOverlay} />}
            <BottomSheet />
        </div>
    );
};

export default Menu;
