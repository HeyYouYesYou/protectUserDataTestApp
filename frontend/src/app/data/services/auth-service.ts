import { getBackendUrl } from "@/lib/utils";


interface registerProps {
    username: string;
    email: string;
    password: string;
}
interface loginProps {
    identifier: string;
    password: string;
}

const baseURL = getBackendUrl();

export const registerUser = async ({ username, email, password }: registerProps) => {

    const url = new URL("/api/auth/local/register", baseURL);

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, email, password }),
            cache: "no-cache",
        });

        return response.json();

    } catch (error) {
        return {
            success: false,
            message: error instanceof Error ? error.message : "Failed to register user.",
        };
    }
};

export const loginUser = async ({ identifier, password }: loginProps) => {

    const url = new URL("/api/auth/local", baseURL);

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ identifier, password }),
            cache: "no-cache",
        });

        return response.json();
    } catch (error) {
        console.error("Login Service Error:", error);
        throw error;
    }
}

