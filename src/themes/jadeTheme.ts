import { createTheme } from "@/config/stitches.config";
import { blue, jade, jadeA, jadeDark } from "@radix-ui/colors";

export default createTheme("jade", {
  colors: {
    primary: jade.jade10,
    primaryDark: jadeDark.jade8,
    primaryTransparence: jadeA.jadeA3,

    secondary: blue.blue10,
  },
});
