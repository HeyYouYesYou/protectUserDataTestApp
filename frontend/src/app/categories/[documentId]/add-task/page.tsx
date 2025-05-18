"use client";
import NewTaskForm from "@/components/forms/NewTaskForm";
import CustomCard from "@/components/ui/customCard";
import { useSearchParams } from "next/navigation";

const AddNewTask = () => {
  const searchParams = useSearchParams();
  const listDocumentId = searchParams.get("listDocumentId") as string;

  return (
    <CustomCard className="items-center justify-center">
      <NewTaskForm listDocumentId={listDocumentId} />
    </CustomCard>
  );
};

export default AddNewTask;
