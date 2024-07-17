const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {}
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      dark: {
        colors: {
          primary: {
            DEFAULT: "#69c1ef",
            foreground: "#ffffff"
          },
          secondary: {
            DEFAULT: "#6478ef",
            foreground: "#ffffff"
          },
          primary: "#69c1ef",
          secondary: "#6478ef"
        }
      },
    }
  })],
};

export default config;