/* eslint-disable @typescript-eslint/no-explicit-any */
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

export const CreateToDoItem = async (
    listDocumentId: string,
    prevState: any,
    formData: FormData,
) => {

    const data = Object.fromEntries(formData);

    const qwe = String(data.newTask);

    const slug = qwe.replace(/\s/g, "-").toLowerCase();

    const payload = {
        data: {
            title: qwe,
            slug: slug,
            isDone: false,
        },
    }

    const response = await mutateData({
        method: "POST",
        path: `/api/to-dos`,
        body: payload,
    });
    const payloadWithRelation = {
        data: {
            to_dos: {
                connect: [
                    {
                        documentId: response?.data?.documentId,
                        status: 'published',
                    }
                ]
            }
        }
    }

    await mutateData({
        method: "PUT",
        path: `/api/task-lists/${listDocumentId}/?populate=*`,
        body: payloadWithRelation,
    });

    revalidatePath(`/categories/${listDocumentId}`);

    return response;
};