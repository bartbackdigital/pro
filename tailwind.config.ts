import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
        primary: "#2e3e5e",
        secondary: "#ea4517",
        contentGray: "#e6e6e6",
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
