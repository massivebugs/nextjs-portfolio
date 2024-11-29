import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  darkMode: "selector",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      textShadow: {
        DEFAULT:
          "1px 0 1px var(--tw-shadow-color), -1px 0 1px var(--tw-shadow-color), 0 1px 1px var(--tw-shadow-color), 0 -1px 1px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
          "text-shadow-none": () => ({
            textShadow: "none",
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
} satisfies Config;
