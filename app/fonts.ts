import localFont from "next/font/local";

export const fredoka = localFont({
  src: [
    { path: "./fonts/Fredoka-Light.woff2", weight: "300", style: "normal" },
    { path: "./fonts/Fredoka-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Fredoka-Medium.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-fredoka",
  display: "swap",
});

export const dushick = localFont({
  src: "./fonts/dushick-regular.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-dushick",
  display: "swap",
});
