import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          indigo: '#1A237E',
          gold: '#FFD700',
          lightGray: '#F8F9FA'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-outfit)', 'sans-serif']
      },
      borderRadius: {
        '3xl': '24px'
      }
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/container-queries'), require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')],
};
export default config;