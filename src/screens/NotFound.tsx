import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-background">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="text-center z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 flex justify-center"
        >
          <div className="w-24 h-24 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-primary shadow-2xl shadow-primary/20 backdrop-blur-xl">
            <AlertCircle size={48} strokeWidth={1.5} />
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-7xl md:text-9xl font-black tracking-tighter text-white mb-4 italic"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl font-light text-white/60 tracking-widest uppercase mb-12"
        >
          Lost in <span className="text-primary italic">Empty Space</span>
        </motion.h2>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Link
            to="/"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-background rounded-full font-bold tracking-widest uppercase text-sm hover:bg-primary hover:text-white transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            <Home size={18} />
            <span className="relative z-10">Return to Base</span>
          </Link>
        </motion.div>

        {/* Decorative Grid */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent translate-y-24" />
      </div>
    </div>
  );
}
