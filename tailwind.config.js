/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}","./index.html"],
  theme: {
    container: {
      center: true,
      screens: {
        xs: "0",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400px",
      },
    },
    extend: {
      colors:{
        primary:"#0aad0a"
      }
    },
  },
  plugins: [],
};
