export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
  createdAt: string;
  tags?: string[];
  timeTracking?: {
    started?: string;
    totalTime: number; // in minutes
  };
  recurring?: {
    frequency: 'daily' | 'weekly' | 'monthly';
    nextDue?: string;
  };
  comments?: Comment[];
}

export interface Comment {
  id: string;
  text: string;
  createdAt: string;
  userId: string;
}

export interface List {
  id: string;
  name: string;
  tasks: Task[];
  color?: string;
}