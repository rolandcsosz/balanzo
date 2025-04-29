import { useAuth } from "../hooks/useAuth";

export const useApiClient = () => {
    const { authState, login, logout } = useAuth();

    const fetchWithAuth = async (url: string, method: string, body: string) => {
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authState.user?.token}`,
        };

        let response = await fetch(url, { method, headers, body });

        if (response.status === 401) {
            logout();
            return null;
        }

        return response;
    };

    return { fetchWithAuth };
};
