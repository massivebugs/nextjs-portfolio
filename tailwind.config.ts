import type { Config } from "tailwindcss";

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
      keyframes: {
        "fly-in-from-right": {
          "0%": {
            // transform: "translate(100vw, -100vh)",
            // animationTimingFunction: "cubic-bezier(0.02, 0.01, 0.21, 1)",
            offsetDistance: "0%",
          },
          "100%": {
            // transform: "translate(0px, 0px)",
            // animationTimingFunction: "cubic-bezier(0.02, 0.01, 0.21, 1)",
            offsetDistance: "75%",
          },
        },
        x: {
          "0%": {
            transform: "translate(100vw, -100vh)",
          },
          "100%": {
            transform: "translate(0px, 0px)",
          },
        },
      },
      animation: {
        "fly-in-from-right": "fly-in-from-right 1s infinite",
        foo: "x 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
