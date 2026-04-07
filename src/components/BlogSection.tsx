import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { PROFILE_DATA } from '../data/projects';

export function BlogSection() {
  const blogs = PROFILE_DATA.blogs;

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 section-padding">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-[10px] font-bold text-primary uppercase tracking-[0.5em]">
              Engineering Insights
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Latest Writing
          </h2>
        </div>
        <a
          href={PROFILE_DATA.medium}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-white/40 hover:text-primary transition-colors text-xs uppercase tracking-widest font-bold"
        >
          View All on Medium <ArrowUpRight size={14} />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.slice(0, 3).map((blog, i) => (
          <motion.a
            key={blog.title}
            href={blog.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:border-primary/20 transition-all duration-500 flex flex-col"
          >
            {/* Category Badge */}
            <div className="flex items-center justify-between mb-6">
              <span
                className="px-3 py-1 rounded-full text-[9px] font-black tracking-widest uppercase border"
                style={{ color: blog.color, borderColor: blog.color + '30', backgroundColor: blog.color + '10' }}
              >
                {blog.cat}
              </span>
              <span className="text-[10px] text-white/20 font-bold uppercase tracking-widest">
                {blog.date}
              </span>
            </div>

            {/* Content */}
            <h3 className="text-lg font-bold text-white mb-4 leading-snug group-hover:text-primary transition-colors line-clamp-2">
              {blog.title}
            </h3>
            <p className="text-white/40 text-sm leading-relaxed flex-1 line-clamp-3 mb-6">
              {blog.teaser}
            </p>

            {/* Read CTA */}
            <div className="flex items-center gap-2 text-primary/60 group-hover:text-primary transition-colors">
              <BookOpen size={14} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Read Article</span>
              <ArrowUpRight size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </motion.a>
        ))}
      </div>

      {/* Remaining Posts - Compact */}
      {blogs.length > 3 && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {blogs.slice(3).map((blog, i) => (
            <motion.a
              key={blog.title}
              href={blog.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group flex items-center justify-between p-6 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-primary/20 transition-all"
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-1 h-8 rounded-full shrink-0"
                  style={{ backgroundColor: blog.color }}
                />
                <div>
                  <h4 className="text-sm font-medium text-white group-hover:text-primary transition-colors line-clamp-1">
                    {blog.title}
                  </h4>
                  <span className="text-[10px] text-white/20 uppercase tracking-widest">
                    {blog.cat} · {blog.date}
                  </span>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-white/10 group-hover:text-primary transition-colors shrink-0" />
            </motion.a>
          ))}
        </div>
      )}
    </section>
  );
}
