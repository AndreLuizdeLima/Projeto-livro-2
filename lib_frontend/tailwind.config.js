/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
        extend: {
      colors: {
        primary: {
          DEFAULT: '#3b82f6',
          soft: '#93c5fd',
          dark: '#1e40af',
        },
        secondary: '#60a5fa',

        surface: '#e5efff',
        background: '#f8fafc',

        text: {
          primary: '#1e293b',
          secondary: '#475569',
        },
        border: '#cbd5e1',
      },
    },
  },
  plugins: [],
}