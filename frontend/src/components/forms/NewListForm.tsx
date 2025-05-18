"use client";

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
import { CreateToDoList } from "@/app/data/actions/task-list-actions";

const NewListForm = () => {
  const router = useRouter();

  return (
    <form action={CreateToDoList}>
      <Card className="min-w-full">
        <CardHeader>
          <CardTitle>Create new task list</CardTitle>
          <div className="hidden">
            <CardDescription>
              A structured list to manage tasks efficiently, track progress, and
              prioritize based on urgency and deadlines.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex items-center justify-center space-y-1.5">
              <Label htmlFor="listTitle" className="mr-4 text-2xl">
                Title:
              </Label>
              <Input
                id="listTitle"
                name="listTitle"
                placeholder="Name of your task list"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button type="submit">Create</Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default NewListForm;
