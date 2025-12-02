// postcss.config.js

export default {
    plugins: {
      // 1. Tailwind is executed first
      tailwindcss: {},
      // 2. Autoprefixer is executed second to add vendor prefixes
      autoprefixer: {},
    },
  }