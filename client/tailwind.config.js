/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%": { transform: "rotate(-1deg)" },
          "20%": { transform: "rotate(1deg)" },
          "30%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/images/bg_pattern.svg')",
      },
    },
  },
};
