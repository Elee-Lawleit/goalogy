module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "submit": "#00AD5A",
        "edit-add": "#4058EC",
        "delete": "#E43B5B",
        "view": "#66CFD2",
        "text": "#454746",
        "background": "#D6F3F3",
        "custom": {
          purple1: "#B37DB5",
          purple2: "#C9A6CE",
          cyan1: "#66CFD2",
          lightpurple: "#A9E0E1",
          orange1: "#EB9423",
          orange2: "#F7B850",
          green1: "#86B341",
          green2: "#B6CE67",
          gray: "#D9D9D9",
        },
      },
      screens: {
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
