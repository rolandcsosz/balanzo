import { render } from 'preact';
import { useState } from 'preact/hooks';
import { Menu } from './menu';
import { Content } from './content';

import './index.scss';

export function App() {
    let [menu, setMenu] = useState("Home");
    return (
        <div class="app-container">
            <Menu />
            {menu === "Home" ? <Content /> : null}
        </div>
    );
}

render(<App />, document.getElementById('app'));
