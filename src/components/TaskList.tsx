import React, { useEffect } from "react";
import { getTasksRequest } from "../api/tasks";
import { Task } from "../interfaces/task.interface";
import { TaskItem } from "./TaskItem";

export const TaskList = () => {
  const [tasks, setTasks] = React.useState([]);

  useEffect(() => {
    getTasksRequest().then((res) => res.json().then((data) => setTasks(data)));
  }, []);

  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
      <h1 className="text-2xl font-bold" style={{ color: '#333' }}>Task List</h1>
      <ul>
        {tasks.map((task: Task) => <TaskItem key={task._id} task={task} />)}
      </ul>
    </div>
  )
};