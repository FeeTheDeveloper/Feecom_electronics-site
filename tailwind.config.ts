import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Feecom Brand Colors
        bg: "#141519",
        primary: "#3C89C3",
        deep: "#244964",
        steel: "#36688E",
        gray1: "#5C5C5F",
        gray2: "#4F4F52",
        gray3: "#414244",
      },
      backgroundColor: {
        surface: "rgba(255, 255, 255, 0.05)",
      },
      borderColor: {
        subtle: "rgba(255, 255, 255, 0.1)",
        muted: "rgba(255, 255, 255, 0.2)",
      },
      textColor: {
        muted: "rgba(255, 255, 255, 0.7)",
      },
    },
  },
  plugins: [],
};
export default config;
