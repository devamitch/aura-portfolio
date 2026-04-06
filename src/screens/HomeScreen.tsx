import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BoxIconPremium, GridIconPremium, TrophyIconPremium, MailIconPremium, ArrowUpRightPremium, ArrowUpPremium } from '../components/PremiumIcons';
import { Link, useNavigate } from 'react-router-dom';
import { useFirebaseProjects } from '../hooks/useFirebaseProjects';
import { ProjectCard } from '../components/ProjectCard';
import { JournalEntry } from '../components/JournalEntry';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function HomeScreen() {
  const { projects = [], isLoading: loading } = useFirebaseProjects();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [yearRange, setYearRange] = useState<{ min: string, max: string }>({ min: '', max: '' });
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    gsap.fromTo(heroRef.current.querySelectorAll('h1, p, .flex'), 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        stagger: 0.2, 
        ease: 'power3.out' 
      }
    );

    ScrollTrigger.batch(projectsRef.current?.querySelectorAll('article') || [], {
      onEnter: (elements) => {
        gsap.fromTo(elements, 
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
        );
      },
      once: true
    });
  }, [projects]);

  // Extract unique categories, tags, and years
  const categories = useMemo(() => Array.from(new Set(projects.map((p: any) => p.category).filter(Boolean))), [projects]);
  const allTags = useMemo(() => Array.from(new Set(projects.flatMap((p: any) => p.tags || []))).filter(Boolean).slice(0, 10), [projects]);
  const years = useMemo(() => Array.from(new Set(projects.map((p: any) => p.year).filter(Boolean))).sort((a, b) => b.localeCompare(a)), [projects]);

  const filteredProjects = useMemo(() => {
    const filtered = projects.filter((p: any) => {
      const categoryMatch = selectedCategories.length === 0 || (p.category && selectedCategories.includes(p.category));
      const tagMatch = selectedTags.length === 0 || (Array.isArray(p.tags) && selectedTags.every(tag => p.tags.includes(tag)));
      
      const pYear = parseInt(p.year || '0');
      const minYear = yearRange.min ? parseInt(yearRange.min) : 0;
      const maxYear = yearRange.max ? parseInt(yearRange.max) : 9999;
      const yearMatch = pYear >= minYear && pYear <= maxYear;

      return categoryMatch && tagMatch && yearMatch;
    });

    return [...filtered].sort((a, b) => {
      const yearA = a.year || '';
      const yearB = b.year || '';
      return sortOrder === 'desc' ? yearB.localeCompare(yearA) : yearA.localeCompare(yearB);
    });
  }, [projects, selectedCategories, selectedTags, yearRange, sortOrder]);

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
      className="relative pt-32"
    >
      {/* Premium Hero Section */}
      <section ref={heroRef} className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-32 flex flex-col lg:flex-row items-center gap-16">
        {/* Left Content */}
        <div className="flex-1 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">
              Principal Design Studio
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-light tracking-tighter leading-[1.05] text-white mb-8 uppercase"
          >
            Aura <br/>
            <span className="text-primary italic font-serif">Architect</span> <br/>
            Studio
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-on-surface-variant text-lg md:text-xl max-w-xl font-light leading-relaxed mb-12"
          >
            Crafting timeless spaces where geometric precision meets human emotion. We design the future of residential and commercial landscapes.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4"
          >
            <div className="flex -space-x-3">
              <img src="https://i.pravatar.cc/100?img=1" alt="User" className="w-10 h-10 rounded-full border-2 border-background" />
              <img src="https://i.pravatar.cc/100?img=2" alt="User" className="w-10 h-10 rounded-full border-2 border-background" />
              <img src="https://i.pravatar.cc/100?img=3" alt="User" className="w-10 h-10 rounded-full border-2 border-background" />
            </div>
            <div>
              <div className="text-white font-bold text-sm">50K+</div>
              <div className="text-[10px] text-on-surface-variant tracking-widest uppercase font-bold">Active Users</div>
            </div>
          </motion.div>
        </div>

        {/* Right Floating Cards */}
        <div className="flex-1 relative w-full h-[400px] hidden lg:block">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, type: "spring" }}
            className="absolute top-0 right-0 w-80 bg-surface-highest border border-white/5 p-6 rounded-2xl shadow-2xl"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                <BoxIconPremium size={20} />
              </div>
              <span className="text-[10px] text-on-surface-variant font-mono">APP_ID : 0x02</span>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Core Framework</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Engineered for extreme scalability and atomic reliability.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="absolute bottom-10 left-10 w-80 bg-surface-highest border border-white/5 p-6 rounded-2xl shadow-2xl"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white">
                <GridIconPremium size={20} />
              </div>
              <span className="text-[10px] text-primary font-bold tracking-widest uppercase">Live Now</span>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">18+ Live Apps</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Successfully deployed across global infrastructure nodes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pill Navigation */}
      <div className="flex justify-center mb-32">
        <div className="flex items-center gap-2 bg-surface-highest border border-white/5 rounded-full p-2 shadow-xl">
          <button className="flex flex-col items-center gap-1 px-6 py-2 text-primary">
            <BoxIconPremium size={16} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Studio</span>
          </button>
          <Link to="/projects" className="flex flex-col items-center gap-1 px-6 py-2 text-on-surface-variant hover:text-white transition-colors">
            <GridIconPremium size={16} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Projects</span>
          </Link>
          <button className="flex flex-col items-center gap-1 px-6 py-2 text-on-surface-variant hover:text-white transition-colors">
            <TrophyIconPremium size={16} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Awards</span>
          </button>
          <button className="flex flex-col items-center gap-1 px-6 py-2 text-on-surface-variant hover:text-white transition-colors">
            <MailIconPremium size={16} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Contact</span>
          </button>
        </div>
      </div>

      {/* Selected Projects */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight inline-block relative mb-6">
              Selected Projects
              <div className="absolute -bottom-4 left-0 w-1/2 h-1 bg-primary"></div>
            </h2>
            
            {/* Filter Chips - Category */}
            <div className="flex flex-wrap gap-3 mt-8">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => { setSelectedCategories([]); setSelectedTags([]); setYearRange({ min: '', max: '' }); }}
                className={`px-5 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300 ${
                  selectedCategories.length === 0 && selectedTags.length === 0 && !yearRange.min && !yearRange.max
                    ? 'bg-primary text-black ring-2 ring-primary/50' 
                    : 'bg-white/5 border border-white/10 text-white/60 hover:border-white/30'
                }`}
              >
                All Projects
              </motion.button>
              {categories.map(category => (
                <motion.button
                  key={category}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => toggleCategory(category)}
                  className={`px-5 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300 ${
                    selectedCategories.includes(category) 
                      ? 'bg-primary text-black ring-2 ring-primary/50' 
                      : 'bg-white/5 border border-white/10 text-white/60 hover:border-white/30'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>

            {/* Filter Chips - Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {allTags.map(tag => (
                <motion.button
                  key={tag}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => toggleTag(tag)}
                  className={`px-3 py-1.5 rounded-full text-[9px] font-bold tracking-widest uppercase transition-all duration-300 ${
                    selectedTags.includes(tag) 
                      ? 'bg-white text-black ring-2 ring-white/50' 
                      : 'bg-transparent border border-white/10 text-white/40 hover:text-white hover:border-white/30'
                  }`}
                >
                  {tag}
                </motion.button>
              ))}
            </div>

            {/* Filter Chips - Years Range */}
            <div className="flex items-center gap-4 mt-4">
              <div className="flex flex-col gap-1">
                <label className="text-[8px] uppercase tracking-widest text-white/30">From</label>
                <select 
                  value={yearRange.min}
                  onChange={(e) => setYearRange(prev => ({ ...prev, min: e.target.value }))}
                  className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-[10px] text-white outline-none focus:border-primary/50"
                >
                  <option value="">Any</option>
                  {[...years].reverse().map(y => <option key={y} value={y}>{y}</option>)}
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[8px] uppercase tracking-widest text-white/30">To</label>
                <select 
                  value={yearRange.max}
                  onChange={(e) => setYearRange(prev => ({ ...prev, max: e.target.value }))}
                  className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-[10px] text-white outline-none focus:border-primary/50"
                >
                  <option value="">Any</option>
                  {years.map(y => <option key={y} value={y}>{y}</option>)}
                </select>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-4">
            <div className="flex bg-white/5 p-1 rounded-full border border-white/10">
              <button 
                onClick={() => setSortOrder('desc')}
                className={`px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest transition-all ${sortOrder === 'desc' ? 'bg-white text-black' : 'text-white/40 hover:text-white'}`}
              >
                Newest
              </button>
              <button 
                onClick={() => setSortOrder('asc')}
                className={`px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest transition-all ${sortOrder === 'asc' ? 'bg-white text-black' : 'text-white/40 hover:text-white'}`}
              >
                Oldest
              </button>
            </div>
            <p className="text-on-surface-variant text-sm max-w-sm text-right hidden md:block">
              A curated selection of architectural milestones that redefined structural digital paradigms.
            </p>
          </div>
        </div>

        {loading ? (
          <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {Array.from({ length: 4 }).map((_, idx) => (
              <ProjectCard key={`skeleton-${idx}`} index={idx} isLoading={true} />
            ))}
          </div>
        ) : (
          <>
            <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {filteredProjects.slice(0, 4).map((project: any, idx: number) => (
                <ProjectCard 
                  key={project.id || project.slug || idx}
                  project={project}
                  index={idx}
                />
              ))}
            </div>
            
            {/* View All Projects Button */}
            <div className="flex justify-center">
              <button 
                onClick={() => navigate('/projects')}
                className="group flex items-center gap-3 px-8 py-4 bg-surface-highest border border-white/10 rounded-full text-white font-bold hover:bg-white hover:text-black transition-all duration-300"
              >
                View All Projects
                <ArrowUpRightPremium className="group-hover:rotate-45 transition-transform" size={18} />
              </button>
            </div>
          </>
        )}
      </section>

      {/* Journal & Writing */}
      <section className="max-w-5xl mx-auto px-6 lg:px-12 mb-32">
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-on-surface-variant">
            Journal & Writing
          </span>
        </div>
        
        <div className="flex flex-col">
          <JournalEntry date="01 / 2024" title="The Death of the Dashboard" tag="UX STRATEGY" />
          <JournalEntry date="11 / 2023" title="Monolithic vs Micro-frontends" tag="ARCHITECTURE" />
          <JournalEntry date="09 / 2023" title="Aesthetics of Latency" tag="DESIGN THEORY" />
        </div>
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
            <ArrowUpPremium size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.main>
  );
}
