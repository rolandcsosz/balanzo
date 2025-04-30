import "./Menu.scss";
import { useEffect, useMemo, useState } from "preact/hooks";
import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../components/Navbar";
import largeAddUrl from "../assets/add-large.svg";
import { useDevice } from "../hooks/useDevice";
import { BottomSheet } from "../components/BottomSheet";
import { useBottomSheet } from "../hooks/useBottomSheet";
import { Home } from "./Home";
import { Transactions } from "./Transactions";
import { EditItem } from "./EditItem";
import { Categories } from "./Categories";
import { Templates } from "./Templates";
import { useModel } from "../hooks/useModel";
import { Dropdown } from "../components/Dropdown";
import { MonthInfo } from "../types";

export function Menu() {
    const [menu, setMenu] = useState("Home"); // State to track the current menu
    const isMobile = useDevice(); // Determine if the device is mobile
    const SidebarComponent = isMobile ? Navbar : Sidebar; // Use Navbar for mobile, Sidebar for desktop
    const { openSheet, closeSheet, isOpen } = useBottomSheet(); // Bottom sheet state and handlers
    const { transactions, refetchData } = useModel(); // Function to refetch data
    const [selectedMonth, setSelectedMonth] = useState<string>(""); // State to track the selected month
    const [monthList, setMonthList] = useState<MonthInfo[]>([]); // State to store the list of months

    useEffect(() => {
        setMonthList(getMonthList);
    }, [transactions]);

    useEffect(() => {
        if (monthList.length === 0) return; // Return early
        setSelectedMonth(monthList[0].name);
    }, [monthList]);

    const createMonthInfo = (date: Date) => {
        const startDate = new Date(date.getFullYear(), date.getMonth(), 1);
        startDate.setHours(0, 0, 0, 0);

        const endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        endDate.setHours(23, 59, 59, 999); // Set to end of day
        return {
            name: `${date.getFullYear()} ${date.toLocaleString("default", { month: "long" })}`,
            startDate: startDate,
            endDate: endDate,
        };
    };

    const getMonthList = useMemo(() => {
        // Sort transactions by date in descending order
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
        <main class={`layout${isOpen ? " disabled-scrolling" : ""} ${isMobile ? "mobile" : ""}`}>
            <SidebarComponent menu={menu} setMenu={setMenu} /> {/* Sidebar or Navbar component */}
            <section class={`content${isOpen ? " disabled-scrolling" : ""} ${isMobile ? "mobile" : ""}`}>
                <div class={`menu-header-container ${isMobile ? "mobile" : ""}`}>
                    <h1 class="content-title">{menu === "Home" ? "Summary" : menu}</h1> {/* Dynamic title */}
                    {menu === "Home" && (
                        <div class="year-selector-container">
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
                {/* Render Home component */}
                {menu === "Transactions" && <Transactions />} {/* Render Transactions component */}
                {menu === "Categories" && <Categories />} {/* Render Categories component */}
                {menu === "Templates" && <Templates />} {/* Render Templates component */}
                <button
                    class="action-button"
                    aria-label="Add new item"
                    onClick={() => {
                        openSheet(
                            <EditItem
                                transaction={null}
                                onFinished={() => {
                                    refetchData();
                                    closeSheet();
                                }}
                            />,
                        ); // Open bottom sheet with EditItem component
                    }}
                >
                    <img src={largeAddUrl} alt="" /> {/* Add button with icon */}
                </button>
            </section>
            {isOpen && <div class="dark-overlay" />} {/* Dark overlay when bottom sheet is open */}
            <BottomSheet /> {/* Bottom sheet component */}
        </main>
    );
}
