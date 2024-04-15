/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#888",
          "200": "#657b65",
          "300": "#212135",
          "400": "rgba(255, 255, 255, 0.5)",
          "500": "rgba(0, 0, 0, 0)",
        },
        darkgray: "#aaa",
        darkslategray: {
          "100": "#44454f",
          "200": "#333",
          "300": "#1b3228",
          "400": "#1a2a1e",
          "500": "rgba(27, 50, 40, 0.29)",
        },
        ghostwhite: "#f9faff",
        lavender: {
          "100": "#ebecfb",
          "200": "#dfdeff",
          "300": "#dddcff",
        },
        lightsteelblue: "#c3c3ef",
        dimgray: {
          "100": "#756c6a",
          "200": "#6b6e73",
          "300": "#4d4e54",
        },
        darkgreen: "rgba(2, 67, 0, 0.53)",
        gainsboro: "#dbdbdb",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        "playfair-display": "'Playfair Display'",
        roboto: "Roboto",
        inter: "Inter",
        lato: "Lato",
      },
      borderRadius: {
        "5xs-5": "7.5px",
        "31xl": "50px",
        "8xs": "5px",
        "18xl-5": "37.5px",
      },
    },
    fontSize: {
      xs: "12px",
      base: "16px",
      mini: "15px",
      xl: "20px",
      sm: "14px",
      "11xl": "30px",
      "5xl": "24px",
      lg: "18px",
      "21xl": "40px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      "38xl": "57px",
      "27xl": "46px",
      "15xl": "34px",
      "3xl": "22px",
      inherit: "inherit",
    },
    screens: {
      mq1500: {
        raw: "screen and (max-width: 1500px)",
      },
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1325: {
        raw: "screen and (max-width: 1325px)",
      },
      lg: {
        max: "1200px",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
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
