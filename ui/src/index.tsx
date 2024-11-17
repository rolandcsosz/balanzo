import { render } from 'preact';
import { useState } from 'preact/hooks';
import { Menu } from './menu';
import { Content } from './content';
import Login from './pages/login';
import { AuthProvider } from './context/AuthContext';
import { useAuth } from './context/useAuth';

import './index.scss';

function App() {
    const { authState, login, logout } = useAuth();
    const [menu, setMenu] = useState("Home");

    return (
        <div class="app-container">
            {authState.isAuthenticated ? <Menu /> : <Login />}
        </div>
    );
}

render(
    <AuthProvider>
        <App />
    </AuthProvider>,
    document.getElementById('app')
);
