import React from 'react';
import { motion } from 'motion/react';
import { PROFILE_DATA } from '../data/projects';

export function ProcessSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 section-padding">
      {/* Section Header */}
      <div className="text-center mb-20">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-12 bg-primary" />
          <span className="text-[10px] font-bold text-primary uppercase tracking-[0.5em]">
            The Process
          </span>
          <div className="h-px w-12 bg-primary" />
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
          How It Works
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {/* Connecting Line */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-white/5 -translate-y-1/2" />

        {PROFILE_DATA.process.map((step, i) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative"
          >
            <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-all duration-500 text-center group relative z-10 bg-background">
              {/* Step Number */}
              <div
                className="text-5xl font-black tracking-tighter mb-4 opacity-20 group-hover:opacity-40 transition-opacity"
                style={{ color: step.color }}
              >
                {step.step}
              </div>

              {/* Duration Badge */}
              <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[9px] font-bold text-white/30 uppercase tracking-widest mb-4">
                {step.duration}
              </div>

              <h3 className="text-lg font-bold text-white mb-4 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
