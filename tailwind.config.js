/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // Include all relevant file types
  theme: {
    extend: {
      colors: {
        "filter-bar-yellow": "#ffcc00",
        "custom-orange": "#f97316", // Custom color for hover state
      },
      fontFamily: {
        custom: ["Dancing Script", "cursive"],
        lobster: ['Lobster', 'cursive'],
        playwrite: ['Playwrite DK Loopet', 'sans-serif'],
      },
      spacing: {
        '3': '12px', // For padding/margin, it's 3 * 4px
      },
      borderRadius: {
        'md': '6px', // Align with rounded-md
      },
      screens: {
        'iphone-se': '375px', // Custom breakpoint for iPhone SE
      },
    },
  },
  plugins: [],
};
