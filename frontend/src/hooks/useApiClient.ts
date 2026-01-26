import { AuthContext } from "../context/AuthContext";
import { useContext } from "preact/hooks";

export const useApiClient = () => {
    const { authState, login, logout } = useContext(AuthContext);

    const fetchWithAuth = async (url: string, method: string, body?: string) => {
        if (!authState.user) {
            return null;
        }

        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authState.user?.token}`,
        };

        const options: RequestInit = { method, headers };

        if (method !== "GET" && body) {
            options.body = body;
        }

        let response = await fetch(url, options);

        if (response.status === 401) {
            logout();
            return null;
        }

        return response;
    };

    return { fetchWithAuth };
};
