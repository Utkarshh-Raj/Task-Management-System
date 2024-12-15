import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CalendarHeaderProps {
  currentDate: Date;
  onNavigate: (direction: 'prev' | 'next') => void;
  viewMode: 'month' | 'week';
  onViewModeChange: (mode: 'month' | 'week') => void;
}

export function CalendarHeader({ 
  currentDate, 
  onNavigate, 
  viewMode, 
  onViewModeChange 
}: CalendarHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          {currentDate.toLocaleString('default', { 
            month: 'long', 
            year: 'numeric' 
          })}
        </h2>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onNavigate('prev')}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => onNavigate('next')}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onViewModeChange('month')}
          className={`px-3 py-1 rounded ${
            viewMode === 'month'
              ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400'
              : 'text-gray-600 dark:text-gray-400'
          }`}
        >
          Month
        </button>
        <button
          onClick={() => onViewModeChange('week')}
          className={`px-3 py-1 rounded ${
            viewMode === 'week'
              ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400'
              : 'text-gray-600 dark:text-gray-400'
          }`}
        >
          Week
        </button>
      </div>
    </div>
  );
}