import { useEffect } from 'react';
import { ArrowDownRight, ArrowUpRight, Code2, Database, GraduationCap } from "lucide-react";

declare global {
  interface Window {
    UnicornStudio?: {
      isInitialized?: boolean;
      init: () => void;
    };
  }
}


const profileImage = `${import.meta.env.BASE_URL}assets/images/profile_photo.png`;

export default function HeroAsciiOne() {
  useEffect(() => {
    // Check if script already initialized
    if (window.UnicornStudio) {
      try {
        window.UnicornStudio.init();
      } catch (e) {
        console.error(e);
      }
      return;
    }

    const embedScript = document.createElement('script');
    embedScript.type = 'text/javascript';
    embedScript.src = 'https://cdn.jsdelivr.net/gh/hiunicorns/unicornstudio@latest/dist/unicornStudio.umd.js';
    embedScript.onload = () => {
      if (window.UnicornStudio) {
        try {
          window.UnicornStudio.init();
        } catch (e) {
          console.error(e);
        }
      }
    };
    document.head.appendChild(embedScript);
  }, []);

  return (
    <header id="hero" className="relative isolate min-h-[min(820px,calc(100vh-5rem))] w-full overflow-hidden rounded-[2rem] bg-black font-mono text-white border border-white/20 shadow-2xl shadow-black/80">
      {/* Background Starfield */}
      <div className="absolute inset-0 stars-bg pointer-events-none z-0" aria-hidden="true" />

      {/* Unicorn Studio Background Canvas Embed (Atlas / Sisyphus ASCII graphic) */}
      <div className="absolute inset-0 z-0 opacity-70 pointer-events-none">
        <div 
          data-us-project="N4h1M4R8fV1WnE64gL2q" 
          className="w-full h-full"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Top Header HUD Navigation */}
      <div className="absolute left-0 right-0 top-0 z-20 border-b border-white/20 bg-black/40 backdrop-blur-sm px-6 py-3 sm:px-10">
        <div className="mx-auto flex items-center justify-between text-[10px] font-mono text-white/70">
          <div className="flex items-center gap-3">
            <span className="font-bold tracking-widest text-white">RAFFI ARYA</span>
            <span className="opacity-40">|</span>
            <span>EST. 2025</span>
            <span className="hidden sm:inline opacity-40">|</span>
            <span className="hidden sm:inline text-cyan-300">BRaft.dev / CO-FOUNDER</span>
          </div>
          <div className="flex items-center gap-4 text-[9px] tracking-widest text-white/60">
            <span>LAT: 37.7749°</span>
            <span>LONG: 122.4194°</span>
          </div>
        </div>
      </div>

      {/* Corner Bracket Accents */}
      <div className="absolute left-4 top-4 h-8 w-8 border-l-2 border-t-2 border-white/40 z-20 pointer-events-none" aria-hidden="true" />
      <div className="absolute right-4 top-4 h-8 w-8 border-r-2 border-t-2 border-white/40 z-20 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-4 left-4 h-8 w-8 border-b-2 border-l-2 border-white/40 z-20 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-4 right-4 h-8 w-8 border-b-2 border-r-2 border-white/40 z-20 pointer-events-none" aria-hidden="true" />

      {/* Main Content Layout Grid */}
      <div className="relative z-10 grid min-h-[min(820px,calc(100vh-5rem))] items-center gap-10 px-6 pb-20 pt-24 sm:px-10 lg:grid-cols-[0.75fr_1.25fr] lg:px-16">
        
        {/* Left Side: Profile Photo Showcase in translucent ASCII HUD Frame */}
        <div className="relative mx-auto w-full max-w-xs lg:mx-0 lg:max-w-sm">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/30 bg-black/30 backdrop-blur-xs shadow-2xl group">
            <img 
              src={profileImage} 
              alt="Raffi Arya Putra Prabowo" 
              className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 inset-x-0 border-t border-white/20 bg-black/60 px-4 py-3 backdrop-blur-md">
              <div className="flex items-center justify-between font-mono text-[10px] tracking-widest text-cyan-300">
                <span>IDENTITY // 08</span>
                <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> ACTIVE
                </span>
              </div>
              <p className="mt-1 font-mono text-sm font-bold tracking-wide text-white">Raffi Arya Putra Prabowo</p>
              <p className="text-[10px] font-mono text-slate-300">Mahasiswa Semester 8 • UNINDRA</p>
            </div>
          </div>
        </div>

        {/* Right Side: Headline and Technical Content */}
        <div className="w-full">
          <div className="relative max-w-xl lg:ml-auto">
            {/* Top decorative line */}
            <div className="mb-4 flex items-center gap-2 opacity-60">
              <div className="h-px w-8 bg-white" />
              <span className="font-mono text-[10px] tracking-wider text-white">FULL-STACK & AI MODELING</span>
              <div className="h-px flex-1 bg-white" />
            </div>

            {/* Title */}
            <div className="relative">
              <div className="dither-pattern absolute -right-3 top-0 bottom-0 hidden w-1 opacity-40 lg:block" />
              <h1 className="font-mono text-3xl font-bold leading-tight tracking-wider text-white sm:text-5xl lg:text-6xl">
                RAFFI ARYA<br />
                <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                  PUTRA PRABOWO.
                </span>
              </h1>
            </div>

            {/* Decorative dots pattern */}
            <div className="my-4 flex gap-1 opacity-40">
              {Array.from({ length: 40 }).map((_, i) => (
                <div key={i} className="h-0.5 w-0.5 rounded-full bg-white" />
              ))}
            </div>

            {/* Description */}
            <div className="relative">
              <p className="font-mono text-xs font-medium leading-relaxed text-gray-300 opacity-90 sm:text-sm">
                Saya adalah mahasiswa semester akhir di Universitas Indraprasta PGRI dan Co-Founder{" "}
                <a 
                  id="hero-link-braft" 
                  href="https://braftdev.netlify.app/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="font-bold text-white underline decoration-white/50 underline-offset-4 transition hover:text-cyan-300"
                >
                  BRaft.dev
                </a>
                . Seperti Sisyphus yang terus mendorong batas, saya menggabungkan desain antarmuka responsif, pengembangan full-stack, data analytics, data science, dan Machine Learning Python untuk terus menciptakan solusi digital berdampak.
              </p>
              
              <div className="hidden lg:block absolute -left-4 top-1/2 h-3 w-3 border border-white opacity-30 -translate-y-1/2">
                <div className="absolute top-1/2 left-1/2 h-1 w-1 bg-white -translate-x-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* Skills Badges */}
            <div className="mt-6 flex flex-wrap gap-2 text-[10px] font-mono uppercase tracking-wider">
              <span className="inline-flex items-center gap-1.5 border border-white/20 bg-white/5 px-3 py-1.5 text-slate-200">
                <GraduationCap className="h-3.5 w-3.5 text-cyan-300" /> SEMESTER 8
              </span>
              <span className="inline-flex items-center gap-1.5 border border-white/20 bg-white/5 px-3 py-1.5 text-slate-200">
                <Code2 className="h-3.5 w-3.5 text-cyan-300" /> FULL-STACK WEB
              </span>
              <span className="inline-flex items-center gap-1.5 border border-white/20 bg-white/5 px-3 py-1.5 text-slate-200">
                <Database className="h-3.5 w-3.5 text-violet-300" /> DATA & AI / ML
              </span>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a 
                id="hero-btn-projects" 
                href="#active-progress-section" 
                className="group relative inline-flex items-center justify-center gap-2 border border-white bg-white px-6 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-transparent hover:text-white"
              >
                .BEGIN THE CLIMB <ArrowDownRight className="h-4 w-4" />
              </a>
              <a 
                id="hero-btn-profile" 
                href="#profile-section" 
                className="group relative inline-flex items-center justify-center gap-2 border border-white bg-transparent px-6 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-black"
              >
                EMBRACE THE JOURNEY <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            {/* Sub-footer notation */}
            <div className="mt-8 flex items-center gap-2 opacity-40">
              <span className="font-mono text-[9px] text-white">BRaft.dev</span>
              <div className="h-px flex-1 bg-white" />
              <span className="font-mono text-[9px] text-white">SISYPHUS.PROTOCOL</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer HUD Bar */}
      <div className="absolute left-0 right-0 bottom-0 z-20 border-t border-white/20 bg-black/60 backdrop-blur-sm px-6 py-2 sm:px-10">
        <div className="mx-auto flex items-center justify-between text-[8px] sm:text-[9px] font-mono text-white/50">
          <div className="flex items-center gap-4">
            <span className="text-white/80">SYSTEM.ACTIVE</span>
            <div className="hidden sm:flex gap-1">
              {[8, 14, 6, 12, 10, 16, 8, 5].map((h, i) => (
                <div key={i} className="w-1 bg-white/40" style={{ height: `${h}px` }} />
              ))}
            </div>
            <span>V1.0.0</span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-white/80">● RENDERING</span>
            <div className="flex gap-1">
              <div className="h-1 w-1 rounded-full bg-white/60 animate-pulse" />
              <div className="h-1 w-1 rounded-full bg-white/40 animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="h-1 w-1 rounded-full bg-white/20 animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
            <span className="hidden sm:inline">FRAME: SISYPHUS</span>
          </div>
        </div>
      </div>
    </header>
  );
}

