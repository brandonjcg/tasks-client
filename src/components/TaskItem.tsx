import React from "react";
import { Task } from "../interfaces/task.interface";

interface Props {
  task: Task;
}

export const TaskItem = ({ task }: Props) => {
  return (
    <div
      key={task._id}
      className="bg-gray-900 p-2 my-2 flex justify-between hover:bg-gray-800 hover:cursor-pointer"
    >
      <div>
        <h1 className="text-lg font-bold text-white">{task.title}</h1>
        <p className="text-sm text-gray-400">{task.description}</p>
      </div>
      <div className="flex items-center">
        <button className="bg-green-500 hover:bg-green-600 px-2 py-1 rounded mr-2">
          Edit
        </button>
        <button className="bg-red-500 hover:bg-red-600 px-2 py-1 rounded">
          Delete
        </button>
      </div>
    </div>
  );
};
