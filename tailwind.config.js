/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        // Override md to use a custom breakpoint (e.g., 900px)
        md: "1063px",
        // Optionally override other breakpoints or add new ones
        lg: "1100px",
        miic: "590px"
      },

      colors: {
        primary: "#F3544B",
        background: "#FBDDDC",
      },
      borderWidth: {
        3: '3px', // Defines border-3 as 3px width
      },
      fontFamily: {
        poppins: ["Poppins"],
        suez: ["Suez One"],
      },
    },
  },
  plugins: [],
};
