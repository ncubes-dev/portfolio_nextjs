/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lightBlue: "rgb(8, 255, 81)",
        veryLightBlue: "rgb(20, 168, 153)",
        mediumBlue: "rgb(31, 83, 3)",
        darkBlue: "  rgb(11, 32, 1)"
      }
      // colors: {
      //   lightBlue: "rgb(110, 101, 238)",
      //   veryLightBlue: "hsl(215, 76%, 88%)",
      //   mediumBlue: "hsl(244, 40%, 24%)",
      //   darkBlue: "  rgb(16, 15, 35)"
      // }
    },
  },
  plugins: [],
};
