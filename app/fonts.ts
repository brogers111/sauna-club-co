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
  // "block" (not "swap"): this font backs FitText's width-fitting math, which
  // measures character widths — swapping from a mismatched fallback font would
  // recompute (and visibly resize) the headline once the real font loads.
  // Safe to block briefly since it's small (~20KB) and same-origin.
  display: "block",
});
