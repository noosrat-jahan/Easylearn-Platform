/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        bgprimary: "var(--background-primary)",
        fgprimary: "var(--foreground-primary)",
        title: "var(--homeTitle)",
      },
    },
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: ["light", "dark"],
  },
}

