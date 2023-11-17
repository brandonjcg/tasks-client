import { CreateTask } from "../interfaces/task.interface";

export const createTaskRequest = (task: CreateTask) => {
  return fetch("http://localhost:3001/api/v1/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
};

export const getTasksRequest = () => {
  return fetch("http://localhost:3001/api/v1/tasks");
};
