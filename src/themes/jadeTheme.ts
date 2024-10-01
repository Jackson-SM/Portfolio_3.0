import { createTheme } from "@/config/stitches.config";
import { blue, jadeA, jadeDark } from "@radix-ui/colors";

export default createTheme("jade", {
  colors: {
    primary: "hsl(161.4 93.5% 30.4%)",
    primaryDark: jadeDark.jade8,
    primaryTransparence: jadeA.jadeA3,

    secondary: blue.blue10,
  },
});
