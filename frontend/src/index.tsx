import "./index.scss";
import { render } from "preact";
import { useState } from "preact/hooks";
import { Menu } from "./pages/Menu";
import { Login } from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
import { useAuth } from "./hooks/useAuth";
import { DeviceProvider } from "./context/DeviceContext";
import { BottomSheetProvider } from "./context/BottomSheetContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
    const { authState } = useAuth();

    return (
        <div class="app-container">
            {authState.isAuthenticated ?
                <Menu />
            :   <Login />}
        </div>
    );
}

// Render the application with all necessary providers
render(
    <QueryClientProvider client={queryClient}>
        <AuthProvider>
            <DeviceProvider>
                <BottomSheetProvider>
                    <App />
                </BottomSheetProvider>
            </DeviceProvider>
        </AuthProvider>
    </QueryClientProvider>,
    document.getElementById("app"),
);
