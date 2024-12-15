import React, { useState } from 'react';
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import { NewTaskForm } from './components/NewTaskForm';
import { TaskStats } from './components/TaskStats';
import { Calendar } from './components/calendar/Calendar';
import { TemplateList } from './components/templates/TemplateList';
import { TagFilter } from './components/filters/TagFilter';
import { useTasks } from './hooks/useTasks';
import { useTemplates } from './hooks/useTemplates';
import { useTaskFilters } from './hooks/useTaskFilters';

function App() {
  const { lists, toggleComplete, addTask, deleteTask } = useTasks();
  const { templates, applyTemplate } = useTemplates();
  const [showCalendar, setShowCalendar] = useState(false);
  
  const allTasks = lists.flatMap(list => list.tasks);
  const {
    availableTags,
    selectedTags,
    toggleTag,
    filteredTasks
  } = useTaskFilters(allTasks);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Header onToggleCalendar={() => setShowCalendar(!showCalendar)} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <TaskStats lists={lists} />
            {showCalendar ? (
              <Calendar />
            ) : (
              <>
                <TagFilter
                  availableTags={availableTags}
                  selectedTags={selectedTags}
                  onTagSelect={toggleTag}
                />
                {lists.map(list => (
                  <TaskList
                    key={list.id}
                    list={{
                      ...list,
                      tasks: filteredTasks.filter(task => 
                        list.tasks.some(t => t.id === task.id)
                      )
                    }}
                    onToggleComplete={toggleComplete}
                    onDeleteTask={deleteTask}
                  />
                ))}
              </>
            )}
          </div>
          <div className="space-y-6">
            <NewTaskForm onAddTask={addTask} />
            <TemplateList
              templates={templates}
              onApplyTemplate={applyTemplate}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;