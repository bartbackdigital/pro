import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        mover: "mover 1s infinite alternate",
      },
      keyframes: {
        mover: {
          "0%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(10px)" },
        },
      },
      fontSize: {
        h3: "20px", // Custom font size for h3
      },
      boxShadow: {
        custom: "0 1px 2px rgba(0, 0, 0, 0.1)",
      },
      fontFamily: {
        heading: ["Nunito", "sans-serif"], // Assuming you'll use Nunito for headings
        body: ["Poppins", "sans-serif"], // Assuming Poppins for body text
        nunito: ["Nunito", "sans-serif"], // Assuming you'll use Nunito for headings
        poppins: ["Poppins", "sans-serif"], // Assuming Poppins for body text
      },
      colors: {
        primary: {
          DEFAULT: "#2e3e5e",
          50: "#e6f7fb", // Lightest shade
          100: "#bfeef7",
          200: "#2e3e5e",
          300: "#66d4ed",
          400: "#33c3e6",
          500: "#0cb4ce", // Your specified color for primary-50
          600: "#0a91a4", // Slightly darker
          700: "#08707a", // Even darker
          800: "#064f5a", // Dark shade
          900: "#042f3a", // Darkest shade
        },
        "primary-50": "#0cb4ce",
        secondary: "#ea4517",
        contentGray: "#e6e6e6",
        textGray: "#383838",
        gray50: "#747474",
        darkGray: "#3a3b3d",
        defaultText: "#6e6e6e", // Custom color named defaultText
        customGray: "#f7f7f7",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
