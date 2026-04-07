import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROFILE_DATA } from '../data/projects';

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 section-padding">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="h-px w-12 bg-primary" />
        <span className="text-[10px] font-bold text-primary uppercase tracking-[0.5em]">
          Technical Arsenal
        </span>
      </div>
      <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-16">
        Skills & Expertise
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Category Tabs */}
        <div className="lg:col-span-1 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 custom-scrollbar">
          {PROFILE_DATA.skills.map((skill, i) => (
            <button
              key={skill.cat}
              onClick={() => setActiveCategory(i)}
              className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl text-left whitespace-nowrap transition-all duration-300 ${
                activeCategory === i
                  ? 'bg-white/10 border border-white/10 text-white'
                  : 'text-white/40 hover:text-white/60 hover:bg-white/5'
              }`}
            >
              <div
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: activeCategory === i ? skill.color : 'rgba(255,255,255,0.1)' }}
              />
              <span className="text-xs font-bold uppercase tracking-widest">{skill.cat}</span>
            </button>
          ))}
        </div>

        {/* Skill Bars */}
        <div className="lg:col-span-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-5"
            >
              {PROFILE_DATA.skills[activeCategory].items.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-white/70 font-medium group-hover:text-white transition-colors">
                      {item.name}
                    </span>
                    <span className="text-[10px] font-bold text-white/30 tracking-widest">
                      {item.level}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.level}%` }}
                      transition={{ duration: 1, delay: i * 0.05, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: PROFILE_DATA.skills[activeCategory].color }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Tech Stack Cloud */}
      <div className="mt-20 pt-12 border-t border-white/5">
        <h3 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.4em] mb-8 text-center">
          Full Stack Proficiency
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {PROFILE_DATA.techStack.map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 text-[10px] font-bold text-white/40 uppercase tracking-widest hover:border-primary/30 hover:text-white/70 transition-all cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
