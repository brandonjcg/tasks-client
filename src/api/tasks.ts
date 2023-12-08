import { CreateTask, UpdateTask } from '../interfaces/task.interface';

const API_BACKEND = import.meta.env.VITE_API_BACKEND;

export const createTaskRequest = (task: CreateTask) =>
  fetch(`${API_BACKEND}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });

export const getTasksRequest = () => fetch(`${API_BACKEND}/tasks`);

export const deleteTaskRequest = (id: string) =>
  fetch(`${API_BACKEND}/tasks/${id}`, {
    method: 'DELETE',
  });

export const updateTaskRequest = (id: string, task: UpdateTask) =>
  fetch(`${API_BACKEND}/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
