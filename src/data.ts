import { Project, BlogPost, Experience, Education, Certification, SkillGroup } from "./types";

export const ACTIVE_PROJECTS: Project[] = [
  {
    id: "active-1",
    title: "Kompresi Aset Cloth, MLO & Vehicle — Ophelia Roleplay",
    category: "Game Mod",
    status: "active",
    image: "https://images.unsplash.com/photo-1614294149010-950b698f72c0?auto=format&fit=crop&q=80&w=800",
    description: "Optimasi dan kompresi file aset Clothing, Map Object (MLO), serta Vehicle untuk server FiveM Ophelia Roleplay agar loading lebih ringan dan performa server meningkat.",
    longDescription: "Proyek aktif kompresi massal aset FiveM: streaming Cloth (pakaian karakter), MLO (interior/eksterior peta kustom), dan Vehicle (kendaraan). Proses meliputi re-encoding tekstur ke format DDS teroptimasi, reduksi LOD yang tidak terpakai, serta pengelompokan stream pack secara efisien untuk mempercepat join time pemain hingga 40%.",
    technologies: ["FiveM Stream Pack", "Texture DDS Compress", "Blender LOD Reduction", "CodeWalker GTA", "YDR/YDD Optimizer"],
    features: [
      "Kompresi batch tekstur Cloth menggunakan BC1–BC7 DDS encoding tanpa degradasi visual signifikan.",
      "Optimasi MLO dengan menghapus collision mesh redundan dan merapikan occlusion zone.",
      "Reduksi ukuran Vehicle stream hingga 30–45% melalui LOD remesh dan tekstur atlas.",
      "Dokumentasi perbandingan ukuran sebelum & sesudah kompresi per kategori aset."
    ],
    modelType: "car"
  },
  {
    id: "active-2",
    title: "Modder — Ophelia Roleplay Server",
    category: "Game Mod",
    status: "active",
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&q=80&w=800",
    description: "Berperan sebagai modder aktif di server FiveM Ophelia Roleplay: membuat, mengadaptasi, dan mengintegrasikan aset 3D kustom ke dalam ekosistem server roleplay.",
    longDescription: "Sebagai modder di Ophelia Roleplay, bertanggung jawab penuh atas pipeline produksi aset mulai dari desain konsep, pembuatan model 3D di Blender, texturing, hingga integrasi ke FiveM melalui resource stream. Kolaborasi erat dengan dev team untuk menjaga konsistensi visual dan optimasi performa server.",
    technologies: ["Blender 3D", "FiveM Resource", "CodeWalker", "Adobe Photoshop", "Lua Scripting", "ZModeler3"],
    features: [
      "Pembuatan kendaraan kustom berikut livery, interior 3D, dan konfigurasi handling.meta.",
      "Desain dan integrasi props serta MLO baru untuk lokasi-lokasi roleplay eksklusif.",
      "Pembuatan clothing (EUP / GTA-style) khusus untuk fraksi dan organisasi in-game.",
      "Review & QA aset pihak ketiga sebelum di-deploy ke server production."
    ],
    modelType: "car"
  },
  {
    id: "active-3",
    title: "Web Developer — abbata.com",
    category: "Full-Stack",
    status: "active",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800",
    description: "Pengembangan dan pemeliharaan website resmi abbata.com — platform digital untuk grup bisnis Abbata yang mencakup layanan wisata dan shuttle.",
    longDescription: "Bertanggung jawab atas frontend dan backend abbata.com menggunakan stack modern. Meliputi desain UI/UX responsif, integrasi sistem pemesanan online, halaman layanan dinamis, serta optimasi SEO dan performa web. Website ini menjadi wajah digital utama bisnis Abbata di ranah online.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Node.js", "PostgreSQL", "Vercel Deploy"],
    features: [
      "Halaman utama dinamis dengan animasi scroll dan showcase layanan Abbata.",
      "Sistem pemesanan online terintegrasi dengan notifikasi email otomatis.",
      "Dashboard admin untuk manajemen konten, paket wisata, dan jadwal shuttle.",
      "Optimasi Core Web Vitals: LCP < 2.5s, CLS < 0.1 pada semua halaman utama."
    ],
    modelType: "hub"
  },
  {
    id: "active-4",
    title: "Company Profile — Abbata Wisata & Abbata Shuttle",
    category: "Full-Stack",
    status: "active",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=800",
    description: "Pembuatan company profile digital untuk dua entitas bisnis: Abbata Wisata (paket tour & travel) dan Abbata Shuttle (layanan antar-jemput).",
    longDescription: "Merancang dan mengembangkan dua company profile yang berbeda namun terintegrasi dalam satu ekosistem brand Abbata. Abbata Wisata menampilkan paket wisata, galeri destinasi, dan formulir reservasi. Abbata Shuttle menyajikan rute, jadwal keberangkatan, dan booking sistem berbasis real-time.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Sanity CMS", "Vercel", "WhatsApp API"],
    features: [
      "Landing page Abbata Wisata dengan galeri destinasi interaktif dan paket tour yang bisa difilter.",
      "Halaman Abbata Shuttle dengan peta rute visual dan sistem booking seat real-time.",
      "CMS terintegrasi agar tim non-teknis bisa update konten, harga, dan jadwal secara mandiri.",
      "Integrasi tombol WhatsApp direct booking untuk konversi pelanggan lebih cepat."
    ],
    modelType: "hub"
  }
];

export const INITIAL_PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "Cyberpunk GT-9 Speedster Mod",
    category: "Game Mod",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    description: "Modifikasi kendaraan sport futuristik kustom dengan body kit aerodinamis modern dan shader neon menyala, diadaptasi untuk game simulasi balap terkemuka.",
    longDescription: "Proyek modding kendaraan sport fiksi ilmiah yang dibuat khusus untuk memenuhi hasrat gamer akan estetika cyberpunk. Kendaraan ini dioptimalkan dengan cermat dalam hal jumlah poligon agar tetap stabil saat dimainkan dalam resolusi tinggi standar game engine.",
    technologies: ["3D Blender", "Texture Painting", "Material Shaders", "Physics Engine Tuning", "Game Scripting"],
    features: [
      "Model 3D interior lengkap dengan panel instrumen dasbor yang menyala (emissive textures).",
      "Sistem suspensi dan penanganan roda kustom yang realistis.",
      "Shader neon di bagian bawah mobil (underglow wheels) yang responsif terhadap malam hari.",
      "Pintu model kupu-kupu yang sepenuhnya teranimasi saat dibuka/ditutup."
    ],
    modelType: "car"
  },
  {
    id: "proj-2",
    title: "Aset Senjata Relik kuno Low-Poly",
    category: "3D Modeling",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=800",
    description: "Serangkaian model senjata 3D mistis dengan jumlah poligon rendah (low-poly), dioptimalkan untuk performa maksimal pada game seluler (mobile) dan indie.",
    longDescription: "Desain senjata RPG oriental dengan bentuk tajam yang memancarkan aura mistis. Sangat ramah performa (di bawah 1.500 poligon), menjadikannya ideal untuk game mobile yang membutuhkan render berat dalam medan pertempuran multi-pemain.",
    technologies: ["Low-Poly Modeling", "Hand-Painted Texturing", "UV Unwrapping", "Normal Mapping"],
    features: [
      "Dioptimalkan dengan batas ketat maksimum 1.200 Polygon per senjata.",
      "Peta tekstur tangan 2K eksklusif untuk mendapatkan detail berkelas tanpa membebani memori.",
      "Desain ornamen ukiran naga khas oriental di sepanjang gagang.",
      "Siap digunakan langsung untuk mesin game Unity dan Unreal Engine."
    ],
    modelType: "sword"
  },
  {
    id: "proj-3",
    title: "Bot Manajemen Server & CMS Komunitas",
    category: "Administration",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800",
    description: "Arsitektur pengelolaan komunitas gaming berskala besar, mengintegrasikan sistem bot otomatis, moderasi pintar, serta portal laporan berbasis web.",
    longDescription: "Sebagai Head Admin berdedikasi, saya merancang dan menerapkan otomatisasi tingkat lanjut untuk mengelola interaksi ribuan anggota komunitas. Dilengkapi dengan deteksi spam cerdas, alur pendaftaran terintegrasi, dan dasbor statistik aktivitas anggota.",
    technologies: ["Node.js", "Express API", "Discord Services", "Community Hosting", "Admin Dashboard"],
    features: [
      "Sistem penyaringan otomatis terhadap kata kasar, tautan mencurigakan, dan pencegah penyerangan bot.",
      "Dashboard statistik real-time untuk memantau grafik aktivitas harian anggota server.",
      "Koneksi instan ke role game server khusus (automasi tiering anggota).",
      "Sistem tiket keluhan terenkripsi yang langsung terhubung ke ruang staf admin."
    ],
    modelType: "hub"
  },
  {
    id: "proj-4",
    title: "Aplikasi Portal Digital Universitas Unindra",
    category: "Full-Stack",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    description: "Aplikasi portal interaktif karya akhir untuk memamerkan kreativitas mahasiswa, publikasi modding, dan repositori program studi informatika semester 8.",
    longDescription: "Mengintegrasikan basis data responsif untuk menyajikan materi kuliah, repositori modifikasi game buatan mahasiswa Unindra, serta galeri seni 3D secara komparatif untuk memudahkan penilaian tugas akhir.",
    technologies: ["React Node", "Tailwind CSS", "Local Storage Core", "Material Icons"],
    features: [
      "Desain web modern ramah perangkat seluler dengan navigasi halus.",
      "Sistem penayangan blog portofolio terpadu untuk mempublikasikan materi ujian praktis.",
      "Penyimpanan formulir dinamis sehingga admin dapart memverifikasi kiriman konten mahasiswa.",
      "Sistem pencarian cepat untuk memilah modifikasi game berdasarkan jenis dan semester pengguna."
    ],
    modelType: "car"
  }
];

export const INITIAL_BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    title: "Panduan Memulai Modding 3D Kendaraan Untuk Game Indie",
    summary: "Mari kupas tuntas cara memodelkan mobil futuristik di Blender hingga memasukkannya ke mesin game dengan performa terbaik.",
    content: `Modifikasi game atau 'modding' adalah jembatan luar biasa untuk beralih dari seorang penikmat game menjadi seorang pencipta game. Di blog ini, saya ingin membagikan langkah-langkah praktis mendesain 3D mobil sport hingga berhasil diuji coba di game engine.

### Langkah 1: Pengumpulan Referensi & Blueprint
Setiap model kendaraan yang baik dimulai dengan blueprint nyata (tampak depan, samping, atas, belakang). Sebagai seorang 3D modeler, menyelaraskan gambar referensi di aplikasi Blender adalah kunci agar proporsi bodi mobil tidak menyimpang.

### Langkah 2: Proses Blockout & Modeling Utama
Mulailah dengan membagi struktur mobil ke komponen-komponen terpisah:
- Bodi utama (Chassis)
- Roda (Wheels) – buat satu lalu gunakan modifier mirror/array
- Kaca dan Lampu (Glass & Lights)

Usahakan menjaga sirkulasi poligon tetap bersih (loop cuts rapi). Hindari penggunaan n-gons (poligon bersisi lebih dari 4) di area melengkung karena bisa memicu shading yang aneh atau rusak sewaktu dirender di mesin game.

### Langkah 3: UV Unwrapping & Texturing
Setelah model selesai, lakukan pemetaan UV (UV Unwrapping) agar tekstur dapat menempel sempurna. Di sinilah teknik hand-painted texturing memainkan perannya. Gunakan peta tekstur emisi (emissive layers) agar bagian lampu bumper dan panel dasbor interior bersinar di dalam kegelapan sirkuit balap.

### Langkah 4: Ekspor dan Konfigurasi Rigging di Game Engine
Ekspor file Anda dalam format .FBX atau .OBJ. Buka software modding game bersangkutan (seperti SDK game itu sendiri), lalu atur titik pusat roda (pivot points), titik knalpot, dan kamera kemudi. Lakukan uji coba mengemudi di sirkuit untuk menyempurnakan fisika kendaraan!`,
    category: "Tutorial",
    date: "24 Mei 2026",
    readTime: "6 Menit",
    likes: 24
  },
  {
    id: "blog-2",
    title: "Mengatur Waktu Antara Kuliah Semester 8, 3D Commissions, & Head Admin",
    summary: "Berbagi pengalaman pribadi menyeimbangkan tanggung jawab akademik akhir di Unindra dengan pekerjaan kreatif profesional.",
    content: `Banyak yang bertanya, bagaimana bisa seorang mahasiswa tingkat akhir Universitas Indraprasta PGRI (Unindra) di semester 8 masih sanggup memegang jabatan Head Admin server komunitas gaming, sekaligus menyelesaikan pesanan (comission) model 3D klien asing secara mandiri?

Jawabannya adalah: **Manajemen Prioritas & Automasi Sistem.**

### 1. Memaksimalkan Bot & Tim Delegasi (Perspektif Head Admin)
Sebagai Head Admin, saya sadar bahwa mata saya tidak mungkin menatap obrolan komunitas selama 24 jam sehari. Oleh karena itu, saya meluangkan waktu membuat sistem bot otomatisasi cerdas yang menangani penyaringan spam pertama, validasi pengguna baru, dan tiket keluhan. Hal ini memangkas waktu kerja manual administrasi hingga lebih dari 70%!

### 2. Memanfaatkan Waktu Produktif Berdasarkan Karakter Alami
Proses kreatif 3D Modeling membutuhkan konsentrasi tinggi tanpa gangguan. Saya menjadwalkan pengerjaan model 3D Blender pada malam hari (21:00 - 01:00) ketika keadaan sedang hening. Sesi ini juga merupakan pelarian santai saya setelah lelah menyusun naskah tugas akhir kuliah di siang harinya.

### 3. Skema 'Satu Hari Satu Bab' di Semester 8 Unindra
Selesaikan tugas akademik sesegera mungkin di pagi hari. Dengan membaca satu sub-bab atau merevisi satu halaman tesis setiap paginya, saya menjaga kemajuan kelulusan studi saya di Universitas Indraprasta PGRI tetap konsisten tanpa mengorbankan kualitas proyek klien. 

Ingatlah, produktivitas bukanlah tentang bekerja tanpa henti, melainkan tentang penempatan energi pada jam yang tepat demi hasil optimal!`,
    category: "Personal",
    date: "18 Mei 2026",
    readTime: "5 Menit",
    likes: 42
  },
  {
    id: "blog-3",
    title: "Mengapa Low-Poly Elegan Sangat Digemari Developer Game Indie Baru?",
    summary: "Menganalisis pesona desain minimalis low-poly dalam industri game modern dari perspektif performa dan estetika murni.",
    content: `Di era di mana kartu grafis bersaing meluncurkan teknologi ray tracing termutakhir, mengapa visual beresolusi rendah dan bergaya minimalis 'low-poly' justru semakin dicari oleh industri game indie?

### 1. Kekuatan Karakter Visual di Atas Kedetailan Realistis
Banyak game realis saat ini terlihat serupa karena mengejar standar grafis yang sama. Di sisi lain, game dengan gaya low-poly, seperti RPG indie klasik, memiliki pesona visual tersendiri. Gaya ini memfokuskan emosi pemain pada bentuk siluet yang tebal, warna-warna kontras yang berani, serta pencahayaan dramatis, alih-alih detail pori-pori kulit atau serat logam halus.

### 2. Performa Optimal di Beragam Perangkat Seluler
Sebagai 3D modeler, salah satu batasan terbesar game seluler (mobile) adalah memori RAM dan daya baterai perangkat. Model low-poly dengan poligon di bawah 1.500 unit sangat ringan, memungkinkan game merender puluhan unit monster atau objek sekaligus di layar tanpa menjatuhkan frame rate (FPS). Hal ini mempermudah peluncuran game ke pangsa pasar yang lebih luas.

### 3. Proses Produksi Aset yang Jauh Lebih Efisien
Membuat satu aset ber-kualitas AAA modern dapat memakan waktu berminggu-minggu kerja serta melibatkan banyak departemen. Gaya low-poly memungkinkan pengembang game indie tunggal atau tim kecil untuk memproduksi ratusan aset model dalam hitungan hari. Hal ini mempercepat proses pengujian gameplay dan memangkas anggaran rilis secara signifikan!`,
    category: "Opinion",
    date: "10 Mei 2026",
    readTime: "4 Menit",
    likes: 19
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    role: "Game Developer & Head Admin",
    company: "GTA V & Roblox (Kontrak)",
    period: "JAN 2025 – Sekarang",
    description: [
      "Mengembangkan aset 3D game menggunakan Blender untuk visualisasi game modern.",
      "Mendesain dan mengedit grafis menggunakan Adobe Photoshop guna mendukung aset UI/UX server.",
      "Melakukan scripting logika game menggunakan bahasa Lua untuk mengotomatisasi interaksi dalam game.",
      "Mengelola dan memelihara sistem server game agar beroperasi dengan lancar.",
      "Menjabat sebagai Head Admin: mengatur tim moderator, mengelola player base, dan meresolusi konflik.",
      "Melakukan troubleshooting bug serta peningkatan performa server secara berkala."
    ],
    skills: ["Blender 3D", "Adobe Photoshop", "Lua Scripting", "Server Management", "Team Moderation", "Bug Troubleshooting"]
  },
  {
    id: "exp-2",
    role: "IT Intern / Web System Developer",
    company: "SIGN Laundry (Magang)",
    period: "JUL 2025 - DES 2025",
    description: [
      "Melakukan instalasi dan konfigurasi jaringan LAN serta konektivitas internet internal kantor.",
      "Merakit, menginstal, dan mengonfigurasi PC operasional karyawan agar sesuai dengan standar kerja.",
      "Mengembangkan website sistem laundry terintegrasi untuk pencatatan transaksi real-time dan manajemen data pelanggan.",
      "Melakukan pengujian rutin dan perbaikan sistem (debugging) agar website berjalan stabil.",
      "Memberikan pelatihan operasional sistem laundry kepada pemilik bisnis dan karyawan.",
      "Membantu pemeliharaan (maintenance) preventif untuk sistem dan perangkat IT secara berkala."
    ],
    skills: ["LAN Networking", "PC Hardware assembly", "Web Development", "System Debugging", "End-User Training", "IT Maintenance"]
  },
  {
    id: "exp-3",
    role: "Part-Time Warehouse Staff (Event Natal)",
    company: "PT Siprama Komunindo",
    period: "DES 2024",
    description: [
      "Menangani proses distribusi, logistik, dan suplai produk ke berbagai booth acara secara tepat waktu.",
      "Membantu pengelolaan stok inventaris barang masuk dan keluar selama event berlangsung.",
      "Melakukan pengecekan kuantitas dan kontrol kualitas kondisi fisik produk sebelum didistribusikan.",
      "Bekerja sama secara aktif dengan tim lapangan untuk memastikan kelancaran operasional acara natal."
    ],
    skills: ["Logistics", "Inventory Management", "Quality Control", "Operational Teamwork"]
  },
  {
    id: "exp-4",
    role: "Part-Time IT Support",
    company: "AGIT at Isuzu Plant",
    period: "JUL 2024",
    description: [
      "Melakukan screening, analisis, dan penanganan ancaman virus/malware pada PC operasional pabrik Isuzu.",
      "Menangani permasalahan sistem operasi (OS Windows) dan software pendukung di lingkungan pabrik.",
      "Melakukan perbaikan fisik dan troubleshooting infrastruktur jaringan komputer pabrik.",
      "Memberikan dukungan teknis langsung kepada pengguna (end-user support) secara responsif.",
      "Mendokumentasikan setiap permasalahan dan solusinya sebagai laporan teknis untuk tim IT."
    ],
    skills: ["Anti-Malware Screening", "OS Troubleshooting", "Network Maintenance", "End-User Support", "Technical Documentation"]
  },
  {
    id: "exp-5",
    role: "Part-Time Video Editor",
    company: "Danamart",
    period: "SEP 2023",
    description: [
      "Mengedit video konten promosi dan informatif untuk dipublikasikan di media sosial perusahaan.",
      "Melakukan cutting, color correction, penambahan teks, efek musik, dan transisi video yang dinamis.",
      "Menyesuaikan resolusi dan format video dengan kebutuhan platform target (Instagram Reels, TikTok).",
      "Berkoordinasi dengan tim konten untuk menjaga konsistensi konsep video dan branding Danamart.",
      "Melakukan revisi video secara adaptif berdasarkan feedback tim marketing."
    ],
    skills: ["Video Editing", "Adobe Premiere Pro", "Color Correction", "Social Media Branding", "Marketing Coordination"]
  },
  {
    id: "exp-6",
    role: "IT Technician (Kontrak)",
    company: "Audy Dental",
    period: "AGS 2022 – FEB 2023",
    description: [
      "Mengelola dan mengembangkan jaringan internet internal di klinik dental.",
      "Melakukan troubleshooting terarah pada jaringan komputer, PC, dan perangkat periferal pendukung.",
      "Instalasi, konfigurasi, dan pembaharuan (update) perangkat keras serta lunak secara berkala.",
      "Melakukan maintenance sistem backup dan kelancaran server lokal untuk meminimalisir downtime operasional.",
      "Memberikan dukungan teknis harian yang andal kepada seluruh staf klinik."
    ],
    skills: ["Network Administration", "IT Troubleshooting", "Hardware & Software Setup", "System Maintenance", "Clinic Technical Support"]
  }
];

export const EDUCATION: Education[] = [
  {
    id: "edu-1",
    institution: "Universitas Indraprasta PGRI",
    period: "2022 – Sekarang",
    major: "Program Studi Teknik Informatika",
    gpa: "IPK: 3.42, IPS Terakhir: 3.70",
    details: [
      "Mahasiswa aktif Semester 8 yang berfokus pada analisis data, rekayasa perangkat lunak, dan teknologi informasi.",
      "Memiliki minat mendalam di bidang Data Analyst dengan keahlian pengolahan data, statistik, dan visualisasi visual.",
      "Mengembangkan kemampuan analitis dalam mengolah informasi mentah menjadi insight yang berguna bagi pengambilan keputusan bisnis."
    ]
  },
  {
    id: "edu-2",
    institution: "SMK Nasional Depok",
    period: "Lulus 2022",
    major: "Teknik Komputer dan Jaringan",
    gpa: "Nilai Rata-Rata: 88.30 (Lulusan Terbaik)",
    details: [
      "Mengembangkan aplikasi web 'Developer WEB Pemilu Ketua OSIS' untuk pemungutan suara digital sekolah.",
      "Menjabat sebagai salah satu Ketua Organisasi RTC (Research Technology Computer) yang memandu riset teknologi siswa.",
      "Menjabat sebagai Wakil Ketua Marching Band sekolah dengan fokus koordinasi tim dan disiplin kelompok.",
      "Aktif dalam kegiatan organisasi internal dan eksternal sekolah untuk pengembangan kepemimpinan."
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-1",
    title: "Cyber Security (Security+)",
    issuer: "Adinusa",
    year: "2021",
    description: "Fokus pada pemahaman dasar keamanan sistem, konfigurasi jaringan aman, dan mitigasi ancaman siber."
  },
  {
    id: "cert-2",
    title: "BNSP: Mikrotik & Cisco",
    issuer: "Badan Nasional Sertifikasi Profesi",
    year: "2022",
    description: "Sertifikasi kompetensi konfigurasi jaringan, routing dinamis/statis, switching, dan manajemen operasional perangkat jaringan."
  },
  {
    id: "cert-3",
    title: "Machine Learning",
    issuer: "Dicoding Indonesia",
    year: "2024",
    description: "Pembelajaran dasar machine learning dengan Python, prapemrosesan data, pembagian dataset, dan implementasi model sederhana."
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Data & Machine Learning",
    items: ["Pengolahan Data", "Analisis Statistik", "Visualisasi Data", "Machine Learning dengan Python (dasar)", "Data Insight Generation"]
  },
  {
    category: "Jaringan & IT Support",
    items: ["Mikrotik Networking (dasar–menengah)", "LAN Setup", "Cisco Router/Switch Config", "OS Windows & Software Troubleshooting", "Hardware Repair", "Virus/Malware Cleanup"]
  },
  {
    category: "Creative & Design",
    items: ["Blender 3D (dasar–menengah)", "Adobe Photoshop (dasar)", "Adobe Illustrator (dasar)", "Adobe Premiere Pro (dasar)", "Video Editing"]
  },
  {
    category: "Web & Scripting",
    items: ["Web Development (HTML & CSS)", "Lua Scripting (Roblox/GTA V)", "AI Prompting (dasar)"]
  },
  {
    category: "Perkantoran & Lainnya",
    items: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", "End-User Support", "Dokumentasi Laporan Teknis"]
  }
];
