"use client";

import { Trash } from "lucide-react";

import { DeleteListDialog } from "./deleteListDialog";

export interface categoryPageProps {
  documentId: string;
  title: string;
  count?: number;
}

const CategoryCardItem = ({
  title,
  count,
  documentId,
}: Readonly<categoryPageProps>) => {
  const deleteHandler = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  return (
    <article className="relative bg-secondary h-24 flex flex-col items-start justify-center p-2 rounded-[4px]">
      <h3>{title}</h3>
      {count ? (
        <p>
          {count} {count > 1 ? "tasks" : "task"}
        </p>
      ) : (
        "Task list is empty"
      )}

      <div onClick={deleteHandler}>
        <DeleteListDialog listProps={{ documentId, title }}>
          <Trash
            width={20}
            className="absolute bottom-0 right-0 text-destructive/70 m-2"
          />
        </DeleteListDialog>
      </div>
    </article>
  );
};

export default CategoryCardItem;
