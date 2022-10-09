import axios from "axios";

export const getTasksRequest = async () =>
  await axios.get("http://localhost:4000/task");

export const createTaskRequest = async (task) =>
  await axios.post("http://localhost:4000/task", task);

export const deleteTaskRequest = async (id) =>
  await axios.delete(`http://localhost:4000/task/${id}`);

export const getTaskRequest = async (id) =>
  await axios.get(`http://localhost:4000/task/${id}`);

export const updateTaskRequest = async (id, newFields) =>
  await axios.put(`http://localhost:4000/task/${id}`, newFields);

export const toggleTaskDoneRequest = async (id, done) =>
  await axios.put(`http://localhost:4000/task/${id}`, {
    done,
  });
