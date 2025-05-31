// src/app/fonts.ts
import localFont from "next/font/local";

export const ebGaramond = localFont({
  src: [
    {
      path: "./fonts/eb-garamond/EBGaramond-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/eb-garamond/EBGaramond-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-eb-garamond",
  display: "swap",
});


export const comorantGaramond = localFont({
  src: [
    {
      path: "./fonts/cormorant-garamond/CormorantGaramond-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/cormorant-garamond/CormorantGaramond-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-cormorant-garamond",
  display: "swap",
});

