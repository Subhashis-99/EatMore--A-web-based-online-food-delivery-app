/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "filter-bar-yellow": "#ffcc00",
        "custom-orange": "#f97316", // Adding custom color for hover state
      },
      fontFamily: {
        custom: ["Dancing Script", "cursive"],
        'lobster': ['Lobster', 'cursive'],
        'playwrite': ['Playwrite DK Loopet', 'sans-serif'],
      },
      spacing: {
        '3': '12px', // If you want to adjust padding/margin, it's 3 * 4px
      },
      borderRadius: {
        'md': '6px', // To align with rounded-md
      },
    },
  },
  plugins: [],
};
