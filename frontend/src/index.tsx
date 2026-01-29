import styles from "./index.module.scss";
import { render } from "preact";
import { Menu } from "./pages/Menu";
import { Login } from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
import { useAuth } from "./hooks/useAuth";
import { DeviceProvider } from "./context/DeviceContext";
import { BottomSheetProvider } from "./context/BottomSheetContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
    const { user } = useAuth();

    return (
        <div className={styles.app}>
            {user ?
                <Menu />
            :   <Login />}
        </div>
    );
}

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
