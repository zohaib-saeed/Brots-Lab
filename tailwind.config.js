/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxs: '360px',
      xs: '390px',
      ssm: '480px',
      sm: '540px',
      md: '768px',
      mdl: '976px',
      lg: '1024',
      sxl: '1280px',
      mxl: '1366px',
      xl: '1440px',
      xxl: "1920px",
      vxl: '2560px'
    },
    colors: {
      white: "#fff",
      black: "#000000",
      darkViolet: "#8500EE",
      mercury: "#E6E6FA",
      softPeach: "#EEEDE4",
      ballBlue: "#079FF1",
      smokeyGrey: "#707070"
    },
    extend: {},
  },
  plugins: [],
}