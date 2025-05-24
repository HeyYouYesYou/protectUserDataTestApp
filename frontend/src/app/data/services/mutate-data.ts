import { getAuthToken } from './getAuthToken';

import { getBackendUrl } from "@/lib/utils";

interface Props {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    path: string;
    body?: unknown;
}

export const mutateData = async ({ method, path, body }: Readonly<Props>) => {
    const baseUrl = getBackendUrl();

    const authToken = await getAuthToken();

    if (!authToken) {
        return {
            ok: false,
            data: null,
            error: null
        };
    }

    const url = new URL(path, baseUrl);

    try {
        const response = await fetch(url.toString(), {
            method,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`,
            },
            body: body ? JSON.stringify(body) : undefined,
        });

        if (method === 'DELETE') {
            return response.ok;
        }

        return response.ok ? await response.json() : null;
    } catch (error) {
        throw error;
    }
};
