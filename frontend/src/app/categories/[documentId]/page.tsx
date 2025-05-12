/* eslint-disable @typescript-eslint/no-explicit-any */
import qs from "qs";
import { X, CircleDashed, CircleCheckBig } from "lucide-react";

import { mutateData } from "@/app/data/services/mutate-data";
import Card from "@/components/ui/card";
import H1 from "@/components/ui/H1";
import PrimaryButton from "@/components/ui/primaryButton";

const TaskListPage = async ({ params }: { params: { documentId: string } }) => {
  const { documentId } = await params;

  const query = qs.stringify({
    populate: "*",
  });

  const data = await mutateData({
    method: "GET",
    path: `/api/task-lists/${documentId}?${query}`,
  });

  const sortedToDos = data?.data?.to_dos.sort(
    (a: any, b: any) => a.isDone - b.isDone
  );

  return (
    <Card>
      <H1 className="my-4 text-center">{data?.data?.title}</H1>
      <article className="w-full">
        <ul className="p-2 ">
          {sortedToDos?.map((item: any) => {
            return (
              <li
                key={item?.documentId}
                className="flex justify-between even:bg-secondary p-2 rounded-md"
              >
                <div className="flex">
                  {item?.isDone ? (
                    <CircleCheckBig className="text-green-700" />
                  ) : (
                    <CircleDashed className="text-primary" />
                  )}
                  <p className="ml-2">{item?.title}</p>
                </div>
                <X cursor={"pointer"} className="text-destructive" />
              </li>
            );
          })}
        </ul>
        <PrimaryButton className="fixed bottom-8 right-4">add</PrimaryButton>
      </article>
    </Card>
  );
};

export default TaskListPage;
