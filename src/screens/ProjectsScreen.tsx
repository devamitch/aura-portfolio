import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, X, Filter, ArrowUp, LayoutGrid, List, Cpu } from "lucide-react";
import { useFirebaseProjects } from "../hooks/useFirebaseProjects";
import { ProjectCard } from "../components/ProjectCard";
import { PROFILE_DATA } from "../data/projects";

export function ProjectsScreen() {
  const { projects = [], isLoading: loading } = useFirebaseProjects();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [yearRange, setYearRange] = useState<{ min: string; max: string }>({
    min: "",
    max: "",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const categories = useMemo(
    () => Array.from(new Set(projects.map((p: any) => p.type).filter(Boolean))),
    [projects]
  );
  const allStack = useMemo(
    () =>
      Array.from(new Set(projects.flatMap((p: any) => p.stack || []))).filter(
        Boolean
      ),
    [projects]
  );
  const years = useMemo(
    () =>
      Array.from(
        new Set(projects.map((p: any) => p.year).filter(Boolean))
      ).sort((a, b) => b.localeCompare(a)),
    [projects]
  );

  const filteredProjects = useMemo(() => {
    const filtered = projects.filter((p: any) => {
      const typeMatch =
        selectedCategories.length === 0 ||
        (p.type && selectedCategories.includes(p.type));
      const stackMatch =
        selectedTags.length === 0 ||
        (Array.isArray(p.stack) &&
          selectedTags.every((tag) => p.stack.includes(tag)));

      const pYear = parseInt(p.year || "0");
      const minYear = yearRange.min ? parseInt(yearRange.min) : 0;
      const maxYear = yearRange.max ? parseInt(yearRange.max) : 9999;
      const yearMatch = pYear >= minYear && pYear <= maxYear;

      const searchMatch =
        !searchQuery ||
        p.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.sector?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.role?.toLowerCase().includes(searchQuery.toLowerCase());

      return typeMatch && stackMatch && yearMatch && searchMatch;
    });

    return [...filtered].sort((a, b) => {
      const yearA = a.year || "";
      const yearB = b.year || "";
      return sortOrder === "desc"
        ? yearB.localeCompare(yearA)
        : yearA.localeCompare(yearB);
    });
  }, [
    projects,
    selectedCategories,
    selectedTags,
    yearRange,
    searchQuery,
    sortOrder,
  ]);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative pt-40 pb-32 min-h-screen bg-background overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <section className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Editorial Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-px w-12 bg-primary" />
              <span className="text-[10px] font-bold text-primary uppercase tracking-[0.5em]">
                Selected Works
              </span>
            </motion.div>
            <h1 className="text-6xl md:text-9xl font-light text-white tracking-tighter leading-none uppercase italic">
              The <span className="not-italic font-black text-primary">Archive</span>
            </h1>
            <p className="text-white/40 mt-8 text-lg md:text-xl leading-relaxed max-w-lg">
              A curated collection of {projects.length} systems—from low-level C++ modules to massive-scale government portals. 
              Engineering solutions that endure.
            </p>
          </div>
          
          <div className="flex flex-col items-end gap-6 w-full lg:w-auto">
            <div className="relative w-full md:w-96 group">
              <Search
                className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors"
                size={20}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search keywords, tech, or sectors..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-16 pr-6 py-5 text-white outline-none focus:border-primary/50 backdrop-blur-xl transition-all placeholder:text-white/20 text-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              )}
            </div>
            <div className="flex items-center gap-6">
              <div className="flex bg-white/5 p-1 rounded-xl border border-white/10 backdrop-blur-md">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === "grid" ? "bg-white text-black" : "text-white/40 hover:text-white"
                  }`}
                  title="Grid View"
                >
                  <LayoutGrid size={18} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === "list" ? "bg-white text-black" : "text-white/40 hover:text-white"
                  }`}
                  title="List View"
                >
                  <List size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Filter Drawer/Bar */}
        <div className="mb-20">
          <div className="bg-white/3 border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
              <div className="space-y-6">
                <h3 className="text-[10px] font-bold text-white uppercase tracking-[0.4em] flex items-center gap-3">
                  <Cpu size={14} className="text-primary" /> Platform
                </h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedCategories([])}
                    className={`px-5 py-2.5 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300 border ${
                      selectedCategories.length === 0
                        ? "bg-white border-white text-black shadow-lg shadow-white/10"
                        : "bg-transparent border-white/10 text-white/40 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    All Systems
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => toggleCategory(category)}
                      className={`px-5 py-2.5 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300 border ${
                        selectedCategories.includes(category)
                          ? "bg-primary border-primary text-black shadow-lg shadow-primary/20"
                          : "bg-transparent border-white/10 text-white/40 hover:border-white/30 hover:text-white"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-[10px] font-bold text-white uppercase tracking-[0.4em]">
                  Specializations
                </h3>
                <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto pr-4 custom-scrollbar">
                  {allStack.slice(0, 20).map((tag) => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`px-4 py-2 rounded-xl text-[9px] font-bold tracking-widest uppercase transition-all duration-300 border ${
                        selectedTags.includes(tag)
                          ? "bg-white border-white text-black"
                          : "bg-transparent border-white/5 text-white/30 hover:text-white hover:border-white/20"
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                  {allStack.length > 20 && (
                     <span className="text-[9px] text-white/20 uppercase tracking-widest py-2">+{allStack.length - 20} more</span>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-[10px] font-bold text-white uppercase tracking-[0.4em]">
                  Timeline Scope
                </h3>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <select
                      value={yearRange.min}
                      onChange={(e) =>
                        setYearRange((prev) => ({ ...prev, min: e.target.value }))
                      }
                      className="w-full bg-surface border border-white/10 rounded-2xl px-5 py-4 text-[10px] text-white outline-none focus:border-primary/50 appearance-none cursor-pointer"
                    >
                      <option value="">Start Year</option>
                      {[...years].reverse().map((y) => (
                        <option key={y} value={y}>
                          {y}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex-1">
                    <select
                      value={yearRange.max}
                      onChange={(e) =>
                        setYearRange((prev) => ({ ...prev, max: e.target.value }))
                      }
                      className="w-full bg-surface border border-white/10 rounded-2xl px-5 py-4 text-[10px] text-white outline-none focus:border-primary/50 appearance-none cursor-pointer"
                    >
                      <option value="">End Year</option>
                      {years.map((y) => (
                        <option key={y} value={y}>
                          {y}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                {(selectedCategories.length > 0 ||
                selectedTags.length > 0 ||
                yearRange.min ||
                yearRange.max ||
                searchQuery) && (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setSelectedCategories([]);
                    setSelectedTags([]);
                    setYearRange({ min: "", max: "" });
                    setSearchQuery("");
                  }}
                  className="w-full py-4 text-primary text-[10px] font-black uppercase tracking-[0.4em]"
                >
                  Reset Core Filters
                </motion.button>
              )}
              </div>
            </div>
          </div>
        </div>

        {/* Results Metadata */}
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.4em]">
              Result Analysis: <span className="text-white">{filteredProjects.length}</span> Project(s) Discovered
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[9px] font-bold text-white/30 uppercase tracking-widest">Sort by Delivery</span>
            <div className="flex bg-white/5 p-1 rounded-xl border border-white/10 backdrop-blur-md">
              <button
                onClick={() => setSortOrder("desc")}
                className={`px-4 py-2 rounded-lg text-[9px] font-bold uppercase tracking-widest transition-all ${
                  sortOrder === "desc" ? "bg-white text-black" : "text-white/40 hover:text-white"
                }`}
              >
                Newest
              </button>
              <button
                onClick={() => setSortOrder("asc")}
                className={`px-4 py-2 rounded-lg text-[9px] font-bold uppercase tracking-widest transition-all ${
                  sortOrder === "asc" ? "bg-white text-black" : "text-white/40 hover:text-white"
                }`}
              >
                Oldest
              </button>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[...Array(6)].map((_, idx) => (
              <ProjectCard key={`skeleton-${idx}`} index={idx} isLoading={true} />
            ))}
          </div>
        ) : (
          <>
            <motion.div 
              layout
              className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-12" : "flex flex-col gap-8"}
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project: any, idx: number) => (
                  <ProjectCard
                    key={project.id || project.slug || idx}
                    project={project}
                    index={idx}
                    layout={viewMode === "list" ? "list" : "grid"}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
            
            {filteredProjects.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-32 text-center"
              >
                <div className="text-white/10 text-9xl font-black uppercase tracking-tighter mb-4 opacity-50">Empty</div>
                <p className="text-white/40 uppercase tracking-[0.5em] font-light text-xs">
                  No records found in current engineering scope.
                </p>
              </motion.div>
            )}
          </>
        )}
      </section>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-12 right-12 z-50 w-16 h-16 bg-white text-black rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group"
          >
            <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.main>
  );
}

