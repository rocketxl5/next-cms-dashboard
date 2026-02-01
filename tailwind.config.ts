import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],

  darkMode: 'class', // control dark mode via class
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;

export default config;
