import { createTheme } from "@/config/stitches.config";
import { blueA, blueDark, jade } from "@radix-ui/colors";

export default createTheme("blue", {
  colors: {
    primary: "hsl(224.3 76.3% 48%)",
    primaryDark: blueDark.blue8,
    primaryTransparence: blueA.blueA2,

    secondary: jade.jade10,
  },
});
