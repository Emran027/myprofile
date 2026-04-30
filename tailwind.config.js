/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          DEFAULT: '#050505',
          lighter: '#0a0a0a',
          dark: '#020202',
        },
        neonBlue: {
          DEFAULT: '#4DE3FF',
          glow: 'rgba(77, 227, 255, 0.4)',
        },
        neonPurple: {
          DEFAULT: '#FFF18B',
          glow: 'rgba(255, 241, 139, 0.4)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 },
        }
      },
      backgroundImage: {
        'space-gradient': 'radial-gradient(circle at center, #0a0a0a 0%, #050505 100%)',
      },
    },
  },
  plugins: [],
}
