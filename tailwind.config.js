/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-purple': "#6f6392",
        'light-purple' : "#f4edff",
        'gray-lavender' : "#b8a8cb"
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"],
  },
}
