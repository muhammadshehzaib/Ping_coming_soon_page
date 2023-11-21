/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  darkMode: "class",
  theme: {
    borderColor: (theme) => ({
      ...theme("colors"),
      DEFAULT: theme("colors.gray.300", "currentColor"),
      primary: "#3490dc",
      secondary: "#ffed4a",
      danger: "#e3342f",
      input: "hsl(223, 100%, 88%);",
    }),
    placeholderColor: (theme) => theme("colors"),
    placeholderColor: {
      primary: "#3490dc",
      secondary: "#ffed4a",
      danger: "#e3342f",
      input: "hsl(223, 100%, 88%);",
    },
    extend: {
      colors: {
        input: "hsl(223, 100%, 88%);",
        grey: "hsl(0, 0%, 59%);",
      },
    },
  },
  plugins: [],
};
