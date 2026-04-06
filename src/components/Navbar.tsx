import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-6 bg-background/80 backdrop-blur-xl border-b border-white/5"
    >
      <Link to="/" className="text-xl font-light text-white tracking-[0.2em] uppercase cursor-pointer">
        Aura Architect
      </Link>
      <div className="flex gap-8 items-center">
        <Link to="/projects" className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors">Projects</Link>
        <Link to="/admin" className="text-xs uppercase tracking-widest text-white/20 hover:text-white/60 transition-colors">Admin</Link>
      </div>
    </motion.nav>
  );
}
