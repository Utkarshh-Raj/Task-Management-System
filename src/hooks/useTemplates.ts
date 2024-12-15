import { useState } from 'react';
import { TaskTemplate } from '../types/template';
import { defaultTemplates } from '../data/taskTemplates';

export function useTemplates() {
  const [templates, setTemplates] = useState<TaskTemplate[]>(defaultTemplates);

  const applyTemplate = (template: TaskTemplate) => {
    // Implementation for applying template tasks
    console.log('Applying template:', template.name);
  };

  const addTemplate = (newTemplate: TaskTemplate) => {
    setTemplates(prev => [...prev, newTemplate]);
  };

  return {
    templates,
    applyTemplate,
    addTemplate
  };
}