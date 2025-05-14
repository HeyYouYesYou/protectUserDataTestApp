import qs from "qs";

import { mutateData } from "@/app/data/services/mutate-data";
import Card from "@/components/ui/card";
import H1 from "@/components/ui/H1";
import PrimaryButton from "@/components/ui/primaryButton";
import ToDoItem from "./to-do-item";
import Link from "next/link";

export interface todoItemProps {
  title: string;
  isDone: boolean;
  documentId: string;
  listDocumentId?: string;
}

const TaskListPage = async ({ params }: { params: { documentId: string } }) => {
  const { documentId } = await params;

  const query = qs.stringify({
    populate: "*",
  });

  const data = await mutateData({
    method: "GET",
    path: `/api/task-lists/${documentId}?${query}`,
  });

  const sortedToDos = await data?.data?.to_dos.sort(
    (a: todoItemProps, b: todoItemProps) => {
      if (a.isDone && !b.isDone) return 1;
      if (!a.isDone && b.isDone) return -1;
      return 0;
    }
  );

  return (
    <Card>
      <H1 className="my-4 text-center">{data?.data?.title}</H1>
      <article className="w-full">
        <ul className="p-2 ">
          {sortedToDos?.map((item: todoItemProps) => {
            return (
              <li
                key={item?.documentId}
                className="flex justify-between even:bg-secondary p-2 rounded-md"
              >
                <ToDoItem {...item} listDocumentId={documentId} />
              </li>
            );
          })}
        </ul>

        <Link href={`/categories/${documentId}/add-task`}>
          <PrimaryButton className="fixed bottom-8 right-4">add</PrimaryButton>
        </Link>
      </article>
    </Card>
  );
};

export default TaskListPage;
