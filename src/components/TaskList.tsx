import React from 'react';
import { List } from '../types';
import { TaskCard } from './TaskCard';
import { LayoutList } from 'lucide-react';

interface TaskListProps {
  list: List;
  onToggleComplete: (taskId: string) => void;
}

export function TaskList({ list, onToggleComplete }: TaskListProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <LayoutList className="w-5 h-5 text-indigo-600" />
        <h2 className="text-xl font-semibold text-gray-900">{list.name}</h2>
      </div>
      <div className="space-y-3">
        {list.tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onToggleComplete={onToggleComplete}
          />
        ))}
      </div>
    </div>
  );
}