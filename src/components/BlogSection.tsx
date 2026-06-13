import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BlogPost } from "../types";
import { INITIAL_BLOG_POSTS } from "../data";
import { BookOpen, Calendar, Clock, Heart, Search, PlusCircle, Newspaper, CheckCircle, Tag } from "lucide-react";

export default function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  // New Post Form State
  const [showForm, setShowForm] = useState(false);
  const [formTitle, setFormTitle] = useState("");
  const [formSummary, setFormSummary] = useState("");
  const [formContent, setFormContent] = useState("");
  const [formCategory, setFormCategory] = useState<"Tutorial" | "Opinion" | "Personal" | "Creative">("Tutorial");
  const [formSuccess, setFormSuccess] = useState(false);

  // Load posts from localStorage on mount, fallback to default dataset
  useEffect(() => {
    const saved = localStorage.getItem("raffi_blog_posts");
    if (saved) {
      try {
        setPosts(JSON.parse(saved));
      } catch (err) {
        setPosts(INITIAL_BLOG_POSTS);
      }
    } else {
      setPosts(INITIAL_BLOG_POSTS);
      localStorage.setItem("raffi_blog_posts", JSON.stringify(INITIAL_BLOG_POSTS));
    }
  }, []);

  // Sync back to localStorage
  const savePosts = (updatedPosts: BlogPost[]) => {
    setPosts(updatedPosts);
    localStorage.setItem("raffi_blog_posts", JSON.stringify(updatedPosts));
  };

  // Like increment
  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = posts.map(p => {
      if (p.id === id) {
        return { ...p, likes: p.likes + 1 };
      }
      return p;
    });
    savePosts(updated);

    // If modal is open, also sync active post
    if (activePost && activePost.id === id) {
      setActivePost({ ...activePost, likes: activePost.likes + 1 });
    }
  };

  // Submit new post handle
  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle || !formSummary || !formContent) return;

    const newPost: BlogPost = {
      id: `custom-blog-${Date.now()}`,
      title: formTitle,
      summary: formSummary,
      content: formContent,
      category: formCategory,
      date: new Date().toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric"
      }),
      readTime: `${Math.max(1, Math.ceil(formContent.split(/\s+/).length / 200))} Menit`,
      likes: 0
    };

    const updated = [newPost, ...posts];
    savePosts(updated);

    // Reset Form
    setFormTitle("");
    setFormSummary("");
    setFormContent("");
    setFormCategory("Tutorial");
    setFormSuccess(true);
    
    // Hide notification after 3 seconds
    setTimeout(() => {
      setFormSuccess(false);
      setShowForm(false);
    }, 2500);
  };

  const categories = ["All", "Tutorial", "Personal", "Opinion", "Creative"];

  // Filter & Search log
  const filteredPosts = posts.filter(post => {
    const matchesCat = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="blog-section" className="py-20 relative">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-ocean-500/10 blur-[130px] rounded-full pointer-events-none -translate-y-1/2" />

      {/* Title Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="h-1.5 w-10 bg-ocean-400 rounded-full" />
            <span className="font-mono text-xs text-ocean-300 uppercase tracking-widest font-bold">Dokumentasi Karya</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            BLOG & CATATAN KREATIF
          </h2>
          <p className="mt-3 text-slate-350 max-w-xl text-sm leading-relaxed font-medium">
            Berbagi kisah di balik layar pembuatan model 3D, petualangan dunia modding game, jurnal perkuliahan Unindra PGRI, serta pemikiran strategis saya.
          </p>
        </div>

        {/* Call-to-action: Create New Post Trigger */}
        <button
          id="btn-trigger-write-post"
          onClick={() => {
            setShowForm(!showForm);
            // Scroll to form smoothly
            setTimeout(() => {
              document.getElementById("post-form-anchor")?.scrollIntoView({ behavior: "smooth", block: "center" });
            }, 100);
          }}
          className="flex items-center gap-2 bg-gradient-to-r from-ocean-600 to-ocean-400 hover:brightness-110 text-white text-xs font-bold px-5 py-3 rounded-xl transition-all duration-300 shadow-xl shadow-ocean-500/15 cursor-pointer self-start tracking-wider"
        >
          <PlusCircle className="w-4 h-4" />
          <span>{showForm ? "TETUP FORM CATATAN" : "TULIS CATATAN BARU"}</span>
        </button>
      </div>

      {/* Interactive Write New Post Section */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            id="post-form-anchor"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden mb-12"
          >
            <div className="bg-ocean-900/50 border border-ocean-800/80 rounded-[32px] p-6 md:p-8 backdrop-blur-2xl relative">
              <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2 mb-5">
                <Newspaper className="w-5 h-5 text-ocean-300" />
                Tambah Jurnal Portofolio Baru
              </h3>

              {formSuccess ? (
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6 text-center space-y-2.5">
                  <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto animate-bounce" />
                  <h4 className="text-sm font-bold text-slate-100">Catatan Berhasil Diproduksi!</h4>
                  <p className="text-xs text-slate-400">Jurnal Anda telah dimasukkan ke repositori portofolio lokal dan siap diakses di bawah.</p>
                </div>
              ) : (
                <form id="new-blog-post-form" onSubmit={handleCreatePost} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block mb-1.5 font-bold">Judul Jurnal</label>
                      <input
                        id="blog-input-title"
                        type="text"
                        required
                        placeholder="Misal: Trik Rigging Roda di Game GTA V..."
                        value={formTitle}
                        onChange={(e) => setFormTitle(e.target.value)}
                        className="w-full bg-ocean-950/60 border border-ocean-800/85 rounded-xl p-3 text-slate-250 text-sm focus:outline-none focus:border-ocean-500 transition-colors font-medium"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block mb-1.5 font-bold">Kategori</label>
                      <select
                        id="blog-select-category"
                        value={formCategory}
                        onChange={(e) => setFormCategory(e.target.value as any)}
                        className="w-full bg-ocean-950/60 border border-ocean-800/85 rounded-xl p-3 text-slate-200 text-sm focus:outline-none focus:border-ocean-500 transition-colors cursor-pointer font-medium"
                      >
                        <option value="Tutorial" className="bg-[#0b0b0f] text-white">Tutorial</option>
                        <option value="Personal" className="bg-[#0b0b0f] text-white">Personal / Diary</option>
                        <option value="Opinion" className="bg-[#0b0b0f] text-white">Opini / Analisis</option>
                        <option value="Creative" className="bg-[#0b0b0f] text-white">Karya Kreatif</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block mb-1.5 font-bold">Summary Ringkas</label>
                    <input
                      id="blog-input-summary"
                      type="text"
                      required
                      placeholder="Ringkasan satu kalimat untuk memancing minat pembaca..."
                      value={formSummary}
                      onChange={(e) => setFormSummary(e.target.value)}
                      className="w-full bg-ocean-950/60 border border-ocean-800/85 rounded-xl p-3 text-slate-250 text-sm focus:outline-none focus:border-ocean-500 transition-colors font-medium"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block mb-1.5 font-bold">Konten Artikel</label>
                    <textarea
                      id="blog-input-content"
                      required
                      rows={6}
                      placeholder="Tuliskan pengalaman bertualang, catatan skripsi Unindra, atau trik modeling 3D Blender Anda di sini..."
                      value={formContent}
                      onChange={(e) => setFormContent(e.target.value)}
                      className="w-full bg-ocean-950/60 border border-ocean-800/85 rounded-xl p-3 text-slate-250 text-sm focus:outline-none focus:border-ocean-500 transition-colors resize-y min-h-[120px] custom-scrollbar text-left block font-medium"
                    />
                  </div>

                  <div className="flex justify-end gap-3 pt-2 font-mono">
                    <button
                      id="btn-blog-cancel"
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
                    >
                      Batal
                    </button>
                    <button
                      id="btn-blog-submit"
                      type="submit"
                      className="bg-gradient-to-r from-ocean-600 to-ocean-400 hover:brightness-110 text-white text-xs font-bold px-6 py-2.5 rounded-xl transition-all cursor-pointer shadow-lg shadow-ocean-500/15 tracking-wide uppercase font-sans"
                    >
                      Terbitkan Sekarang
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Internal Search and Filter Header Controls */}
      <div className="bg-ocean-900/50 border border-ocean-800/80 rounded-[28px] p-5 mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between backdrop-blur-2xl">
        
        {/* Horizontal scroll subcategories */}
        <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
          {categories.map(cat => (
            <button
              key={cat}
              id={`blog-tab-${cat.toLowerCase()}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold cursor-pointer transition-all ${
                selectedCategory === cat
                  ? "bg-ocean-500/20 text-ocean-300 border border-ocean-500/40"
                  : "bg-ocean-950/40 text-slate-400 border border-ocean-800/60 hover:bg-ocean-800/30 hover:text-white"
              }`}
            >
              #{cat}
            </button>
          ))}
        </div>

        {/* Search Input Bar */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
          <input
            id="blog-search-field"
            type="text"
            placeholder="Cari artikel..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-ocean-950/60 border border-ocean-800/80 rounded-xl py-2.5 pl-9 pr-4 text-xs text-slate-350 focus:outline-none focus:border-ocean-500 transition-all font-sans font-medium"
          />
          {searchQuery && (
            <button
              id="blog-search-clear"
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-2.5 text-[10px] text-slate-500 hover:text-white cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Empty State mapping */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-12 bg-ocean-900/50 border border-ocean-800/80 rounded-[24px]">
          <BookOpen className="w-8 h-8 text-slate-500 mx-auto mb-3 animate-pulse" />
          <h3 className="text-sm font-semibold text-slate-300">Tidak Ada Catatan Ditemukan</h3>
          <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto">Kami tidak dapat menemukan kecocokan untuk kata kunci pencarian atau filter kategori yang Anda atur.</p>
        </div>
      )}

      {/* Grid List of Blogs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredPosts.map((post, idx) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="bg-ocean-900/40 border border-ocean-800/50 hover:border-ocean-700/60 hover:bg-ocean-800/30 rounded-[32px] p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300 cursor-pointer group shadow-md shadow-black/10"
            onClick={() => setActivePost(post)}
          >
            <div>
              {/* Header meta */}
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-450 mb-3.5">
                <span className="flex items-center gap-1.5 font-bold tracking-wide">
                  <Tag className="w-3 h-3 text-ocean-300" />
                  {post.category}
                </span>
                <span className="flex items-center gap-1 font-bold">
                  <Clock className="w-3 h-3 text-ocean-300" />
                  {post.readTime}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-100 group-hover:text-ocean-300 transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-xs text-slate-350 mt-2.5 leading-relaxed line-clamp-3 font-medium">
                {post.summary}
              </p>
            </div>

            {/* Bottom action bar */}
            <div className="mt-5 pt-3.5 border-t border-ocean-850/60 flex items-center justify-between">
              <span className="text-[10px] text-slate-450 font-mono flex items-center gap-1 font-semibold">
                <Calendar className="w-3 h-3" />
                {post.date}
              </span>
              
              {/* Like action button */}
              <button
                id={`btn-like-${post.id}`}
                onClick={(e) => handleLike(post.id, e)}
                className="flex items-center gap-1.5 bg-ocean-950/40 group-hover:bg-ocean-800/50 border border-ocean-800/60 text-slate-400 group-hover:text-ocean-300 text-[10px] font-bold py-1 px-2.5 rounded-lg transition-all cursor-pointer"
              >
                <Heart className="w-3 h-3 fill-none group-hover:fill-ocean-400 text-ocean-400" />
                <span>{post.likes}</span>
              </button>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Expanded Blog Modal Backdrop */}
      <AnimatePresence>
        {activePost && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
            {/* Backdrop cover */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setActivePost(null)}
            />

            {/* Content box popup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-ocean-900 border border-ocean-800/80 rounded-[40px] w-full max-w-2xl max-h-[85vh] overflow-y-auto relative z-10 shadow-2xl p-6 md:p-10 custom-scrollbar"
            >
              {/* Blog Header Metadata */}
              <div className="flex items-center gap-3 text-xs font-mono text-ocean-300 mb-4">
                <span className="bg-ocean-950/60 border border-ocean-800/60 px-2.5 py-0.5 rounded font-semibold text-[10px]">
                  {activePost.category}
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-400">{activePost.date}</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-400 flex items-center gap-1 font-bold">
                  <Clock className="w-3.5 h-3.5 text-ocean-300" />
                  {activePost.readTime}
                </span>
              </div>

              <h1 className="text-xl md:text-3xl font-extrabold text-white tracking-tight mt-1 mb-6 leading-tight">
                {activePost.title}
              </h1>

              {/* Formatting block */}
              <div className="text-slate-200 text-sm leading-relaxed space-y-4 whitespace-pre-line border-t border-ocean-850/60 pt-6 font-sans font-medium">
                {activePost.content}
              </div>

              {/* Modal controls footer */}
              <div className="mt-8 pt-5 border-t border-ocean-850/60 flex items-center justify-between">
                
                {/* Likes engagement toggle */}
                <button
                  id={`btn-modal-like-${activePost.id}`}
                  onClick={(e) => handleLike(activePost.id, e)}
                  className="flex items-center gap-1.5 bg-ocean-950/60 border border-ocean-850/60 text-ocean-300 py-1.5 px-3.5 rounded-xl transition-all cursor-pointer font-semibold shadow-sm hover:brightness-110"
                >
                  <Heart className="w-3.5 h-3.5 fill-ocean-400 text-ocean-400" />
                  <span className="text-xs font-bold">{activePost.likes} Loves</span>
                </button>

                <button
                  id="btn-blog-modal-close"
                  onClick={() => setActivePost(null)}
                  className="bg-ocean-950 hover:bg-ocean-800 border border-ocean-800/80 text-slate-350 hover:text-white px-5 py-2.5 rounded-xl text-xs font-semibold cursor-pointer transition-colors"
                >
                  Selesai Membaca
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
