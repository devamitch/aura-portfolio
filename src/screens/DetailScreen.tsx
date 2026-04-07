import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Brain, ExternalLink, MapPin, Calendar, Layers, Cpu, Terminal, Zap, ChevronRight, Code } from "lucide-react";
import { useParams, Link } from "react-router-dom";
import { GoogleGenAI } from "@google/genai";
import { useFirebaseProjects } from "../hooks/useFirebaseProjects";
import { ProjectCard } from "../components/ProjectCard";
import { AiDisclaimerModal } from "../components/AiDisclaimerModal";

export function DetailScreen() {
  const { slug } = useParams();
  const { projects = [], isLoading: loading } = useFirebaseProjects();
  const project = projects.find((p) => p.slug === slug);
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  const [aiSummary, setAiSummary] = useState<string | null>(null);
  const [isGeneratingSummary, setIsGeneratingSummary] = useState(false);
  const [showAiModal, setShowAiModal] = useState(false);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Amit Chakraborty`;

      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", project.description);
      } else {
        const meta = document.createElement("meta");
        meta.name = "description";
        meta.content = project.description;
        document.head.appendChild(meta);
      }
    }

    return () => {
      document.title = "Amit Chakraborty | VP Engineering · Principal Architect";
    };
  }, [project]);

  useEffect(() => {
    const generateSummary = async () => {
      if (!project || aiSummary) return;

      setIsGeneratingSummary(true);
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });
        const response = await ai.models.generateContent({
          model: "gemini-3-flash-preview",
          contents: `Analyze and summarize the following software engineering project. Focus on the technical stack, architectural complexity, and performance achievements. Keep it to 2-3 high-impact sentences. Avoid generic corporate speak.
          
          Project Name: ${project.title}
          Description: ${project.description}
          Type: ${project.type}
          Stack: ${project.stack?.join(", ")}`,
        });
        setAiSummary(response.text || "Technical summary offline.");
      } catch (error) {
        console.error("Failed to generate AI summary:", error);
        setAiSummary("AI technical analysis is currently unavailable.");
      } finally {
        setIsGeneratingSummary(false);
      }
    };

    generateSummary();
  }, [project, aiSummary]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-6 bg-background">
        <h1 className="text-4xl font-light text-white uppercase tracking-widest">
          Record Not Found
        </h1>
        <Link
          to="/"
          className="text-primary hover:underline uppercase tracking-widest text-xs"
        >
          Return to Terminal
        </Link>
      </div>
    );
  }

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="relative pt-40 pb-24 min-h-screen bg-background"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 mb-12 relative z-10">
        <div className="flex items-center gap-2 text-[10px] font-bold text-white/20 uppercase tracking-widest">
          <Link to="/" className="hover:text-white/50 transition-colors">Home</Link>
          <ChevronRight size={10} />
          <Link to="/projects" className="hover:text-white/50 transition-colors">Projects</Link>
          <ChevronRight size={10} />
          <span className="text-white/40">{project.title}</span>
        </div>
      </div>

      <section className="max-w-4xl mx-auto px-6 mb-32 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <span className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black tracking-[0.4em] uppercase">
            {project.role}
          </span>
        </motion.div>
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white mb-12 uppercase italic leading-none">
          {project.title}
        </h1>
        <div className="flex flex-wrap justify-center gap-8 text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">
          <span className="flex items-center gap-3">
            <Cpu size={14} className="text-primary" /> {project.type}
          </span>
          <span className="flex items-center gap-3">
            <Terminal size={14} className="text-primary" /> {project.location}
          </span>
          <span className="flex items-center gap-3">
            <Calendar size={14} className="text-primary" /> {project.year}
          </span>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mb-32 relative z-10">
        <div className="aspect-[21/9] rounded-[2.5rem] overflow-hidden mb-32 border border-white/10 group relative bg-white/5 shadow-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
          <div className="lg:col-span-2 space-y-32">
            {/* Engineering Overview */}
            <div>
              <div className="flex items-center gap-4 mb-12">
                <div className="h-px w-12 bg-primary" />
                <h2 className="text-[10px] font-black text-white uppercase tracking-[0.5em]">
                  System Architecture
                </h2>
              </div>
              <div className="space-y-8 text-white/60 leading-relaxed font-light text-xl">
                {project.longDescription && project.longDescription.length > 0 ? (
                  project.longDescription.map((para, i) => (
                    <p
                      key={i}
                      className="first-letter:text-5xl first-letter:font-black first-letter:text-primary first-letter:mr-3 first-letter:float-left first-letter:leading-none"
                    >
                      {para}
                    </p>
                  ))
                ) : (
                  <p>{project.description}</p>
                )}
              </div>
            </div>

            {/* Technical Capabilities */}
            {project.features && project.features.length > 0 && (
              <div>
                <div className="flex items-center gap-4 mb-12">
                  <div className="h-px w-12 bg-primary" />
                  <h2 className="text-[10px] font-black text-white uppercase tracking-[0.5em]">
                    Core Capabilities
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {project.features.map((feature, i) => (
                    <div
                      key={i}
                      className="bg-white/5 p-10 rounded-[2rem] border border-white/5 hover:border-primary/30 transition-all group"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-white/5 mb-6 flex items-center justify-center text-white/20 group-hover:text-primary transition-colors">
                         <Zap size={20} />
                      </div>
                      <h4 className="text-white text-sm font-black uppercase tracking-widest mb-4">
                        {feature.title}
                      </h4>
                      <p className="text-white/40 text-xs font-medium leading-relaxed italic">
                        {feature.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technical Highlights */}
            {project.techHighlights && project.techHighlights.length > 0 && (
              <div>
                <div className="flex items-center gap-4 mb-12">
                  <div className="h-px w-12 bg-primary" />
                  <h2 className="text-[10px] font-black text-white uppercase tracking-[0.5em]">
                    Engineering Highlights
                  </h2>
                </div>
                <div className="space-y-4">
                  {project.techHighlights.map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-primary/20 transition-all group"
                    >
                      <Code size={16} className="text-primary/50 mt-0.5 shrink-0 group-hover:text-primary transition-colors" />
                      <p className="text-white/50 text-sm leading-relaxed">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Gallery Section */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="pt-12">
                <div className="flex items-center gap-4 mb-12">
                  <div className="h-px w-12 bg-primary" />
                  <h2 className="text-[10px] font-black text-white uppercase tracking-[0.5em]">
                    Interface Review
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {project.gallery.map((img, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.02 }}
                      className="aspect-4/3 rounded-[2rem] overflow-hidden border border-white/10 bg-white/5"
                    >
                      <img
                        src={img}
                        alt={`${project.title} gallery ${i}`}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-12">
            {/* AI Summary Section */}
            <div className="bg-white/5 p-10 rounded-[2.5rem] border border-primary/20 backdrop-blur-3xl shadow-2xl">
              <h3 className="text-[10px] font-black text-white uppercase tracking-[0.4em] mb-8 flex items-center gap-3">
                <Brain size={16} className="text-primary" /> LLM Analysis
              </h3>
              <div className="space-y-6">
                {isGeneratingSummary ? (
                  <div className="flex items-center gap-2 text-white/20">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></span>
                    <span
                      className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></span>
                    <span
                      className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    ></span>
                    <span className="ml-2 text-[9px] font-black uppercase tracking-[0.3em]">
                      Processing...
                    </span>
                  </div>
                ) : (
                  <>
                    <p className="text-sm text-white/60 leading-relaxed font-light italic">
                      "{aiSummary}"
                    </p>
                    <button
                      onClick={() => setShowAiModal(true)}
                      className="text-[9px] text-white/20 mt-6 uppercase tracking-widest hover:text-primary transition-colors underline decoration-dashed underline-offset-8 text-left block"
                    >
                      Engineering metadata analysis.
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Stack */}
            {project.stack && project.stack.length > 0 && (
              <div className="bg-white/5 p-10 rounded-[2.5rem] border border-white/5">
                <h3 className="text-[10px] font-black text-white uppercase tracking-[0.4em] mb-8 flex items-center gap-3">
                  <Layers size={16} className="text-primary" /> Tech Artifacts
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <div
                      key={tech}
                      className="px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-[9px] font-black text-white/40 uppercase tracking-widest hover:border-primary/50 hover:text-white transition-all duration-300"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Project Links */}
            {((project.links && project.links.length > 0) || project.github) && (
              <div className="bg-white/5 p-10 rounded-[2.5rem] border border-white/5">
                <h3 className="text-[10px] font-black text-white uppercase tracking-[0.4em] mb-8">
                  Deployment
                </h3>
                <div className="space-y-4">
                  {project.links?.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between group p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                    >
                      <span className="text-[11px] font-bold text-white/40 group-hover:text-white transition-colors uppercase tracking-widest">
                        {link.text}
                      </span>
                      <ExternalLink
                        size={14}
                        className="text-primary opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0"
                      />
                    </a>
                  ))}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between group p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                    >
                      <span className="text-[11px] font-bold text-white/40 group-hover:text-white transition-colors uppercase tracking-widest">
                        Source Code
                      </span>
                      <ExternalLink
                        size={14}
                        className="text-primary opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0"
                      />
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footprint Section */}
        <div className="mt-40">
          <div className="flex items-center justify-between mb-16">
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-primary" />
              <h2 className="text-[10px] font-black text-white uppercase tracking-[0.5em]">
                System Footprint
              </h2>
            </div>
            <div className="flex items-center gap-3 text-white/40 text-[10px] font-black uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full">
              <MapPin size={14} className="text-primary" />
              <span>{project.location}</span>
            </div>
          </div>
          <div className="w-full h-[500px] rounded-[3rem] overflow-hidden border border-white/10 grayscale invert hover:grayscale-0 hover:invert-0 transition-all duration-1000 shadow-2xl relative">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                project.location
              )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Project Location Map"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-3xl" />
          </div>
        </div>

        {/* Project Navigation */}
        <div className="mt-40 flex flex-col md:flex-row gap-12 border-t border-white/10 pt-20">
          {prevProject && (
            <Link
              to={`/project/${prevProject.slug}`}
              className="flex-1 group p-12 rounded-[2.5rem] bg-white/5 border border-white/5 hover:border-primary/50 transition-all"
            >
              <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em] mb-6 block">
                Previous System
              </span>
              <h4 className="text-3xl font-light text-white uppercase tracking-tighter group-hover:text-primary transition-colors italic group-hover:not-italic">
                {prevProject.title}
              </h4>
            </Link>
          )}
          {nextProject && (
            <Link
              to={`/project/${nextProject.slug}`}
              className="flex-1 group p-12 rounded-[2.5rem] bg-white/5 border border-white/5 hover:border-primary/50 transition-all text-right"
            >
              <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em] mb-6 block">
                Next System
              </span>
              <h4 className="text-3xl font-light text-white uppercase tracking-tighter group-hover:text-primary transition-colors italic group-hover:not-italic">
                {nextProject.title}
              </h4>
            </Link>
          )}
        </div>
      </section>

      {/* Related Projects */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-32 relative z-10">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px w-12 bg-primary" />
          <h2 className="text-[10px] font-black text-white uppercase tracking-[0.5em]">
            Parallel Artifacts
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects
            .filter((p) => p.slug !== project.slug && p.type === project.type)
            .slice(0, 2)
            .map((relatedProject, index) => (
              <ProjectCard
                key={relatedProject.id || relatedProject.slug || index}
                project={relatedProject}
                index={index}
              />
            ))}
        </div>
      </section>

      <AiDisclaimerModal
        isOpen={showAiModal}
        onClose={() => setShowAiModal(false)}
      />
    </motion.main>
  );
}

