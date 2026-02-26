import type { SVGAttributes } from 'react';

export default function AppLogoIcon(props: SVGAttributes<SVGElement>) {
    return (
        <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C8.5 2 5 4.5 5 8.5c0 2 .5 3 1.5 4.5C5.2 14 4 15.5 4 17.5 4 20 6 22 8.5 22c1.5 0 2.5-.5 3.5-1.5 1 1 2 1.5 3.5 1.5 2.5 0 4.5-2 4.5-4.5 0-2-1.2-3.5-2.5-4.5 1-1.5 1.5-2.5 1.5-4.5C19 4.5 15.5 2 12 2z" />
            <path d="M12 2v20" />
            <path d="M5.5 10c2-1 4-1.5 6.5-1.5s4.5.5 6.5 1.5" />
            <path d="M6 16c1.5-1 3.5-1.5 6-1.5s4.5.5 6 1.5" />
        </svg>
    );
}
