import { globalCss } from "@/config/stitches.config";
import { Poppins } from "next/font/google";

export const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  body: {
    color: "$text",
    background: "$background",
  },
  main: {
    //background: "$background",
    background: `radial-gradient(circle at 0% 40%,$primaryTransparence 0%, $background 50%)`,
  },
});
