import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { PROFILE_DATA } from '../data/projects';

export function ServicesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 section-padding">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="h-px w-12 bg-primary" />
        <span className="text-[10px] font-bold text-primary uppercase tracking-[0.5em]">
          Engagement Models
        </span>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
          How We Work
        </h2>
        <p className="text-white/40 text-sm max-w-sm md:text-right">
          Whether you need a 30-minute clarity call or a full product build — there's a path forward.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PROFILE_DATA.services.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`relative group rounded-[2.5rem] p-10 border transition-all duration-500 flex flex-col ${
              i === 2
                ? 'bg-white/5 border-primary/20 hover:border-primary/40'
                : 'bg-white/[0.02] border-white/5 hover:border-white/15'
            }`}
          >
            {/* Icon */}
            <div className="text-4xl mb-6" style={{ color: service.color }}>
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tight">
              {service.title}
            </h3>
            <p className="text-white/40 text-xs uppercase tracking-widest mb-8 font-bold">
              {service.sub}
            </p>

            {/* Items */}
            <ul className="space-y-3 flex-1 mb-8">
              {service.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: service.color }} />
                  <span className="text-white/50 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            {/* Pricing */}
            <div className="border-t border-white/5 pt-6 mb-6">
              <div className="text-white font-bold text-lg mb-1">{service.price}</div>
              <div className="text-white/30 text-xs">{service.note}</div>
            </div>

            {/* CTA */}
            <a
              href={service.href === '#pitch' ? `mailto:${PROFILE_DATA.email}?subject=Pitch: My Idea` : `mailto:${PROFILE_DATA.email}`}
              className={`w-full py-4 rounded-full font-bold text-sm uppercase tracking-widest text-center transition-all duration-300 flex items-center justify-center gap-2 ${
                i === 2
                  ? 'bg-white text-black hover:bg-primary'
                  : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
              }`}
            >
              {service.cta} <ArrowUpRight size={14} />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
