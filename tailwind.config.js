module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "royal-purple": "#6B46C1",
        "royal-purple-dark": "#4C1D95",
        "royal-purple-light": "#8B5CF6",
      },
      fontFamily: {
        sans: ["'Segoe UI'", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}
