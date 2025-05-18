import qs from "qs";

import { mutateData } from "@/app/data/services/mutate-data";
import H1 from "@/components/ui/H1";
import ToDoItem from "./to-do-item";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
    <>
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

        <Link
          href={{
            pathname: `/categories/${documentId}/add-task`,
            query: { listDocumentId: documentId },
          }}
        >
          <Button className="fixed bottom-8 right-4 cursor-pointer">add</Button>
        </Link>
      </article>
    </>
  );
};

export default TaskListPage;
