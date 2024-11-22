import './Menu.scss';
import { useReducer, useState } from 'preact/hooks';
import { Sidebar } from '../components/Sidebar';
import { Navbar } from '../components/Navbar';
import largeAddUrl from '../assets/add-large.svg';
import { useDevice } from '../hooks/useDevice';
import { BottomSheet } from '../components/BottomSheet';
import { useBottomSheet } from '../hooks/useBottomSheet';

export function Menu() {
    const [menu, setMenu] = useState("Home");
    const isMobile = useDevice();
    const SidebarComponent = isMobile ? Navbar : Sidebar;
    const { isOpen, content, openSheet, closeSheet } = useBottomSheet();

    return (
        <main class={`layout ${isMobile ? 'mobile' : 'desktop'}`}>
            <SidebarComponent menu={menu} setMenu={setMenu} />
            <section class="content">
                <button class="action-button" aria-label="Add new item" onClick={() => {
                    openSheet(
                        <div>Hello</div>
                    );
                }}>
                    <img src={largeAddUrl} alt="" />
                </button>
            </section>
            <BottomSheet />
        </main>
    );
};

//export default Menu;