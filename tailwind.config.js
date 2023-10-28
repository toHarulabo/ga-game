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
        "micky-hada": "#FEDCBD",
        "micky-red": "#FF0000",
        "dora-blue": "#01A0E9",
        "dora-yellow": "#FFCB00",
        "mario-brown": "#745030",
        "kirby-pink": "#FCB9B8",
        "kirby-foot": "#FF58B4",
        "ampan-hada": "#DE9C63",
        "ampan-hoppe": "#F08300",
        "pom-yellow": "#FFF100",
        "pom-hoppe": "#EA9198",
        "hari-hada": "#F1976F",
        "hari-brown": "#83562F",
        "kabocha-green": "#3BAF75",
        "kabocha-orange": "#FFA500",
        "pen-mizu": "#9DCCFF",
        "pen-blue": "#1E90FF",
        "suika-kimi": "#B5FF14",
        "hitachi-orange": "#FF6E00",
        "hitachi-pink": "#F597A5",
        "hitachi-blue": "#1FAEE0",
        "hitachi-mizu": "#94CDED",
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
