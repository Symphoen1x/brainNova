import { useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, CheckCircle } from 'lucide-react';
import { type FormEvent } from 'react';

export function NewsletterForm({ variant = 'default' }: { variant?: 'default' | 'inline' }) {
    const { data, setData, post, processing, errors, reset, recentlySuccessful } = useForm({
        email: '',
    });

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        post('/newsletter', {
            onSuccess: () => reset(),
        });
    }

    if (recentlySuccessful) {
        return (
            <div className="flex items-center gap-2 rounded-lg border border-green-500/20 bg-green-500/10 p-3 text-sm text-green-600 dark:text-green-400">
                <CheckCircle className="size-4" />
                Berhasil subscribe! Terima kasih.
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="w-full">
            <div className="flex gap-2">
                <div className="relative flex-1">
                    <Mail className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        type="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        placeholder="email@example.com"
                        className="bg-background pl-10"
                        required
                    />
                </div>
                <Button type="submit" disabled={processing} size="sm" className="rounded-full px-5 shrink-0">
                    {processing ? '...' : 'Subscribe'}
                </Button>
            </div>
            {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
        </form>
    );
}
