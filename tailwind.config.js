module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray: { 50: "#edf2f7", 100: "#d9d9d9", 700: "#525252" },
        black: { 900: "#000000", "900_b2": "#000000b2", "900_84": "#00000084" },
        gray: {
          50: "#fafafa",
          100: "#f7f7f7",
          300: "#dfdfdf",
          800: "#454343",
          900: "#1e1e1e",
          "100_01": "#f5f5f5",
        },
        blue: { A200: "#4584ff" },
        indigo: { 900: "#0c2991", A700: "#0f3cde" },
        white: { A700: "#ffffff" },
      },
      fontFamily: {
        roboto: "Roboto",
        poppins: "Poppins",
        schoolbell: "Schoolbell",
        inter: "Inter",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
