
import React, { useState } from 'react';
import { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
  isAdmin: boolean;
  onUpdate: (projects: Project[]) => void;
}

const Projects: React.FC<ProjectsProps> = ({ projects, isAdmin, onUpdate }) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProject, setNewProject] = useState<Partial<Project>>({
    title: '',
    description: '',
    imageUrl: '',
    link: '#'
  });

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (newProject.title && newProject.description) {
      const projectToAdd: Project = {
        id: Date.now().toString(),
        title: newProject.title!,
        description: newProject.description!,
        imageUrl: newProject.imageUrl || 'https://picsum.photos/800/600',
        link: newProject.link || '#'
      };
      onUpdate([...projects, projectToAdd]);
      setShowAddForm(false);
      setNewProject({ title: '', description: '', imageUrl: '', link: '#' });
    }
  };

  const handleDeleteProject = (id: string) => {
    onUpdate(projects.filter(p => p.id !== id));
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 space-y-16">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-extralight tracking-widest uppercase">My Projects</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          A collection of my recent work. Each project represents a unique challenge and solution.
          Click any card to learn more or view details.
        </p>
        
        {isAdmin && (
          <button 
            onClick={() => setShowAddForm(!showAddForm)}
            className="mt-4 gradient-bg text-white px-6 py-2 rounded-full font-medium shadow-lg hover:scale-105 transition-transform"
          >
            {showAddForm ? 'Cancel' : 'Add New Project'}
          </button>
        )}
      </div>

      {showAddForm && isAdmin && (
        <div className="bg-gray-50 dark:bg-zinc-900 p-8 rounded-3xl border border-gray-200 dark:border-gray-800 animate-fade-in max-w-2xl mx-auto">
          <form onSubmit={handleAddProject} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Project Title</label>
              <input 
                type="text" 
                required
                className="w-full bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-2 focus:ring-2 focus:ring-pink-500 outline-none"
                value={newProject.title}
                onChange={e => setNewProject({...newProject, title: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Description</label>
              <textarea 
                required
                className="w-full bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-2 focus:ring-2 focus:ring-pink-500 outline-none min-h-[100px]"
                value={newProject.description}
                onChange={e => setNewProject({...newProject, description: e.target.value})}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Image URL</label>
                <input 
                  type="url" 
                  placeholder="https://..."
                  className="w-full bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-2 focus:ring-2 focus:ring-pink-500 outline-none"
                  value={newProject.imageUrl}
                  onChange={e => setNewProject({...newProject, imageUrl: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Project Link</label>
                <input 
                  type="text" 
                  className="w-full bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-2 focus:ring-2 focus:ring-pink-500 outline-none"
                  value={newProject.link}
                  onChange={e => setNewProject({...newProject, link: e.target.value})}
                />
              </div>
            </div>
            <button type="submit" className="w-full gradient-bg text-white py-3 rounded-xl font-bold">
              Save Project
            </button>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project) => (
          <article 
            key={project.id} 
            className="group relative bg-white dark:bg-zinc-900 rounded-[2rem] overflow-hidden border border-gray-200 dark:border-gray-800 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="h-64 overflow-hidden relative">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-yellow-400 p-2 rounded-full">
                <i className="fas fa-star text-xs"></i>
              </div>
            </div>

            <div className="p-8 space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-2">
                {project.title}
                <i className="fas fa-chevron-right text-xs text-gray-400"></i>
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
                {project.description}
              </p>
              <div className="pt-4 flex items-center justify-between">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-md hover:bg-indigo-700 transition-colors"
                >
                  View Project
                </a>
                
                {isAdmin && (
                  <button 
                    onClick={() => handleDeleteProject(project.id)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
