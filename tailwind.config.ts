import type { Config } from "tailwindcss";
import TailwindSpring from "tailwindcss-spring";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
  },
  plugins: [TailwindSpring],
};
export default config;
