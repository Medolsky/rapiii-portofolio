import React from "react";
import { EXPERIENCES, EDUCATION, CERTIFICATIONS, SKILL_GROUPS } from "../data";
import { Award, Briefcase, Calendar, CircleUser, Compass, GraduationCap, MapPin, ShieldCheck } from "lucide-react";

export default function ProfileHero() {
  // Quick stats calculations
  const birthDate = new Date("2003-10-14");
  const today = new Date("2026-05-25"); // Anchor timeline date from metadata
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return (
    <section id="profile-section" className="py-20 relative">
      <div className="absolute top-1/3 left-1/2 w-[500px] h-[500px] bg-ocean-500/10 blur-[130px] rounded-full pointer-events-none -translate-x-1/2" />

      {/* Grid wrapper */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 items-start">
        
        {/* Left col: Big bio profile showcase card (4 cols) */}
        <div className="xl:col-span-4 xl:sticky xl:top-28 flex flex-col justify-between bg-ocean-900/50 border border-ocean-800/80 rounded-[32px] p-6 md:p-8 backdrop-blur-2xl relative overflow-hidden self-start shadow-xl shadow-black/20 animate-fade-in">
          
          {/* Neon side border highlight */}
          <div className="absolute top-0 left-0 w-[4px] h-32 bg-gradient-to-b from-ocean-500 to-ocean-300" />

          <div>
            {/* Header branding */}
            <div className="flex items-center gap-2 mb-6">
              <CircleUser className="w-5 h-5 text-ocean-300 animate-pulse" />
              <span className="font-mono text-[10px] uppercase text-ocean-300 tracking-wider font-bold">
                BIOGRAFI IDENTITAS
              </span>
            </div>

            {/* Title / Name details */}
            <div className="space-y-1">
              <h1 className="text-3xl font-extrabold text-slate-100 tracking-widest sm:text-4xl uppercase">
                Raffi Arya
              </h1>
              <p className="text-xs font-bold tracking-widest uppercase bg-gradient-to-r from-ocean-400 via-ocean-300 to-ocean-100 bg-clip-text text-transparent">
                Web Developer & AI/ML Specialist
              </p>
            </div>

            {/* Quick fact list blocks */}
            <div className="mt-8 space-y-4 text-xs font-sans text-slate-300">
              
              {/* TM / TTL */}
              <div className="flex items-center gap-3 bg-ocean-950/40 border border-ocean-800/60 px-4 py-3 rounded-2xl">
                <Calendar className="w-4 h-4 text-ocean-400" />
                <div>
                  <span className="block text-[9px] font-mono text-slate-400 uppercase tracking-widest">Tempat, Tanggal Lahir</span>
                  <span className="font-semibold text-slate-200">Jakarta, 14 Oktober 2003</span>
                </div>
              </div>

              {/* Status / Semester */}
              <div className="flex items-center gap-3 bg-ocean-950/40 border border-ocean-800/60 px-4 py-3 rounded-2xl">
                <GraduationCap className="w-4 h-4 text-ocean-400" />
                <div>
                  <span className="block text-[9px] font-mono text-slate-400 uppercase tracking-widest">Akademik Kuliah</span>
                  <span className="font-semibold text-slate-200">Mahasiswa Semester 8</span>
                </div>
              </div>

              {/* Campus */}
              <div className="flex items-center gap-3 bg-ocean-950/40 border border-ocean-800/60 px-4 py-3 rounded-2xl">
                <MapPin className="w-4 h-4 text-ocean-400" />
                <div>
                  <span className="block text-[9px] font-mono text-slate-400 uppercase tracking-widest">Universitas Almamater</span>
                  <span className="font-semibold text-slate-200">Universitas Indraprasta PGRI (Unindra)</span>
                </div>
              </div>
            </div>

            {/* Long bio text */}
            <p className="mt-6 text-sm text-slate-350 leading-relaxed font-sans font-medium">
              "Mahasiswa aktif semester akhir Universitas Indraprasta PGRI yang berfokus pada pengembangan web full-stack, pengolahan model Machine Learning, dan rekayasa AI. Memiliki keahlian dalam analisis data statistik, pemodelan Python, pengembangan antarmuka web modern responsif, serta integrasi teknologi kecerdasan buatan cerdas. Siap belajar hal baru, adaptif, kreatif, dan berorientasi pada hasil."
            </p>
          </div>

          {/* Core Stat numbers block */}
          <div className="mt-8 pt-6 border-t border-ocean-800/60 grid grid-cols-3 gap-3 text-center">
            <div className="bg-ocean-950/40 border border-ocean-800/65 p-3 rounded-2xl">
              <span className="block text-xl font-black text-ocean-300 font-mono">{age}</span>
              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider font-semibold">Tahun Usia</span>
            </div>
            <div className="bg-ocean-950/40 border border-ocean-800/65 p-3 rounded-2xl">
              <span className="block text-xl font-black text-ocean-300 font-mono">6+</span>
              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider font-semibold">Peran IT</span>
            </div>
            <div className="bg-ocean-950/40 border border-ocean-800/65 p-3 rounded-2xl">
              <span className="block text-xl font-black text-ocean-300 font-mono">3</span>
              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider font-semibold">Sertifikasi</span>
            </div>
          </div>

        </div>

        {/* Right col: Full CV details (8 cols) */}
        <div className="xl:col-span-8 space-y-10">
          
          {/* 1. SECTION: PENGALAMAN KERJA */}
          <div className="bg-ocean-900/50 border border-ocean-800/80 rounded-[32px] p-6 md:p-8 backdrop-blur-2xl space-y-6 shadow-xl shadow-black/20">
            <div className="flex items-center gap-2 border-b border-ocean-800/60 pb-4">
              <Briefcase className="w-5 h-5 text-ocean-300 animate-pulse" />
              <h2 className="font-mono text-xs uppercase text-ocean-300 tracking-widest font-bold">
                PENGALAMAN KERJA
              </h2>
            </div>
            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div 
                  key={exp.id} 
                  className="bg-ocean-950/30 hover:bg-ocean-900/40 border border-ocean-800/50 hover:border-ocean-700/60 p-5 rounded-2xl relative overflow-hidden hover:shadow-lg hover:shadow-black/10 transition-all duration-300 group"
                >
                  {/* Decorative timeline line */}
                  <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-ocean-500/30 to-transparent group-hover:from-ocean-400 transition-colors" />
                  
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                    <div>
                      <h3 className="text-base font-extrabold text-slate-100 leading-snug">{exp.role}</h3>
                      <p className="text-xs text-ocean-300 font-mono mt-0.5 font-bold">@ {exp.company}</p>
                    </div>
                    <span className="bg-ocean-950/50 text-ocean-300 border border-ocean-800/60 text-[8px] font-mono tracking-wider px-2 py-0.5 rounded uppercase font-bold shrink-0">
                      {exp.period}
                    </span>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    {exp.description.map((bullet, i) => (
                      <p key={i} className="text-slate-300 text-xs leading-relaxed flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 bg-ocean-400 rounded-full mt-1.5 flex-shrink-0" />
                        <span className="font-medium">{bullet}</span>
                      </p>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-ocean-850/60">
                    {exp.skills.map((sk) => (
                      <span
                        key={sk}
                        className="bg-ocean-950/40 border border-ocean-800/60 text-slate-300 shadow-sm font-mono text-[8px] font-bold py-0.5 px-2 rounded-md flex items-center gap-1"
                      >
                        <Award className="w-2.5 h-2.5 text-ocean-400" />
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. SECTION: RIWAYAT PENDIDIKAN */}
          <div className="bg-ocean-900/50 border border-ocean-800/80 rounded-[32px] p-6 md:p-8 backdrop-blur-2xl space-y-6 shadow-xl shadow-black/20">
            <div className="flex items-center gap-2 border-b border-ocean-800/60 pb-4">
              <GraduationCap className="w-5 h-5 text-ocean-300 animate-pulse" />
              <h2 className="font-mono text-xs uppercase text-ocean-300 tracking-widest font-bold">
                RIWAYAT PENDIDIKAN
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="bg-ocean-950/30 hover:bg-ocean-900/40 border border-ocean-800/50 hover:border-ocean-700/60 p-5 rounded-2xl relative overflow-hidden flex flex-col justify-between hover:shadow-lg hover:shadow-black/10 transition-all duration-300 group">
                  <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-ocean-500/30 to-transparent group-hover:from-ocean-400 transition-colors" />
                  <div>
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                      <h4 className="text-sm font-extrabold text-slate-100 leading-snug">{edu.institution}</h4>
                      <span className="bg-ocean-950/50 border border-ocean-800/60 text-slate-300 shadow-sm font-mono text-[8px] px-2 py-0.5 rounded-md shrink-0 font-bold">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-xs text-ocean-300 font-mono mb-3 font-bold">{edu.major}</p>
                    
                    {edu.gpa && (
                      <div className="inline-block bg-ocean-950/60 border border-ocean-800/60 text-ocean-300 font-mono text-[9px] px-2.5 py-0.5 rounded-lg mb-3 font-bold">
                        {edu.gpa}
                      </div>
                    )}
                    
                    <div className="space-y-1.5">
                      {edu.details.map((detail, idx) => (
                        <p key={idx} className="text-slate-350 text-xs leading-relaxed flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-ocean-450 rounded-full mt-1.5 flex-shrink-0" />
                          <span className="font-medium">{detail}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. SECTION: SERTIFIKASI & KREDENSIAL */}
          <div className="bg-ocean-900/50 border border-ocean-800/80 rounded-[32px] p-6 md:p-8 backdrop-blur-2xl space-y-6 shadow-xl shadow-black/20">
            <div className="flex items-center gap-2 border-b border-ocean-800/60 pb-4 justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-ocean-300 animate-pulse" />
                <h2 className="font-mono text-xs uppercase text-ocean-300 tracking-widest font-bold">
                  SERTIFIKASI & LISENSI
                </h2>
              </div>
              <span className="bg-emerald-950/40 border border-emerald-800/50 text-emerald-400 font-mono text-[9px] font-bold py-1 px-2.5 rounded-lg flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                BNSP & Adinusa Aktif
              </span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="bg-ocean-950/30 hover:bg-ocean-900/40 border border-ocean-800/50 hover:border-ocean-700/60 p-4 rounded-2xl flex flex-col justify-between hover:shadow-md transition-all duration-300 group">
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-ocean-950/60 border border-ocean-800/60 flex items-center justify-center text-ocean-400 mb-3 group-hover:bg-ocean-500 group-hover:text-white transition-all">
                      <Award className="w-4 h-4" />
                    </div>
                    <h4 className="text-[9px] font-bold text-slate-400 font-mono uppercase tracking-wider">{cert.issuer}</h4>
                    <h3 className="text-xs font-extrabold text-slate-150 mt-1 leading-snug">{cert.title}</h3>
                    <p className="text-slate-350 text-[10px] mt-2 leading-relaxed font-sans font-medium">{cert.description}</p>
                  </div>
                  <div className="text-[9px] text-ocean-300 font-mono mt-4 font-bold">{cert.year}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. SECTION: KEAHLIAN TEKNIS */}
          <div className="bg-ocean-900/50 border border-ocean-800/80 rounded-[32px] p-6 md:p-8 backdrop-blur-2xl space-y-6 shadow-xl shadow-black/20">
            <div className="flex items-center gap-2 border-b border-ocean-800/60 pb-4">
              <Compass className="w-5 h-5 text-ocean-300 animate-pulse" />
              <h2 className="font-mono text-xs uppercase text-ocean-300 tracking-widest font-bold">
                KEAHLIAN & METODE
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SKILL_GROUPS.map((group) => (
                <div key={group.category} className="space-y-3 bg-ocean-950/30 border border-ocean-800/60 p-5 rounded-2xl">
                  <h4 className="text-[9px] font-mono uppercase text-slate-400 tracking-widest font-bold border-b border-ocean-850 pb-2">
                    {group.category}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((skill) => (
                      <span 
                        key={skill}
                        className="bg-ocean-900/50 border border-ocean-800/60 text-slate-300 font-mono text-[9px] py-1 px-2.5 rounded-lg flex items-center gap-1.5 hover:border-ocean-500 hover:bg-ocean-800/30 hover:text-white transition-all cursor-default shadow-sm font-semibold"
                      >
                        <span className="w-1 h-1 rounded-full bg-gradient-to-tr from-ocean-500 to-ocean-300" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
