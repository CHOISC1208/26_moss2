// postcss.config.cjs
module.exports = {
  plugins: [
    require('@tailwindcss/postcss')(), // ✅ v4 正式対応
    require('autoprefixer'),
  ],
};
