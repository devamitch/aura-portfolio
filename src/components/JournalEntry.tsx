import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function JournalEntry({ date, title, tag }: { date: string, title: string, tag: string }) {
  return (
    <div className="group flex flex-col md:flex-row items-start md:items-center justify-between py-8 border-b border-white/5 cursor-pointer hover:bg-surface-high/30 transition-colors px-4 -mx-4 rounded-2xl">
      <div className="flex items-center gap-8 mb-4 md:mb-0">
        <span className="text-on-surface-variant font-mono text-xs">{date}</span>
        <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{title}</h3>
      </div>
      <div className="flex items-center gap-6">
        <span className="px-4 py-1.5 rounded-full border border-white/10 text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">
          {tag}
        </span>
        <ArrowUpRight className="text-on-surface-variant group-hover:text-white transition-colors" />
      </div>
    </div>
  );
}
