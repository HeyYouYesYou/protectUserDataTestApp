'use server';

import qs from "qs";
import { revalidatePath } from "next/cache";

import { mutateData } from "../services/mutate-data";
import { todoItemProps } from "@/app/categories/[documentId]/page";

export const UpdateIsDoneToDos = async (payload: Readonly<todoItemProps>) => {
    const query = qs.stringify({
        populate: "*",
    });

    const newBody = {
        data: {
            isDone: payload.isDone
        }
    }

    const response = await mutateData({
        method: "PUT",
        path: `/api/to-dos/${payload.documentId}?${query}`,
        body: newBody,
    });

    revalidatePath(`/categories/${payload.listDocumentId}`);

    return response;
};

export const DeleteToDoItem = async (payload: Readonly<todoItemProps>) => {
    const query = qs.stringify({
        populate: "*",
    });

    const response = await mutateData({
        method: "DELETE",
        path: `/api/to-dos/${payload.documentId}?${query}`,
    });

    revalidatePath(`/categories/${payload.listDocumentId}`);

    return response;
};