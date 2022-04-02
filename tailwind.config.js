module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        unsaturatedCyan: "hsl(180, 29%, 50%)",
        cyanBackground: "hsl(180, 52%, 96%)",
        cyanTablets: "hsl(180, 31%, 95%)",
        darkGrayishCyan: "hsl(180, 8%, 52%)",
        veryDarkGrayishCyan: "hsl(180, 8%, 52%)",
      },
      fontFamily: {
        spartan: "'Spartan', sans-serif"
      },
      backgroundImage: {
        mobile: "url(./images/bg-header-mobile.svg)",
        desktop: "url(./images/bg-header-desktop.svg)"
      }
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xl: "1160px",
        lg: "1160px",
        "2xl": "1160px"
      }
    }
  },
  plugins: [],
}