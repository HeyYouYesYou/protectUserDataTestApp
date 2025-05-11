import Card from "@/components/ui/card";
import H1 from "@/components/ui/H1";
import PrimaryButton from "@/components/ui/primaryButton";

const TaskListPage = async ({ params }: { params: { documentId: string } }) => {
  const { documentId } = await params;
  return (
    <Card>
      <H1 className="my-4">TaskListPage: {documentId}</H1>
      <article className="w-full">
        <ul className="p-2">
          <li className="flex justify-between">
            <div>
              <span>+</span>
              <span> task name</span>
            </div>
            <span>delete</span>
          </li>
          <li className="flex justify-between">
            <div>
              <span>+</span>
              <span> task name</span>
            </div>
            <span>delete</span>
          </li>
          <li className="flex justify-between">
            <div>
              <span>+</span>
              <span> task name</span>
            </div>
            <span>delete</span>
          </li>
          <li className="flex justify-between">
            <div>
              <span>+</span>
              <span> task name</span>
            </div>
            <span>delete</span>
          </li>
        </ul>
        <PrimaryButton className="fixed bottom-8 right-4">add</PrimaryButton>
      </article>
    </Card>
  );
};

export default TaskListPage;
