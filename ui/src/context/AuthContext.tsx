import { createContext } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { User } from '../types';

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
}

interface AuthContextType {
    authState: AuthState;
    login: (user: User) => void;
    logout: () => void;
}

// Create a context for authentication
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider component that will wrap the app to provide auth context
export const AuthProvider = ({ children }: { children: any }) => {
    const [authState, setAuthState] = useState<AuthState>({
        user: null,
        isAuthenticated: false,
    });

    useEffect(() => {
        // Authentication check
        const userFromLocalStorage = JSON.parse(localStorage.getItem('user') || 'null');
        if (userFromLocalStorage) {
            setAuthState({
                user: userFromLocalStorage,
                isAuthenticated: true,
            });
        } else {
            setAuthState({
                ...authState,
                isAuthenticated: false,
            });
        }
    }, []);

    const login = (user: User) => {
        setAuthState({
            user,
            isAuthenticated: true,
        });
        localStorage.setItem('user', JSON.stringify(user));
    };

    const logout = () => {
        setAuthState({
            user: null,
            isAuthenticated: false,
        });
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
