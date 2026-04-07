import React from 'react';
import { motion } from 'motion/react';
import { PROFILE_DATA } from '../data/projects';

export function StorySection() {
  const profileImage = PROFILE_DATA.profileFallback;

  return (
    <section id="about" className="max-w-7xl mx-auto px-6 lg:px-12 section-padding">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-20">
        <div className="h-px w-12 bg-primary" />
        <span className="text-[10px] font-bold text-primary uppercase tracking-[0.5em]">
          About
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
        {/* Left: Image + Quick Info */}
        <div className="lg:col-span-2 space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 relative group">
              <img
                src={profileImage}
                alt={`${PROFILE_DATA.nameFirst} ${PROFILE_DATA.nameLast}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">
                      Available for Projects
                    </span>
                  </div>
                  <p className="text-white/40 text-xs">
                    {PROFILE_DATA.location} · {PROFILE_DATA.timezone}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Roles */}
          <div className="flex flex-wrap gap-2">
            {PROFILE_DATA.roles.map((role) => (
              <span
                key={role}
                className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-[10px] font-bold text-white/50 uppercase tracking-widest"
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Story */}
        <div className="lg:col-span-3 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-light text-white tracking-tighter leading-tight mb-8 uppercase">
              Building Systems <br />
              <span className="text-primary font-black italic font-serif">That Scale</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-white/50 text-lg leading-relaxed font-light">
              {PROFILE_DATA.ethos.story}
            </p>
            {PROFILE_DATA.manifesto.map((line, i) => (
              <p key={i} className="text-white/40 text-base leading-relaxed font-light">
                {line}
              </p>
            ))}
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4 pt-8 border-t border-white/5"
          >
            <h3 className="text-[10px] font-bold text-white uppercase tracking-[0.4em] mb-6">
              Core Strengths
            </h3>
            {PROFILE_DATA.ethos.highlights.map((highlight, i) => (
              <div key={i} className="flex items-start gap-4 group">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors">
                  {highlight}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="pt-8 border-t border-white/5"
          >
            <h3 className="text-[10px] font-bold text-white uppercase tracking-[0.4em] mb-6">
              Education
            </h3>
            <div className="space-y-4">
              {PROFILE_DATA.education.map((edu) => (
                <div key={edu.degree} className="flex justify-between items-center">
                  <div>
                    <div className="text-white font-medium text-sm">{edu.degree} — {edu.school}</div>
                    <div className="text-white/30 text-xs">{edu.period}</div>
                  </div>
                  {edu.gpa && (
                    <span className="text-primary text-xs font-bold">{edu.gpa}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
