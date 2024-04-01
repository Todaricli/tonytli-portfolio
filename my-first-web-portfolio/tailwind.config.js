/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    screens: {
      'tablet': '740px',
      'laptop': '1124px',
      'desktop': '1280px',
    },
    plugins: [],
  }
}

