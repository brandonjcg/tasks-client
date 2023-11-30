import React, { ChangeEvent, useState } from 'react';
import { useTasks } from '../context/useTasks';

export const TaskForm = () => {
  const initialTaskState = {
    title: '',
    description: '',
    done: false,
  };

  const [task, setTask] = useState(initialTaskState);
  const { createTask } = useTasks();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTask(task);
    setTask(initialTaskState);
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
          value={task.title}
        />
        <textarea
          name="description"
          placeholder="Write a description"
          className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
          onChange={handleChange}
          value={task.description}
        ></textarea>
        <label className="inline-flex items-center gap-x-2">
          <input
            type="checkbox"
            name="done"
            className="h-5 w-5 text-indigo-600"
            onChange={() => setTask({ ...task, done: !task.done })}
            checked={task.done}
          />
          <span>Done?</span>
        </label>
        <button className="bg-indigo-500 px-3 block py-2 w-full">Save</button>
      </form>
    </div>
  );
};
