/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],       // Correct
      roboto: ['Roboto', 'sans-serif'],       // Correct
      nunito: ['"Nunito Sans"', 'sans-serif'],  // Correct, because "Nunito Sans" has a space
      inter: ['Inter', 'sans-serif'],           // Correct
      lato: ['Lato', 'serif'],                  // Correct (Lato is a single word)
      rubic: ['Rubik', 'serif'],                // Correct (Rubic is a single word)
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow:{
        outer:"6px 6px 12px #b8b9be,-6px -6px 12px white",
        inside:"inset 2px 2px 5px #b8b9be,inset -3px -3px 7px #fff",
        bottom : ' 0 5px 5px -6px rgba(0, 0, 0,0.7)',
      }
    },
  },
  plugins: [],
};
