import React from "react";
import { motion } from "motion/react";
import { Database, Sparkles, Globe, Briefcase, Cpu } from "lucide-react";

interface ActiveProject {
  id: string;
  title: string;
  category: string;
  percentage: number;
  description: string;
  tech: string[];
  icon: React.ReactNode;
  colorClass: string;
  glowClass: string;
}

export default function ActiveProjectsProgress() {
  const activeProjects: ActiveProject[] = [
    {
      id: "act-1",
      title: "Kompresi Aset Cloth, MLO & Vehicle — Ophelia Roleplay",
      category: "Game Mod & Optimization",
      percentage: 92,
      description: "Optimasi streaming pack, LOD reduction, & texture re-encoding untuk server FiveM.",
      tech: ["FiveM Stream Pack", "Texture DDS Compress", "YDR/YDD Optimizer"],
      icon: <img src="assets/images/ophelia_logo.png" className="w-6 h-6 object-contain rounded-md" alt="Ophelia Logo" />,
      colorClass: "from-cyan-500 to-ocean-400",
      glowClass: "shadow-cyan-500/20"
    },
    {
      id: "act-2",
      title: "Modder — Ophelia Roleplay Server",
      category: "3D Custom Assets",
      percentage: 85,
      description: "Pembuatan clothing kustom, livery, & integrasi MLO eksklusif.",
      tech: ["Blender 3D", "CodeWalker", "ZModeler3"],
      icon: <img src="assets/images/ophelia_logo.png" className="w-6 h-6 object-contain rounded-md" alt="Ophelia Logo" />,
      colorClass: "from-indigo-500 to-ocean-400",
      glowClass: "shadow-indigo-500/20"
    },
    {
      id: "act-3",
      title: "Web Developer — abbata.com",
      category: "Full-Stack Development",
      percentage: 95,
      description: "Pengembangan front-end & back-end portal utama Abbata Group.",
      tech: ["Next.js", "React", "PostgreSQL"],
      icon: <img src="assets/images/abbata_logo.png" className="w-6 h-6 object-contain rounded-md" alt="Abbata Logo" />,
      colorClass: "from-emerald-500 to-ocean-400",
      glowClass: "shadow-emerald-500/20"
    },
    {
      id: "act-4",
      title: "Company Profile — Abbata Wisata & Abbata Shuttle",
      category: "Web & Booking System",
      percentage: 70,
      description: "Pembuatan landing page wisata interaktif & booking system real-time shuttle.",
      tech: ["React", "Tailwind CSS", "WhatsApp API"],
      icon: <img src="assets/images/abbata_logo.png" className="w-6 h-6 object-contain rounded-md" alt="Abbata Logo" />,
      colorClass: "from-amber-500 to-ocean-400",
      glowClass: "shadow-amber-500/20"
    }
  ];

  return (
    <section id="active-progress-section" className="relative">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-ocean-500/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />
      
      {/* Section Header */}
      <div className="flex flex-col mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="h-1.5 w-10 bg-ocean-400 rounded-full" />
          <span className="font-mono text-xs text-ocean-300 uppercase tracking-widest font-bold">Status Berjalan</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl uppercase">
          PROGRES PEKERJAAN AKTIF
        </h2>
        <p className="mt-2 text-slate-350 text-sm leading-relaxed max-w-2xl font-medium">
          Daftar pekerjaan dan proyek yang sedang saya jalankan saat ini. Diukur berdasarkan persentase penyelesaian fase pengembangan, pengujian, dan optimasi.
        </p>
      </div>

      {/* Grid of Progress Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {activeProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="bg-ocean-900/40 border border-ocean-800/60 rounded-[28px] p-6 backdrop-blur-2xl shadow-lg shadow-black/10 hover:border-ocean-700/60 transition-all duration-300 flex flex-col justify-between gap-5 relative group"
          >
            {/* Upper Info Header */}
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <div className="flex items-center gap-2.5">
                  <div className={`p-2 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                    project.id === "act-3" || project.id === "act-4"
                      ? "bg-white border-white shadow-md shadow-white/5"
                      : "bg-[#0b0c10] border-slate-800/80 group-hover:border-slate-700/80"
                  }`}>
                    {project.icon}
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-ocean-300 font-bold block leading-none mb-1">
                      {project.category}
                    </span>
                    <span className="text-slate-400 text-[10px] font-mono leading-none">
                      RUNNING_TASK_ID: {project.id.toUpperCase()}
                    </span>
                  </div>
                </div>
                {/* Pulsing Status Badge */}
                <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[9px] font-mono py-1 px-2.5 rounded-lg font-bold">
                  <span className="w-1 h-1 bg-emerald-400 rounded-full animate-ping" />
                  <span>IN_PROGRESS</span>
                </div>
              </div>

              <h3 className="text-base font-bold text-slate-100 group-hover:text-ocean-300 transition-colors duration-350 leading-snug">
                {project.title}
              </h3>
              <p className="mt-2 text-xs text-slate-350 leading-relaxed font-medium">
                {project.description}
              </p>
            </div>

            {/* Bottom Progress Bar & Percentage */}
            <div className="space-y-2">
              <div className="flex justify-between items-end text-xs">
                <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                  {project.tech.map((t) => (
                    <span 
                      key={t}
                      className="bg-ocean-950/60 border border-ocean-850/60 text-[9px] font-mono text-slate-350 px-2 py-0.5 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="font-mono font-black text-slate-100 flex items-baseline gap-0.5">
                  <span className="text-lg">{project.percentage}</span>
                  <span className="text-[10px] text-ocean-300">%</span>
                </div>
              </div>

              {/* Progress Bar Container */}
              <div className="w-full h-2 bg-ocean-950/95 rounded-full overflow-hidden p-0.5 border border-ocean-850/40">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${project.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                  className={`h-full rounded-full bg-gradient-to-r ${project.colorClass} shadow-lg ${project.glowClass}`}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
