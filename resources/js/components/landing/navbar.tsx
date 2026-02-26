import { Link } from '@inertiajs/react';
import { useState } from 'react';
import { Menu, X, Brain, ChevronDown } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const services = [
    { name: 'Neuralis', description: 'Monitoring Kognitif ADHD', href: '#' },
    { name: 'Neuro Academy', description: 'Edukasi Neuroscience AI', href: '#' },
    { name: 'FUMORIVE', description: 'Simulasi Kewaspadaan Lalu Lintas', href: '#' },
];

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services', children: services },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
];

export function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    return (
        <header className="fixed top-0 right-0 left-0 z-[100] border-b border-white/10 bg-white/70 backdrop-blur-xl dark:bg-[oklch(0.10_0.02_270/0.80)]">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <Brain className="size-5" />
                    </div>
                    <span className="text-lg font-bold tracking-tight">
                        Brain<span className="text-primary">Nova</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden items-center gap-1 md:flex">
                    {navItems.map((item) =>
                        item.children ? (
                            <div key={item.name} className="relative group">
                                <button
                                    className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    {item.name}
                                    <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
                                </button>
                                <div className="pointer-events-none absolute top-full left-1/2 z-[110] w-72 -translate-x-1/2 pt-2 opacity-0 transition-all group-hover:pointer-events-auto group-hover:opacity-100">
                                    <div className="rounded-xl border border-border bg-white p-2 shadow-2xl dark:bg-[oklch(0.15_0.03_270)]">
                                        {item.children.map((child) => (
                                            <a
                                                key={child.name}
                                                href={child.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex flex-col rounded-lg px-3 py-2.5 transition-colors hover:bg-primary/10 dark:hover:bg-primary/20"
                                            >
                                                <span className="text-sm font-semibold">{child.name}</span>
                                                <span className="text-xs text-muted-foreground">
                                                    {child.description}
                                                </span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                            >
                                {item.name}
                            </Link>
                        ),
                    )}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden items-center gap-2 md:flex">
                    <ThemeToggle />
                    <Link href="/contact">
                        <Button size="sm" className="rounded-full px-5">
                            Get Started
                        </Button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-2 md:hidden">
                    <ThemeToggle />
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Nav */}
            <div
                className={cn(
                    'overflow-hidden transition-all duration-300 md:hidden',
                    mobileOpen ? 'max-h-125 border-t border-border' : 'max-h-0',
                )}
            >
                <div className="space-y-1 px-4 py-4">
                    {navItems.map((item) =>
                        item.children ? (
                            <div key={item.name}>
                                <button
                                    onClick={() => setServicesOpen(!servicesOpen)}
                                    className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    {item.name}
                                    <ChevronDown
                                        className={cn(
                                            'size-4 transition-transform',
                                            servicesOpen && 'rotate-180',
                                        )}
                                    />
                                </button>
                                <div
                                    className={cn(
                                        'overflow-hidden transition-all',
                                        servicesOpen ? 'max-h-60' : 'max-h-0',
                                    )}
                                >
                                    <div className="ml-4 space-y-1 py-1">
                                        {item.children.map((child) => (
                                            <a
                                                key={child.name}
                                                href={child.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
                                            >
                                                {child.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className="block rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                            >
                                {item.name}
                            </Link>
                        ),
                    )}
                    <div className="pt-2">
                        <Link href="/contact" onClick={() => setMobileOpen(false)}>
                            <Button className="w-full rounded-full">Get Started</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
