import React from 'react';
import { Mail, Link as LinkIcon } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative w-full py-32 flex flex-col items-center justify-center overflow-hidden border-t border-white/5 bg-surface-low mt-20">
      <div className="relative z-10 flex flex-col items-center gap-12">
        <h2 className="text-7xl md:text-9xl font-black text-white tracking-tighter text-center">
          Let's Build.
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <button className="bg-white text-black px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-transform">
            Email Me <Mail size={18} />
          </button>
          <button className="bg-surface-highest text-white border border-white/10 px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-transform">
            LinkedIn <LinkIcon size={18} />
          </button>
        </div>
      </div>
      
      {/* Giant Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.02] z-0">
        <span className="text-[15vw] font-black whitespace-nowrap uppercase tracking-tighter">AURA ARCHITECT</span>
      </div>

      <div className="absolute bottom-8 flex flex-wrap justify-center gap-8 text-sm text-on-surface-variant z-10">
        <a href="#" className="hover:text-white transition-colors uppercase tracking-widest text-[10px]">LinkedIn</a>
        <a href="#" className="hover:text-white transition-colors uppercase tracking-widest text-[10px]">Instagram</a>
        <a href="#" className="hover:text-white transition-colors uppercase tracking-widest text-[10px]">Behance</a>
        <a href="#" className="hover:text-white transition-colors uppercase tracking-widest text-[10px]">Email</a>
      </div>
      
      <div className="absolute bottom-2 text-[10px] uppercase tracking-[0.3em] text-on-surface-variant/30 z-10">
        © 2024 Aura Architect. Principal Design Studio.
      </div>
    </footer>
  );
}
