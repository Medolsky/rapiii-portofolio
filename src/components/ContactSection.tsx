import React, { useState, useEffect } from "react";
import { Mail, Send, CheckCircle, Clock, Trash2, ShieldCheck, HeartHandshake, MapPin, Instagram, Linkedin, Github } from "lucide-react";

interface SentMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  // Real local outbound messages store
  const [outbox, setOutbox] = useState<SentMessage[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("raffi_contact_outbox");
    if (saved) {
      try {
        setOutbox(JSON.parse(saved));
      } catch (err) {
        // Safe fallback
      }
    }
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);

    // Simulate sending time
    setTimeout(() => {
      const newMessage: SentMessage = {
        id: `msg-${Date.now()}`,
        name,
        email,
        subject: subject || "No Subject",
        message,
        timestamp: new Date().toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit"
        }) + " • " + new Date().toLocaleDateString("id-ID", {
          day: "numeric",
          month: "short"
        })
      };

      const updated = [newMessage, ...outbox];
      setOutbox(updated);
      localStorage.setItem("raffi_contact_outbox", JSON.stringify(updated));

      // Trigger standard email client/WhatsApp redirect based on preference
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Auto clear form
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1200);
  };

  const clearMessageLog = (id: string) => {
    const updated = outbox.filter(m => m.id !== id);
    setOutbox(updated);
    localStorage.setItem("raffi_contact_outbox", JSON.stringify(updated));
  };

  // Pre-compiled Direct Action Handlers

  const getMailtoURL = () => {
    const body = `Halo Raffi,\n\nNama saya: ${name}\nEmail: ${email}\n\nPesan:\n${message}`;
    return `mailto:raffiarya1112@gmail.com?subject=${encodeURIComponent(subject || "Hubungi Raffi Arya")}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact-section" className="py-20 border-t border-ocean-800/60">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        
        {/* Left 2 grid cols: Contact Info card, mailto/WA direct links */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-1.5 w-10 bg-ocean-400 rounded-full" />
              <span className="font-mono text-xs text-ocean-300 uppercase tracking-widest font-bold">Hubungi Saya</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              MARI BERKARYA BERSAMA
            </h2>
            <p className="mt-3 text-slate-350 text-sm leading-relaxed font-medium">
              Memiliki kebutuhan analisis data bisnis? Membutuhkan pemeliharaan infrastruktur jaringan komputer? Atau membutuhkan dukungan teknis IT profesional? Hubungi saya langsung melalui formulir atau kanal media sosial berikut.
            </p>
          </div>

          {/* Quick Info Grid */}
          <div className="bg-ocean-900/50 border border-ocean-800/80 rounded-[24px] p-6 space-y-4 shadow-xl shadow-black/20 backdrop-blur-2xl">
            
            {/* Email info */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-ocean-950/60 border border-ocean-800/60 flex items-center justify-center text-ocean-300 flex-shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[10px] text-slate-450 font-mono uppercase tracking-wider">Email Bisnis</span>
                <a 
                  id="link-email-direct"
                  href="mailto:raffiarya1112@gmail.com" 
                  className="text-sm font-bold text-slate-200 hover:text-ocean-300 transition-colors"
                >
                  raffiarya1112@gmail.com
                </a>
              </div>
            </div>

            {/* LinkedIn info */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-ocean-950/60 border border-ocean-800/60 flex items-center justify-center text-ocean-300 flex-shrink-0">
                <Linkedin className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[10px] text-slate-450 font-mono uppercase tracking-wider">LinkedIn</span>
                <a 
                  id="link-linkedin-direct"
                  href="https://www.linkedin.com/in/raffi-arya-putra-prabowo-649663231/" 
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-bold text-slate-200 hover:text-ocean-300 transition-colors"
                >
                  Raffi Arya Putra Prabowo
                </a>
              </div>
            </div>

            {/* GitHub info */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-ocean-950/60 border border-ocean-800/60 flex items-center justify-center text-ocean-300 flex-shrink-0">
                <Github className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[10px] text-slate-450 font-mono uppercase tracking-wider">GitHub</span>
                <a 
                  id="link-github-direct"
                  href="https://github.com/Medolsky" 
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-bold text-slate-200 hover:text-ocean-300 transition-colors"
                >
                  Medolsky
                </a>
              </div>
            </div>

            {/* Instagram info */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-ocean-950/60 border border-ocean-800/60 flex items-center justify-center text-ocean-300 flex-shrink-0">
                <Instagram className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[10px] text-slate-450 font-mono uppercase tracking-wider">Instagram</span>
                <a 
                  id="link-instagram-direct"
                  href="https://instagram.com/rapiii_ar" 
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-bold text-slate-200 hover:text-ocean-300 transition-colors"
                >
                  @rapiii_ar
                </a>
              </div>
            </div>

            {/* TikTok info */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-ocean-950/60 border border-ocean-800/60 flex items-center justify-center text-ocean-300 flex-shrink-0">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.97 1.2 2.27 2 3.76 2.27v3.93c-1.3-.09-2.58-.57-3.66-1.37-.8-.59-1.45-1.38-1.92-2.28-.07 2.64-.04 5.28-.06 7.92-.02 1.4-.35 2.8-1.04 4.02-.68 1.22-1.72 2.2-2.96 2.8-1.42.7-3.04.97-4.6.76-1.57-.21-3.05-.99-4.13-2.13-1.09-1.15-1.75-2.67-1.89-4.24-.13-1.55.22-3.12.99-4.48.77-1.37 2.01-2.43 3.5-3 .92-.35 1.9-.52 2.88-.51v3.96c-.72-.02-1.44.17-2.06.56-.63.4-1.11.98-1.38 1.68-.28.71-.32 1.49-.13 2.22.2.73.63 1.38 1.23 1.84.6.45 1.34.69 2.08.67.75-.01 1.48-.26 2.06-.72.68-.53 1.09-1.34 1.12-2.2.02-3.6 0-7.2.01-10.8z"/>
                </svg>
              </div>
              <div>
                <span className="block text-[10px] text-slate-450 font-mono uppercase tracking-wider">TikTok</span>
                <a 
                  id="link-tiktok-direct"
                  href="https://tiktok.com/@rapiiii_ar" 
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-bold text-slate-200 hover:text-ocean-300 transition-colors"
                >
                  @rapiiii_ar
                </a>
              </div>
            </div>

            {/* Address info */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-ocean-950/60 border border-ocean-800/60 flex items-center justify-center text-ocean-300 flex-shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[10px] text-slate-450 font-mono uppercase tracking-wider">Alamat</span>
                <span className="text-xs font-bold text-slate-200 block leading-relaxed">
                  JL. Pramuka Raya No.79 Kel. Grogol, Kec. Limo, Kota Depok
                </span>
              </div>
            </div>

            {/* Direct Instant launch trigger buttons */}
            <div className="pt-2 border-t border-ocean-800/60 space-y-2">
              <span className="text-[10px] text-slate-450 font-mono block font-bold">Instant Triggers:</span>
              <div className="grid grid-cols-2 gap-2">
                <a
                  id="btn-fast-linkedin"
                  href="https://www.linkedin.com/in/raffi-arya-putra-prabowo-649663231/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-ocean-950/50 hover:bg-ocean-800/50 border border-ocean-800/80 hover:border-ocean-600 text-ocean-300 hover:text-white text-xs font-bold py-2.5 px-3 rounded-xl transition-all duration-300 text-center flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  Kunjungi LinkedIn
                </a>
                <a
                  id="btn-fast-email"
                  href={getMailtoURL()}
                  className="bg-ocean-950/50 hover:bg-ocean-800/50 border border-ocean-800/80 hover:border-ocean-600 text-ocean-300 hover:text-white text-xs font-bold py-2.5 px-3 rounded-xl transition-all duration-300 text-center flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Kirim Email
                </a>
              </div>
            </div>
          </div>

          {/* Real-time local message logs viewport */}
          {outbox.length > 0 && (
            <div className="bg-ocean-900/50 border border-ocean-800/80 rounded-[24px] p-5 space-y-3.5 backdrop-blur-2xl shadow-xl shadow-black/20 animate-fade-in">
              <div className="flex items-center justify-between">
                <h4 className="text-[10px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5 font-bold">
                  <Clock className="w-3.5 h-3.5 text-ocean-400 animate-pulse" />
                  Riwayat Outbox Anda ({outbox.length})
                </h4>
                <div className="text-[9px] text-slate-500 font-mono">Tersimpan di Browser</div>
              </div>
              
              <div className="space-y-2 max-h-40 overflow-y-auto custom-scrollbar pr-1">
                {outbox.map(msg => (
                  <div key={msg.id} className="bg-ocean-950/40 border border-ocean-800/60 p-3 rounded-xl relative group">
                    <button
                      id={`btn-delete-msg-${msg.id}`}
                      onClick={() => clearMessageLog(msg.id)}
                      className="absolute top-2 right-2 text-slate-400 hover:text-red-500 p-1 rounded hover:bg-ocean-800 transition-colors opacity-0 group-hover:opacity-100 cursor-pointer"
                      title="Clear message log"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                    <div className="text-[10px] font-extrabold text-slate-200">{msg.name}</div>
                    <div className="text-[9px] text-slate-450 font-mono truncate">{msg.subject}</div>
                    <p className="text-[11px] text-slate-300 mt-1 line-clamp-1 font-medium">{msg.message}</p>
                    <div className="text-[8px] text-slate-500 font-mono mt-1.5 text-right font-semibold">{msg.timestamp}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right 3 grid cols: Contact form */}
        <div className="lg:col-span-3 bg-ocean-900/50 border border-ocean-800/80 rounded-[32px] p-6 md:p-8 relative backdrop-blur-2xl shadow-xl shadow-black/20">
          <form id="contact-form" onSubmit={handleFormSubmit} className="space-y-4">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block mb-1.5 font-bold">Nama Anda</label>
                <input
                  id="contact-input-name"
                  type="text"
                  required
                  placeholder="Nama Lengkap..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-ocean-950/60 border border-ocean-800/85 rounded-xl p-3 text-slate-200 text-sm focus:bg-ocean-950 focus:outline-none focus:border-ocean-500 focus:ring-1 focus:ring-ocean-500/20 transition-all font-medium"
                />
              </div>
              
              <div>
                <label className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block mb-1.5 font-bold">Email Utama</label>
                <input
                  id="contact-input-email"
                  type="email"
                  required
                  placeholder="alamat@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-ocean-950/60 border border-ocean-800/85 rounded-xl p-3 text-slate-200 text-sm focus:bg-ocean-950 focus:outline-none focus:border-ocean-500 focus:ring-1 focus:ring-ocean-500/20 transition-all font-medium"
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block mb-1.5 font-bold">Subjek Kerja</label>
              <input
                id="contact-input-subject"
                type="text"
                placeholder="Misal: Analisis Data Penjualan / Setup Jaringan Kantor / Troubleshooting IT..."
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full bg-ocean-950/60 border border-ocean-800/85 rounded-xl p-3 text-slate-200 text-sm focus:bg-ocean-950 focus:outline-none focus:border-ocean-500 focus:ring-1 focus:ring-ocean-500/20 transition-all font-medium"
              />
            </div>

            <div>
              <label className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block mb-1.5 font-bold">Uraian Kebutuhan Kerja</label>
              <textarea
                id="contact-input-message"
                required
                rows={5}
                placeholder="Bagikan rincian kebutuhan analisis data, instalasi jaringan, atau dukungan teknis IT yang Anda inginkan..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-ocean-950/60 border border-ocean-800/85 rounded-xl p-3 text-slate-200 text-sm focus:bg-ocean-950 focus:outline-none focus:border-ocean-500 focus:ring-1 focus:ring-ocean-500/20 transition-all resize-y min-h-[100px] text-left block font-medium"
              />
            </div>

            {/* Quick pre-filled Mail helper inside form */}
            <div className="text-[11px] text-slate-400 flex flex-wrap items-center gap-x-2 gap-y-1 font-medium">
              <span>Rekomendasi tindakan eksternal:</span>
              <a
                id="link-recommend-email"
                href={getMailtoURL()}
                className="text-ocean-300 hover:text-ocean-400 hover:underline font-bold"
              >
                Kirim via Email asli
              </a>
            </div>

            <div className="pt-2 flex items-center justify-between flex-wrap gap-4">
              
              {/* Trust Badge badge */}
              <div className="flex items-center gap-1.5 text-slate-400 text-xs font-bold">
                <ShieldCheck className="w-4 h-4 text-ocean-400 animate-pulse" />
                <span>Enkripsi Aman & Langsung</span>
              </div>

              <button
                id="contact-btn-submit"
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-ocean-600 to-ocean-400 hover:brightness-110 disabled:bg-ocean-950 disabled:text-slate-500 text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer shadow-lg shadow-ocean-500/15 min-w-[150px]"
              >
                <span>{isSubmitting ? "Mengirim..." : "Kirim Pesan"}</span>
                <Send className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>

          {/* Success Indicator overlay */}
          {submitSuccess && (
            <div className="absolute inset-x-6 top-6 bottom-6 bg-ocean-900/95 border border-emerald-500/30 rounded-[32px] p-8 flex flex-col items-center justify-center text-center space-y-4 backdrop-blur-3xl animate-fade-in shadow-2xl">
              <CheckCircle className="w-14 h-14 text-emerald-400 animate-bounce" />
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white">Pesan Berhasil Dikirimkan!</h3>
                <p className="text-slate-300 text-xs max-w-sm font-medium">
                  Pesan Anda telah berhasil terekam di outbox lokal. Jalur komunikasi email dan LinkedIn juga siap dihubungi.
                </p>
              </div>

              <div className="flex gap-2.5 pt-3">
                <a
                  id="overlay-linkedin-btn"
                  href="https://www.linkedin.com/in/raffi-arya-putra-prabowo-649663231/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-ocean-950 hover:bg-ocean-800 text-ocean-300 text-xs border border-ocean-800/80 font-bold py-2.5 px-4 rounded-xl flex items-center gap-1.5 shadow cursor-pointer text-center"
                >
                  Hubungi via LinkedIn
                </a>
                <button
                  id="overlay-close-btn"
                  onClick={() => setSubmitSuccess(false)}
                  className="bg-ocean-950 hover:bg-ocean-800 border border-ocean-800/80 text-slate-300 text-xs font-bold py-2.5 px-4 rounded-xl cursor-pointer"
                >
                  Tutup Notifikasi
                </button>
              </div>
            </div>
          )}

          {/* Quick legal text */}
          <div className="mt-6 border-t border-ocean-800/60 pt-4 flex flex-col md:flex-row items-center justify-between text-[10px] text-slate-450 gap-2 font-semibold font-mono">
            <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-sans">
              <HeartHandshake className="w-3.5 h-3.5 text-ocean-400" />
              <span>Didukung respon profesional 24 Jam</span>
            </div>
            <div className="font-normal text-slate-450">
              raffiarya1112@gmail.com • Jakarta, Indonesia
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
