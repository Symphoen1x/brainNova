import LandingLayout from '@/layouts/landing-layout';
import { SectionHeading } from '@/components/landing/section-heading';
import { ContactForm } from '@/components/landing/contact-form';
import { NewsletterForm } from '@/components/landing/newsletter-form';
import { MapPin, Mail, Phone, Clock, Brain } from 'lucide-react';

const contactInfo = [
    {
        icon: MapPin,
        label: 'Alamat',
        value: 'Universitas Sebelas Maret (UNS)',
        description: 'Jl. Ir. Sutami No.36, Kentingan, Surakarta, Jawa Tengah 57126',
    },
    {
        icon: Mail,
        label: 'Email',
        value: 'hello@brainnova.id',
        description: 'Kami akan merespons dalam 1-2 hari kerja',
    },
    {
        icon: Phone,
        label: 'Telepon',
        value: '+62 812-XXXX-XXXX',
        description: 'Senin - Jumat, 09:00 - 17:00 WIB',
    },
    {
        icon: Clock,
        label: 'Jam Operasional',
        value: 'Senin - Jumat',
        description: '09:00 - 17:00 WIB',
    },
];

export default function Contact() {
    return (
        <LandingLayout title="Contact">
            {/* Header */}
            <section className="relative overflow-hidden py-20 sm:py-28">
                <div className="mesh-gradient absolute inset-0" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_75%)]" />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        badge="Hubungi Kami"
                        title="Mari"
                        highlight="Berkolaborasi"
                        description="Tertarik dengan solusi Neuro-AI untuk institusi Anda? Hubungi kami untuk konsultasi, demo, atau kemitraan."
                    />
                </div>
            </section>

            {/* Content */}
            <section className="py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-5">
                        {/* Contact Form */}
                        <div className="lg:col-span-3">
                            <div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8">
                                <div className="mb-6">
                                    <h3 className="text-xl font-bold">Kirim Pesan</h3>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        Isi formulir di bawah dan kami akan menghubungi Anda sesegera
                                        mungkin.
                                    </p>
                                </div>
                                <ContactForm />
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-6 lg:col-span-2">
                            {/* Info Cards */}
                            {contactInfo.map((info) => (
                                <div
                                    key={info.label}
                                    className="glass group rounded-2xl p-5 transition-all duration-300 hover:glow"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                            <info.icon className="size-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                                                {info.label}
                                            </p>
                                            <p className="mt-0.5 text-sm font-semibold">
                                                {info.value}
                                            </p>
                                            <p className="mt-1 text-xs text-muted-foreground">
                                                {info.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Newsletter */}
                            <div className="glass rounded-2xl p-5">
                                <div className="mb-4 flex items-center gap-3">
                                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <Brain className="size-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold">Newsletter</h4>
                                        <p className="text-xs text-muted-foreground">
                                            Dapatkan update terbaru
                                        </p>
                                    </div>
                                </div>
                                <NewsletterForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partners CTA */}
            <section className="border-t border-border bg-muted/30 py-16">
                <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
                    <h3 className="text-xl font-bold">Tertarik Menjadi Mitra?</h3>
                    <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                        BrainNova membuka kemitraan dengan institusi pendidikan, klinik psikologi,
                        dan lembaga transportasi di Jawa Tengah. Jadwalkan demo untuk melihat
                        platform kami secara langsung.
                    </p>
                    <div className="mt-6 grid gap-4 text-left sm:grid-cols-3">
                        {[
                            { value: '15.000+', label: 'Institusi Pendidikan Target' },
                            { value: '500+', label: 'Klinik Psikologi Target' },
                            { value: '200+', label: 'Lembaga Transportasi Target' },
                        ].map((stat) => (
                            <div key={stat.label} className="rounded-xl border border-border bg-card p-4 text-center">
                                <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                                <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </LandingLayout>
    );
}
