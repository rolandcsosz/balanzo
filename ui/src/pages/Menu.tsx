import './Menu.scss';
import { useState } from 'preact/hooks';
import { Sidebar } from '../components/Sidebar';
import largeAddUrl from '../assets/add-large.svg';

export function Menu(){
  const [menu, setMenu] = useState("Home");

  return (
    <main class="layout">
      <Sidebar menu={menu} setMenu={setMenu}/>
      <section class="content">
        <button class="action-button" aria-label="Add new item">
          <img src={largeAddUrl} alt="" class="action-icon" />
        </button>
      </section>
    </main>
  );
};

//export default Menu;