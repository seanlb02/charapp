
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    "./pages/**/*.{html,js,ts,jsx,tsx}",
    "./Components/**/*.{html,js,ts,jsx,tsx}",
  ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xxs': '250px',
      'xs': '350px',
      'sm': '640px',
      'md': '750px',
      'lg': '850px',
      'xlg': '1100px',
    },
    extend: {
      screens: {
        'xs': '350px',
        'sm': '640px',
        'md': '750px',
        'lg': '850px',
        'xlg': '1100px',
      },
      backgroundImage: {
        'overmono': "url('/overmono.jpeg')",
        'dmas' : "url('/dmas.jpeg')",
        'peggy' : "url('/peggy.jpeg')",
        'angel' : "url('/angel.jpeg')",
      },
      fontFamily: {
        'merriweather': ['Mereiweather', 'serif'],
        'roboto': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}