import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { PROFILE_DATA } from '../data/projects';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(PROFILE_DATA.faqs.map(f => f.cat)))];
  
  const filteredFaqs = activeCategory === 'All'
    ? PROFILE_DATA.faqs
    : PROFILE_DATA.faqs.filter(f => f.cat === activeCategory);

  return (
    <section className="max-w-4xl mx-auto px-6 lg:px-12 section-padding">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-12 bg-primary" />
          <span className="text-[10px] font-bold text-primary uppercase tracking-[0.5em]">
            Common Questions
          </span>
          <div className="h-px w-12 bg-primary" />
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
          FAQ
        </h2>
        <p className="text-white/40 text-sm max-w-md mx-auto">
          Straight answers to the questions I hear most. No corporate speak.
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
            className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-white text-black'
                : 'bg-white/5 text-white/40 hover:text-white/60 border border-white/5'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FAQ Items */}
      <div className="space-y-3">
        {filteredFaqs.map((faq, i) => (
          <motion.div
            key={faq.q}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-colors"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between p-6 text-left group"
            >
              <div className="flex items-center gap-4 flex-1">
                <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest shrink-0 bg-white/5 px-2 py-0.5 rounded">
                  {faq.cat}
                </span>
                <h3 className={`text-sm font-medium transition-colors ${openIndex === i ? 'text-white' : 'text-white/60 group-hover:text-white/80'}`}>
                  {faq.q}
                </h3>
              </div>
              <motion.div
                animate={{ rotate: openIndex === i ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-white/20 shrink-0 ml-4"
              >
                <ChevronDown size={18} />
              </motion.div>
            </button>

            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-0">
                    <div className="pl-[70px]">
                      <p className="text-white/50 text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
