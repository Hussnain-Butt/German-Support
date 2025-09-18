// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        border: 'var(--color-border)',

        primary: 'var(--color-primary)',
        'primary-light': 'var(--color-primary-light)',

        accent: 'var(--color-accent)',
        'accent-dark': 'var(--color-accent-dark)',

        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',

        // Status Colors
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        danger: 'var(--color-danger)',
      },
      fontFamily: {
        // आपके कस्टम फ़ॉन्ट को यहाँ जोड़ें
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
