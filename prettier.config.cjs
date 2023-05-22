/** @type {import('prettier').Config} */
const config = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  singleQuote: true,
  jsxSingleQuote: false,
  trailingComma: 'none'
};

module.exports = config;
