// src/services/TaskService.js
export const fetchTasks = async () => {
  const response = await fetch('http://localhost:8000/api/tasks/');
  return response.json();
};
