import React, { useState } from 'react';
import { CheckCircle2, Circle, Clock, Flag, Trash2, MessageSquare, Timer, RepeatIcon } from 'lucide-react';
import { Task } from '../types';
import { formatDate } from '../utils/dateUtils';

interface TaskCardProps {
  task: Task;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

const priorityConfig = {
  low: {
    color: 'text-blue-500 dark:text-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-900',
  },
  medium: {
    color: 'text-yellow-600 dark:text-yellow-400',
    bg: 'bg-yellow-50 dark:bg-yellow-900',
  },
  high: {
    color: 'text-red-500 dark:text-red-400',
    bg: 'bg-red-50 dark:bg-red-900',
  },
};

export function TaskCard({ task, onToggleComplete, onDelete }: TaskCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 hover:shadow-md transition-all duration-200 border border-gray-100 dark:border-gray-700">
      <div className="flex items-start gap-3">
        <button
          onClick={() => onToggleComplete(task.id)}
          className="mt-1 focus:outline-none hover:scale-110 transition-transform"
        >
          {task.completed ? (
            <CheckCircle2 className="w-5 h-5 text-green-500 dark:text-green-400" />
          ) : (
            <Circle className="w-5 h-5 text-gray-400 dark:text-gray-500" />
          )}
        </button>
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <h3 
              className={`text-lg font-medium cursor-pointer ${
                task.completed 
                  ? 'line-through text-gray-500 dark:text-gray-400' 
                  : 'text-gray-900 dark:text-white'
              }`}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {task.title}
            </h3>
            <div className="flex items-center gap-2">
              {task.recurring && (
                <RepeatIcon className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
              )}
              <button
                onClick={() => onDelete(task.id)}
                className="text-gray-400 dark:text-gray-500 hover:text-red-500 dark:hover:text-red-400 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          {isExpanded && task.description && (
            <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
              {task.description}
            </p>
          )}

          <div className="flex items-center gap-4 mt-3">
            <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-sm ${priorityConfig[task.priority].bg} ${priorityConfig[task.priority].color}`}>
              <Flag className="w-3 h-3" />
              <span className="capitalize">{task.priority}</span>
            </span>
            
            {task.dueDate && (
              <span className="inline-flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                <Clock className="w-3 h-3" />
                {formatDate(task.dueDate)}
              </span>
            )}

            {task.timeTracking && (
              <span className="inline-flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                <Timer className="w-3 h-3" />
                {Math.round(task.timeTracking.totalTime)} min
              </span>
            )}

            {task.comments && task.comments.length > 0 && (
              <span className="inline-flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                <MessageSquare className="w-3 h-3" />
                {task.comments.length}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}