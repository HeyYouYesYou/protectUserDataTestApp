"use client";
import { CircleCheckBig, CircleDashed, X } from "lucide-react";

import { todoItemProps } from "./page";
import {
  DeleteToDoItem,
  UpdateIsDoneToDos,
} from "@/app/data/actions/to-do-item-actions";

const toggleIsDoneHandler = async (todo: Readonly<todoItemProps>) => {
  const payload = {
    ...todo,
    isDone: !todo.isDone,
  };

  await UpdateIsDoneToDos(payload);
};

const deleteHandler = async (todo: Readonly<todoItemProps>) => {
  await DeleteToDoItem(todo);
};

const ToDoItem = (todo: Readonly<todoItemProps>) => {
  return (
    <>
      <div className="flex">
        <button onClick={() => toggleIsDoneHandler(todo)}>
          {todo?.isDone ? (
            <CircleCheckBig className="text-green-700" />
          ) : (
            <CircleDashed className="text-primary" />
          )}
        </button>
        <p className="ml-2">{todo?.title}</p>
      </div>
      <X
        cursor={"pointer"}
        className="text-destructive"
        onClick={() => deleteHandler(todo)}
      />
    </>
  );
};

export default ToDoItem;
