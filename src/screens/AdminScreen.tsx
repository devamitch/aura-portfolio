import {
  Code,
  Edit2,
  Image as ImageIcon,
  Link as LinkIcon,
  Plus,
  Save,
  Trash2,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";
import { Project, useFirebaseProjects } from "../hooks/useFirebaseProjects";

export function AdminScreen() {
  const {
    projects,
    isLoading,
    addProject,
    updateProject,
    deleteProject,
    resetToDefaults,
  } = useFirebaseProjects();
  const [isEditing, setIsEditing] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const [currentProject, setCurrentProject] = useState<Partial<Project> | null>(
    null,
  );

  const handleReset = async () => {
    setIsResetting(true);
    try {
      await resetToDefaults.mutateAsync();
      alert("Sync successful! All projects have been reset to the consolidated 19-project dataset.");
    } catch (error) {
      console.error("Failed to reset projects:", error);
      alert("Sync failed. Check console for details.");
    } finally {
      setIsResetting(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentProject) return;

    // Ensure slug is present
    const projectToSave = {
      ...currentProject,
      slug:
        currentProject.slug ||
        currentProject.title
          ?.toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "") ||
        "",
      longDescription: currentProject.longDescription || [],
      gallery: currentProject.gallery || [],
      links: currentProject.links || [],
      stack: (currentProject as any).stack || [],
      badges: (currentProject as any).badges || [],
      techHighlights: (currentProject as any).techHighlights || [],
      features: (currentProject as any).features || [],
    };

    try {
      if (currentProject.id) {
        await updateProject.mutateAsync(projectToSave as Project);
      } else {
        await addProject.mutateAsync(projectToSave as Omit<Project, "id">);
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
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleTitleChange = (title: string) => {
    setCurrentProject((prev) => ({
      ...prev!,
      title,
      slug: prev?.id ? prev.slug : generateSlug(title),
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

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Loading Admin...
      </div>
    );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8 pt-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-light tracking-tight mb-2">
              Project Management
            </h1>
            <p className="text-white/40">
              Add, edit, or remove projects from your portfolio.
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleReset}
              disabled={isResetting}
              className="flex items-center gap-2 bg-white/5 text-white border border-white/10 px-6 py-3 rounded-full hover:bg-white/10 transition-colors disabled:opacity-50"
            >
              <ImageIcon size={20} />
              <span>{isResetting ? "Syncing..." : "Sync with Data"}</span>
            </button>
            <button
              onClick={() => {
                setCurrentProject({
                  title: "",
                  description: "",
                  role: "Founder · Independent Build",
                  type: "web",
                  color: "#8B5CF6",
                  sector: "Web AI/ML",
                  image: "",
                  year: new Date().getFullYear().toString(),
                  location: "Remote",
                  stack: [],
                  badges: [],
                  features: [],
                  techHighlights: [],
                  links: [],
                  longDescription: [],
                  gallery: []
                } as any);
                setIsEditing(true);
              }}
              className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full hover:bg-white/90 transition-colors"
            >
              <Plus size={20} />
              <span>New Project</span>
            </button>
          </div>
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
                <div className="flex justify-between items-start mb-2">
                  <div className="text-[9px] text-primary uppercase font-bold tracking-widest px-2 py-0.5 bg-primary/10 rounded-full">
                    {project.type}
                  </div>
                  <div className="text-[9px] text-white/40 uppercase font-bold tracking-widest">
                    {project.year}
                  </div>
                </div>
                <h3 className="text-xl font-medium mb-1">{project.title}</h3>
                <p className="text-xs text-white/40 mb-3 uppercase tracking-wider">{project.sector}</p>
                <p className="text-sm text-white/60 line-clamp-2 italic font-serif">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isEditing && (
          <div className="fixed inset-0 z-110 flex items-center justify-center p-4">
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
                <h2 className="text-2xl font-light">
                  {currentProject?.id ? "Edit Project" : "New Project"}
                </h2>
                <button
                  onClick={() => setIsEditing(false)}
                  className="p-2 hover:bg-white/5 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <form
                onSubmit={handleSave}
                className="p-8 space-y-6 overflow-y-auto"
              >
                {/* Identification */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Project Title</label>
                    <input
                      required
                      value={currentProject?.title || ""}
                      onChange={(e) => handleTitleChange(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary/50 outline-none transition-colors"
                      placeholder="e.g., Aura Studio"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Slug</label>
                    <input
                      required
                      value={currentProject?.slug || ""}
                      onChange={(e) => setCurrentProject(p => ({ ...p!, slug: e.target.value }))}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary/50 outline-none transition-colors"
                      placeholder="aura-studio"
                    />
                  </div>
                </div>

                {/* Platform Taxonomy */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Platform Type</label>
                    <select
                      value={(currentProject as any)?.type || "web"}
                      onChange={(e) => setCurrentProject(p => ({ ...p!, type: e.target.value as any }))}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary/50 outline-none transition-colors appearance-none"
                    >
                      <option value="web">Web</option>
                      <option value="mobile">Mobile</option>
                      <option value="desktop">Desktop</option>
                      <option value="web3">Web3</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Release Year</label>
                    <input
                      value={currentProject?.year || ""}
                      onChange={(e) => setCurrentProject(p => ({ ...p!, year: e.target.value }))}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary/50 outline-none transition-colors"
                      placeholder="2025"
                    />
                  </div>
                   <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Accent Color</label>
                    <input
                      type="color"
                      value={(currentProject as any)?.color || "#8B5CF6"}
                      onChange={(e) => setCurrentProject(p => ({ ...p!, color: e.target.value }))}
                      className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-2 py-2 focus:border-primary/50 outline-none transition-colors cursor-pointer"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Role Responsibilities</label>
                    <input
                      value={(currentProject as any)?.role || ""}
                      onChange={(e) => setCurrentProject(p => ({ ...p!, role: e.target.value }))}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary/50 outline-none transition-colors"
                      placeholder="e.g., Founder · Independent Build"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Engineering Sector</label>
                    <input
                      value={(currentProject as any)?.sector || ""}
                      onChange={(e) => setCurrentProject(p => ({ ...p!, sector: e.target.value }))}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary/50 outline-none transition-colors"
                      placeholder="e.g., Enterprise AI/ML"
                    />
                  </div>
                   <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Location</label>
                    <input
                      value={currentProject?.location || ""}
                      onChange={(e) => setCurrentProject(p => ({ ...p!, location: e.target.value }))}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary/50 outline-none transition-colors"
                      placeholder="Remote / Bangalore"
                    />
                  </div>
                </div>

                {/* Technical Narrative */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Short Description</label>
                  <textarea
                    required
                    value={currentProject?.description || ""}
                    onChange={(e) => setCurrentProject(p => ({ ...p!, description: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary/50 outline-none transition-colors min-h-[80px]"
                    placeholder="Short engineering-focused summary..."
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Architecture Deep Dive (Long Desc - one line per para)</label>
                  <textarea
                    value={currentProject?.longDescription?.join("\n") || ""}
                    onChange={(e) => setCurrentProject(p => ({ ...p!, longDescription: e.target.value.split("\n").filter(p => p.trim()) }))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary/50 outline-none transition-colors min-h-[150px]"
                    placeholder="Detailed architecture and process breakdown..."
                  />
                </div>

                {/* Tech Stack & UI Badges */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Tech Stack (comma separated)</label>
                    <input
                      value={(currentProject as any)?.stack?.join(", ") || ""}
                      onChange={(e) => setCurrentProject(p => ({ ...p!, stack: e.target.value.split(",").map(t => t.trim()).filter(t => t) }))}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary/50 outline-none transition-colors"
                      placeholder="React, Next.js, Gemini API..."
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Display Badges (comma separated)</label>
                    <input
                      value={(currentProject as any)?.badges?.join(", ") || ""}
                      onChange={(e) => setCurrentProject(p => ({ ...p!, badges: e.target.value.split(",").map(t => t.trim()).filter(t => t) }))}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary/50 outline-none transition-colors"
                      placeholder="Web App, Enterprise..."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Engineering Highlights (one per line)</label>
                  <textarea
                    value={(currentProject as any)?.techHighlights?.join("\n") || ""}
                    onChange={(e) => setCurrentProject(p => ({ ...p!, techHighlights: e.target.value.split("\n").filter(p => p.trim()) }))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary/50 outline-none transition-colors min-h-[120px]"
                    placeholder="Custom JSI modules for 60fps performance..."
                  />
                </div>

                {/* Assets */}
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Hero Asset URL</label>
                    <input
                      required
                      value={currentProject?.image || ""}
                      onChange={(e) => setCurrentProject(p => ({ ...p!, image: e.target.value }))}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary/50 outline-none transition-colors"
                      placeholder="Main display image URL"
                    />
                  </div>
                   <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">GitHub Source (Optional)</label>
                    <input
                      value={(currentProject as any)?.github || ""}
                      onChange={(e) => setCurrentProject(p => ({ ...p!, github: e.target.value }))}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary/50 outline-none transition-colors"
                      placeholder="https://github.com/..."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold flex items-center gap-2">
                    <ImageIcon size={14} /> Documentation Gallery (one per line)
                  </label>
                  <textarea
                    value={currentProject?.gallery?.join("\n") || ""}
                    onChange={(e) => setCurrentProject(p => ({ ...p!, gallery: e.target.value.split("\n").filter(u => u.trim()) }))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary/50 outline-none transition-colors min-h-[100px]"
                    placeholder="https://..."
                  />
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 flex items-center gap-2 font-bold">
                    <LinkIcon size={14} /> Production Links
                  </label>
                  {currentProject?.links?.map((link, i) => (
                    <div key={i} className="flex gap-4">
                      <input
                        value={link.text}
                        onChange={(e) => {
                          const newLinks = [...(currentProject.links || [])];
                          newLinks[i].text = e.target.value;
                          setCurrentProject(p => ({ ...p!, links: newLinks }));
                        }}
                        className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 focus:border-primary/50 outline-none"
                        placeholder="Link Label"
                      />
                      <input
                        value={link.url || ""}
                        onChange={(e) => {
                          const newLinks = [...(currentProject.links || [])];
                          newLinks[i].url = e.target.value;
                          setCurrentProject(p => ({ ...p!, links: newLinks }));
                        }}
                        className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 focus:border-primary/50 outline-none"
                        placeholder="https://..."
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const newLinks = (currentProject.links || []).filter((_, index) => index !== i);
                          setCurrentProject(p => ({ ...p!, links: newLinks }));
                        }}
                        className="p-2 text-red-500 hover:bg-red-500/10 rounded-full"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => setCurrentProject(p => ({ ...p!, links: [...(p?.links || []), { text: "", url: "" }] }))}
                    className="text-[10px] text-primary hover:underline uppercase tracking-widest font-bold"
                  >
                    + Add External Link
                  </button>
                </div>

                <div className="p-6 bg-white/5 rounded-3xl sticky bottom-0 border-t border-white/10 z-20 backdrop-blur-md">
                  <button
                    type="submit"
                    className="w-full bg-white text-black py-4 rounded-2xl font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-primary transition-all shadow-xl shadow-white/5"
                  >
                    <Save size={20} />
                    <span>{currentProject?.id ? "Deploy Update" : "Ship New Project"}</span>
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
