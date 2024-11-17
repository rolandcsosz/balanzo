import logo from './assets/logo.png';
import './menu.scss';

export function Menu() {
    return (
        <nav class="mobile-nav">
            <a href="#" class="bloc-icon">
                <img src={logo} alt=""></img>
                <p class="bloc-text">Menu 1</p>
            </a>
            <a href="#" class="bloc-icon">
                <img src={logo} alt=""></img>
                <p class="bloc-text">Menu 2</p>
            </a>
            <a href="#" class="bloc-icon">
                <img src={logo} alt=""></img>
                <p class="bloc-text">Menu 3</p>
            </a>
            <a href="#" class="bloc-icon">
                <img src={logo} alt=""></img>
                <p class="bloc-text">Menu 4</p>
            </a>
            <a href="#" class="bloc-icon">
                <img src={logo} alt=""></img>
                <p class="bloc-text">Menu 5</p>
            </a>
        </nav>
    );
}