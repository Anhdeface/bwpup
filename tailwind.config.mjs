/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'paper-cream': '#F9F7F1',
                'ink-black': '#222222',
                'debian-red-muted': '#A80030',
                'slate-gray': '#64748B',
            },
            fontFamily: {
                serif: ['"Playfair Display"', '"Merriweather"', 'serif'],
                sans: ['"Inter"', '"Public Sans"', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
            },
            borderRadius: {
                DEFAULT: '2px',
                none: '0',
                sm: '2px',
                md: '2px',
                lg: '2px',
                xl: '2px',
                '2xl': '2px',
                '3xl': '2px',
                full: '9999px',
            },
        },
    },
    plugins: [],
}
