'use server';

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { mutateData } from "../services/mutate-data";

export const CreateToDoList = async (formData: FormData) => {

    const data = Object.fromEntries(formData);

    const payload = {
        data: {
            title: String(data.listTitle),
            slug: String(data.listTitle).replace(/\s/g, "-").toLowerCase(),
        },
    }

    const response = await mutateData({
        method: "POST",
        path: `/api/task-lists`,
        body: payload,
    });

    revalidatePath(`/categories`);
    redirect(`/categories/${response.data.documentId}`);
}

export const DeleteTaskList = async (documentId: string) => {
    await mutateData({
        method: "DELETE",
        path: `/api/task-lists/${documentId}`,
    });

    revalidatePath(`/categories`);
    redirect(`/categories`);
};