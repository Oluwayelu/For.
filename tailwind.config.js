module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      gilory: ["Gilory", "ui-sans-serif", "system-ui"],
      apparel: ["Apparel", "ui-sans-serif", "system-ui"],
      apparelDiplay: ["Apparel Display", "ui-sans-serif", "system-ui"],
      apparelDisplayIt: ["Apparel Display It", "ui-sans-serif", "system-ui"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#FFFFFF",
      primary: {
        100: "#F7E7CE",
        200: "#E2DAC5",
        300: "#E2D2B7",
        400: "#745C26",
        500: "#BE6C42",
        600: "#713C25",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
