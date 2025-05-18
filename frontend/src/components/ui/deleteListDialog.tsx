import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { categoryPageProps } from "./category-item";

import { DeleteTaskList } from "@/app/data/actions/task-list-actions";

interface Props {
  children: React.ReactNode;
  listProps: categoryPageProps;
}

export function DeleteListDialog({ children, listProps }: Readonly<Props>) {
  const deleteHandler = async () => {
    await DeleteTaskList(listProps.documentId);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] border-primary">
        <DialogHeader>
          <DialogTitle className="text-destructive">
            Delete task list
          </DialogTitle>
          <DialogDescription>
            Are you sure you want to delete {listProps.title}?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
          <Button
            type="submit"
            onClick={deleteHandler}
            className="bg-destructive/50"
          >
            Yes, delete task list
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
