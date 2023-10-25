/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // 'カラー名': 'カラーコード'
        "enso-purple": "#A26B93",
        "enso-green": "#68A1A2",
        "enso-gray": "#9BA3A6",
      },
      fontFamily: {
        kosugi: ["Kosugi Maru", "system-ui", "sans-serif"],
        nosifer: ["Nosifer"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
