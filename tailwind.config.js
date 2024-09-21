/** @type {import('tailwindcss').Config} */
module.exports = {
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
      keyframes: {
        wave: {
          '0%': { transform: 'translateY(50px) rotate(5deg)', opacity: 0 },
          '50%': { transform: 'translateY(-20px) rotate(-3deg)', opacity: 0.5 },
          '100%': { transform: 'translateY(0) rotate(0)', opacity: 1 },
        },
      },
      animation: {
        wave: 'wave 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
};
