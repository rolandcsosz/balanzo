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
import { NewItem } from './NewItem';
import { Categories } from './Categories';
import { Templates } from './Templates';
import { useModel } from '../hooks/useModel';

export function Menu() {
    const [menu, setMenu] = useState("Home");
    const isMobile = useDevice();
    const SidebarComponent = isMobile ? Navbar : Sidebar;
    const { isOpen, content, openSheet, closeSheet } = useBottomSheet();
    const { refetchData } = useModel();

    return (
        <main class="layout">
            <SidebarComponent menu={menu} setMenu={setMenu} />
            <section class="content">
                <h1 class="content-title">{menu === "Home" ? "Summary" : menu}</h1>
                {menu === "Home" && <Home />}
                {menu === "Transactions" && <Transactions />}
                {menu === "Categories" && <Categories />}
                {menu === "Templates" && <Templates />}
                <button class="action-button" aria-label="Add new item" onClick={() => {
                    openSheet(
                        <NewItem transaction={null} onFinished={() => { refetchData(); closeSheet(); }} />
                    );
                }}>
                    <img src={largeAddUrl} alt="" />
                </button>
            </section>
            <BottomSheet />
        </main>
    );
};