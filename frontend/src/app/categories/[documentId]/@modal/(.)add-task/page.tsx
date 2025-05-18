"use client";
import NewTaskForm from "@/components/forms/NewTaskForm";
import { Modal } from "@/components/ui/Modal";
import { useSearchParams } from "next/navigation";

const AddNewTask = () => {
  const searchParams = useSearchParams();
  const listDocumentId = searchParams.get("listDocumentId") as string;

  return (
    <Modal>
      <NewTaskForm listDocumentId={listDocumentId} />
    </Modal>
  );
};

export default AddNewTask;
