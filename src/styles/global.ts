import { globalCss } from "@/config/stitches.config";
import { Poppins } from "next/font/google";

export const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: poppins.style.fontFamily,
  },
  body: {
    color: "$text",
    background: `radial-gradient(circle at 0% 40%,$primaryTransparence 0%, $background 50%)`,
  },
  main: {
    //background: "$background",
    position: "relative",
  },
});
