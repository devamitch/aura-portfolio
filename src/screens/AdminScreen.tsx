import React, { useState } from 'react';
import { useFirebaseProjects, Project } from '../hooks/useFirebaseProjects';
import { Plus, Edit2, Trash2, X, Save, Image as ImageIcon, Link as LinkIcon, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function AdminScreen() {
  const { projects, isLoading, addProject, updateProject, deleteProject } = useFirebaseProjects();
  const [isEditing, setIsEditing] = useState(false);
  const [currentProject, setCurrentProject] = useState<Partial<Project> | null>(null);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentProject) return;

    // Ensure slug is present
    const projectToSave = {
      ...currentProject,
      slug: currentProject.slug || currentProject.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || '',
      longDescription: currentProject.longDescription || [],
      gallery: currentProject.gallery || [],
      links: currentProject.links || [],
      tags: currentProject.tags || []
    };

    try {
      if (currentProject.id) {
        await updateProject.mutateAsync(projectToSave as Project);
      } else {
        await addProject.mutateAsync(projectToSave as Omit<Project, 'id'>);
      }
      setIsEditing(false);
      setCurrentProject(null);
    } catch (error) {
      console.error("Failed to save project:", error);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleTitleChange = (title: string) => {
    setCurrentProject(prev => ({
      ...prev!,
      title,
      slug: prev?.id ? prev.slug : generateSlug(title)
    }));
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        await deleteProject.mutateAsync(id);
      } catch (error) {
        console.error("Failed to delete project:", error);
      }
    }
  };

  if (isLoading) return <div className="min-h-screen flex items-center justify-center bg-black text-white">Loading Admin...</div>;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8 pt-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-light tracking-tight mb-2">Project Management</h1>
            <p className="text-white/40">Add, edit, or remove projects from your portfolio.</p>
          </div>
          <button 
            onClick={() => {
              setCurrentProject({
                title: '',
                description: '',
                category: 'Residential',
                image: '',
                year: new Date().getFullYear().toString(),
                location: '',
                tags: []
              });
              setIsEditing(true);
            }}
            className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full hover:bg-white/90 transition-colors"
          >
            <Plus size={20} />
            <span>New Project</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects?.map((project) => (
            <motion.div 
              layout
              key={project.id}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button 
                    onClick={() => {
                      setCurrentProject(project);
                      setIsEditing(true);
                    }}
                    className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"
                  >
                    <Edit2 size={20} />
                  </button>
                  <button 
                    onClick={() => handleDelete(project.id)}
                    className="p-3 bg-red-500 text-white rounded-full hover:scale-110 transition-transform"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs text-white/40 uppercase tracking-widest mb-2">{project.category}</div>
                <h3 className="text-xl font-medium mb-1">{project.title}</h3>
                <p className="text-sm text-white/60 line-clamp-2">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isEditing && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsEditing(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#111] border border-white/10 rounded-3xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#111] sticky top-0 z-10">
                <h2 className="text-2xl font-light">{currentProject?.id ? 'Edit Project' : 'New Project'}</h2>
                <button onClick={() => setIsEditing(false)} className="p-2 hover:bg-white/5 rounded-full transition-colors">
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleSave} className="p-8 space-y-6 overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Title</label>
                    <input 
                      required
                      value={currentProject?.title || ''}
                      onChange={e => handleTitleChange(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-white/30 outline-none transition-colors"
                      placeholder="Project Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Slug</label>
                    <input 
                      required
                      value={currentProject?.slug || ''}
                      onChange={e => setCurrentProject(prev => ({ ...prev!, slug: e.target.value }))}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-white/30 outline-none transition-colors"
                      placeholder="project-slug"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Meta Title (SEO)</label>
                    <input 
                      value={currentProject?.metaTitle || ''}
                      onChange={e => setCurrentProject(prev => ({ ...prev!, metaTitle: e.target.value }))}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-white/30 outline-none transition-colors"
                      placeholder="SEO Title"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Meta Description (SEO)</label>
                    <input 
                      value={currentProject?.metaDescription || ''}
                      onChange={e => setCurrentProject(prev => ({ ...prev!, metaDescription: e.target.value }))}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-white/30 outline-none transition-colors"
                      placeholder="SEO Description"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Category</label>
                    <select 
                      value={currentProject?.category || 'Residential'}
                      onChange={e => setCurrentProject(prev => ({ ...prev!, category: e.target.value as any }))}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-white/30 outline-none transition-colors appearance-none"
                    >
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Cultural">Cultural</option>
                      <option value="Industrial">Industrial</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Year</label>
                    <input 
                      value={currentProject?.year || ''}
                      onChange={e => setCurrentProject(prev => ({ ...prev!, year: e.target.value }))}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-white/30 outline-none transition-colors"
                      placeholder="2024"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40">Short Description</label>
                  <textarea 
                    required
                    value={currentProject?.description || ''}
                    onChange={e => setCurrentProject(prev => ({ ...prev!, description: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-white/30 outline-none transition-colors min-h-[80px]"
                    placeholder="A short summary..."
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40">Long Description (one paragraph per line)</label>
                  <textarea 
                    value={currentProject?.longDescription?.join('\n') || ''}
                    onChange={e => setCurrentProject(prev => ({ ...prev!, longDescription: e.target.value.split('\n').filter(p => p.trim()) }))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-white/30 outline-none transition-colors min-h-[150px]"
                    placeholder="Detailed story..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40">Location</label>
                    <input 
                      value={currentProject?.location || ''}
                      onChange={e => setCurrentProject(prev => ({ ...prev!, location: e.target.value }))}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-white/30 outline-none transition-colors"
                      placeholder="City, Country"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40 flex items-center gap-2">
                      <ImageIcon size={14} /> Main Image URL
                    </label>
                    <input 
                      required
                      value={currentProject?.image || ''}
                      onChange={e => setCurrentProject(prev => ({ ...prev!, image: e.target.value }))}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-white/30 outline-none transition-colors"
                      placeholder="https://images.unsplash.com/..."
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40 flex items-center gap-2">
                      Image Alt Text
                    </label>
                    <input 
                      value={currentProject?.imageAlt || ''}
                      onChange={e => setCurrentProject(prev => ({ ...prev!, imageAlt: e.target.value }))}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-white/30 outline-none transition-colors"
                      placeholder="Descriptive alt text for accessibility"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 flex items-center gap-2">
                    <ImageIcon size={14} /> Gallery URLs (one per line)
                  </label>
                  <textarea 
                    value={currentProject?.gallery?.join('\n') || ''}
                    onChange={e => setCurrentProject(prev => ({ ...prev!, gallery: e.target.value.split('\n').filter(u => u.trim()) }))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-white/30 outline-none transition-colors min-h-[100px]"
                    placeholder="https://..."
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 flex items-center gap-2">
                    <Code size={14} /> Tags (comma separated)
                  </label>
                  <input 
                    value={currentProject?.tags?.join(', ') || ''}
                    onChange={e => setCurrentProject(prev => ({ ...prev!, tags: e.target.value.split(',').map(t => t.trim()).filter(t => t) }))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-white/30 outline-none transition-colors"
                    placeholder="Minimalist, Sustainable, Concrete"
                  />
                </div>

                <div className="space-y-4">
                  <label className="text-xs uppercase tracking-widest text-white/40 flex items-center gap-2">
                    <LinkIcon size={14} /> Project Links
                  </label>
                  {currentProject?.links?.map((link, i) => (
                    <div key={i} className="flex gap-4">
                      <input 
                        value={link.text}
                        onChange={e => {
                          const newLinks = [...(currentProject.links || [])];
                          newLinks[i].text = e.target.value;
                          setCurrentProject(prev => ({ ...prev!, links: newLinks }));
                        }}
                        className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 focus:border-white/30 outline-none"
                        placeholder="Link Text"
                      />
                      <input 
                        value={link.url}
                        onChange={e => {
                          const newLinks = [...(currentProject.links || [])];
                          newLinks[i].url = e.target.value;
                          setCurrentProject(prev => ({ ...prev!, links: newLinks }));
                        }}
                        className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 focus:border-white/30 outline-none"
                        placeholder="URL"
                      />
                      <button 
                        type="button"
                        onClick={() => {
                          const newLinks = (currentProject.links || []).filter((_, index) => index !== i);
                          setCurrentProject(prev => ({ ...prev!, links: newLinks }));
                        }}
                        className="p-2 text-red-500 hover:bg-red-500/10 rounded-full"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                  <button 
                    type="button"
                    onClick={() => setCurrentProject(prev => ({ ...prev!, links: [...(prev?.links || []), { text: '', url: '' }] }))}
                    className="text-xs text-primary hover:underline uppercase tracking-widest"
                  >
                    + Add Link
                  </button>
                </div>

                <div className="p-6 bg-white/5 rounded-3xl sticky bottom-0 border-t border-white/10">
                  <button 
                    type="submit"
                    className="w-full bg-white text-black py-4 rounded-2xl font-medium flex items-center justify-center gap-2 hover:bg-white/90 transition-colors"
                  >
                    <Save size={20} />
                    <span>{currentProject?.id ? 'Update Project' : 'Create Project'}</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
