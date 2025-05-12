/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      colors: {
        primary: '#E54750',
        secondary: '#2E2E2E',
        navbg: '#f3f3f3',
        secondaryred:'#DE1924',
      },
      fontFamily: {
        rubik: "Rubik",
        teko: "Teko",
      },
    
    },
  },
  plugins: [],
}
