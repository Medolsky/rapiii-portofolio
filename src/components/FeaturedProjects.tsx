import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Project } from "../types";
import { INITIAL_PROJECTS } from "../data";
import { Code, Box, Cpu, ExternalLink, Sparkles, Filter, X, ArrowLeft } from "lucide-react";

interface FeaturedProjectsProps {
  onLoadModel: (modelType: "car" | "sword" | "hub") => void;
}

export default function FeaturedProjects({ onLoadModel }: FeaturedProjectsProps) {
  const [projects] = useState<Project[]>(() => INITIAL_PROJECTS);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ["All", "3D Modeling", "Game Mod", "Administration", "Full-Stack"];

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case "3D Modeling": return <Box className="w-3.5 h-3.5" />;
      case "Game Mod": return <Sparkles className="w-3.5 h-3.5" />;
      case "Administration": return <Cpu className="w-3.5 h-3.5" />;
      case "Full-Stack": return <Code className="w-3.5 h-3.5" />;
      default: return null;
    }
  };

  return (
    <section id="projects-section" className="py-20 relative">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-ocean-500/10 blur-[130px] rounded-full pointer-events-none -translate-y-1/2" />
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="h-1.5 w-10 bg-ocean-400 rounded-full" />
            <span className="font-mono text-xs text-ocean-300 uppercase tracking-widest font-bold">Karya & Proyek</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            PROYEK & PEKERJAAN
          </h2>
          <p className="mt-3 text-slate-350 max-w-xl text-sm leading-relaxed font-medium">
            Daftar proyek kreatif yang sedang berjalan maupun hasil modifikasi game, pemodelan 3D, dan pengembangan web yang telah selesai.
          </p>
        </div>

        {/* Filter Tab Layout */}
        <div className="flex flex-wrap gap-1.5 bg-ocean-900/60 border border-ocean-800/80 p-1.5 rounded-[20px] self-start backdrop-blur-2xl">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-btn-${cat.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-[14px] text-xs font-semibold tracking-wide transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-ocean-600 to-ocean-400 text-white shadow-lg shadow-ocean-500/15"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {getCategoryIcon(cat)}
              <span>{cat}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Projects */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -6 }}
              className="bg-ocean-900/40 hover:bg-ocean-800/30 border border-ocean-800/50 hover:border-ocean-700/60 rounded-[32px] overflow-hidden cursor-pointer flex flex-col group transition-all duration-300 shadow-md shadow-black/10 relative"
              onClick={() => setActiveProject(project)}
            >
              {/* Card Image Cover */}
              <div className="relative h-48 overflow-hidden bg-ocean-950">
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-950 via-ocean-950/20 to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Status indicator: Running / Active */}
                {project.status === "active" && (
                  <div className="absolute top-4 right-4 z-20 flex items-center gap-1 bg-emerald-500/90 backdrop-blur text-white text-[9px] font-bold py-1 px-2.5 rounded-xl border border-emerald-400/30 badge-pulse">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                    <span>SEDANG BERJALAN</span>
                  </div>
                )}

                {/* Micro tech pill info */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 bg-ocean-950/80 backdrop-blur border border-ocean-800/60 py-1 px-2.5 rounded-xl">
                  {getCategoryIcon(project.category)}
                  <span className="font-mono text-[10px] text-slate-350 font-medium uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Info Area */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-ocean-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-350 leading-relaxed line-clamp-3 font-medium">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-ocean-800/50 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span 
                      key={tech} 
                      className="bg-ocean-950/50 text-slate-350 font-mono text-[9px] px-2.5 py-0.5 rounded-lg border border-ocean-800/40"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-[10px] text-slate-400 font-mono py-0.5 px-1 font-bold">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Interactive Expanded Detail Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
            {/* Modal backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setActiveProject(null)}
            />

            {/* Modal Box */}
            <motion.div
              layoutId={`modal-${activeProject.id}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="bg-ocean-900 border border-ocean-800/80 rounded-[40px] w-full max-w-4xl max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl custom-scrollbar"
            >
              {/* Floating Close Button */}
              <button
                id="modal-close-btn"
                onClick={() => setActiveProject(null)}
                className="absolute top-5 right-5 z-20 bg-ocean-950/50 hover:bg-ocean-600 border border-ocean-800/60 text-slate-350 hover:text-white p-2.5 rounded-full transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Cover Header Banner */}
              <div className="relative h-64 md:h-80 bg-ocean-950">
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-900 via-ocean-900/40 to-transparent z-15" />
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute bottom-6 left-6 md:left-10 z-20">
                  <span className="bg-gradient-to-r from-ocean-600 to-ocean-400 text-white font-mono text-[9px] py-1 px-3.5 rounded-full uppercase tracking-wider font-semibold">
                    {activeProject.category}
                  </span>
                  <h1 className="text-2xl md:text-4xl font-extrabold text-white mt-3 tracking-tight">
                    {activeProject.title}
                  </h1>
                </div>
              </div>

              {/* Grid content inside modal */}
              <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
                
                {/* Left block: Description / Features */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h4 className="text-xs uppercase font-mono tracking-widest text-ocean-300 mb-2 font-bold">Deskripsi Proyek</h4>
                    <p className="text-slate-300 text-sm leading-relaxed font-sans font-medium">
                      {activeProject.longDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase font-mono tracking-widest text-ocean-300 mb-3 font-bold">Fitur Utama & Spesifikasi</h4>
                    <ul className="space-y-2.5 text-slate-300 text-sm font-medium">
                      {activeProject.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 bg-ocean-400 rounded-full mt-2 flex-shrink-0 animate-pulse" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right block: Tech stack & Interactive engine linkage */}
                <div className="space-y-6 bg-ocean-950/40 border border-ocean-800/80 rounded-[24px] p-6 self-start backdrop-blur-2xl">
                  
                  {/* Tech stack */}
                  <div>
                    <h4 className="text-[10px] uppercase font-mono tracking-wider text-ocean-300 mb-3 font-bold">Teknologi Terpakai</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeProject.technologies.map(tech => (
                        <span 
                          key={tech} 
                          className="bg-ocean-950/60 text-slate-300 font-mono text-[10px] px-2.5 py-1 rounded-lg border border-ocean-800/40"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 3D Linkage Engine controller */}
                  <div className="border-t border-ocean-800/60 pt-5 space-y-3.5">
                    <h4 className="text-[10px] uppercase font-mono tracking-wider text-ocean-300 font-bold">Integrasi 3D Renderer</h4>
                    <p className="text-[11px] text-slate-350 leading-relaxed font-sans font-medium">
                      Terhubung langsung ke viewport interaktif. Muat representasi bentuk mesh poly-model proyek ini di bagian simulator atas halaman.
                    </p>
                    <button
                      id="btn-load-viewport"
                      onClick={() => {
                        onLoadModel(activeProject.modelType);
                        setActiveProject(null);
                        // Smooth scroll to viewport on load
                        const viewportElem = document.getElementById("viewport-container-section");
                        if (viewportElem) {
                          viewportElem.scrollIntoView({ behavior: "smooth", block: "center" });
                        }
                      }}
                      className="w-full bg-gradient-to-r from-ocean-600 to-ocean-400 hover:brightness-110 text-white text-xs font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer shadow-lg shadow-ocean-500/25"
                    >
                      <Box className="w-4 h-4 animate-bounce" />
                      <span>MUAT MODEL 3D PROYEK</span>
                    </button>
                  </div>
                </div>

              </div>

              {/* Bottom footer bar of modal */}
              <div className="px-6 md:px-10 py-5 bg-ocean-950/50 border-t border-ocean-800/60 flex items-center justify-between rounded-b-[40px]">
                <button
                  id="modal-back-btn"
                  onClick={() => setActiveProject(null)}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Kembali ke portofolio
                </button>
                <div className="font-mono text-[9px] text-slate-500">
                  ID: {activeProject.id.toUpperCase()} • RAFFI ARYA PROJECTS
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
