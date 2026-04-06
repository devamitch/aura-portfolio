import React from 'react';
import { motion, useMotionValue } from 'motion/react';
import { ArrowUpRight, Share2, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Project } from '../hooks/useFirebaseProjects';

export function ProjectCard({ project, index, isLoading }: { project?: Project, index: number, isLoading?: boolean }) {
  const navigate = useNavigate();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  if (isLoading || !project) {
    return (
      <div className="relative h-[500px] rounded-3xl overflow-hidden bg-white/5 border border-white/5 animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute inset-0 p-8 flex flex-col justify-end gap-4">
          <div className="h-4 w-24 bg-white/10 rounded-full" />
          <div className="h-8 w-48 bg-white/10 rounded-xl" />
          <div className="h-4 w-32 bg-white/10 rounded-full" />
        </div>
      </div>
    );
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) / 20);
    y.set((e.clientY - centerY) / 20);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    const url = `${window.location.origin}/project/${project.id}`;
    if (navigator.share) {
      navigator.share({
        title: project.title,
        text: project.description,
        url: url,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(url);
    }
  };

  const bgImage = project.image || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop";

  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: (index % 4) * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => navigate(`/project/${project.slug}`)}
      className="relative h-[500px] rounded-3xl overflow-hidden group cursor-pointer border border-white/5 hover:border-primary/30 transition-all duration-500"
      aria-label={`View details for ${project.title}`}
    >
      <motion.div 
        className="absolute -inset-10 bg-cover bg-center transition-all duration-700 ease-out grayscale group-hover:grayscale-0 group-hover:scale-110"
        style={{ 
          backgroundImage: `url(${bgImage})`,
          x,
          y
        }}
        role="img"
        aria-label={project.imageAlt || project.title}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-all duration-500 group-hover:opacity-100" />
      
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <div className="flex justify-between items-end">
          <div className="flex-1 pr-4">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase block">
                {project.category}
              </span>
              <span className="text-white/20 text-[10px] font-bold tracking-widest uppercase">
                {project.year}
              </span>
            </div>
            <h3 className="text-3xl font-light text-white mb-3 uppercase tracking-tighter">{project.title}</h3>
            <p className="text-on-surface-variant text-sm max-w-sm line-clamp-2 font-light italic font-serif">
              {project.location}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <button 
              onClick={handleShare}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300"
              title="Share Project"
            >
              <Share2 size={18} />
            </button>
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white backdrop-blur-md group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all duration-300">
              <ArrowUpRight size={20} />
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
