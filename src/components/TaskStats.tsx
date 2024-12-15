import React from 'react';
import { CheckCircle2, Circle, BarChart2 } from 'lucide-react';
import { List } from '../types';

interface TaskStatsProps {
  lists: List[];
}

export function TaskStats({ lists }: TaskStatsProps) {
  const allTasks = lists.flatMap(list => list.tasks);
  const completedTasks = allTasks.filter(task => task.completed);
  const completionRate = allTasks.length > 0
    ? Math.round((completedTasks.length / allTasks.length) * 100)
    : 0;

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <BarChart2 className="w-5 h-5 text-indigo-600" />
        <h2 className="text-lg font-semibold text-gray-900">Task Progress</h2>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-gray-600 mb-1">
            <Circle className="w-4 h-4" />
            <span>Total</span>
          </div>
          <p className="text-2xl font-semibold text-gray-900">{allTasks.length}</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-green-600 mb-1">
            <CheckCircle2 className="w-4 h-4" />
            <span>Completed</span>
          </div>
          <p className="text-2xl font-semibold text-gray-900">{completedTasks.length}</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-indigo-600 mb-1">
            <span className="text-sm">Progress</span>
          </div>
          <p className="text-2xl font-semibold text-gray-900">{completionRate}%</p>
        </div>
      </div>
    </div>
  );
}