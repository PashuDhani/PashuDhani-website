
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"]
      },
      colors: {
        brand: {
          50: "#eefcf3",
          100: "#d6f7e2",
          200: "#aeeec7",
          300: "#7fe3aa",
          400: "#4ed88e",
          500: "#27c96f",
          600: "#1ea558",
          700: "#177e43",
          800: "#105b31",
          900: "#0b3d22"
        }
      }
    }
  },
  plugins: []
};
export default config;
