/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'title-font': ['Balthazar', 'Serif'],
        'main-font': ["Roboto", "Sans-Serif"]
      },
      colors: {
        "primary": '#363636',
        "secondary": '#f3f4f6',
        "tertiary": '#acacac',
        "accent-primary": '#fed550',
        "accent-secondary": '#f0d270',
      },
      backgroundImage:{
        "crystal": "url('/src/media/crystalbg.jpg')"
      }
    },
  },
  plugins: [],
}
