import React from 'react';
import { CalendarEvent } from '../../types/calendar';
import { formatDate } from '../../utils/dateUtils';

interface CalendarGridProps {
  currentDate: Date;
  events: CalendarEvent[];
  viewMode: 'month' | 'week';
}

function getDaysInMonth(date: Date): Date[] {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  
  // Get the first day of the week for the current month
  const startDate = new Date(firstDay);
  startDate.setDate(startDate.getDate() - startDate.getDay());
  
  const days: Date[] = [];
  const currentDate = new Date(startDate);
  
  // Generate 6 weeks of dates
  for (let i = 0; i < 42; i++) {
    days.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  
  return days;
}

function getDaysInWeek(date: Date): Date[] {
  const startOfWeek = new Date(date);
  startOfWeek.setDate(date.getDate() - date.getDay());
  
  const days: Date[] = [];
  const currentDate = new Date(startOfWeek);
  
  for (let i = 0; i < 7; i++) {
    days.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  
  return days;
}

function getEventsForDate(date: Date, events: CalendarEvent[]): CalendarEvent[] {
  return events.filter(event => {
    const eventDate = new Date(event.start);
    return eventDate.getDate() === date.getDate() &&
           eventDate.getMonth() === date.getMonth() &&
           eventDate.getFullYear() === date.getFullYear();
  });
}

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export function CalendarGrid({ currentDate, events, viewMode }: CalendarGridProps) {
  const days = viewMode === 'month' ? getDaysInMonth(currentDate) : getDaysInWeek(currentDate);
  const today = new Date();

  return (
    <div className="mt-4">
      <div className="grid grid-cols-7 gap-1 mb-1">
        {weekDays.map(day => (
          <div
            key={day}
            className="text-center text-sm font-medium text-gray-500 dark:text-gray-400 py-2"
          >
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((date, index) => {
          const isToday = date.toDateString() === today.toDateString();
          const isCurrentMonth = date.getMonth() === currentDate.getMonth();
          const dayEvents = getEventsForDate(date, events);
          
          return (
            <div
              key={index}
              className={`min-h-[100px] p-2 border border-gray-200 dark:border-gray-700 ${
                isToday ? 'bg-indigo-50 dark:bg-indigo-900/20' : 
                isCurrentMonth ? 'bg-white dark:bg-gray-800' : 
                'bg-gray-50 dark:bg-gray-900'
              }`}
            >
              <div className={`text-sm font-medium mb-1 ${
                isToday ? 'text-indigo-600 dark:text-indigo-400' :
                isCurrentMonth ? 'text-gray-900 dark:text-white' :
                'text-gray-400 dark:text-gray-500'
              }`}>
                {date.getDate()}
              </div>
              <div className="space-y-1">
                {dayEvents.map(event => (
                  <div
                    key={event.id}
                    className={`text-xs p-1 rounded truncate ${
                      event.color === 'red' ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400' :
                      event.color === 'yellow' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400' :
                      'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                    }`}
                  >
                    {event.title}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}