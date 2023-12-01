
import axios from 'axios';

const API_URL = '/api';

const createBoard = async (boardData) => {
  const response = await axios.post(`${API_URL}/boards`, boardData);
  return response.data;
};

const getBoards = async () => {
  const response = await axios.get(`${API_URL}/boards`);
  return response.data;
};

const updateBoard = async (boardId, updateData) => {
  const response = await axios.patch(`${API_URL}/boards/${boardId}`, updateData);
  return response.data;
};

const deleteBoard = async (boardId) => {
  const response = await axios.delete(`${API_URL}/boards/${boardId}`);
  return response.data;
};

const createTask = async (taskId, taskData) => {
  const response = await axios.post(`${API_URL}/tasks/${taskId}`, taskData);
  return response.data;
};

const getTasks = async (boardId) => {
  const response = await axios.get(`${API_URL}/boards/${boardId}/tasks`);
  return response.data;
};

const updateTask = async (taskId, updateData) => {
  const response = await axios.patch(`${API_URL}/tasks/${taskId}`, updateData);
  return response.data;
};

const deleteTask = async (taskId) => {
  const response = await axios.delete(`${API_URL}/tasks/${taskId}`);
  return response.data;
};

export const todoService = {
  createBoard,
  getBoards,
  updateBoard,
  deleteBoard,
  createTask,
  getTasks,
  updateTask,
  deleteTask,
};
