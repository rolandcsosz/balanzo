import './Menu.scss';
import { useState } from 'preact/hooks';
import { Sidebar } from '../components/Sidebar';
import { Navbar } from '../components/Navbar';
import largeAddUrl from '../assets/add-large.svg';
import { useDevice } from '../hooks/useDevice';

export function Menu(){
  const [menu, setMenu] = useState("Home");
  const isMobile = useDevice();
  const SidebarComponent = isMobile ? Navbar : Sidebar;

  return (
    <main class={`layout ${isMobile ? 'mobile' : 'desktop'}`}>
      <SidebarComponent menu={menu} setMenu={setMenu}/>
      <section class={`content ${isMobile ? 'mobile' : 'desktop'}`}>
        <button class={`action-button ${isMobile ? 'mobile' : 'desktop'}`} aria-label="Add new item">
          <img src={largeAddUrl} alt="" class="action-icon" />
        </button>
      </section>
    </main>
  );
};

//export default Menu;