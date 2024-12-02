import './Menu.scss';
import { useState } from 'preact/hooks';
import { Sidebar } from '../components/Sidebar';
import { Navbar } from '../components/Navbar';
import largeAddUrl from '../assets/add-large.svg';
import { useDevice } from '../hooks/useDevice';
import { BottomSheet } from '../components/BottomSheet';
import { useBottomSheet } from '../hooks/useBottomSheet';
import { Home } from './Home';
import { Transactions } from './Transactions';
import { EditItem } from './EditItem';
import { Categories } from './Categories';
import { Templates } from './Templates';
import { useModel } from '../hooks/useModel';

export function Menu() {
    const [menu, setMenu] = useState("Home"); // State to track the current menu
    const isMobile = useDevice(); // Determine if the device is mobile
    const SidebarComponent = isMobile ? Navbar : Sidebar; // Use Navbar for mobile, Sidebar for desktop
    const { isOpen, content, openSheet, closeSheet } = useBottomSheet(); // Bottom sheet state and handlers
    const { refetchData } = useModel(); // Function to refetch data

    return (
        <main class="layout">
            <SidebarComponent menu={menu} setMenu={setMenu} /> {/* Sidebar or Navbar component */}
            <section class="content">
                <h1 class="content-title">{menu === "Home" ? "Summary" : menu}</h1> {/* Dynamic title */}
                {menu === "Home" && <Home />} {/* Render Home component */}
                {menu === "Transactions" && <Transactions />} {/* Render Transactions component */}
                {menu === "Categories" && <Categories />} {/* Render Categories component */}
                {menu === "Templates" && <Templates />} {/* Render Templates component */}
                <button class="action-button" aria-label="Add new item" onClick={() => {
                    openSheet(
                        <EditItem transaction={null} onFinished={() => { refetchData(); closeSheet(); }} />
                    ); // Open bottom sheet with EditItem component
                }}>
                    <img src={largeAddUrl} alt="" /> {/* Add button with icon */}
                </button>
            </section>
            <BottomSheet /> {/* Bottom sheet component */}
        </main>
    );
};