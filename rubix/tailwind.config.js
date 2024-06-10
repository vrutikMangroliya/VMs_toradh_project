/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/public/Image/bg.jepg')",
      },
      animation: {
        'loop-scroll': 'loop-scroll 50s linear infinite',
      },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateX(0)'},
          to: { transform: 'translateX(-100%)'},
          // transform-origin:right;
          // animation:grow 5s forwards infinite

        }
      }
    },
  },
  plugins: [],
}