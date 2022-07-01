module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: { screens: {
    '2xl': { 'max': '1600px' },

    'xl': { 'max': '1280px' },

    'lg': { 'max': '1024px' },


    'md': { 'max': '760px' },

    'sm': { 'max': '640px' },

    'mm': { 'max': '460px' },
  },

    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        sora: ['Sora', 'serif']
      },
      colors: {
        primary: "#2d3e51",
        secondary: "#34485e",
        thirdy: "#eeeeee",
        quarty: "#3999cd",
        outro: "#5fafe2",
        letter: "#8d9ca9",
        bginput: "#1a2e44",
        bggray: "#E5E5E5",
        yellow: "#EEBE5C",
        blue:{
          10: "#99cbec",
          20: "#8dc4ec",
          30: "#7cbee8",
          40: "#6fb5e6",
          50: "#5fafe4"
        }
      }

    },
  },
  plugins: [require("daisyui")],
}