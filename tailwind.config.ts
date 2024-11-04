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
        'red' : "#B50003",
        'gray' : "#2F2F2E",
        'dark-gray' : "#1E1E1E",
        'f-light-gray' : "#D9D9D9",
        'f-dark-gray' : "#C0C0C0",
        'beige' : "#FEFCF4",
      },
      fontFamily: {
        'dmSans': ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        '7xl': '64px',
        '6xl': '48px',
        '5xl': '40px',
        '4xl': '32px',
        '3xl': '24px',
        '2xl': '20px',
        xl: '16px',
        lg: '15px',
        sm: '14px',
        xs: '13px'
      },
    },
  },
  plugins: [],
};
export default config;
