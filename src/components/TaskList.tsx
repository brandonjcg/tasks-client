import React from 'react';
import { Task } from '../interfaces/task.interface';
import { TaskItem } from './TaskItem';
import { useTasks } from '../context/useTasks';

export const TaskList = () => {
  const { tasks } = useTasks();

  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
      <h1 className="text-2xl font-bold" style={{ color: '#333' }}>
        Task List
      </h1>
      <ul>
        {tasks.map((task: Task) => (
          <TaskItem key={task._id} task={task} />
        ))}
      </ul>
    </div>
  );
};
