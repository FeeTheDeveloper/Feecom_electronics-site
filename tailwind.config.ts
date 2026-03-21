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
        // Vibrant neon palette for futuristic accents
        neonPink: "#E94560",
        neonPurple: "#6C5DD3",
        neonBlue: "#19A2AE",
        neonGreen: "#2BB673",
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

      // Custom keyframes for subtle movement and pulsing animations
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(-5%)" },
          "50%": { transform: "translateY(5%)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.8" },
          "50%": { opacity: "0.4" },
        },
      },
      // Animation definitions referencing the above keyframes
      animation: {
        float: "float 8s ease-in-out infinite",
        "pulse-slow": "pulseSlow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
