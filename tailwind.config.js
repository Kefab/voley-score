/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'ball': "url('/images/ball.png')",
        'service': "url('/images/service.png')",
      }
    },
  },
  plugins: [],
}

