import React, { ChangeEvent, useState } from "react";
import { createTaskRequest } from "../api/tasks";

export const TaskForm = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    done: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await createTaskRequest(task);
    const data = await res.json();
    console.log('🚀 ~ file: TaskForm.tsx:21 ~ handleSubmit ~ data:', data);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Write a task"
          className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Write a description"
          className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
          onChange={handleChange}
        ></textarea>
        <label className="inline-flex items-center gap-x-2">
          <input
            type="checkbox"
            name="done"
            className="h-5 w-5 text-indigo-600"
            onChange={ (e) => setTask({ ...task, done: !task.done }) }
          />
          <span>Done?</span>
        </label>
        <button className="bg-indigo-500 px-3 block py-2 w-full">Save</button>
      </form>
    </div>
  );
};
