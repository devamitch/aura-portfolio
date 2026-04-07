import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  MailIconPremium,
  LinkedInIconPremium,
  TwitterIconPremium,
  GithubIconPremium,
  ArrowUpRightPremium,
} from "./PremiumIcons";
import { PROFILE_DATA } from "../data/projects";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    explore: [
      { name: "Home", path: "/" },
      { name: "All Projects", path: "/projects" },
      { name: "About Me", path: "https://devamit.co.in", external: true },
      { name: "Contact", path: `mailto:${PROFILE_DATA.email}`, external: true },
    ],
    categories: [
      { name: "Mobile Apps" },
      { name: "AI / ML Systems" },
      { name: "Web3 & DeFi" },
      { name: "GovTech & Enterprise" },
    ],
    social: [
      { name: "LinkedIn", href: PROFILE_DATA.linkedin, icon: LinkedInIconPremium },
      { name: "Twitter", href: PROFILE_DATA.twitter, icon: TwitterIconPremium },
      { name: "GitHub", href: PROFILE_DATA.github, icon: GithubIconPremium },
      { name: "Email", href: `mailto:${PROFILE_DATA.email}`, icon: MailIconPremium },
    ],
  };

  return (
    <footer className="relative w-full pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/3 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Top Section: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24 border-b border-white/5 pb-16">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-sm font-black text-white tracking-[0.2em] uppercase mb-6">
              AMIT'S <span className="text-primary">WORK</span>
            </Link>
            <p className="text-white/30 text-xs leading-relaxed max-w-xs">
              A curated showcase of production-grade projects spanning 
              8 years of building — from GovTech to AI platforms.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.3em] mb-8">Navigate</h4>
            <ul className="space-y-4">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a 
                      href={link.path} 
                      target={link.path.startsWith("mailto:") ? undefined : "_blank"} 
                      rel="noreferrer"
                      className="text-white/40 hover:text-white transition-colors text-xs uppercase tracking-widest"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.path} className="text-white/40 hover:text-white transition-colors text-xs uppercase tracking-widest">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.3em] mb-8">Categories</h4>
            <ul className="space-y-4">
              {footerLinks.categories.map((link) => (
                <li key={link.name}>
                  <Link to="/projects" className="text-white/40 hover:text-white transition-colors text-xs uppercase tracking-widest">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.3em] mb-8">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {footerLinks.social.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -4 }}
                    className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary/30 transition-all duration-300"
                    title={social.name}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
            <a 
              href={`mailto:${PROFILE_DATA.email}`}
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/50 hover:text-white hover:bg-white/10 transition-all duration-300 uppercase tracking-widest"
            >
              Start a Project <ArrowUpRightPremium size={12} />
            </a>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] text-white/20 uppercase tracking-[0.4em]">
            © {currentYear} Amit Chakraborty. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a 
              href="https://projectscopes.devamit.co.in" 
              className="text-[10px] text-white/20 hover:text-white/40 uppercase tracking-widest transition-colors"
            >
              projectscopes.devamit.co.in
            </a>
            <span className="text-[10px] text-white/20 uppercase tracking-widest border-l border-white/10 pl-6">
              Kolkata, India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
