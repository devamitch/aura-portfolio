import { ArrowUpRight, Share2 } from "lucide-react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "motion/react";
import React, { useState, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Project } from "../hooks/useFirebaseProjects";

export function ProjectCard({
  project,
  index,
  isLoading,
  layout = "grid",
}: {
  project?: Project;
  index: number;
  isLoading?: boolean;
  layout?: "grid" | "list";
}) {
  const navigate = useNavigate();
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const [isHovered, setIsHovered] = useState(false);

  // Smooth tilt transforms
  const rotateX = useTransform(mouseY, [0, 1], [4, -4]);
  const rotateY = useTransform(mouseX, [0, 1], [-4, 4]);
  const glareX = useTransform(mouseX, [0, 1], [0, 100]);
  const glareY = useTransform(mouseY, [0, 1], [0, 100]);

  if (isLoading || !project) {
    return (
      <div className={`relative ${layout === "grid" ? "h-[480px]" : "h-32"} rounded-3xl overflow-hidden bg-white/5 border border-white/5`}>
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-8 left-8 space-y-4">
          <div className="h-3 w-24 bg-white/10 rounded-full animate-pulse" />
          <div className="h-8 w-56 bg-white/8 rounded-lg animate-pulse" />
          <div className="h-3 w-48 bg-white/5 rounded-full animate-pulse" />
        </div>
      </div>
    );
  }

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (layout === "list" || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }, [layout, mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0.5);
    mouseY.set(0.5);
    setIsHovered(false);
  }, [mouseX, mouseY]);

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    const url = `${window.location.origin}/project/${project.slug}`;
    if (navigator.share) {
      navigator.share({ title: project.title, text: project.description, url }).catch(() => {});
    } else {
      navigator.clipboard.writeText(url);
    }
  };

  const bgImage = project.image || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop";
  const accentColor = project.color || "#C9A84C";

  /* ───── LIST LAYOUT ───── */
  if (layout === "list") {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        onClick={() => navigate(`/project/${project.slug}`)}
        className="group relative flex items-center justify-between p-8 rounded-3xl bg-white/2 border border-white/5 hover:border-primary/30 transition-all duration-500 cursor-pointer"
      >
        <div className="flex items-center gap-8">
          <div className="text-white/10 font-black text-2xl tracking-tighter w-12 italic">
            {(index + 1).toString().padStart(2, '0')}
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-2xl font-light text-white uppercase tracking-tighter group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <span className="text-[10px] text-white/20 font-bold uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded">
                {project.year}
              </span>
            </div>
            <p className="text-white/40 text-xs uppercase tracking-widest font-medium">
              {project.role} · {project.type}
            </p>
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-12 text-right">
          <div className="space-y-1">
            <div className="text-[9px] text-white/20 uppercase tracking-[0.3em] font-bold">Tech Stack</div>
            <div className="flex gap-2">
              {project.stack.slice(0, 3).map((s, i) => (
                <span key={i} className="text-[10px] text-white/60">{s}</span>
              ))}
            </div>
          </div>
          <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/20 group-hover:text-primary group-hover:border-primary/50 transition-all">
            <ArrowUpRight size={20} />
          </div>
        </div>
      </motion.div>
    );
  }

  /* ───── GRID LAYOUT ───── */
  return (
    <motion.article
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => navigate(`/project/${project.slug}`)}
      style={{
        rotateX: layout === "grid" ? rotateX : 0,
        rotateY: layout === "grid" ? rotateY : 0,
        transformPerspective: 1200,
      }}
      className="relative h-[480px] rounded-4xl overflow-hidden group cursor-pointer will-change-transform"
      aria-label={`View details for ${project.title}`}
    >
      {/* Background Image with parallax */}
      <motion.div
        className="absolute -inset-6 bg-cover bg-center transition-transform duration-[1.2s] ease-out group-hover:scale-110"
        style={{ backgroundImage: `url(${bgImage})` }}
        role="img"
        aria-label={project.title}
      />

      {/* Multi-layer gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-black/10 transition-opacity duration-700" />
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700"
        style={{ background: `linear-gradient(135deg, ${accentColor}20, transparent 70%)` }}
      />

      {/* Holographic glare effect on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.06 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(600px circle at ${glareX.get()}% ${glareY.get()}%, rgba(255,255,255,0.15), transparent 40%)`,
            }}
          />
        )}
      </AnimatePresence>

      {/* Top bar: type badge + share */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <span 
            className="px-3 py-1.5 rounded-full text-[9px] font-bold tracking-[0.2em] uppercase backdrop-blur-xl border"
            style={{ 
              backgroundColor: `${accentColor}15`,
              borderColor: `${accentColor}30`,
              color: accentColor,
            }}
          >
            {project.type}
          </span>
          <span className="text-white/30 text-[9px] font-black tracking-widest uppercase">
            {project.year}
          </span>
        </div>
        <motion.button
          onClick={handleShare}
          whileHover={{ scale: 1.15, rotate: 8 }}
          whileTap={{ scale: 0.9 }}
          className="w-9 h-9 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white/30 hover:text-white hover:bg-white/15 transition-all opacity-0 group-hover:opacity-100"
        >
          <Share2 size={14} />
        </motion.button>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
        {/* Category dot + sector */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
          <span className="text-[9px] text-white/30 font-bold uppercase tracking-[0.3em]">
            {project.sector?.split(' ').slice(0, 2).join(' · ')}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-3xl md:text-4xl font-black text-white mb-3 uppercase tracking-tight leading-none">
          <span className="italic group-hover:not-italic transition-all duration-500">
            {project.title}
          </span>
        </h3>

        {/* Description */}
        <p className="text-white/40 text-sm mb-5 line-clamp-2 max-w-md group-hover:text-white/60 transition-colors duration-500 leading-relaxed">
          {project.description}
        </p>

        {/* Badges */}
        <div className="flex flex-wrap gap-1.5 mb-0 group-hover:mb-5 transition-all duration-500">
          {project.badges.map((badge, i) => (
            <span
              key={i}
              className="text-[8px] px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-white/35 uppercase tracking-[0.15em] font-semibold"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Reveal tech stack on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-white/8 flex flex-wrap gap-3">
                {project.stack.slice(0, 5).map((tech, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <div className="w-1 h-1 rounded-full" style={{ backgroundColor: accentColor }} />
                    <span className="text-[10px] text-white/50 uppercase tracking-widest font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Explore arrow button — bottom right */}
      <div className="absolute bottom-8 right-8 z-10">
        <motion.div 
          className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 border"
          style={{
            borderColor: isHovered ? `${accentColor}60` : 'rgba(255,255,255,0.08)',
            color: isHovered ? accentColor : 'rgba(255,255,255,0.15)',
            backgroundColor: isHovered ? `${accentColor}10` : 'transparent',
          }}
          animate={{ scale: isHovered ? 1.1 : 1 }}
        >
          <ArrowUpRight size={22} />
        </motion.div>
      </div>

      {/* Border glow on hover */}
      <div 
        className="absolute inset-0 rounded-4xl pointer-events-none transition-all duration-700 border"
        style={{
          borderColor: isHovered ? `${accentColor}25` : 'rgba(255,255,255,0.04)',
        }}
      />
    </motion.article>
  );
}
