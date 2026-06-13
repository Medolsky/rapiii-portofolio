import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import InteractiveCanvas3D from "./components/InteractiveCanvas3D";
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
    <div className="min-h-screen bg-gradient-to-br from-ocean-950 via-ocean-900 to-ocean-850 text-slate-200 font-sans selection:bg-ocean-500 selection:text-white relative overflow-x-hidden antialiased">
      
      {/* Floating 3D Point Constellations Background */}
      <BackgroundParticles3D />
      
      {/* Immersive background mesh graphics & Frosted Glass orbs */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(37,99,168,0.015)_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-ocean-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-[25%] right-[-10%] w-[600px] h-[600px] bg-ocean-400/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-5%] w-[550px] h-[550px] bg-ocean-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[5%] right-[-5%] w-[600px] h-[600px] bg-ocean-400/5 blur-[140px] rounded-full pointer-events-none" />
      
      {/* 1. FLOATING NAVIGATION BAR */}
      <nav className="fixed top-4 inset-x-4 z-40 max-w-7xl mx-auto flex items-center justify-between bg-ocean-950/75 border border-ocean-800/60 px-6 py-4 rounded-[24px] backdrop-blur-2xl shadow-lg shadow-black/25">
        
        {/* Brand logo & status badges */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-ocean-500 to-ocean-300 p-0.5 shadow-lg shadow-ocean-500/20">
            <div className="w-full h-full rounded-md bg-[#050507] flex items-center justify-center font-black text-white font-mono select-none text-sm">
              R
            </div>
          </div>
          <div>
            <span className="font-bold tracking-widest text-slate-100 block text-xs uppercase animate-pulse">RAFFI ARYA</span>
            <span className="text-[9px] font-mono font-semibold uppercase text-ocean-300 tracking-wider flex items-center gap-1.5 leading-none">
              <span className="w-1.5 h-1.5 bg-ocean-400 rounded-full animate-ping" />
              Active Semester 8
            </span>
          </div>
        </div>

        {/* Desktop Links layout */}
        <div className="hidden md:flex items-center gap-1.5 bg-ocean-950/60 border border-ocean-800/65 p-1 rounded-[16px]">
          {navLinks.map((link) => (
            <a
              key={link.id}
              id={`nav-link-${link.id}`}
              href={`#${link.id}`}
              className={`px-3.5 py-1.5 rounded-[12px] text-xs font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeSection === link.id
                  ? "bg-ocean-900 text-white border border-ocean-800/80 shadow-sm"
                  : "text-slate-400 hover:text-slate-100"
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
            className="bg-gradient-to-r from-ocean-600 via-ocean-500 to-ocean-400 hover:scale-105 active:scale-95 text-white text-[11px] font-bold py-2.5 px-5 rounded-xl transition-all duration-300 shadow-md shadow-ocean-500/15 hover:shadow-ocean-500/25 cursor-pointer block lg:inline-block tracking-wider"
          >
            KONEKSI LINKEDIN
          </a>
        </div>

        {/* Mobile menu hamburger toggle */}
        <button
          id="btn-mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-400 hover:text-white focus:outline-none cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Scroll Progress Indicator */}
        <div 
          className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-ocean-500 via-ocean-400 to-ocean-300 origin-left transition-transform duration-75"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </nav>

      {/* Mobile Drawer menu backdrop */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-35 bg-ocean-950/95 backdrop-blur-md md:hidden pt-24 px-6 flex flex-col justify-between text-slate-200">
          <div className="space-y-4">
            <span className="text-[10px] font-mono uppercase text-slate-500 tracking-widest block mb-4 border-b border-ocean-800/60 pb-2 font-bold">
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
                      ? "bg-ocean-900 text-white border border-ocean-800/80"
                      : "text-slate-400 hover:text-white"
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
          <div className="border-t border-ocean-800/60 py-8 text-center space-y-4">
            <p className="text-xs text-slate-400 font-semibold">Sosial Media & Kontak:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a 
                id="mob-social-linkedin"
                href="https://www.linkedin.com/in/raffi-arya-putra-prabowo-649663231/" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-ocean-900/40 border border-ocean-800/60 text-ocean-300 hover:bg-ocean-800 flex items-center justify-center"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                id="mob-social-github"
                href="https://github.com/Medolsky" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-ocean-900/40 border border-ocean-800/60 text-ocean-300 hover:bg-ocean-800 flex items-center justify-center"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                id="mob-social-instagram"
                href="https://instagram.com/rapiii_ar" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-ocean-900/40 border border-ocean-800/60 text-ocean-300 hover:bg-ocean-800 flex items-center justify-center"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                id="mob-social-tiktok"
                href="https://tiktok.com/@rapiiii_ar" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-ocean-900/40 border border-ocean-800/60 text-ocean-300 hover:bg-ocean-800 flex items-center justify-center"
                title="TikTok"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.97 1.2 2.27 2 3.76 2.27v3.93c-1.3-.09-2.58-.57-3.66-1.37-.8-.59-1.45-1.38-1.92-2.28-.07 2.64-.04 5.28-.06 7.92-.02 1.4-.35 2.8-1.04 4.02-.68 1.22-1.72 2.2-2.96 2.8-1.42.7-3.04.97-4.6.76-1.57-.21-3.05-.99-4.13-2.13-1.09-1.15-1.75-2.67-1.89-4.24-.13-1.55.22-3.12.99-4.48.77-1.37 2.01-2.43 3.5-3 .92-.35 1.9-.52 2.88-.51v3.96c-.72-.02-1.44.17-2.06.56-.63.4-1.11.98-1.38 1.68-.28.71-.32 1.49-.13 2.22.2.73.63 1.38 1.23 1.84.6.45 1.34.69 2.08.67.75-.01 1.48-.26 2.06-.72.68-.53 1.09-1.34 1.12-2.2.02-3.6 0-7.2.01-10.8z"/>
                </svg>
              </a>
              <a 
                id="mob-social-email"
                href="mailto:raffiarya1112@gmail.com" 
                className="w-10 h-10 rounded-full bg-ocean-900/40 border border-ocean-800/60 text-ocean-305 flex items-center justify-center"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <div className="text-[10px] text-slate-400 font-mono font-bold">
              Jakarta, 14 Oktober 2003 • Universitas Indraprasta PGRI
            </div>
          </div>
        </div>
      )}

      {/* MASTER SCROLL CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 space-y-24">
        
        {/* 2. HERO INTRO BANNER */}
        <motion.header 
          id="hero" 
          className="py-12 md:py-20 relative flex flex-col md:flex-row items-center justify-between gap-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 45, damping: 15 }}
        >
          
          {/* Accent light overlay */}
          <div className="absolute top-1/2 left-0 w-80 h-80 bg-ocean-500/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
 
          {/* Left Text layout */}
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-ocean-500/5 to-ocean-400/5 border border-ocean-800/80 px-3.5 py-1.5 rounded-full">
              <Compass className="w-4 h-4 text-ocean-300 animate-spin" style={{ animationDuration: "8s" }} />
              <span className="font-mono text-[10px] text-ocean-300 font-bold uppercase tracking-wider">
                PORTOFOLIO DIGITAL & STATISTIK 3D
              </span>
            </div>
 
            <div className="space-y-1.5">
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
                Web Developer & <br />
                <span className="bg-gradient-to-r from-ocean-400 via-ocean-300 to-ocean-100 bg-clip-text text-transparent">
                  AI / ML Engineer.
                </span>
              </h1>
              <p className="max-w-2xl text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
                Portofolio digital resmi dan riwayat hidup (CV) milik **Raffi Arya Putra Prabowo**. Berfokus pada pengembangan web full-stack, rekayasa kecerdasan buatan (AI Engine), pengolahan model Machine Learning dengan Python, serta integrasi sistem otomatis pintar.
              </p>
            </div>
 
            {/* Quick Action buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                id="hero-btn-explore"
                href="#viewport-container-section"
                className="bg-gradient-to-r from-ocean-600 via-ocean-500 to-ocean-400 hover:scale-105 active:scale-95 text-white font-extrabold py-3.5 px-6 rounded-2xl transition-all duration-300 shadow-md shadow-ocean-500/15 hover:shadow-ocean-500/25 flex items-center gap-1.5 cursor-pointer text-xs uppercase tracking-widest"
              >
                <span>Lihat Viewport 3D</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                id="hero-btn-profile"
                href="#profile-section"
                className="bg-ocean-900/50 hover:bg-ocean-800 border border-ocean-800/60 hover:scale-105 active:scale-95 text-slate-200 hover:text-white font-bold py-3.5 px-6 rounded-2xl transition-all duration-300 cursor-pointer text-xs uppercase tracking-widest shadow-sm shadow-black/20"
              >
                Biografi Detail
              </a>
            </div>
          </div>
 
          {/* Right Brand bento stat card decor */}
          <div className="w-full md:w-96 bg-ocean-900/50 border border-ocean-800/80 p-6 rounded-[32px] relative overflow-hidden backdrop-blur-2xl flex-shrink-0 shadow-xl shadow-black/20">
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs text-ocean-300 font-mono">
                <span className="tracking-widest font-bold">IDENTITY_RECORD</span>
                <div className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 rounded-md text-[8px] uppercase font-bold animate-pulse border border-emerald-500/20">Online</div>
              </div>
              
              <div className="space-y-1">
                <div className="text-[10px] text-ocean-300 font-mono uppercase tracking-wider font-bold">MINAT_UTAMA</div>
                <h3 className="text-base font-bold text-slate-100">Web Dev & AI / ML Systems</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">Berfokus pada pengembangan web full-stack responsif, pembuatan model Machine Learning (ML), dan integrasi API AI Engine cerdas.</p>
              </div>
 
              <div className="border-t border-ocean-850/60 pt-4 space-y-1">
                <div className="text-[10px] text-ocean-300 font-mono uppercase tracking-wider font-bold">KEAHLIAN_SISTEM</div>
                <div className="text-sm font-bold text-slate-200">Full-Stack, Python & AI</div>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">Mahir menggunakan React, Next.js, Python (scikit-learn/TensorFlow), model data statistik, serta integrasi API Google AI / OpenAI.</p>
              </div>
            </div>
          </div>
 
        </motion.header>
 
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
          className="py-8 border-t border-ocean-800/60 pt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ type: "spring", stiffness: 45, damping: 15 }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-1.5 w-10 bg-ocean-400 rounded-full" />
                <span className="font-mono text-xs text-ocean-300 uppercase tracking-widest font-bold">Visualisasi Objek</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                VIEWPORT 3D INTERAKTIF
              </h2>
              <p className="mt-2 text-slate-350 text-sm leading-relaxed max-w-xl font-medium">
                Eksperimen visualisasi model 3D interaktif. Anda dapat menggerakkan atau memutar objek kustom pilihan untuk memetakan wireframe topologi secara presisi.
              </p>
            </div>
            
            {/* Legend indicators */}
            <div className="flex items-center gap-3 text-[10px] font-mono text-slate-400 font-bold">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span>Axis X</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span>Axis Y</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
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
      <footer className="bg-transparent border-t border-ocean-800/60 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-slate-350">
          
          {/* Branding */}
          <div className="space-y-1.5 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 bg-gradient-to-tr from-ocean-500 to-ocean-300 rounded-full animate-pulse" />
              <span className="font-bold tracking-widest text-slate-100 uppercase text-xs">Raffi Arya Putra Prabowo</span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono uppercase tracking-wider font-semibold">
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
              className="w-10 h-10 rounded-xl bg-ocean-950/60 hover:bg-ocean-900 border border-ocean-800/60 text-ocean-300 hover:text-white flex items-center justify-center transition-all shadow-sm shadow-black/20"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              id="footer-social-github"
              href="https://github.com/Medolsky"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-ocean-950/60 hover:bg-ocean-900 border border-ocean-800/60 text-ocean-300 hover:text-white flex items-center justify-center transition-all shadow-sm shadow-black/20"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              id="footer-social-instagram"
              href="https://instagram.com/rapiii_ar"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-ocean-950/60 hover:bg-ocean-900 border border-ocean-800/60 text-ocean-300 hover:text-white flex items-center justify-center transition-all shadow-sm shadow-black/20"
              title="Instagram Profile"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              id="footer-social-tiktok"
              href="https://tiktok.com/@rapiiii_ar"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-ocean-950/60 hover:bg-ocean-900 border border-ocean-800/60 text-ocean-300 hover:text-white flex items-center justify-center transition-all shadow-sm shadow-black/20"
              title="TikTok Profile"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.97 1.2 2.27 2 3.76 2.27v3.93c-1.3-.09-2.58-.57-3.66-1.37-.8-.59-1.45-1.38-1.92-2.28-.07 2.64-.04 5.28-.06 7.92-.02 1.4-.35 2.8-1.04 4.02-.68 1.22-1.72 2.2-2.96 2.8-1.42.7-3.04.97-4.6.76-1.57-.21-3.05-.99-4.13-2.13-1.09-1.15-1.75-2.67-1.89-4.24-.13-1.55.22-3.12.99-4.48.77-1.37 2.01-2.43 3.5-3 .92-.35 1.9-.52 2.88-.51v3.96c-.72-.02-1.44.17-2.06.56-.63.4-1.11.98-1.38 1.68-.28.71-.32 1.49-.13 2.22.2.73.63 1.38 1.23 1.84.6.45 1.34.69 2.08.67.75-.01 1.48-.26 2.06-.72.68-.53 1.09-1.34 1.12-2.2.02-3.6 0-7.2.01-10.8z"/>
              </svg>
            </a>
          </div>
 
          {/* Copyright notice */}
          <div className="text-[11px] text-slate-400 font-mono text-center md:text-right font-semibold">
            <span>© {new Date().getFullYear()} Raffi Arya. All Rights Reserved.</span>
            <span className="block mt-1 text-slate-500 font-normal">Made with genuine WebGL 2D projections.</span>
          </div>
 
        </div>
      </footer>
 
    </div>
  );
}
