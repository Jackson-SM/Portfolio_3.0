import { createTheme } from "@/config/stitches.config";
import { blue, blueA, blueDark, jade } from "@radix-ui/colors";

export default createTheme("blue", {
  colors: {
    primary: blue.blue10,
    primaryDark: blueDark.blue8,
    primaryTransparence: blueA.blueA2,

    secondary: jade.jade10,
  },
});
