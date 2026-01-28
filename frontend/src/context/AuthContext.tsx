import { createContext } from "preact";
import { useState, useEffect } from "preact/hooks";
import { User } from "../types";
import { client } from "../../../libs/sdk/client.gen";

interface AuthContextType {
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: any }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const userFromLocalStorage = JSON.parse(localStorage.getItem("user") || "null");
        setUser(userFromLocalStorage ? userFromLocalStorage : null);

        client.setConfig({
            baseUrl: import.meta.env.VITE_BACKEND_URL,
            auth: () => (userFromLocalStorage ? userFromLocalStorage.token : ""),
        });
    }, []);

    const login = (user: User) => {
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        client.setConfig({
            baseUrl: import.meta.env.VITE_BACKEND_URL,
            auth: () => user.token,
        });
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
        client.setConfig({
            baseUrl: import.meta.env.VITE_BACKEND_URL,
            auth: () => undefined,
        });
    };

    return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};
