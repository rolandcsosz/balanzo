import "./Navbar.scss";
import { useState, useEffect } from "preact/hooks";
import { HomeIcon } from "./icons/HomeIcon";
import { TransactionsIcon } from "./icons/TransactionsIcon";
import { CategoriesIcon } from "./icons/CategoriesIcon";
import { TemplatesIcon } from "./icons/TemplatesIcon";
import { SidebarButton } from "./SidebarButton";
import { AddIcon } from "./icons/AddIcon";
import { useBottomSheet } from "../hooks/useBottomSheet";
import { EditItem } from "../pages/EditItem";
import { useModel } from "../hooks/useModel";

// Initial navigation items with icons, labels, and active state
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
    setBottomSheetVisibility?: (isOpen: boolean) => void;
}

export function Navbar({ menu, setMenu, setBottomSheetVisibility }: CategoriesIconProps) {
    const [navigationItems, setNavigationItems] = useState(initialNavigationItems);
    const { openSheet, closeSheet } = useBottomSheet();
    const { refetchData } = useModel();

    // Update navigation items' active state based on the clicked button
    const handleButtonClick = (newState) => {
        setNavigationItems(
            navigationItems.map((item) => ({
                ...item,
                isActive: item.label == newState,
            })),
        );
    };

    // Update active state when menu changes
    useEffect(() => {
        handleButtonClick(menu);
    }, [menu]);

    return (
        <nav class="navbar">
            <div class="navigation-items">
                {navigationItems.map((item) => (
                    <SidebarButton
                        Icon={item.icon}
                        isFilled={item.isActive}
                        label={item.label}
                        isLabelVisible={false}
                        isButtonBackgroundVisible={false}
                        onClick={() => {
                            if (item.label === "Add") {
                                openSheet(
                                    <EditItem
                                        transaction={null}
                                        onFinished={() => {
                                            refetchData();
                                            closeSheet();
                                        }}
                                    />,
                                );
                                return;
                            }
                            setMenu(item.label);
                        }}
                    />
                ))}
            </div>
        </nav>
    );
}
