import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Brain, ExternalLink, MapPin, Calendar, Layers } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';
import { GoogleGenAI } from '@google/genai';
import { useFirebaseProjects } from '../hooks/useFirebaseProjects';
import { ProjectCard } from '../components/ProjectCard';
import { AiDisclaimerModal } from '../components/AiDisclaimerModal';

export function DetailScreen() {
  const { slug } = useParams();
  const { projects = [], isLoading: loading } = useFirebaseProjects();
  const project = projects.find(p => p.slug === slug);
  const projectIndex = projects.findIndex(p => p.slug === slug);
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  const [aiSummary, setAiSummary] = useState<string | null>(null);
  const [isGeneratingSummary, setIsGeneratingSummary] = useState(false);
  const [showAiModal, setShowAiModal] = useState(false);

  useEffect(() => {
    if (project) {
      document.title = project.metaTitle || `${project.title} | Architectural Portfolio`;
      
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', project.metaDescription || project.description);
      } else {
        const meta = document.createElement('meta');
        meta.name = "description";
        meta.content = project.metaDescription || project.description;
        document.head.appendChild(meta);
      }
    }
    
    return () => {
      document.title = 'Architectural Portfolio';
    };
  }, [project]);

  useEffect(() => {
    const generateSummary = async () => {
      if (!project || aiSummary) return;
      
      setIsGeneratingSummary(true);
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
        const response = await ai.models.generateContent({
          model: "gemini-3-flash-preview",
          contents: `Summarize the following architectural project in 2-3 concise sentences, highlighting its design philosophy and structural achievements. Do not use markdown formatting.
          
          Project Name: ${project.title}
          Description: ${project.description}
          Category: ${project.category}
          Location: ${project.location}
          Tags: ${project.tags?.join(', ')}`
        });
        setAiSummary(response.text || "Summary generation failed.");
      } catch (error) {
        console.error("Failed to generate AI summary:", error);
        setAiSummary("AI summary generation is currently unavailable.");
      } finally {
        setIsGeneratingSummary(false);
      }
    };

    generateSummary();
  }, [project, aiSummary]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-6 bg-black">
        <h1 className="text-4xl font-light text-white uppercase tracking-widest">Project Not Found</h1>
        <Link to="/" className="text-primary hover:underline uppercase tracking-widest text-xs">Return Home</Link>
      </div>
    );
  }

  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="relative pt-32 pb-24 min-h-screen bg-black"
    >
      <section className="max-w-4xl mx-auto px-6 mb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4"
        >
          <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">
            {project.category}
          </span>
        </motion.div>
        <h1 className="text-5xl md:text-8xl font-light tracking-tighter text-white mb-8 uppercase">
          {project.title}
        </h1>
        <p className="text-on-surface-variant text-xl font-light leading-relaxed mb-8 italic font-serif">
          {project.location} — {project.year}
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 mb-32">
        <div className="aspect-[21/9] rounded-3xl overflow-hidden mb-16 border border-white/10 group relative">
          <img src={project.image} alt={project.imageAlt || project.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-2xl font-light text-white mb-8 uppercase tracking-widest border-b border-white/10 pb-4 inline-block">Design Narrative</h2>
              <div className="space-y-8 text-on-surface-variant leading-relaxed font-light text-lg">
                {project.longDescription && project.longDescription.length > 0 ? (
                  project.longDescription.map((para, i) => (
                    <p key={i} className="first-letter:text-4xl first-letter:font-serif first-letter:text-primary first-letter:mr-2 first-letter:float-left">
                      {para}
                    </p>
                  ))
                ) : (
                  <p>{project.description}</p>
                )}
              </div>
            </div>

            {/* Gallery Section */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="pt-12">
                <h2 className="text-2xl font-light text-white mb-8 uppercase tracking-widest border-b border-white/10 pb-4 inline-block">Visual Documentation</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.gallery.map((img, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ scale: 1.02 }}
                      className="aspect-square rounded-2xl overflow-hidden border border-white/10"
                    >
                      <img src={img} alt={`${project.title} gallery ${i}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-12">
            {/* AI Summary Section */}
            <div className="bg-white/5 p-8 rounded-3xl border border-primary/20 backdrop-blur-sm">
              <h3 className="text-[10px] font-bold text-white uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                <Brain size={14} className="text-primary" /> AI Design Insight
              </h3>
              <div className="space-y-4">
                {isGeneratingSummary ? (
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                    <span className="ml-2 text-[10px] uppercase tracking-widest">Synthesizing...</span>
                  </div>
                ) : (
                  <>
                    <p className="text-sm text-on-surface-variant leading-relaxed font-light italic">
                      "{aiSummary}"
                    </p>
                    <button 
                      onClick={() => setShowAiModal(true)}
                      className="text-[9px] text-on-surface-variant/40 mt-4 uppercase tracking-widest hover:text-primary transition-colors underline decoration-dashed underline-offset-4 text-left"
                    >
                      AI summaries are for informational purposes.
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Project Links */}
            {project.links && project.links.length > 0 && (
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                <h3 className="text-[10px] font-bold text-white uppercase tracking-[0.3em] mb-6">Resources</h3>
                <div className="space-y-4">
                  {project.links.map((link, i) => (
                    <a 
                      key={i} 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between group p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                    >
                      <span className="text-sm text-on-surface-variant group-hover:text-white transition-colors">{link.text}</span>
                      <ExternalLink size={14} className="text-primary opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0" />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Materiality & Tech */}
            {project.tags && project.tags.length > 0 && (
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                <h3 className="text-[10px] font-bold text-white uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                  <Layers size={14} className="text-primary" /> Materiality & Tech
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tech => (
                    <div key={tech} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[9px] font-bold text-white/60 uppercase tracking-widest hover:border-primary/50 transition-all duration-300">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Interactive Map Section */}
        <div className="mt-32">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-light text-white uppercase tracking-widest border-b border-white/10 pb-4 inline-block">Project Location</h2>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                <MapPin size={16} className="text-primary" />
                <span>{project.location}</span>
              </div>
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(project.location)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-white/60 uppercase tracking-widest hover:bg-white/10 hover:text-white transition-all flex items-center gap-2"
              >
                View on Google Maps <ExternalLink size={12} />
              </a>
            </div>
          </div>
          <div className="w-full h-[450px] rounded-3xl overflow-hidden border border-white/10 grayscale contrast-125 hover:grayscale-0 transition-all duration-700 shadow-2xl">
            <iframe 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              style={{ border: 0 }}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(project.location)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Project Location Map"
            ></iframe>
          </div>
        </div>

        {/* Project Navigation */}
        <div className="mt-32 flex flex-col md:flex-row gap-8 border-t border-white/10 pt-16">
          {prevProject && (
            <Link 
              to={`/project/${prevProject.slug}`}
              className="flex-1 group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all"
            >
              <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-4 block">Previous Project</span>
              <h4 className="text-2xl font-light text-white uppercase tracking-tighter group-hover:text-primary transition-colors">{prevProject.title}</h4>
            </Link>
          )}
          {nextProject && (
            <Link 
              to={`/project/${nextProject.slug}`}
              className="flex-1 group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all text-right"
            >
              <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-4 block">Next Project</span>
              <h4 className="text-2xl font-light text-white uppercase tracking-tighter group-hover:text-primary transition-colors">{nextProject.title}</h4>
            </Link>
          )}
        </div>
      </section>

      {/* Related Projects */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-32">
        <h2 className="text-xl font-light text-white mb-8 uppercase tracking-[0.2em]">Related Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects
            .filter(p => p.slug !== project.slug && p.category === project.category)
            .slice(0, 2)
            .map((relatedProject, index) => (
              <ProjectCard key={relatedProject.id || relatedProject.slug || index} project={relatedProject} index={index} />
            ))}
        </div>
      </section>

      <AiDisclaimerModal isOpen={showAiModal} onClose={() => setShowAiModal(false)} />
    </motion.main>
  );
}
