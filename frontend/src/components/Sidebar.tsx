import styles from "./Sidebar.module.scss";
import { useState, useEffect } from "preact/hooks";
import { SidebarButton } from "./SidebarButton";
import { HomeIcon } from "./icons/HomeIcon";
import { TransactionsIcon } from "./icons/TransactionsIcon";
import { CategoriesIcon } from "./icons/CategoriesIcon";
import { TemplatesIcon } from "./icons/TemplatesIcon";
import { LogoutIcon } from "./icons/LogoutIcon";
import { useAuth } from "../hooks/useAuth";

const initialNavigationItems = [
    { icon: HomeIcon, label: "Home", isActive: false },
    { icon: TransactionsIcon, label: "Transactions", isActive: false },
    { icon: CategoriesIcon, label: "Categories", isActive: false },
    { icon: TemplatesIcon, label: "Templates", isActive: false },
    { icon: LogoutIcon, label: "Logout", isActive: false },
];

interface CategoriesIconProps {
    menu: string;
    setMenu: (menu: string) => void;
}

export function Sidebar({ menu, setMenu }: CategoriesIconProps) {
    const [navigationItems, setNavigationItems] = useState(initialNavigationItems);
    const { logout } = useAuth();

    const handleButtonClick = (newState) => {
        setNavigationItems(
            navigationItems.map((item) => ({
                ...item,
                isActive: item.label == newState,
            })),
        );
    };

    useEffect(() => {
        handleButtonClick(menu);
    }, [menu]);

    return (
        <nav className={styles.sidebar}>
            <div className={styles.navigationItems}>
                {navigationItems.slice(0, -1).map((item, index) => (
                    <SidebarButton
                        key={index}
                        Icon={item.icon}
                        label={item.label}
                        isActive={item.isActive}
                        isFilled={item.isActive}
                        onClick={() => {
                            setMenu(item.label);
                        }}
                    />
                ))}
            </div>
            <div className={styles.lastItem}>
                <SidebarButton
                    Icon={navigationItems[navigationItems.length - 1].icon}
                    label={navigationItems[navigationItems.length - 1].label}
                    isActive={navigationItems[navigationItems.length - 1].isActive}
                    onClick={logout}
                />
            </div>
        </nav>
    );
}
