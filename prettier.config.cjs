/** @type {import("prettier").Config} */
const config = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  plugins: ["prettier-plugin-tailwindcss"],
  pluginSearchDirs: false,
};

module.exports = config;
