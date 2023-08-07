/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      maxWith: {
        default: '800px'
      }
    },
  },
  plugins: [],
}

