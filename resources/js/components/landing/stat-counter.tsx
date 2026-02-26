import { useEffect, useRef, useState } from 'react';

interface StatCounterProps {
    value: number;
    suffix?: string;
    label: string;
    description?: string;
}

export function StatCounter({ value, suffix = '', label, description }: StatCounterProps) {
    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 },
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!visible) return;

        const duration = 2000;
        const steps = 60;
        const increment = value / steps;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [visible, value]);

    return (
        <div ref={ref} className="text-center">
            <div className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                <span className="gradient-text">
                    {count.toLocaleString()}
                    {suffix}
                </span>
            </div>
            <div className="mt-2 text-sm font-semibold">{label}</div>
            {description && (
                <p className="mt-1 text-xs text-muted-foreground">{description}</p>
            )}
        </div>
    );
}
