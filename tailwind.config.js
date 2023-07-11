/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        candlestick: "url(/images/candlesticks.png)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        primary: "#0B0E13",
        secondary: "#12181F",
        tertiary: "#161D26",
      },
      backgroundSize: {
        halfauto: "50% auto",
      },
      borderColor: {
        tertiary: "#161D26",
      },
    },
  },
  plugins: [],
};
