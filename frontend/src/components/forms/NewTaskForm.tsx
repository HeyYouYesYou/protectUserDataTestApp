"use client";
import { useActionState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import { CreateToDoItem } from "@/app/data/actions/to-do-item-actions";

const INITIAL_STATE = {
  data: null,
};

interface NewTaskFormProps {
  listDocumentId: string;
}

const NewTaskForm = ({ listDocumentId }: Readonly<NewTaskFormProps>) => {
  const router = useRouter();

  const CreateToDoItemWithListId = CreateToDoItem.bind(null, listDocumentId);

  const [formState, formAction] = useActionState(
    CreateToDoItemWithListId,
    INITIAL_STATE
  );

  return (
    <Card className="min-w-full ">
      <div className="hidden">
        <CardHeader>
          <CardTitle>Add new task</CardTitle>
          <CardDescription>Add new task to your task list list</CardDescription>
        </CardHeader>
      </div>
      <CardContent>
        <form action={formAction}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="newTask">
                <Input id="newTask" name="newTask" placeholder="add new task" />
              </Label>
            </div>
          </div>
          <CardFooter className="flex px-0 mt-4 justify-between">
            <Button variant="outline" onClick={() => router.back()}>
              Cancel
            </Button>
            <Button type="submit">Add</Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
};

export default NewTaskForm;
