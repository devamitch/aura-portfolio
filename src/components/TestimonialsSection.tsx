import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ExternalLink } from 'lucide-react';
import { PROFILE_DATA } from '../data/projects';

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = PROFILE_DATA.testimonials;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 section-padding">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="h-px w-12 bg-primary" />
        <span className="text-[10px] font-bold text-primary uppercase tracking-[0.5em]">
          Peer Validation
        </span>
      </div>
      <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-20">
        What They Say
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Featured Testimonial */}
        <div className="lg:col-span-2">
          <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-10 md:p-14 relative min-h-[320px] flex flex-col justify-between">
            <Quote size={40} className="text-primary/20 mb-8" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex-1"
              >
                <p className="text-white/60 text-lg md:text-xl leading-relaxed font-light italic mb-10 font-serif">
                  "{testimonials[activeIndex].text}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-bold text-base mb-1">
                      {testimonials[activeIndex].name}
                    </div>
                    <div className="text-white/40 text-xs">{testimonials[activeIndex].role}</div>
                    <div className="text-primary/60 text-[10px] font-bold uppercase tracking-widest mt-1">
                      {testimonials[activeIndex].company} · {testimonials[activeIndex].seniority}
                    </div>
                  </div>
                  <a
                    href={testimonials[activeIndex].li}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/20 hover:text-primary hover:border-primary/30 transition-all"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Selector Cards */}
        <div className="lg:col-span-1 flex flex-col gap-4">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setActiveIndex(i)}
              className={`text-left p-6 rounded-2xl border transition-all duration-500 ${
                activeIndex === i
                  ? 'bg-white/5 border-primary/30'
                  : 'border-white/5 hover:border-white/10 bg-transparent'
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-black"
                  style={{ backgroundColor: t.col + '20', color: t.col }}
                >
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className={`text-sm font-bold transition-colors ${activeIndex === i ? 'text-white' : 'text-white/50'}`}>
                    {t.name}
                  </div>
                  <div className="text-[10px] text-white/30 uppercase tracking-wider">{t.rel}</div>
                </div>
              </div>
              {activeIndex === i && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 6 }}
                  className="h-0.5 bg-primary/50 rounded-full mt-4"
                />
              )}
            </button>
          ))}

          <div className="mt-4 text-center">
            <span className="text-[9px] text-white/20 uppercase tracking-widest">
              {testimonials[activeIndex].date} · via LinkedIn
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
