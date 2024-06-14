/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}",
    "./node_modules/tw-elements/js/**/*.js"

    ],
    theme: {
      extend: {},
    },
    plugins: [require('@tailwindcss/forms')({
      strategy: 'base', // only generate global styles
      strategy: 'class', // only generate classes
    })],
    darkmode:"class"
  }
 