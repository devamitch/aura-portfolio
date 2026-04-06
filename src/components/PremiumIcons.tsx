import React from 'react';
import { motion } from 'motion/react';

const iconTransition: any = {
  duration: 0.3,
  ease: "easeInOut"
};

// --- Branding SVG Logo ---
export const BrandLogo = ({ className = "" }: { className?: string }) => (
  <motion.svg 
    width="40" height="40" viewBox="0 0 512 512" fill="none"
    className={className}
    whileHover={{ scale: 1.1, rotate: 10 }}
    transition={iconTransition}
  >
    {/* Gear Teeth */}
    <motion.g animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
      <circle cx="256" cy="100" r="25" fill="#F98B50"/>
      <circle cx="256" cy="412" r="25" fill="#F98B50"/>
      <circle cx="100" cy="256" r="25" fill="#F98B50"/>
      <circle cx="412" cy="256" r="25" fill="#F98B50"/>
      <circle cx="145" cy="145" r="25" fill="#F98B50"/>
      <circle cx="367" cy="367" r="25" fill="#F98B50"/>
      <circle cx="367" cy="145" r="25" fill="#F98B50"/>
      <circle cx="145" cy="367" r="25" fill="#F98B50"/>
    </motion.g>

    {/* Main Ring */}
    <circle cx="256" cy="256" r="145" stroke="#F98B50" strokeWidth="22" fill="none"/>
    
    {/* Inner Detail Circle */}
    <circle cx="256" cy="256" r="100" stroke="#F98B50" strokeWidth="6" strokeDasharray="10 5" fill="none" className="opacity-50"/>
    
    {/* Checkmark with drawing animation */}
    <motion.path 
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      d="M200 256L240 296L320 216" 
      stroke="#F98B50" strokeWidth="28" strokeLinecap="round" strokeLinejoin="round" fill="none"
    />
  </motion.svg>
);

// --- Architecture Studio / Box Replacement ---
export const BoxIconPremium = ({ size = 24, className = "" }) => (
  <motion.svg 
    width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" 
    className={className}
    whileHover={{ rotate: 90 }}
    transition={iconTransition}
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" className="text-primary"/>
    <polyline points="3.29 7 12 12 20.71 7"/>
    <line x1="12" y1="22" x2="12" y2="12"/>
  </motion.svg>
);

// --- Projects / LayoutGrid Replacement ---
export const GridIconPremium = ({ size = 24, className = "" }) => (
  <motion.svg 
    width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    className={className}
    whileHover={{ scale: 1.1 }}
    transition={iconTransition}
  >
    <rect x="3" y="3" width="7" height="7" className="text-white"/>
    <rect x="14" y="3" width="7" height="7" className="text-primary"/>
    <rect x="14" y="14" width="7" height="7" className="text-white"/>
    <rect x="3" y="14" width="7" height="7" className="text-white"/>
  </motion.svg>
);

// --- Awards / Trophy Replacement ---
export const TrophyIconPremium = ({ size = 24, className = "" }) => (
  <motion.svg 
    width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    className={className}
    whileHover={{ y: -2 }}
    transition={iconTransition}
  >
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" className="text-primary"/>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" className="text-primary"/>
    <path d="M4 22h16"/>
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
  </motion.svg>
);

// --- Contact / Mail Replacement ---
export const MailIconPremium = ({ size = 24, className = "" }) => (
  <motion.svg 
    width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    className={className}
    whileHover={{ x: 2, y: -2 }}
    transition={iconTransition}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" className="text-white"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" className="text-primary"/>
  </motion.svg>
);

// --- Nav Arrows ---
export const ArrowUpRightPremium = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M7 17L17 7"/>
    <path d="M7 7h10v10"/>
  </svg>
);

export const ArrowUpPremium = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m5 12 7-7 7 7"/>
    <path d="M12 19V5"/>
  </svg>
);
