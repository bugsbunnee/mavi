import type { Config } from "tailwindcss";


export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'base': ['1rem', '1.5rem'],
        'xl': ['1.25rem', '1.5rem'],
        '6xl': ['3.5rem', '4rem'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gold: "var(--gold)",
        plant: "var(--plant)",
        violet: "var(--violet)",
      },
      backgroundImage: {
        'hero-pattern': "url('/images/pattern.png')",
      }
    },
  },
  plugins: [],
} satisfies Config;
