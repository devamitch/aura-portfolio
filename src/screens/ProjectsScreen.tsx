import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, Filter, ArrowUp } from 'lucide-react';
import { useFirebaseProjects } from '../hooks/useFirebaseProjects';
import { ProjectCard } from '../components/ProjectCard';

export function ProjectsScreen() {
  const { projects = [], isLoading: loading } = useFirebaseProjects();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [yearRange, setYearRange] = useState<{ min: string, max: string }>({ min: '', max: '' });
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const categories = useMemo(() => Array.from(new Set(projects.map((p: any) => p.category).filter(Boolean))), [projects]);
  const allTags = useMemo(() => Array.from(new Set(projects.flatMap((p: any) => p.tags || []))).filter(Boolean), [projects]);
  const years = useMemo(() => Array.from(new Set(projects.map((p: any) => p.year).filter(Boolean))).sort((a, b) => b.localeCompare(a)), [projects]);

  const filteredProjects = useMemo(() => {
    const filtered = projects.filter((p: any) => {
      const categoryMatch = selectedCategories.length === 0 || (p.category && selectedCategories.includes(p.category));
      const tagMatch = selectedTags.length === 0 || (Array.isArray(p.tags) && selectedTags.every(tag => p.tags.includes(tag)));
      
      const pYear = parseInt(p.year || '0');
      const minYear = yearRange.min ? parseInt(yearRange.min) : 0;
      const maxYear = yearRange.max ? parseInt(yearRange.max) : 9999;
      const yearMatch = pYear >= minYear && pYear <= maxYear;
      
      const searchMatch = !searchQuery || 
        p.title?.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.location?.toLowerCase().includes(searchQuery.toLowerCase());

      return categoryMatch && tagMatch && yearMatch && searchMatch;
    });

    return [...filtered].sort((a, b) => {
      const yearA = a.year || '';
      const yearB = b.year || '';
      return sortOrder === 'desc' ? yearB.localeCompare(yearA) : yearA.localeCompare(yearB);
    });
  }, [projects, selectedCategories, selectedTags, yearRange, searchQuery, sortOrder]);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative pt-32 pb-32 min-h-screen bg-black"
    >
      <section className="max-w-7xl mx-auto px-6 lg:px-12 min-h-[calc(100vh-200px)] flex flex-col">
        <div className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8">
            <h1 className="text-5xl md:text-8xl font-light text-white tracking-tighter uppercase">
              Portfolio
            </h1>
            
            <div className="relative w-full md:w-96 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors" size={18} />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects, locations, or descriptions..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white outline-none focus:border-primary/50 transition-all placeholder:text-white/20"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-colors"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] flex items-center gap-2">
                <Filter size={12} /> Sector
              </h3>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setSelectedCategories([])}
                  className={`px-5 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300 ${
                    selectedCategories.length === 0 
                      ? 'bg-primary text-black' 
                      : 'bg-white/5 border border-white/10 text-white/60 hover:border-white/30'
                  }`}
                >
                  All Sectors
                </button>
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => toggleCategory(category)}
                    className={`px-5 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300 ${
                      selectedCategories.includes(category) 
                        ? 'bg-primary text-black' 
                        : 'bg-white/5 border border-white/10 text-white/60 hover:border-white/30'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em]">Specialization</h3>
              <div className="flex flex-wrap gap-3">
                {allTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-4 py-1.5 rounded-full text-[9px] font-bold tracking-widest uppercase transition-all duration-300 ${
                      selectedTags.includes(tag) 
                        ? 'bg-white text-black' 
                        : 'bg-white/5 border border-white/10 text-white/40 hover:text-white hover:border-white/30'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em]">Timeline</h3>
              <div className="flex items-center gap-4">
                <div className="flex flex-col gap-1 flex-1">
                  <label className="text-[8px] uppercase tracking-widest text-white/30">From</label>
                  <select 
                    value={yearRange.min}
                    onChange={(e) => setYearRange(prev => ({ ...prev, min: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-[10px] text-white outline-none focus:border-primary/50"
                  >
                    <option value="">Any</option>
                    {[...years].reverse().map(y => <option key={y} value={y}>{y}</option>)}
                  </select>
                </div>
                <div className="flex flex-col gap-1 flex-1">
                  <label className="text-[8px] uppercase tracking-widest text-white/30">To</label>
                  <select 
                    value={yearRange.max}
                    onChange={(e) => setYearRange(prev => ({ ...prev, max: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-[10px] text-white outline-none focus:border-primary/50"
                  >
                    <option value="">Any</option>
                    {years.map(y => <option key={y} value={y}>{y}</option>)}
                  </select>
                </div>
              </div>
            </div>

            {(selectedCategories.length > 0 || selectedTags.length > 0 || yearRange.min || yearRange.max || searchQuery) && (
              <button 
                onClick={() => { setSelectedCategories([]); setSelectedTags([]); setYearRange({ min: '', max: '' }); setSearchQuery(''); }}
                className="w-full mt-8 py-4 bg-primary text-black rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20"
              >
                Clear All Filters
              </button>
            )}
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {Array.from({ length: 6 }).map((_, idx) => (
              <ProjectCard key={`skeleton-${idx}`} index={idx} isLoading={true} />
            ))}
          </div>
        ) : (
          <>
            <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-4">
              <div className="flex items-center gap-6">
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                  Showing {filteredProjects.length} Works
                </span>
                <div className="flex bg-white/5 p-1 rounded-full border border-white/10">
                  <button 
                    onClick={() => setSortOrder('desc')}
                    className={`px-4 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest transition-all ${sortOrder === 'desc' ? 'bg-white text-black' : 'text-white/40 hover:text-white'}`}
                  >
                    Newest
                  </button>
                  <button 
                    onClick={() => setSortOrder('asc')}
                    className={`px-4 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest transition-all ${sortOrder === 'asc' ? 'bg-white text-black' : 'text-white/40 hover:text-white'}`}
                  >
                    Oldest
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {filteredProjects.map((project: any, idx: number) => (
                <ProjectCard 
                  key={project.id || project.slug || idx}
                  project={project}
                  index={idx}
                />
              ))}
            </div>
            {filteredProjects.length === 0 && (
              <div className="py-32 text-center">
                <p className="text-white/40 uppercase tracking-widest font-light">No projects match the selected criteria.</p>
              </div>
            )}
          </>
        )}
      </section>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-primary text-black rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.main>
  );
}
