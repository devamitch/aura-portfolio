import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { PROFILE_DATA } from "../data/projects";
import { BrandLogo, GithubIconPremium, LinkedInIconPremium } from "./PremiumIcons";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Projects", path: "/projects", type: "internal" as const },
    { name: "About Me", path: "https://devamit.co.in", type: "external" as const },
    { name: "Contact", path: `mailto:${PROFILE_DATA.email}`, type: "mailto" as const },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-5 transition-all duration-500 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-2xl border-b border-white/5 shadow-2xl shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <Link
          to="/"
          className="flex items-center gap-3 text-xl font-bold text-white tracking-widest uppercase cursor-pointer group"
        >
          <BrandLogo className="w-8 h-8 group-hover:drop-shadow-[0_0_8px_rgba(249,139,80,0.5)] transition-all duration-300" />
          <span className="hidden sm:inline-block text-sm font-black tracking-[0.2em]">
            AMIT'S <span className="text-primary">WORK</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) =>
            link.type === "external" ? (
              <a
                key={link.name}
                href={link.path}
                target="_blank"
                rel="noreferrer"
                className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ) : link.type === "mailto" ? (
              <a
                key={link.name}
                href={link.path}
                className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs uppercase tracking-widest transition-colors ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            )
          )}

          {/* Social Icons */}
          <div className="flex items-center gap-3 ml-4 pl-4 border-l border-white/10">
            <a
              href={PROFILE_DATA.github}
              target="_blank"
              rel="noreferrer"
              className="text-white/30 hover:text-primary transition-colors"
              title="GitHub"
            >
              <GithubIconPremium size={18} />
            </a>
            <a
              href={PROFILE_DATA.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-white/30 hover:text-primary transition-colors"
              title="LinkedIn"
            >
              <LinkedInIconPremium size={18} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center text-white/60 hover:text-white rounded-xl bg-white/5 border border-white/10 transition-colors"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-3xl pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) =>
                link.type === "internal" ? (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-3xl font-light text-white uppercase tracking-widest py-4 border-b border-white/5"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.path}
                    target={link.type === "external" ? "_blank" : undefined}
                    rel={link.type === "external" ? "noreferrer" : undefined}
                    className="text-3xl font-light text-white uppercase tracking-widest py-4 border-b border-white/5"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                )
              )}

              {/* Social Links */}
              <div className="flex items-center gap-6 pt-8">
                <a
                  href={PROFILE_DATA.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-primary transition-colors"
                >
                  <GithubIconPremium size={24} />
                </a>
                <a
                  href={PROFILE_DATA.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-primary transition-colors"
                >
                  <LinkedInIconPremium size={24} />
                </a>
              </div>

              <div className="mt-auto pt-12 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">
                  Available for Projects
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
