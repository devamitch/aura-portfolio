import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BrandLogo } from './PremiumIcons';

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-6 bg-background/80 backdrop-blur-xl border-b border-white/5"
    >
      <Link to="/" className="flex items-center gap-3 text-xl font-bold text-white tracking-widest uppercase cursor-pointer group">
        <BrandLogo className="w-8 h-8 group-hover:drop-shadow-[0_0_8px_rgba(249,139,80,0.5)] transition-all duration-300" />
        <span className="hidden sm:inline-block">Dev <span className="text-primary">Amit</span></span>
      </Link>
      <div className="flex gap-8 items-center">
        <Link to="/projects" className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors">Projects</Link>
        <Link to="/admin" className="text-xs uppercase tracking-widest text-white/20 hover:text-white/60 transition-colors">Admin</Link>
      </div>
    </motion.nav>
  );
}
