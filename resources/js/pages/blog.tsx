import LandingLayout from '@/layouts/landing-layout';
import { SectionHeading } from '@/components/landing/section-heading';
import { BlogCard } from '@/components/landing/blog-card';
import { NewsletterForm } from '@/components/landing/newsletter-form';

const articles = [
    {
        title: 'Memahami ADHD: Bagaimana EEG Membantu Deteksi Dini',
        excerpt:
            'Prevalensi ADHD di Indonesia mencapai 5-7% pada anak usia sekolah. Teknologi EEG memberikan data objektif untuk mendukung deteksi dan penanganan lebih awal, menggantikan metode observasi subjektif.',
        date: '15 Februari 2026',
        category: 'Neuroscience',
        href: '/blog',
    },
    {
        title: 'AI dalam Pendidikan: Meningkatkan Fokus Belajar Siswa',
        excerpt:
            'Defisit fokus belajar menyumbang 25% angka putus sekolah di Jawa Tengah. Neuro Academy hadir sebagai solusi berbasis data otak untuk mengoptimalkan proses pembelajaran.',
        date: '10 Februari 2026',
        category: 'Education',
        href: '/blog',
    },
    {
        title: 'Mengurangi Kecelakaan Lalu Lintas dengan Monitoring Kognitif',
        excerpt:
            'Lebih dari 20.000 kecelakaan lalu lintas per tahun disebabkan fatigue pengemudi. Monitoring kognitif berbasis EEG menjadi solusi preventif yang menjanjikan.',
        date: '5 Februari 2026',
        category: 'Safety',
        href: '/blog',
    },
    {
        title: 'Theta/Beta Ratio: Indikator Kognitif dalam Analisis EEG',
        excerpt:
            'Rasio Theta/Beta merupakan salah satu biomarker utama dalam analisis sinyal otak untuk mendeteksi gangguan pemusatan perhatian. Memahami bagaimana AI mengolah data ini.',
        date: '1 Februari 2026',
        category: 'Research',
        href: '/blog',
    },
    {
        title: 'Perangkat Muse EEG: Gateway Menuju Neurotechnology Aksesibel',
        excerpt:
            'Dengan harga Rp2-3 juta per unit, perangkat Muse EEG menjadikan neurotechnology lebih aksesibel dibanding kompetitor yang mematok harga Rp10 juta ke atas.',
        date: '28 Januari 2026',
        category: 'Technology',
        href: '/blog',
    },
    {
        title: 'BrainNova Raih TRL 7: Validasi Operasional di Surakarta',
        excerpt:
            'Platform BrainNova berhasil mencapai Technology Readiness Level 7 melalui uji coba operasional di lingkungan nyata Surakarta dengan melibatkan institusi pendidikan dan klinik.',
        date: '20 Januari 2026',
        category: 'News',
        href: '/blog',
    },
];

export default function Blog() {
    return (
        <LandingLayout title="Blog">
            {/* Header */}
            <section className="relative overflow-hidden py-20 sm:py-28">
                <div className="mesh-gradient absolute inset-0" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_75%)]" />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        badge="Blog"
                        title="Insights &"
                        highlight="Updates"
                        description="Perkembangan terbaru seputar neuroscience, AI, dan implementasi BrainNova di Indonesia."
                    />
                </div>
            </section>

            {/* Articles Grid */}
            <section className="py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {articles.map((article) => (
                            <BlogCard key={article.title} {...article} />
                        ))}
                    </div>

                    {/* Placeholder pagination */}
                    <div className="mt-12 flex justify-center">
                        <p className="text-sm text-muted-foreground">
                            Menampilkan {articles.length} artikel — Lebih banyak konten segera hadir
                        </p>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="border-t border-border bg-muted/30 py-16">
                <div className="mx-auto max-w-xl px-4 text-center sm:px-6">
                    <h3 className="text-xl font-bold">Jangan Lewatkan Update Terbaru</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Subscribe newsletter kami untuk mendapatkan artikel dan insight terbaru
                        seputar neurotechnology.
                    </p>
                    <div className="mt-6">
                        <NewsletterForm />
                    </div>
                </div>
            </section>
        </LandingLayout>
    );
}
