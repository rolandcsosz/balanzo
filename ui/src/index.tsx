import './index.scss';
import { render } from 'preact';
import { useState } from 'preact/hooks';
import { Menu } from './pages/Menu';
import { Login } from './pages/Login';
import { AuthProvider } from './context/AuthContext';
import { useAuth } from './hooks/useAuth';
import { DeviceProvider } from './context/DeviceContext';
import { BottomSheetProvider } from "./context/BottomSheetContext";

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
        <DeviceProvider>
            <BottomSheetProvider>
                <App />
            </BottomSheetProvider>
        </DeviceProvider>
    </AuthProvider>,
    document.getElementById('app')
);
