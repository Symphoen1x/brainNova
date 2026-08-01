import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../css/app.css';
import { initializeTheme } from './hooks/use-appearance';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// Static deployment: map URL paths to correct Inertia page components
// Firebase serves index.html for all routes, so we fix the initial page data
const staticRouteMap: Record<string, string> = {
    '/': 'welcome',
    '/contact': 'contact',
    '/blog': 'blog',
    '/dashboard': 'dashboard',
};

const appEl = document.getElementById('app');
if (appEl) {
    const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';
    const component = staticRouteMap[currentPath];
    if (component) {
        const pageData = JSON.parse(appEl.dataset.page || '{}');
        pageData.component = component;
        pageData.url = currentPath;
        appEl.dataset.page = JSON.stringify(pageData);
    }
}

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) =>
        resolvePageComponent(
            `./pages/${name}.tsx`,
            import.meta.glob('./pages/**/*.tsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <StrictMode>
                <App {...props} />
            </StrictMode>,
        );
    },
    progress: {
        color: '#4B5563',
    },
});

// This will set light / dark mode on load...
initializeTheme();
