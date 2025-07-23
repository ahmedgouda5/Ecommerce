import flowbitePlugin from "flowbite/plugin";

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
       colors:{
        primary:"#0aad0a"
      }
    },
  },
  plugins: [flowbitePlugin],
};
