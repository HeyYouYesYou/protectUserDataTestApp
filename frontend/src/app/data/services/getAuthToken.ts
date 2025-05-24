'use server';
import { cookies } from "next/headers"

export const getAuthToken = async () => {

    const cookieStore = await cookies();
    const todoAppJWT = cookieStore.get('todoAppJWT')?.value;
    return todoAppJWT;
}