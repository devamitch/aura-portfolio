import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Calendar, Users, Zap } from 'lucide-react';
import { PROFILE_DATA } from '../data/projects';

export function ExperienceTimeline() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 section-padding">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="h-px w-12 bg-primary" />
        <span className="text-[10px] font-bold text-primary uppercase tracking-[0.5em]">
          Career Arc
        </span>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
          Experience
        </h2>
        <p className="text-white/40 text-sm max-w-sm md:text-right">
          From government contracts to AI-powered health platforms — a trajectory of increasing technical ambition.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/5 md:-translate-x-px" />

        {PROFILE_DATA.experience.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className={`relative flex flex-col md:flex-row gap-8 mb-16 last:mb-0 ${
              i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full border-2 border-background -translate-x-1/2 z-10 top-10"
              style={{ backgroundColor: exp.color }}
            />

            {/* Content Card */}
            <div className={`flex-1 ml-16 md:ml-0 ${i % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
              <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-10 hover:border-white/10 transition-all duration-500 group">
                {/* Header */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span
                    className="px-3 py-1 rounded-full text-[9px] font-black tracking-widest uppercase border"
                    style={{ color: exp.color, borderColor: exp.color + '30', backgroundColor: exp.color + '10' }}
                  >
                    {exp.badge}
                  </span>
                  <span className="text-[10px] text-white/20 font-bold uppercase tracking-widest">
                    {exp.type}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white mb-1 tracking-tight group-hover:text-primary transition-colors">
                  {exp.company}
                </h3>
                <p className="text-primary/80 text-sm font-medium mb-4">{exp.role}</p>

                <div className="flex flex-wrap gap-4 mb-6 text-white/30 text-[10px] font-bold uppercase tracking-widest">
                  <span className="flex items-center gap-2">
                    <Calendar size={12} /> {exp.period}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={12} /> {exp.location}
                  </span>
                </div>

                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {exp.summary}
                </p>

                {/* Metrics */}
                {exp.metrics.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {exp.metrics.map((metric) => (
                      <div key={metric.label} className="text-center p-3 bg-white/[0.02] rounded-xl">
                        <div className="text-white font-black text-lg tracking-tighter">
                          {metric.value}
                        </div>
                        <div className="text-[8px] text-white/30 uppercase tracking-widest">
                          {metric.unit || metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Highlights */}
                <div className="space-y-2">
                  {exp.highlights.map((h, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <Zap size={10} className="text-primary mt-1.5 shrink-0" />
                      <span className="text-white/40 text-xs leading-relaxed">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Spacer for alternating layout */}
            <div className="flex-1 hidden md:block" />
          </motion.div>
        ))}
      </div>

      {/* Journey Timeline */}
      <div className="mt-32 pt-16 border-t border-white/5">
        <h3 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.4em] mb-12 text-center">
          The Journey
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {PROFILE_DATA.story.map((milestone, i) => (
            <motion.div
              key={milestone.yr}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="text-3xl mb-3" style={{ color: milestone.color }}>
                {milestone.icon}
              </div>
              <div className="text-white font-black text-lg tracking-tighter mb-1">{milestone.yr}</div>
              <div className="text-primary text-xs font-bold mb-2 uppercase tracking-wider">{milestone.title}</div>
              <p className="text-white/30 text-[11px] leading-relaxed">{milestone.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
