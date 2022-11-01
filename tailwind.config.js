/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",

  content: [
    "./assets/**/*.css",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    // "./pages/*.vue",
    // "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./*.{vue,js,ts}",
    "./nuxt.config.{js,ts}",
  ],

  theme: {
    extend: {},
  },

  variants: {
    extend: {},
  },

  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui")
  ],

  daisyui: {
    styled: true,
    themes: ["light", "dark", "coffee"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
