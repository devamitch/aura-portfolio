import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { GridIconPremium, ArrowUpRightPremium, ArrowUpPremium } from '../components/PremiumIcons';
import { Link, useNavigate } from 'react-router-dom';
import { useFirebaseProjects } from '../hooks/useFirebaseProjects';
import { ProjectCard } from '../components/ProjectCard';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { BlogSection } from '../components/BlogSection';
import { PROFILE_DATA } from '../data/projects';

/* ─── Liquid Glass Metric Card ─── */
interface MetricItem {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  rotation: number;
}

const metrics: MetricItem[] = [
  { value: 8, label: "Years Building", suffix: "+", rotation: -4 },
  { value: 83, label: "Projects Shipped", suffix: "+", rotation: 3 },
  { value: 50, label: "Users Impacted", suffix: "K+", rotation: -2 },
  { value: 99.9, label: "Uptime SLA", suffix: "%", decimals: 1, rotation: 5 },
];

function AnimatedCounter({ value, prefix = "", suffix = "", decimals = 0 }: Omit<MetricItem, 'rotation' | 'label'>) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const startTime = performance.now();
    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = value * eased;
      setDisplay(decimals > 0 ? current.toFixed(decimals) : Math.round(current).toString());
      if (progress < 1) requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }, [isInView, value, decimals]);

  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}

function LiquidGlassCard({ metric, index }: { metric: MetricItem; index: number }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMouse({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40, rotateZ: metric.rotation }}
      animate={{ opacity: 1, y: 0, rotateZ: metric.rotation }}
      transition={{ delay: 0.5 + index * 0.12, duration: 0.8, ease: [0.18, 1, 0.3, 1] }}
      whileHover={{ 
        rotateZ: 0, 
        scale: 1.08,
        y: -8,
        transition: { duration: 0.4 }
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMouse({ x: 0, y: 0 })}
      className="relative group cursor-default"
      style={{
        transform: `perspective(800px) rotateX(${mouse.y * -0.3}deg) rotateY(${mouse.x * 0.3}deg) rotateZ(${metric.rotation}deg)`,
        zIndex: 10 + index,
      }}
    >
      {/* Glass card body */}
      <div className="relative overflow-hidden rounded-2xl p-6 md:p-8"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
        }}
      >
        {/* Refraction glare */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${50 + mouse.x * 2}% ${50 + mouse.y * 2}%, rgba(249,139,80,0.12) 0%, transparent 60%)`,
          }}
        />
        
        {/* Top glass edge highlight */}
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
        
        <div className="relative z-10 text-center">
          <div className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-1">
            <AnimatedCounter {...metric} />
          </div>
          <div className="text-[9px] font-bold text-white/30 uppercase tracking-[0.3em]">
            {metric.label}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function HomeScreen() {
  const { projects = [], isLoading: loading } = useFirebaseProjects();
  const navigate = useNavigate();

  const featuredProjects = useMemo(() => projects.slice(0, 6), [projects]);

  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative"
    >
      {/* ═══════ HERO + METRICS (UNIFIED) ═══════ */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-40 pb-32 hero-gradient">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Title */}
          <div className="max-w-xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4"
            >
              <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">
                {PROFILE_DATA.roles[0]}
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.05] text-white mb-8"
            >
              Everything I've <br/>
              <span className="text-primary italic font-serif">built.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-on-surface-variant text-lg max-w-lg font-light leading-relaxed mb-10"
            >
              {PROFILE_DATA.tagline}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <Link 
                to="/projects"
                className="px-7 py-3.5 bg-white text-black font-bold rounded-full flex items-center gap-3 hover:bg-primary hover:scale-105 transition-all duration-300 shadow-xl shadow-white/5 text-sm"
              >
                Browse All Projects <GridIconPremium size={14} />
              </Link>
              <a 
                href={`mailto:${PROFILE_DATA.email}`}
                className="px-7 py-3.5 bg-white/5 border border-white/10 text-white font-bold rounded-full flex items-center gap-3 hover:bg-white/10 transition-all duration-300 text-sm"
              >
                Start a Project <ArrowUpRightPremium size={14} />
              </a>
            </motion.div>
          </div>

          {/* Right: Liquid Glass Tilted Metric Cards */}
          <div className="relative h-[380px] md:h-[420px]">
            {/* Background glow blob */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 h-72 bg-primary/8 blur-[100px] rounded-full" />
            </div>
            
            {/* Stacked tilted cards */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 md:gap-5 w-full max-w-md">
                {metrics.map((metric, i) => (
                  <LiquidGlassCard key={metric.label} metric={metric} index={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ FEATURED PROJECTS ═══════ */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-[10px] font-bold text-primary uppercase tracking-[0.5em]">
                Featured Work
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              Selected Projects
            </h2>
          </div>
          <p className="text-on-surface-variant text-sm max-w-sm text-right hidden md:block">
            Production systems that demonstrate scale, complexity, and real-world impact.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {Array.from({ length: 6 }).map((_, idx) => (
              <ProjectCard key={`skeleton-${idx}`} index={idx} isLoading={true} />
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {featuredProjects.map((project: any, idx: number) => (
                <ProjectCard 
                  key={project.id || project.slug || idx}
                  project={project}
                  index={idx}
                />
              ))}
            </div>
            <div className="flex justify-center">
              <button 
                onClick={() => navigate('/projects')}
                className="group flex items-center gap-3 px-8 py-4 bg-surface-highest border border-white/10 rounded-full text-white font-bold hover:bg-white hover:text-black transition-all duration-300"
              >
                View All {projects.length} Projects
                <ArrowUpRightPremium className="group-hover:rotate-45 transition-transform" size={18} />
              </button>
            </div>
          </>
        )}
      </section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <TestimonialsSection />

      {/* ═══════ BLOG ═══════ */}
      <BlogSection />

      {/* ═══════ FOOTER CTA ═══════ */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative text-center rounded-[2.5rem] px-8 py-20 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {/* Glow accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />
          
          <p className="text-primary text-[10px] font-bold tracking-[0.5em] uppercase mb-6">Let's Build</p>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6">
            Have a project in mind?
          </h2>
          <p className="text-white/40 text-sm max-w-md mx-auto mb-10 leading-relaxed">
            I build production systems from zero. If you have a vision, let's turn it into something real.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={`mailto:${PROFILE_DATA.email}`}
              className="px-10 py-4 bg-primary text-black font-bold rounded-full hover:scale-105 transition-all duration-300"
            >
              Get in Touch
            </a>
            <a 
              href="https://devamit.co.in" 
              target="_blank" 
              rel="noreferrer"
              className="px-10 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300"
            >
              About Me →
            </a>
          </div>
        </motion.div>
      </section>

      {/* ═══════ SCROLL TO TOP ═══════ */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-primary text-black rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
          >
            <ArrowUpPremium size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.main>
  );
}
