import { cn } from '@/lib/utils';

interface SectionHeadingProps {
    badge?: string;
    title: string;
    highlight?: string;
    description?: string;
    className?: string;
    align?: 'left' | 'center';
}

export function SectionHeading({
    badge,
    title,
    highlight,
    description,
    className,
    align = 'center',
}: SectionHeadingProps) {
    return (
        <div
            className={cn(
                'mx-auto max-w-3xl',
                align === 'center' && 'text-center',
                className,
            )}
        >
            {badge && (
                <span className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium tracking-wide text-primary">
                    {badge}
                </span>
            )}
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                {title}{' '}
                {highlight && (
                    <span className="gradient-text">{highlight}</span>
                )}
            </h2>
            {description && (
                <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {description}
                </p>
            )}
        </div>
    );
}
