import React from 'react';
import { TaskTemplate } from '../../types/template';
import { Plus, FileText } from 'lucide-react';

interface TemplateListProps {
  templates: TaskTemplate[];
  onApplyTemplate: (template: TaskTemplate) => void;
}

export function TemplateList({ templates, onApplyTemplate }: TemplateListProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
        <FileText className="w-5 h-5" />
        Task Templates
      </h2>
      <div className="grid gap-4">
        {templates.map(template => (
          <div
            key={template.id}
            className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium text-gray-900 dark:text-white">
                {template.name}
              </h3>
              <button
                onClick={() => onApplyTemplate(template)}
                className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              {template.description}
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {template.tasks.length} tasks
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}