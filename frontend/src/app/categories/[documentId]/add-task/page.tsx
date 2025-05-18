"use client";
import React from "react";
import NewTaskForm from "@/components/forms/NewTaskForm";
import { useSearchParams } from "next/navigation";

const AddNewTask = () => {
  const searchParams = useSearchParams();
  const listDocumentId = searchParams.get("listDocumentId") as string;

  return (
    <div className="h-[calc(100vh-90px)] flex  flex-col justify-center">
      <NewTaskForm listDocumentId={listDocumentId} />
    </div>
  );
};

export default AddNewTask;
