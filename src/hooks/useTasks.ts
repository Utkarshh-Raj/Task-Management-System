import { useState } from 'react';
import { List, Task } from '../types';

const initialLists: List[] = [
  {
    id: '1',
    name: 'My Tasks',
    tasks: [
      {
        id: '1',
        title: 'Complete project documentation',
        description: 'Write comprehensive documentation for the new feature',
        completed: false,
        priority: 'high',
        dueDate: '2024-03-20',
        createdAt: new Date().toISOString(),
      },
      {
        id: '2',
        title: 'Review pull requests',
        completed: true,
        priority: 'medium',
        createdAt: new Date().toISOString(),
      },
    ],
  },
];

export function useTasks() {
  const [lists, setLists] = useState<List[]>(initialLists);

  const toggleComplete = (taskId: string) => {
    setLists(lists.map(list => ({
      ...list,
      tasks: list.tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      ),
    })));
  };

  const addTask = (title: string, description: string, priority: string, dueDate?: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      description,
      completed: false,
      priority: priority as 'low' | 'medium' | 'high',
      dueDate,
      createdAt: new Date().toISOString(),
    };

    setLists(lists.map(list => ({
      ...list,
      tasks: [...list.tasks, newTask],
    })));
  };

  const deleteTask = (taskId: string) => {
    setLists(lists.map(list => ({
      ...list,
      tasks: list.tasks.filter(task => task.id !== taskId),
    })));
  };

  return { lists, toggleComplete, addTask, deleteTask };
}