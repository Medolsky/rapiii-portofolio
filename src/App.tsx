import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import InteractiveCanvas3D from "./components/InteractiveCanvas3D";
import HeroAsciiOne from "./components/ui/hero-ascii-one";
import ProfileHero from "./components/ProfileHero";
import ActiveProjectsProgress from "./components/ActiveProjectsProgress";
import ContactSection from "./components/ContactSection";
import BackgroundParticles3D from "./components/BackgroundParticles3D";

import { 
  Compass, 
  Github, 
  Mail, 
  Send, 
  Menu, 
  X, 
  ChevronRight, 
  Box, 
  Sparkles, 
  HeartHandshake,
  Instagram,
  Linkedin,
  Cpu
} from "lucide-react";

export default function App() {
  const [selected3DModel, setSelected3DModel] = useState<"car" | "sword" | "hub">("car");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll progress for custom indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(window.scrollY / totalHeight);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active scroll section for dynamic nav highlights
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "active-progress-section", "viewport-container-section", "profile-section", "contact-section"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", id: "hero", icon: <Sparkles className="w-3.5 h-3.5" /> },
    { label: "Progres", id: "active-progress-section", icon: <Cpu className="w-3.5 h-3.5" /> },
    { label: "3D Viewport", id: "viewport-container-section", icon: <Box className="w-3.5 h-3.5" /> },
    { label: "Biografi", id: "profile-section", icon: <Compass className="w-3.5 h-3.5" /> },
    { label: "Hubungi", id: "contact-section", icon: <HeartHandshake className="w-3.5 h-3.5" /> },
  ];

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-white selection:text-black relative overflow-x-hidden antialiased">
      
      {/* Floating 3D Point Constellations Background */}
      <BackgroundParticles3D />
      
      {/* Immersive background mesh graphics & Monochrome Orbs */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-white/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-[25%] right-[-10%] w-[600px] h-[600px] bg-white/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-5%] w-[550px] h-[550px] bg-white/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[5%] right-[-5%] w-[600px] h-[600px] bg-white/5 blur-[150px] rounded-full pointer-events-none" />
      
      {/* 1. FLOATING NAVIGATION BAR (UI/UX Pro Max Monochrome) */}
      <nav className="fixed top-4 inset-x-4 z-40 max-w-7xl mx-auto flex items-center justify-between bg-zinc-950/90 border border-white/20 px-6 py-3.5 rounded-[24px] backdrop-blur-2xl shadow-2xl shadow-black/80 transition-all duration-300">
        
        {/* Brand logo & status badges */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-white p-0.5 shadow-lg shadow-white/10 animate-pulse">
            <div className="w-full h-full rounded-[10px] bg-black flex items-center justify-center font-black text-white font-mono select-none text-base tracking-tighter">
              R
            </div>
          </div>
          <div>
            <span className="font-bold tracking-widest text-white block text-xs uppercase font-heading">RAFFI ARYA</span>
            <span className="text-[9px] font-mono font-bold uppercase text-zinc-400 tracking-wider flex items-center gap-1.5 leading-none mt-0.5">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
              Active Semester 8
            </span>
          </div>
        </div>

        {/* Desktop Links layout */}
        <div className="hidden md:flex items-center gap-1.5 bg-zinc-900/80 border border-zinc-800 p-1.5 rounded-[18px] backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.id}
              id={`nav-link-${link.id}`}
              href={`#${link.id}`}
              className={`px-4 py-1.5 rounded-[14px] text-xs font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeSection === link.id
                  ? "bg-white text-black border border-white font-bold shadow-md shadow-white/10"
                  : "text-zinc-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.icon}
              <span>{link.label}</span>
            </a>
          ))}
        </div>

        {/* Action Button: LinkedIn Profile Link */}
        <div className="hidden lg:block">
          <a
            id="nav-btn-linkedin"
            href="https://www.linkedin.com/in/raffi-arya-putra-prabowo-649663231/"
            target="_blank"
            rel="noreferrer"
            className="bg-white hover:bg-zinc-200 text-black font-extrabold text-[11px] py-2.5 px-5 rounded-xl transition-all duration-300 shadow-lg shadow-white/10 cursor-pointer block lg:inline-block tracking-wider font-mono border border-white hover:scale-[1.03] active:scale-[0.98]"
          >
            KONEKSI LINKEDIN
          </a>
        </div>

        {/* Mobile menu hamburger toggle */}
        <button
          id="btn-mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-zinc-400 hover:text-white focus:outline-none cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Scroll Progress Indicator */}
        <div 
          className="absolute bottom-0 left-6 right-6 h-[2px] bg-white origin-left transition-transform duration-75"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </nav>

      {/* Mobile Drawer menu backdrop */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-35 bg-black/95 backdrop-blur-md md:hidden pt-24 px-6 flex flex-col justify-between text-zinc-200">
          <div className="space-y-4">
            <span className="text-[10px] font-mono uppercase text-zinc-500 tracking-widest block mb-4 border-b border-zinc-800 pb-2 font-bold">
              Daftar Navigasi Portofolio
            </span>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  id={`mobile-nav-${link.id}`}
                  href={`#${link.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`p-3 rounded-xl font-bold flex items-center justify-between text-sm transition-all cursor-pointer ${
                    activeSection === link.id
                      ? "bg-zinc-900 text-white border border-zinc-700"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    {link.icon}
                    {link.label}
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile contacts metadata footer */}
          <div className="border-t border-zinc-800 py-8 text-center space-y-4">
            <p className="text-xs text-zinc-400 font-semibold">Sosial Media & Kontak:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a 
                id="mob-social-linkedin"
                href="https://www.linkedin.com/in/raffi-arya-putra-prabowo-649663231/" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:bg-zinc-800 hover:text-white flex items-center justify-center"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                id="mob-social-github"
                href="https://github.com/Medolsky" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:bg-zinc-800 hover:text-white flex items-center justify-center"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                id="mob-social-instagram"
                href="https://instagram.com/rapiii_ar" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:bg-zinc-800 hover:text-white flex items-center justify-center"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                id="mob-social-tiktok"
                href="https://tiktok.com/@rapiiii_ar" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:bg-zinc-800 hover:text-white flex items-center justify-center"
                title="TikTok"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.97 1.2 2.27 2 3.76 2.27v3.93c-1.3-.09-2.58-.57-3.66-1.37-.8-.59-1.45-1.38-1.92-2.28-.07 2.64-.04 5.28-.06 7.92-.02 1.4-.35 2.8-1.04 4.02-.68 1.22-1.72 2.2-2.96 2.8-1.42.7-3.04.97-4.6.76-1.57-.21-3.05-.99-4.13-2.13-1.09-1.15-1.75-2.67-1.89-4.24-.13-1.55.22-3.12.99-4.48.77-1.37 2.01-2.43 3.5-3 .92-.35 1.9-.52 2.88-.51v3.96c-.72-.02-1.44.17-2.06.56-.63.4-1.11.98-1.38 1.68-.28.71-.32 1.49-.13 2.22.2.73.63 1.38 1.23 1.84.6.45 1.34.69 2.08.67.75-.01 1.48-.26 2.06-.72.68-.53 1.09-1.34 1.12-2.2.02-3.6 0-7.2.01-10.8z"/>
                </svg>
              </a>
              <a 
                id="mob-social-email"
                href="mailto:raffiarya1112@gmail.com" 
                className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:bg-zinc-800 hover:text-white flex items-center justify-center"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <div className="text-[10px] text-zinc-400 font-mono font-bold">
              Jakarta, 14 Oktober 2003 • Universitas Indraprasta PGRI
            </div>
          </div>
        </div>
      )}

      {/* MASTER SCROLL CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 space-y-24">

        
        {/* 2. HERO INTRO BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 45, damping: 15 }}
        >
          <HeroAsciiOne />
        </motion.div>
 
        {/* 3. ACTIVE PROJECTS PROGRESS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ type: "spring", stiffness: 45, damping: 15 }}
        >
          <ActiveProjectsProgress />
        </motion.div>
 
        {/* 4. INTERACTIVE 3D VIEWPORT CONTAINER */}
        <motion.section 
          id="viewport-container-section" 
          className="py-8 border-t border-zinc-800 pt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ type: "spring", stiffness: 45, damping: 15 }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-1.5 w-10 bg-white rounded-full" />
                <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest font-bold">Visualisasi Objek</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                VIEWPORT 3D INTERAKTIF
              </h2>
              <p className="mt-2 text-zinc-400 text-sm leading-relaxed max-w-xl font-medium">
                Eksperimen visualisasi model 3D interaktif. Anda dapat menggerakkan atau memutar objek kustom pilihan untuk memetakan wireframe topologi secara presisi.
              </p>
            </div>
            
            {/* Legend indicators */}
            <div className="flex items-center gap-3 text-[10px] font-mono text-zinc-400 font-bold">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-white" />
                <span>Axis X</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-zinc-400" />
                <span>Axis Y</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-zinc-600" />
                <span>Axis Z</span>
              </div>
            </div>
          </div>
 
          <InteractiveCanvas3D 
            value={selected3DModel} 
            onChange={(val) => setSelected3DModel(val)} 
          />
        </motion.section>
 
        {/* 4. BIO IDENTITY GRID */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ type: "spring", stiffness: 45, damping: 15 }}
        >
          <ProfileHero />
        </motion.div>

        {/* Featured Projects section removed */}

        {/* Blog section removed */}
 
        {/* 7. CONTACT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ type: "spring", stiffness: 45, damping: 15 }}
        >
          <ContactSection />
        </motion.div>
 
      </main>
 
      {/* 8. DETAILED CREDITS FOOTER */}
      <footer className="bg-transparent border-t border-zinc-800 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-zinc-300">
          
          {/* Branding */}
          <div className="space-y-1.5 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="font-bold tracking-widest text-white uppercase text-xs">Raffi Arya Putra Prabowo</span>
            </div>
            <p className="text-[11px] text-zinc-400 font-mono uppercase tracking-wider font-semibold">
              Jakarta • Universitas Indraprasta PGRI • 2026 Edition
            </p>
          </div>
 
          {/* Social connections column */}
          <div className="flex items-center gap-3">
            <a
              id="footer-social-linkedin"
              href="https://www.linkedin.com/in/raffi-arya-putra-prabowo-649663231/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center transition-all shadow-sm shadow-black/20"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              id="footer-social-github"
              href="https://github.com/Medolsky"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center transition-all shadow-sm shadow-black/20"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              id="footer-social-instagram"
              href="https://instagram.com/rapiii_ar"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center transition-all shadow-sm shadow-black/20"
              title="Instagram Profile"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              id="footer-social-tiktok"
              href="https://tiktok.com/@rapiiii_ar"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center transition-all shadow-sm shadow-black/20"
              title="TikTok Profile"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.97 1.2 2.27 2 3.76 2.27v3.93c-1.3-.09-2.58-.57-3.66-1.37-.8-.59-1.45-1.38-1.92-2.28-.07 2.64-.04 5.28-.06 7.92-.02 1.4-.35 2.8-1.04 4.02-.68 1.22-1.72 2.2-2.96 2.8-1.42.7-3.04.97-4.6.76-1.57-.21-3.05-.99-4.13-2.13-1.09-1.15-1.75-2.67-1.89-4.24-.13-1.55.22-3.12.99-4.48.77-1.37 2.01-2.43 3.5-3 .92-.35 1.9-.52 2.88-.51v3.96c-.72-.02-1.44.17-2.06.56-.63.4-1.11.98-1.38 1.68-.28.71-.32 1.49-.13 2.22.2.73.63 1.38 1.23 1.84.6.45 1.34.69 2.08.67.75-.01 1.48-.26 2.06-.72.68-.53 1.09-1.34 1.12-2.2.02-3.6 0-7.2.01-10.8z"/>
              </svg>
            </a>
          </div>
 
          {/* Copyright notice */}
          <div className="text-[11px] text-zinc-400 font-mono text-center md:text-right font-semibold">
            <span>© {new Date().getFullYear()} Raffi Arya. All Rights Reserved.</span>
            <span className="block mt-1 text-zinc-500 font-normal">Made with genuine WebGL 2D projections.</span>
          </div>
 
        </div>
      </footer>
 
    </div>
  );
}
