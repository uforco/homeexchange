/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        playfairDisplay: ['Playfair Display', 'serif'],
        DMSans: ['DM Sans', 'sans-serif'],
      }, 
    },
  },
  plugins: [
    require("daisyui"),
    require('preline/plugin'),
    require('flowbite/plugin'),
  ],
  daisyui: {
    themes: ["emerald"],
  },
}

