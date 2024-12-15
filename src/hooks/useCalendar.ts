import { useState, useEffect } from 'react';
import { CalendarEvent } from '../types/calendar';
import { Task } from '../types';

export function useCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<'month' | 'week'>('month');
  const [events, setEvents] = useState<CalendarEvent[]>([]);

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + (direction === 'next' ? 1 : -1));
      return newDate;
    });
  };

  const addTaskToCalendar = (task: Task) => {
    if (task.dueDate) {
      const newEvent: CalendarEvent = {
        id: `event-${task.id}`,
        title: task.title,
        start: task.dueDate,
        taskId: task.id,
        color: task.priority === 'high' ? 'red' : task.priority === 'medium' ? 'yellow' : 'blue'
      };
      setEvents(prev => [...prev, newEvent]);
    }
  };

  return {
    currentDate,
    events,
    navigateMonth,
    viewMode,
    setViewMode,
    addTaskToCalendar
  };
}