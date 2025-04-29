import "./index.scss";
import { render } from "preact";
import { useState } from "preact/hooks";
import { Menu } from "./pages/Menu";
import { Login } from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
import { useAuth } from "./hooks/useAuth";
import { DeviceProvider } from "./context/DeviceContext";
import { BottomSheetProvider } from "./context/BottomSheetContext";

function App() {
    // Get authentication state and methods from useAuth hook
    const { authState, login, logout } = useAuth();
    // State to manage the current menu
    const [menu, setMenu] = useState("Home");

    return (
        <div class="app-container">
            {/* Render Menu if authenticated, otherwise render Login */}
            {authState.isAuthenticated ?
                <Menu />
            :   <Login />}
        </div>
    );
}

// Render the application with all necessary providers
render(
    <AuthProvider>
        <DeviceProvider>
            <BottomSheetProvider>
                <App />
            </BottomSheetProvider>
        </DeviceProvider>
    </AuthProvider>,
    document.getElementById("app"),
);
