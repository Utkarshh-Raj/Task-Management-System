import React from 'react';
import { CalendarEvent } from '../../types/calendar';
import { CalendarHeader } from './CalendarHeader';
import { CalendarGrid } from './CalendarGrid';
import { useCalendar } from '../../hooks/useCalendar';

export function Calendar() {
  const { 
    currentDate,
    events,
    navigateMonth,
    viewMode,
    setViewMode 
  } = useCalendar();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
      <CalendarHeader
        currentDate={currentDate}
        onNavigate={navigateMonth}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />
      <CalendarGrid
        currentDate={currentDate}
        events={events}
        viewMode={viewMode}
      />
    </div>
  );
}