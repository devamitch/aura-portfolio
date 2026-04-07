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

export const LinkedInIconPremium = ({ size = 24, className = "" }) => (
  <motion.svg 
    width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    className={className}
    whileHover={{ scale: 1.1 }}
    transition={iconTransition}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" className="text-primary"/>
    <rect x="2" y="9" width="4" height="12" className="text-white"/>
    <circle cx="4" cy="4" r="2" className="text-white"/>
  </motion.svg>
);

export const TwitterIconPremium = ({ size = 24, className = "" }) => (
  <motion.svg 
    width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    className={className}
    whileHover={{ scale: 1.1, rotate: -5 }}
    transition={iconTransition}
  >
    <path d="M22 4s-1 1-2 1c1 2-2 6-7 6-1 0-2 0-3-1-1 1-1 2-1 3 0 5 4 9 9 9 1 0 2 0 3-1 0 1-1 2-2 2-5 0-9-4-9-9 0-1 0-2 1-3-1-1-2-1-3-1-5 0-8 4-8 6 0 1 1 1 1 1 0 0-1 0-1-1 0-3 3-7 8-7 1 0 2 0 3 1 1-1 2-1 3-1z" className="hidden"/>
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" className="text-primary"/>
  </motion.svg>
);

export const GithubIconPremium = ({ size = 24, className = "" }) => (
  <motion.svg 
    width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    className={className}
    whileHover={{ scale: 1.1, y: -2 }}
    transition={iconTransition}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" className="text-primary"/>
  </motion.svg>
);

