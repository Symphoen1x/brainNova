import { Head } from '@inertiajs/react';
import { Navbar } from '@/components/landing/navbar';
import { Footer } from '@/components/landing/footer';
import type { PropsWithChildren } from 'react';

interface LandingLayoutProps extends PropsWithChildren {
    title?: string;
}

export default function LandingLayout({ title, children }: LandingLayoutProps) {
    return (
        <>
            <Head title={title}>
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700"
                    rel="stylesheet"
                />
            </Head>

            <div className="flex min-h-screen flex-col">
                <Navbar />
                <main className="flex-1 pt-16">{children}</main>
                <Footer />
            </div>
        </>
    );
}
