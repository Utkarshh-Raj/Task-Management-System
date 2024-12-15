import { useState, useMemo } from 'react';
import { Task } from '../types';

export function useTaskFilters(tasks: Task[]) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const availableTags = useMemo(() => {
    const tags = new Set<string>();
    tasks.forEach(task => {
      task.tags?.forEach(tag => tags.add(tag));
    });
    return Array.from(tags);
  }, [tasks]);

  const filteredTasks = useMemo(() => {
    return tasks.filter(task => {
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.some(tag => task.tags?.includes(tag));
      
      const matchesSearch = !searchQuery || 
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.description?.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesTags && matchesSearch;
    });
  }, [tasks, selectedTags, searchQuery]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return {
    availableTags,
    selectedTags,
    searchQuery,
    setSearchQuery,
    toggleTag,
    filteredTasks
  };
}