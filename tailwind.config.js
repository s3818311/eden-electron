module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "rmit-red": "#E60028",
        "rmit-red-bold": "#f0002a",
        "rmit-blue": "#000054",
      },
      textColor: {
        "rmit-blue": "#000054",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["active"],
    },
  },
  plugins: [],
};
