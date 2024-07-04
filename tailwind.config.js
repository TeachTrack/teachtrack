/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        gray200: "#F7F8FA",
        gray300: "#7A8293",
        gray400: "#343A47",
      },
      fontFamily: {
        playwrite: ["Playwrite VN", "cursive"],
      },
    },
  },
  plugins: [],
};
