/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        indigo: '#f7b71e'
      },
      // backgroundImage: {
      //   'hero-pattern': "url()"
      // }
    },
  },
  plugins: [],
};
