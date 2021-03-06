module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "rmit-red": "#E60028",
        "rmit-blue": "#000054",
        "rmit-red-bold": "#f0002a",
        "nav-hover": "#383895",
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
