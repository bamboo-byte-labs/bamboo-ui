import tailwindcssAnimate from "tailwindcss-animate"


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        foreground: '#000000',
        card: '#FFFFFF',
        'card-foreground': '#000000',
        popover: '#FFFFFF',
        'popover-foreground': '#000000',
        primary: '#86EFFE',
        'primary-foreground': '#000000',
        secondary: '#FCBEEA',
        'secondary-foreground': '#000000',
        muted: '#F0F0F0',
        'muted-foreground': '#888888',
        accent: '#FFD700',
        'accent-foreground': '#000000',
        destructive: '#FF4C61',
        'destructive-foreground': '#FFFFFF',
        border: '#E2E8F0',
        input: '#E2E8F0',
        ring: '#86EFFE',
        radius: '8px',
      },
      borderRadius: {
        DEFAULT: '8px',
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out',
        fadeOut: 'fadeOut 0.3s ease-in',
        zoomIn: 'zoomIn 0.3s ease-out',
        zoomOut: 'zoomOut 0.3s ease-in',
        hoverEffect: 'hoverEffect 0.3s ease-in-out',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.9)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        zoomOut: {
          '0%': { transform: 'scale(1)', opacity: 1 },
          '100%': { transform: 'scale(0.9)', opacity: 0 },
        },
        hoverEffect: {
          '0%': { transform: 'scale(1)', boxShadow: 'none' },
          '100%': { transform: 'scale(1.05)', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
}
