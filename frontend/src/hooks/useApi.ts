import { useCallback } from "react";
import { useAuth } from "./useAuth";
import { FetchResponse } from "../types";
import { ErrorResponse } from "../../../libs/sdk/types.gen";
import { isErrorResponse } from "../utils/utlis";

export const useApi = () => {
    const { logout } = useAuth();

    const request = useCallback(
        async <P, R>(
            apiCall: (params: P) => Promise<R | ErrorResponse>,
            params: P,
        ): Promise<FetchResponse<R | null>> => {
            try {
                const response = await apiCall(params);

                if (!response || typeof response !== "object") {
                    return {
                        ok: false,
                        error: !response ? "Empty response from server." : "Invalid response from server.",
                        data: null,
                    };
                }

                if (isErrorResponse(response)) {
                    return {
                        ok: false,
                        error: response.message,
                        data: null,
                    };
                }

                return {
                    ok: true,
                    error: null,
                    data: response as R,
                };
            } catch (error: unknown) {
                console.log("API Error:", error);

                let errorMessage = "An unknown error occurred.";

                //TODO: logout on 401 errors
                return {
                    ok: false,
                    data: null,
                    error: errorMessage,
                };
            }
        },
        [logout],
    );

    return { request };
};
