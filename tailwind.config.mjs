/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        zinc: {
          750: '#323232',
          850: '#1f1f1f',
          950: '#0f0f0f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      typography: (theme) => ({
        invert: {
          css: {
            '--tw-prose-body': theme('colors.zinc[300]'),
            '--tw-prose-headings': theme('colors.zinc[100]'),
            '--tw-prose-lead': theme('colors.zinc[400]'),
            '--tw-prose-links': theme('colors.lime[400]'),
            '--tw-prose-bold': theme('colors.zinc[100]'),
            '--tw-prose-counters': theme('colors.zinc[400]'),
            '--tw-prose-bullets': theme('colors.lime[500]'),
            '--tw-prose-hr': theme('colors.zinc[700]'),
            '--tw-prose-quotes': theme('colors.zinc[200]'),
            '--tw-prose-quote-borders': theme('colors.lime[500]'),
            '--tw-prose-captions': theme('colors.zinc[400]'),
            '--tw-prose-code': theme('colors.lime[300]'),
            '--tw-prose-pre-code': theme('colors.zinc[200]'),
            '--tw-prose-pre-bg': theme('colors.zinc[900]'),
            '--tw-prose-th-borders': theme('colors.zinc[600]'),
            '--tw-prose-td-borders': theme('colors.zinc[700]'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
