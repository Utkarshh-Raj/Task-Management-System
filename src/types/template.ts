export interface TaskTemplate {
  id: string;
  name: string;
  description: string;
  tasks: {
    title: string;
    description?: string;
    priority: 'low' | 'medium' | 'high';
    tags?: string[];
    estimatedTime?: number;
  }[];
}