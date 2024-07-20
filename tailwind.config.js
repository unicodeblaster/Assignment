/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray1: {
          100: "#2c2c2c",
          200: "#232323",
          300: "#1f1f1f",
        },
        seagreen: {
          100: "#3f9143",
          200: "#357937",
          300: "#347136",
          400: "rgba(53, 121, 55, 0.16)",
          500: "rgba(53, 121, 55, 0.6)",
        },
        mintcream: "rgba(246, 255, 246, 0.59)",
        darkolivegreen: "rgba(73, 110, 75, 0.2)",
        gray11: {
          100: "#242424",
          200: "rgba(27, 40, 27, 0.59)",
        },
        gainsboro: {
          100: "#e6e6e6",
          200: "#e1e1e1",
          300: "#d8d8d8",
        },
        whitesmoke: {
          100: "#f5f5f5",
          200: "#ebebeb",
        },
        darkslategray: "#2f3630",
        lightgray: "#cfcfcf",
        "m3-white": "#fff",
        lightgreen: {
          100: "#a0eda3",
          200: "#98e19b",
          300: "rgba(151, 246, 155, 0.71)",
        },
        "gray-2": "#bdbdbd",
        gray: "#4f4f4f",
        "schemes-surface-variant": "#e2e2e2",
        darkgray: "#a3a8a3",
        "m3-sys-light-secondary-container": "#e8def8",
        silver: "#c0c0c0",
        "schemes-outline-variant": "#c6c6c6",
        darkseagreen: "#76b878",
      },
      spacing: {},
      fontFamily: {
        outfit: "Outfit",
        inter: "Inter",
        sen: "Sen",
        roboto: "Roboto",
      },
      borderRadius: {
        "81xl": "100px",
        "2928xl-1": "2947.1px",
        "9xs": "4px",
        "mini-8": "14.8px",
        "34xl": "53px",
      },
    },
    fontSize: {
      mini: "15px",
      smi: "13px",
      "5xs": "8px",
      "2xl-3": "21.3px",
      mid: "17px",
      "sm-3": "13.3px",
      "5xl": "24px",
      "5xs-4": "7.4px",
      "4xs-5": "8.5px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
