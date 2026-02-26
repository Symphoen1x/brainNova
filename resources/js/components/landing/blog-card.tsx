import { Link } from '@inertiajs/react';
import { Calendar } from 'lucide-react';

interface BlogCardProps {
    title: string;
    excerpt: string;
    date: string;
    category: string;
    href: string;
    image?: string;
}

export function BlogCard({ title, excerpt, date, category, href }: BlogCardProps) {
    return (
        <Link
            href={href}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
        >
            {/* Image placeholder */}
            <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                <div className="mesh-gradient absolute inset-0" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary/20">{category.charAt(0)}</span>
                </div>
                <span className="absolute top-3 left-3 rounded-full bg-primary/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                    {category}
                </span>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-semibold leading-snug transition-colors group-hover:text-primary">
                    {title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {excerpt}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="size-3" />
                    {date}
                </div>
            </div>
        </Link>
    );
}
