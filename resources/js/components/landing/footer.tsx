import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

const footerLinks = {
    layanan: [
        { name: 'Neuralis', href: 'https://fumorive-git-main-apypzs-projects.vercel.app/' },
        { name: 'Neuro Academy', href: 'https://neuroacademy.id/' },
        { name: 'FUMORIVE', href: 'https://fumorive.id/' },
    ],
    perusahaan: [
        { name: 'About', href: '/#about' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
    ],
    legal: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
    ],
};

const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: 'mailto:hello@brainnova.id', label: 'Email' },
];

export function Footer() {
    return (
        <footer className="border-t border-border bg-muted/30">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <a href="/" className="mb-4 flex items-center gap-2">
                            <img
                                src="/brainova2.png"
                                alt="BrainNova Logo"
                                className="h-9 w-auto object-contain"
                            />
                        </a>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                            Platform Neuro-AI berbasis analisis sinyal otak (EEG) untuk optimalisasi
                            kesehatan mental, pendidikan, dan keselamatan publik.
                        </p>
                        <div className="mt-5 flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                                    aria-label={social.label}
                                >
                                    <social.icon className="size-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Layanan */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
                            Layanan
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.layanan.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Perusahaan */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
                            Perusahaan
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.perusahaan.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
                            Legal
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
                    <p className="text-xs text-muted-foreground">
                        &copy; {new Date().getFullYear()} BrainNova — Universitas Sebelas Maret. All
                        rights reserved.
                    </p>
                    <p className="text-xs text-muted-foreground">
                        Neuro-AI Berbasis Analisis Sinyal Otak (EEG)
                    </p>
                </div>
            </div>
        </footer>
    );
}
