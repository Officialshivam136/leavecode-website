/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '475px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        // Deep obsidian, charcoal, and warm navy darks
        slate: {
          950: '#070A0F', // deep navy-charcoal background
          900: '#0D121B', // card & panel surface
          850: '#131A26', // elevated layer
          800: '#1B2433', // subtle borders / muted surfaces
          700: '#334155',
          600: '#475569',
          500: '#64748B',
          400: '#94A3B8',
          300: '#CBD5E1',
          200: '#E2E8F0',
          100: '#F1F5F9',
          50: '#F8FAFC',
        },
        brand: {
          primary: '#4F46E5', // Electric Indigo
          hover: '#4338CA',
          light: '#6366F1',
          accent: '#06B6D4',  // Precision Cyan
          glow: 'rgba(79, 70, 229, 0.25)',
        },
        surface: {
          card: '#0D121B',
          hover: '#131A26',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(99, 102, 241, 0.4)',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['var(--font-jakarta)', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 20px -5px rgba(79, 70, 229, 0.3)',
        'glow-lg': '0 0 40px -10px rgba(79, 70, 229, 0.45)',
        'surface-card': '0 4px 20px -2px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      transitionTimingFunction: {
        'refined': 'cubic-bezier(0.16, 1, 0.3, 1)',
      }
    },
  },
  plugins: [],
};
