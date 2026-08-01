import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
    { name: 'Home', href: '/', top: true },
    { name: 'About', href: '/#about', hash: '#about' },
    { name: 'Services', href: '/#services', hash: '#services' },
    { name: 'Blog', href: '/#blog', hash: '#blog' },
    { name: 'Contact', href: '/contact' },
];

export function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleTopClick = (): void => {
        setMobileOpen(false);

        if (window.location.pathname !== '/') {
            window.location.href = '/';
            return;
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleHashClick = (hash: string): void => {
        setMobileOpen(false);

        if (window.location.pathname !== '/') {
            window.location.href = hash;
            return;
        }

        const element = document.querySelector(hash);
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <header className="fixed top-0 right-0 left-0 z-100 border-b border-white/10 bg-white/70 backdrop-blur-xl dark:bg-[oklch(0.10_0.02_270/0.80)]">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <a href="/" className="flex items-center gap-2">
                    <img
                        src="/brainova2.png"
                        alt="BrainNova Logo"
                        className="h-9 w-auto object-contain"
                    />
                </a>

                {/* Desktop Nav */}
                <nav className="hidden items-center gap-1 md:flex">
                    {navItems.map((item) =>
                        item.href === '/contact' ? (
                            <a
                                key={item.name}
                                href={item.href}
                                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                            >
                                {item.name}
                            </a>
                        ) : item.top ? (
                            <button
                                key={item.name}
                                type="button"
                                onClick={handleTopClick}
                                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                            >
                                {item.name}
                            </button>
                        ) : (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(event) => {
                                    event.preventDefault();
                                    handleHashClick(item.hash ?? item.href);
                                }}
                                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                            >
                                {item.name}
                            </a>
                        ),
                    )}
                </nav>

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
                        item.href === '/contact' ? (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className="block rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                            >
                                {item.name}
                            </a>
                        ) : item.top ? (
                            <button
                                key={item.name}
                                type="button"
                                onClick={handleTopClick}
                                className="block w-full rounded-md px-3 py-2.5 text-left text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                            >
                                {item.name}
                            </button>
                        ) : (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(event) => {
                                    event.preventDefault();
                                    handleHashClick(item.hash ?? item.href);
                                }}
                                className="block rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                            >
                                {item.name}
                            </a>
                        ),
                    )}

                </div>
            </div>
        </header>
    );
}
