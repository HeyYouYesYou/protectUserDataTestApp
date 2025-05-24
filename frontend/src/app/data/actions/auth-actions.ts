'use server';

import { cookies } from "next/headers";
import { registerUser, loginUser } from "../services/auth-service";
import { redirect } from "next/navigation";

const cookiesConfig = {
    maxAge: 60 * 60, // 1 hour
    path: "/",
    domain: process.env.HOST || undefined,
    httpOnly: true,
    //sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
};

export const registerUserAction = async (prevState: any, formData: FormData) => {
    //xss filter
    //csrf    
    //перевіряємо валідацію форми zod

    const user = {
        username: String(formData.get('username')),
        email: String(formData.get('email')),
        password: String(formData.get('password'))
    }

    //якщо валідація не пройшла, повертаємо помилки

    const response = await registerUser(user);

    if (response.error) {
        return {
            ...prevState,
            backendErrors: response.error,
            message: response.message,
        }
    }

    const cookieStore = await cookies();
    cookieStore.set('todoAppJWT', response.jwt, cookiesConfig);

}

export const loginUserAction = async (prevState: any, formData: FormData) => {

    const user = {
        identifier: String(formData.get('identifier')),
        password: String(formData.get('current-password'))
    }
    console.log('user :', user);


    const response = await loginUser(user);
    console.log('response :', response);

    if (response.error) {
        return {
            ...prevState,
            backendErrors: response.error,
            message: response.message,
        }
    }

    const cookieStore = await cookies();
    cookieStore.set('todoAppJWT', response.jwt, cookiesConfig);
    redirect('/categories');
}

export const logoutUserAction = async () => {

    const cookieStore = await cookies();
    cookieStore.delete('todoAppJWT');

    redirect('/');
}






