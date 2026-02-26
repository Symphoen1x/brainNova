import { useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Send, CheckCircle } from 'lucide-react';
import { type FormEvent } from 'react';

export function ContactForm() {
    const { data, setData, post, processing, errors, reset, recentlySuccessful } = useForm({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        post('/contact', {
            onSuccess: () => reset(),
        });
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            {recentlySuccessful && (
                <div className="flex items-center gap-2 rounded-lg border border-green-500/20 bg-green-500/10 p-3 text-sm text-green-600 dark:text-green-400">
                    <CheckCircle className="size-4" />
                    Pesan berhasil dikirim! Kami akan segera menghubungi Anda.
                </div>
            )}

            <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                    <Label htmlFor="name">Nama Lengkap</Label>
                    <Input
                        id="name"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        placeholder="Masukkan nama Anda"
                        className="bg-background"
                    />
                    {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        placeholder="email@example.com"
                        className="bg-background"
                    />
                    {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="subject">Subjek</Label>
                <Input
                    id="subject"
                    value={data.subject}
                    onChange={(e) => setData('subject', e.target.value)}
                    placeholder="Tentang apa pesan Anda?"
                    className="bg-background"
                />
                {errors.subject && <p className="text-xs text-destructive">{errors.subject}</p>}
            </div>

            <div className="space-y-2">
                <Label htmlFor="message">Pesan</Label>
                <textarea
                    id="message"
                    rows={5}
                    value={data.message}
                    onChange={(e) => setData('message', e.target.value)}
                    placeholder="Tuliskan pesan Anda..."
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                />
                {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
            </div>

            <Button type="submit" disabled={processing} className="w-full rounded-full sm:w-auto">
                <Send className="mr-2 size-4" />
                {processing ? 'Mengirim...' : 'Kirim Pesan'}
            </Button>
        </form>
    );
}
