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
      <div className="absolute top-1/3 left-1/2 w-[500px] h-[500px] bg-white/5 blur-[130px] rounded-full pointer-events-none -translate-x-1/2" />

      {/* Grid wrapper */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 items-start">
        
        {/* Left col: Big bio profile showcase card (4 cols) */}
        <div className="xl:col-span-4 xl:sticky xl:top-28 flex flex-col justify-between bg-zinc-950/80 border border-zinc-800 rounded-[32px] p-6 md:p-8 backdrop-blur-2xl relative overflow-hidden self-start shadow-2xl shadow-black/80 animate-fade-in group">
          
          {/* Side border highlight */}
          <div className="absolute top-0 left-0 w-[4px] h-36 bg-gradient-to-b from-white via-zinc-400 to-zinc-700 shadow-lg shadow-white/20" />

          <div>
            {/* Header branding */}
            <div className="flex items-center gap-2 mb-4">
              <CircleUser className="w-5 h-5 text-white animate-pulse" />
              <span className="font-mono text-[10px] uppercase text-zinc-300 tracking-widest font-bold">
                BIOGRAFI IDENTITAS
              </span>
            </div>

            {/* User Photo Frame with Glassmorphic Styling */}
            <div className="relative mb-6 group/photo">
              <div className="absolute -inset-1 rounded-2xl bg-white/20 opacity-40 blur-md group-hover/photo:opacity-100 transition duration-500" />
              <div className="relative rounded-2xl overflow-hidden border border-zinc-700 bg-black aspect-[3/4] w-full">
                <img 
                  src={`${import.meta.env.BASE_URL}assets/images/profile_photo.png`} 
                  alt="Raffi Arya Putra Prabowo" 
                  className="w-full h-full object-cover object-center transform group-hover/photo:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono font-bold text-zinc-200">
                  <span className="bg-zinc-950/90 backdrop-blur-md border border-zinc-700 px-2 py-1 rounded-md text-white">
                    JAKARTA, ID
                  </span>
                  <span className="bg-zinc-800/80 backdrop-blur-md border border-zinc-700 px-2 py-1 rounded-md text-white flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                    SEMESTER 8
                  </span>
                </div>
              </div>
            </div>

            {/* Title / Name details */}
            <div className="space-y-1">
              <h1 className="text-3xl font-extrabold text-white tracking-widest sm:text-4xl uppercase font-heading">
                Raffi Arya
              </h1>
              <p className="text-xs font-bold tracking-widest uppercase text-zinc-300 font-mono">
                Co-Founder BRaft.dev · Web & AI/ML Specialist
              </p>
            </div>

            {/* Quick fact list blocks */}
            <div className="mt-8 space-y-3.5 text-xs font-sans text-zinc-300">
              
              {/* TM / TTL */}
              <div className="flex items-center gap-3 bg-zinc-900/80 border border-zinc-800 px-4 py-3 rounded-2xl transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-800">
                <Calendar className="w-4 h-4 text-white" />
                <div>
                  <span className="block text-[9px] font-mono text-zinc-400 uppercase tracking-widest">Tempat, Tanggal Lahir</span>
                  <span className="font-semibold text-white">Jakarta, 14 Oktober 2003</span>
                </div>
              </div>

              {/* Status / Semester */}
              <div className="flex items-center gap-3 bg-zinc-900/80 border border-zinc-800 px-4 py-3 rounded-2xl transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-800">
                <GraduationCap className="w-4 h-4 text-white" />
                <div>
                  <span className="block text-[9px] font-mono text-zinc-400 uppercase tracking-widest">Akademik Kuliah</span>
                  <span className="font-semibold text-white">Mahasiswa Semester 8</span>
                </div>
              </div>

              {/* Campus */}
              <div className="flex items-center gap-3 bg-zinc-900/80 border border-zinc-800 px-4 py-3 rounded-2xl transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-800">
                <MapPin className="w-4 h-4 text-white" />
                <div>
                  <span className="block text-[9px] font-mono text-zinc-400 uppercase tracking-widest">Universitas Almamater</span>
                  <span className="font-semibold text-white">Universitas Indraprasta PGRI (Unindra)</span>
                </div>
              </div>

              <a
                id="profile-link-braft"
                href="https://braftdev.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 bg-zinc-900/90 border border-zinc-700 px-4 py-3 rounded-2xl transition-all duration-300 hover:border-white hover:bg-zinc-800"
              >
                <Briefcase className="w-4 h-4 text-white" />
                <div>
                  <span className="block text-[9px] font-mono text-zinc-400 uppercase tracking-widest">Professional Role</span>
                  <span className="font-semibold text-white">Co-Founder BRaft.dev ↗</span>
                </div>
              </a>
            </div>

            {/* Long bio text */}
            <p className="mt-6 text-sm text-zinc-400 leading-relaxed font-sans font-medium">
              "Mahasiswa aktif semester akhir Universitas Indraprasta PGRI sekaligus Co-Founder BRaft.dev, digital agency dan template marketplace. Berfokus pada pengembangan web full-stack, data analytics, data science, pengolahan model Machine Learning dengan Python, serta rekayasa AI. Memadukan antarmuka web modern responsif dengan insight berbasis data untuk membangun solusi digital yang bernilai dan berdampak."
            </p>
          </div>

          {/* Core Stat numbers block */}
          <div className="mt-8 pt-6 border-t border-zinc-800 grid grid-cols-3 gap-3 text-center">
            <div className="bg-zinc-900/80 border border-zinc-800 p-3 rounded-2xl hover:border-zinc-700 transition-all duration-300">
              <span className="block text-xl font-black text-white font-mono">{age}</span>
              <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider font-semibold">Tahun Usia</span>
            </div>
            <div className="bg-zinc-900/80 border border-zinc-800 p-3 rounded-2xl hover:border-zinc-700 transition-all duration-300">
              <span className="block text-xl font-black text-white font-mono">6+</span>
              <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider font-semibold">Peran IT</span>
            </div>
            <div className="bg-zinc-900/80 border border-zinc-800 p-3 rounded-2xl hover:border-zinc-700 transition-all duration-300">
              <span className="block text-xl font-black text-white font-mono">3</span>
              <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider font-semibold">Sertifikasi</span>
            </div>
          </div>

        </div>

        {/* Right col: Full CV details (8 cols) */}
        <div className="xl:col-span-8 space-y-10">
          
          {/* 1. SECTION: PENGALAMAN KERJA */}
          <div className="bg-zinc-950/80 border border-zinc-800 rounded-[32px] p-6 md:p-8 backdrop-blur-2xl space-y-6 shadow-xl shadow-black/80">
            <div className="flex items-center gap-2 border-b border-zinc-800 pb-4">
              <Briefcase className="w-5 h-5 text-white animate-pulse" />
              <h2 className="font-mono text-xs uppercase text-white tracking-widest font-bold">
                PENGALAMAN KERJA
              </h2>
            </div>
            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div 
                  key={exp.id} 
                  className="bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 p-5 rounded-2xl relative overflow-hidden transition-all duration-300 group"
                >
                  <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-white to-transparent group-hover:from-zinc-300 transition-colors" />
                  
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                    <div>
                      <h3 className="text-base font-extrabold text-white leading-snug">{exp.role}</h3>
                      <p className="text-xs text-zinc-400 font-mono mt-0.5 font-bold">@ {exp.company}</p>
                    </div>
                    <span className="bg-black text-white border border-zinc-700 text-[8px] font-mono tracking-wider px-2 py-0.5 rounded uppercase font-bold shrink-0">
                      {exp.period}
                    </span>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    {exp.description.map((bullet, i) => (
                      <p key={i} className="text-zinc-300 text-xs leading-relaxed flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 flex-shrink-0" />
                        <span className="font-medium">{bullet}</span>
                      </p>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800">
                    {exp.skills.map((sk) => (
                      <span
                        key={sk}
                        className="bg-black border border-zinc-800 text-zinc-300 shadow-sm font-mono text-[8px] font-bold py-0.5 px-2 rounded-md flex items-center gap-1"
                      >
                        <Award className="w-2.5 h-2.5 text-white" />
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. SECTION: RIWAYAT PENDIDIKAN */}
          <div className="bg-zinc-950/80 border border-zinc-800 rounded-[32px] p-6 md:p-8 backdrop-blur-2xl space-y-6 shadow-xl shadow-black/80">
            <div className="flex items-center gap-2 border-b border-zinc-800 pb-4">
              <GraduationCap className="w-5 h-5 text-white animate-pulse" />
              <h2 className="font-mono text-xs uppercase text-white tracking-widest font-bold">
                RIWAYAT PENDIDIKAN
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 p-5 rounded-2xl relative overflow-hidden flex flex-col justify-between transition-all duration-300 group">
                  <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-white to-transparent group-hover:from-zinc-300 transition-colors" />
                  <div>
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                      <h4 className="text-sm font-extrabold text-white leading-snug">{edu.institution}</h4>
                      <span className="bg-black border border-zinc-800 text-zinc-300 shadow-sm font-mono text-[8px] px-2 py-0.5 rounded-md shrink-0 font-bold">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 font-mono mb-3 font-bold">{edu.major}</p>
                    
                    {edu.gpa && (
                      <div className="inline-block bg-black border border-zinc-800 text-white font-mono text-[9px] px-2.5 py-0.5 rounded-lg mb-3 font-bold">
                        {edu.gpa}
                      </div>
                    )}
                    
                    <div className="space-y-1.5">
                      {edu.details.map((detail, idx) => (
                        <p key={idx} className="text-zinc-400 text-xs leading-relaxed flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full mt-1.5 flex-shrink-0" />
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
          <div className="bg-zinc-950/80 border border-zinc-800 rounded-[32px] p-6 md:p-8 backdrop-blur-2xl space-y-6 shadow-xl shadow-black/80">
            <div className="flex items-center gap-2 border-b border-zinc-800 pb-4 justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-white animate-pulse" />
                <h2 className="font-mono text-xs uppercase text-white tracking-widest font-bold">
                  SERTIFIKASI & LISENSI
                </h2>
              </div>
              <span className="bg-zinc-900 border border-zinc-700 text-white font-mono text-[9px] font-bold py-1 px-2.5 rounded-lg flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                BNSP & Adinusa Aktif
              </span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 p-4 rounded-2xl flex flex-col justify-between transition-all duration-300 group">
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-black border border-zinc-800 flex items-center justify-center text-white mb-3 group-hover:bg-white group-hover:text-black transition-all">
                      <Award className="w-4 h-4" />
                    </div>
                    <h4 className="text-[9px] font-bold text-zinc-400 font-mono uppercase tracking-wider">{cert.issuer}</h4>
                    <h3 className="text-xs font-extrabold text-white mt-1 leading-snug">{cert.title}</h3>
                    <p className="text-zinc-400 text-[10px] mt-2 leading-relaxed font-sans font-medium">{cert.description}</p>
                  </div>
                  <div className="text-[9px] text-zinc-400 font-mono mt-4 font-bold">{cert.year}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. SECTION: KEAHLIAN TEKNIS */}
          <div className="bg-zinc-950/80 border border-zinc-800 rounded-[32px] p-6 md:p-8 backdrop-blur-2xl space-y-6 shadow-xl shadow-black/80">
            <div className="flex items-center gap-2 border-b border-zinc-800 pb-4">
              <Compass className="w-5 h-5 text-white animate-pulse" />
              <h2 className="font-mono text-xs uppercase text-white tracking-widest font-bold">
                KEAHLIAN & METODE
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SKILL_GROUPS.map((group) => (
                <div key={group.category} className="space-y-3 bg-zinc-900/60 border border-zinc-800 p-5 rounded-2xl">
                  <h4 className="text-[9px] font-mono uppercase text-zinc-400 tracking-widest font-bold border-b border-zinc-800 pb-2">
                    {group.category}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((skill) => (
                      <span 
                        key={skill}
                        className="bg-black border border-zinc-800 text-zinc-300 font-mono text-[9px] py-1 px-2.5 rounded-lg flex items-center gap-1.5 hover:border-white hover:text-white transition-all cursor-default shadow-sm font-semibold"
                      >
                        <span className="w-1 h-1 rounded-full bg-white" />
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
