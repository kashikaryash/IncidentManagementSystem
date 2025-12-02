// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
    // CRITICAL: Ensure this path correctly covers ALL your React files
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }