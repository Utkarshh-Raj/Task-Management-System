export interface CalendarEvent {
  id: string;
  title: string;
  start: string;
  end?: string;
  taskId?: string;
  color?: string;
}