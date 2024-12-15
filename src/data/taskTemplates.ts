import { TaskTemplate } from '../types/template';

export const defaultTemplates: TaskTemplate[] = [
  {
    id: 'weekly-review',
    name: 'Weekly Review',
    description: 'Standard weekly review process',
    tasks: [
      {
        title: 'Review last week\'s achievements',
        priority: 'high',
        tags: ['review', 'planning'],
      },
      {
        title: 'Plan next week\'s goals',
        priority: 'high',
        tags: ['planning', 'goals'],
      },
      {
        title: 'Update project status',
        priority: 'medium',
        tags: ['admin', 'reporting'],
      }
    ]
  },
  {
    id: 'project-setup',
    name: 'New Project Setup',
    description: 'Initial project setup checklist',
    tasks: [
      {
        title: 'Create project documentation',
        description: 'Set up initial README and documentation structure',
        priority: 'high',
        tags: ['documentation', 'setup'],
      },
      {
        title: 'Set up development environment',
        priority: 'high',
        tags: ['setup', 'development'],
      },
      {
        title: 'Define project milestones',
        priority: 'medium',
        tags: ['planning', 'milestones'],
      }
    ]
  }
];