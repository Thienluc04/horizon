/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter", "sans-serif"],
      },
      colors: {
        dark: "#1C1C1C",
        gray6: "#505050",
        gray5: "#8B96A5",
        gray4: "#BDC4CD",
        gray3: "#DEE2E7",
        gray2: "#EFF2F4",
        gray1: "#F7FAFC",
        primary: "#0D6EFD",
        green: "#00B517",
        orange: "#FF9017",
        red: "#FA3434",
      },
      backgroundImage: {
        primaryGradient: "linear-gradient(180deg, #127FFF 0%, #0067FF 100%)",
        loadingBtn: "linear-gradient(#93c5fd 100%, #fff 0%)",
      },
    },
  },
  plugins: [],
};
