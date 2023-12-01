```
```tsx
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Task, Board } from '../types';

interface TodoContextType {
  tasks: Task[];
  boards: Board[];
  addTask: (task: Task) => void;
  addBoard: (board: Board) => void;
  removeTask: (taskId: string) => void;
  removeBoard: (boardId: string) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  return context;
};

export const TodoProvider: React.FC = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [boards, setBoards] = useState<Board[]>([]);

  const addTask = useCallback((task: Task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  }, []);

  const addBoard = useCallback((board: Board) => {
    setBoards((prevBoards) => [...prevBoards, board]);
  }, []);

  const removeTask = useCallback((taskId: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }, []);

  const removeBoard = useCallback((boardId: string) => {
    setBoards((prevBoards) => prevBoards.filter((board) => board.id !== boardId));
  }, []);

  useEffect(() => {
    // TODO: Fetch tasks and boards from the API when the component mounts
  }, []);

  return (
    <TodoContext.Provider value={{ tasks, boards, addTask, addBoard, removeTask, removeBoard }}>
      {children}
    </TodoContext.Provider>
  );
};
