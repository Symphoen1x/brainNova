import LandingLayout from '@/layouts/landing-layout';
import { SectionHeading } from '@/components/landing/section-heading';
import { ServiceCard } from '@/components/landing/service-card';
import { StatCounter } from '@/components/landing/stat-counter';
import { BlogCard } from '@/components/landing/blog-card';
import { NewsletterForm } from '@/components/landing/newsletter-form';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import {
    Brain,
    Activity,
    GraduationCap,
    Car,
    Cpu,
    Cloud,
    Shield,
    Smartphone,
    Heart,
    BookOpen,
    Lightbulb,
    Building2,
    ArrowRight,
    Sparkles,
    Zap,
} from 'lucide-react';

const services = [
    {
        icon: Activity,
        name: 'Neuralis',
        tagline: 'Monitoring Kognitif ADHD Real-Time',
        description:
            'Sistem monitoring kognitif berbasis data objektif sinyal otak (EEG) untuk mendukung deteksi dan penanganan ADHD pada anak usia sekolah. Menggantikan observasi subjektif dengan data terukur.',
        features: [
            'Analisis Theta/Beta ratio untuk indikator ADHD',
            'Dashboard visualisasi metrik kognitif real-time',
            'Histori sesi & rekomendasi AI personal',
            'Ekspor data terenkripsi CSV/PDF',
        ],
        price: 'Rp1,5 – 2,5 jt/bulan',
        href: '#',
        gradient: 'bg-gradient-to-r from-cyan-500 to-blue-500',
    },
    {
        icon: GraduationCap,
        name: 'Neuro Academy',
        tagline: 'Edukasi Neuroscience Berbasis AI',
        description:
            'Platform edukasi yang memanfaatkan neuroscience dan AI untuk mengoptimalkan fokus belajar. Membantu institusi pendidikan meningkatkan kualitas pembelajaran siswa berbasis data otak.',
        features: [
            'Modul edukasi neuroscience interaktif',
            'Pengukuran fokus belajar objektif via EEG',
            'Pelatihan & sertifikasi neuroscience',
            'Integrasi dengan kurikulum sekolah',
        ],
        price: 'Rp0,5 – 1,5 jt/peserta',
        href: '#',
        gradient: 'bg-gradient-to-r from-violet-500 to-purple-500',
    },
    {
        icon: Car,
        name: 'FUMORIVE',
        tagline: 'Simulasi Kewaspadaan Lalu Lintas',
        description:
            'Sistem simulasi dan monitoring kewaspadaan pengemudi berbasis analisis sinyal otak. Membantu mengurangi kecelakaan lalu lintas yang disebabkan oleh fatigue dan penurunan kewaspadaan kognitif.',
        features: [
            'Deteksi fatigue pengemudi secara real-time',
            'Simulasi kewaspadaan berbasis EEG',
            'Pelatihan batch untuk lembaga transportasi',
            'Laporan analisis kewaspadaan komprehensif',
        ],
        price: 'Rp10 – 20 jt/batch',
        href: '#',
        gradient: 'bg-gradient-to-r from-orange-500 to-red-500',
    },
];

const stats = [
    { value: 15000, suffix: '+', label: 'Institusi Pendidikan', description: 'SMA/SMK & PT di Jawa Tengah' },
    { value: 500, suffix: '+', label: 'Klinik Psikologi', description: 'Pangsa target monitoring ADHD' },
    { value: 85, suffix: '%+', label: 'Akurasi AI Baseline', description: 'Klasifikasi ML sinyal EEG' },
    { value: 200, suffix: '+', label: 'Lembaga Transportasi', description: 'Potensi mitra FUMORIVE' },
];

const techSpecs = [
    {
        icon: Cpu,
        title: 'Neuro-AI Engine',
        description: 'Klasifikasi ML dengan analisis Theta/Beta ratio dan Alpha power. Akurasi 85%+ dengan dataset lokal Indonesia.',
    },
    {
        icon: Brain,
        title: 'EEG Muse Integration',
        description: 'Perangkat EEG 4 channel dengan streaming data real-time 256 Hz ke cloud untuk analisis sinyal otak.',
    },
    {
        icon: Cloud,
        title: 'Cloud Infrastructure',
        description: 'Arsitektur cloud scalable dengan AI processing, penyimpanan data terenkripsi, dan high availability.',
    },
    {
        icon: Smartphone,
        title: 'Dashboard PWA',
        description: 'Progressive Web App cross-device. Histori sesi, visualisasi grafik, dan ekspor data CSV/PDF.',
    },
    {
        icon: Shield,
        title: 'Keamanan AES-256',
        description: 'Enkripsi data AES-256, access control RBAC, dan kepatuhan etika kognitif sesuai UU PDP 2022.',
    },
    {
        icon: Zap,
        title: 'Real-Time Processing',
        description: 'Pemrosesan sinyal otak real-time dengan latensi minimal untuk monitoring dan feedback instan.',
    },
];

const sdgs = [
    { icon: Heart, number: 3, title: 'Kesehatan Mental', description: 'Monitoring ADHD via Neuralis' },
    { icon: BookOpen, number: 4, title: 'Pendidikan Berkualitas', description: 'Neuro Academy tingkatkan fokus belajar' },
    { icon: Lightbulb, number: 9, title: 'Industri & Inovasi', description: 'Inovasi AI digital neurotechnology' },
    { icon: Building2, number: 11, title: 'Kota Berkelanjutan', description: 'FUMORIVE kurangi kecelakaan' },
];

const blogPosts = [
    {
        title: 'Memahami ADHD: Bagaimana EEG Membantu Deteksi Dini',
        excerpt: 'Prevalensi ADHD di Indonesia mencapai 5-7% pada anak usia sekolah. Teknologi EEG memberikan data objektif untuk mendukung deteksi dan penanganan lebih awal.',
        date: '15 Februari 2026',
        category: 'Neuroscience',
        href: '/blog',
    },
    {
        title: 'AI dalam Pendidikan: Meningkatkan Fokus Belajar Siswa',
        excerpt: 'Defisit fokus belajar menyumbang 25% angka putus sekolah di Jawa Tengah. Neuro Academy hadir sebagai solusi berbasis data otak.',
        date: '10 Februari 2026',
        category: 'Education',
        href: '/blog',
    },
    {
        title: 'Mengurangi Kecelakaan Lalu Lintas dengan Monitoring Kognitif',
        excerpt: 'Lebih dari 20.000 kecelakaan lalu lintas per tahun disebabkan fatigue pengemudi. FUMORIVE hadir dengan solusi berbasis EEG.',
        date: '5 Februari 2026',
        category: 'Safety',
        href: '/blog',
    },
];

export default function Welcome() {
    return (
        <LandingLayout title="Neuro-AI Platform">
            {/* ============================================ */}
            {/* HERO SECTION */}
            {/* ============================================ */}
            <section className="relative overflow-hidden">
                {/* Background effects */}
                <div className="mesh-gradient absolute inset-0" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_75%)]" />

                {/* Grid pattern overlay */}
                <div
                    className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px',
                    }}
                />

                <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
                    <div className="mx-auto max-w-4xl text-center">
                        {/* Badge */}
                        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
                            <Sparkles className="size-4" />
                            TRL 7 — Tervalidasi Operasional di Surakarta
                        </div>

                        {/* Headline */}
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                            Revolusi Pemahaman{' '}
                            <br className="hidden sm:block" />
                            Otak dengan{' '}
                            <span className="gradient-text glow-text">Neuro-AI</span>
                        </h1>

                        {/* Subheadline */}
                        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
                            Platform neurotechnology berbasis analisis sinyal otak (EEG) untuk
                            optimalisasi kesehatan mental, pendidikan, dan keselamatan publik.
                        </p>

                        {/* CTA Buttons */}
                        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <a href="#services">
                                <Button size="lg" className="rounded-full px-8 text-base">
                                    Jelajahi Layanan
                                    <ArrowRight className="ml-2 size-4" />
                                </Button>
                            </a>
                            <Link href="/contact">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="rounded-full px-8 text-base"
                                >
                                    Hubungi Kami
                                </Button>
                            </Link>
                        </div>

                        {/* Trust badges */}
                        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs text-muted-foreground">
                            <span className="flex items-center gap-2">
                                <Brain className="size-4 text-primary" />
                                Muse EEG Integration
                            </span>
                            <span className="flex items-center gap-2">
                                <Shield className="size-4 text-primary" />
                                AES-256 Encrypted
                            </span>
                            <span className="flex items-center gap-2">
                                <Cpu className="size-4 text-primary" />
                                AI-Powered Analysis
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* ABOUT SECTION */}
            {/* ============================================ */}
            <section id="about" className="relative py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        badge="Tentang Kami"
                        title="Startup Neurotechnology"
                        highlight="dari UNS"
                        description="BrainNova dikembangkan oleh tim mahasiswa Universitas Sebelas Maret (UNS), mengintegrasikan perangkat EEG Muse dengan Neuro-AI Signal Processing Engine untuk analisis real-time gelombang otak—Delta, Theta, Alpha, Beta."
                    />

                    <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {sdgs.map((sdg) => (
                            <div
                                key={sdg.number}
                                className="glass group rounded-2xl p-6 text-center transition-all duration-300 hover:glow"
                            >
                                <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                                    <sdg.icon className="size-6" />
                                </div>
                                <span className="text-xs font-semibold text-primary">
                                    SDG {sdg.number}
                                </span>
                                <h3 className="mt-1 text-sm font-bold">{sdg.title}</h3>
                                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                                    {sdg.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* About details */}
                    <div className="mx-auto mt-16 max-w-4xl">
                        <div className="glass rounded-2xl p-8 sm:p-10">
                            <div className="grid gap-8 md:grid-cols-2">
                                <div>
                                    <h3 className="text-lg font-bold">Latar Belakang</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                        Prevalensi gangguan kesehatan mental di Indonesia mencapai 9,8%
                                        populasi, dengan ADHD memengaruhi 5-7% anak usia sekolah. Defisit
                                        fokus belajar menyumbang 25% putus sekolah dini di Jawa Tengah, dan
                                        lebih dari 20.000 kecelakaan lalu lintas per tahun disebabkan oleh
                                        fatigue pengemudi.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">Keunggulan Kami</h3>
                                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-primary" />
                                            Ekosistem terintegrasi multisektor (bukan single-app)
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-primary" />
                                            Harga aksesibel via Muse komersial (Rp2-3 jt vs Rp10 jt+ kompetitor)
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-primary" />
                                            Akurasi lokal-adapted dengan dataset Indonesia
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-primary" />
                                            SaaS skalabel untuk institusi — tervalidasi TRL 7
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* SERVICES SECTION */}
            {/* ============================================ */}
            <section id="services" className="relative py-24 sm:py-32">
                <div className="absolute inset-0 bg-muted/30" />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        badge="Layanan Kami"
                        title="Tiga Pilar"
                        highlight="Solusi Neuro-AI"
                        description="Setiap layanan dirancang untuk menyasar sektor berbeda — kesehatan mental, pendidikan, dan keselamatan lalu lintas — dengan satu platform terintegrasi."
                    />

                    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {services.map((service) => (
                            <ServiceCard key={service.name} {...service} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* STATS SECTION */}
            {/* ============================================ */}
            <section className="relative overflow-hidden py-24 sm:py-32">
                <div className="mesh-gradient absolute inset-0" />
                <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        badge="Potensi Pasar"
                        title="Angka yang"
                        highlight="Berbicara"
                        description="Data konkret dari Jawa Tengah menunjukkan potensi besar untuk solusi neurotechnology di Indonesia."
                    />

                    <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="glass rounded-2xl p-8 text-center transition-all duration-300 hover:glow"
                            >
                                <StatCounter {...stat} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* TECHNOLOGY SECTION */}
            {/* ============================================ */}
            <section className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        badge="Teknologi"
                        title="Arsitektur"
                        highlight="Neuro-AI"
                        description="Integrasi EEG Muse ke AI cloud dengan engine pemrosesan sinyal untuk klasifikasi pola kognitif. Pertama di Indonesia dengan PWA multisektor."
                    />

                    <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {techSpecs.map((spec) => (
                            <div
                                key={spec.title}
                                className="group rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
                            >
                                <div className="mb-4 flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                                    <spec.icon className="size-5" />
                                </div>
                                <h3 className="text-base font-semibold">{spec.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                    {spec.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* BLOG PREVIEW SECTION */}
            {/* ============================================ */}
            <section className="relative py-24 sm:py-32">
                <div className="absolute inset-0 bg-muted/30" />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-end justify-between">
                        <SectionHeading
                            badge="Artikel Terbaru"
                            title="Insights &"
                            highlight="Updates"
                            description="Perkembangan terbaru seputar neuroscience, AI, dan implementasi BrainNova."
                            align="left"
                            className="max-w-xl"
                        />
                        <Link
                            href="/blog"
                            className="hidden items-center gap-1 text-sm font-semibold text-primary hover:underline sm:inline-flex"
                        >
                            Lihat Semua
                            <ArrowRight className="size-4" />
                        </Link>
                    </div>

                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {blogPosts.map((post) => (
                            <BlogCard key={post.title} {...post} />
                        ))}
                    </div>

                    <div className="mt-8 text-center sm:hidden">
                        <Link href="/blog">
                            <Button variant="outline" className="rounded-full">
                                Lihat Semua Artikel
                                <ArrowRight className="ml-2 size-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* CTA SECTION */}
            {/* ============================================ */}
            <section className="relative overflow-hidden py-24 sm:py-32">
                <div className="mesh-gradient absolute inset-0" />
                <div className="absolute inset-0 bg-background/50 backdrop-blur-sm" />

                <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        Siap Mengoptimalkan{' '}
                        <span className="gradient-text glow-text">Potensi Kognitif?</span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                        Bergabunglah dengan institusi yang sudah memanfaatkan teknologi Neuro-AI
                        untuk kesehatan mental, pendidikan, dan keselamatan publik.
                    </p>

                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link href="/contact">
                            <Button size="lg" className="rounded-full px-8 text-base">
                                Hubungi Kami
                                <ArrowRight className="ml-2 size-4" />
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button
                                variant="outline"
                                size="lg"
                                className="rounded-full px-8 text-base"
                            >
                                Jadwalkan Demo
                            </Button>
                        </Link>
                    </div>

                    {/* Newsletter */}
                    <div className="mx-auto mt-16 max-w-md">
                        <p className="mb-3 text-sm font-medium">
                            Subscribe untuk updates terbaru
                        </p>
                        <NewsletterForm variant="inline" />
                    </div>
                </div>
            </section>
        </LandingLayout>
    );
}
