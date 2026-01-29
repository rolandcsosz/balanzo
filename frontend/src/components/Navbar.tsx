import styles from "./Navbar.module.scss";
import { useState, useEffect } from "preact/hooks";
import HomeIcon from "./icons/HomeIcon";
import TransactionsIcon from "./icons/TransactionsIcon";
import CategoriesIcon from "./icons/CategoriesIcon";
import TemplatesIcon from "./icons/TemplatesIcon";
import SidebarButton from "./SidebarButton";
import AddIcon from "./icons/AddIcon";
import { useBottomSheet } from "../hooks/useBottomSheet";
import EditItemForm from "../pages/EditItemForm";
import { useModel } from "../hooks/useModel";

const initialNavigationItems = [
    { icon: HomeIcon, label: "Home", isActive: false },
    { icon: TransactionsIcon, label: "Transactions", isActive: false },
    { icon: AddIcon, label: "Add", isActive: false },
    { icon: CategoriesIcon, label: "Categories", isActive: false },
    { icon: TemplatesIcon, label: "Templates", isActive: false },
];

interface CategoriesIconProps {
    menu: string;
    setMenu: (menu: string) => void;
}

const Navbar = ({ menu, setMenu }: CategoriesIconProps) => {
    const [navigationItems, setNavigationItems] = useState(initialNavigationItems);
    const { openSheet, closeSheet } = useBottomSheet();
    const { refetchData } = useModel();

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

    const openAddItemForm = () => {
        openSheet(
            <EditItemForm
                onFinished={() => {
                    refetchData();
                    closeSheet();
                }}
            />,
        );
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navigationItems}>
                {navigationItems.map((item) => (
                    <SidebarButton
                        Icon={item.icon}
                        isFilled={item.isActive}
                        label={item.label}
                        onClick={() => {
                            if (item.label === "Add") {
                                openAddItemForm();
                                return;
                            }
                            setMenu(item.label);
                        }}
                    />
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
