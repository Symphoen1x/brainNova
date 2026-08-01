import { type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
    icon: LucideIcon;
    name: string;
    tagline: string;
    description: string;
    features: string[];
    price: string;
    href: string;
    gradient: string;
}

export function ServiceCard({
    icon: Icon,
    name,
    tagline,
    description,
    features,
    price,
    href,
    gradient,
}: ServiceCardProps) {
    return (
        <div
            className={cn(
                'group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-8 transition-all duration-500',
                'hover:border-primary/30 hover:shadow-xl hover:glow',
                'dark:hover:border-primary/40',
            )}
        >
            {/* Gradient accent top */}
            <div
                className={cn(
                    'absolute inset-x-0 top-0 h-1 opacity-0 transition-opacity duration-500 group-hover:opacity-100',
                    gradient,
                )}
            />

            {/* Icon */}
            <div className="mb-6 flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                <Icon className="size-7" />
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="mt-1 text-sm font-medium text-primary">{tagline}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {description}
            </p>

            {/* Features */}
            <ul className="mt-5 space-y-2">
                {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1 block size-1.5 shrink-0 rounded-full bg-primary" />
                        {feature}
                    </li>
                ))}
            </ul>

            {/* Price & Link */}
            <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                <span className="text-xs font-medium text-muted-foreground">{price}</span>
                <a
                    href={href}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:underline"
                >
                    Kunjungi Platform
                    <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </a>
            </div>
        </div>
    );
}
