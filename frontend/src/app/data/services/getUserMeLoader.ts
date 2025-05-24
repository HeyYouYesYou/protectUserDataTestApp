import { getAuthToken } from "./getAuthToken";
import { getBackendUrl } from "@/lib/utils";

export const getUserMeLoader = async () => {


    const url = new URL(`/api/users/me`, getBackendUrl());

    const authToken = await getAuthToken();

    if (!authToken) {
        return {
            isAuthorized: false,
            data: null,
            error: null
        };
    }

    try {
        const response = await fetch(url.href, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${authToken}`,
            },
        });

        const data = await response.json();

        if (data.error) {
            return {
                isAuthorized: false,
                data: null,
                error: data.error
            };
        }

        return {
            isAuthorized: true,
            data,
            error: null
        };

    } catch (error) {
        return {
            isAuthorized: false,
            data: null,
            error: error instanceof Error ? error.message : "Failed to fetch user."
        };
    }

}