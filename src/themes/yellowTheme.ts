import { createTheme } from "@/config/stitches.config";
import { tomato, yellowA, yellowDark } from "@radix-ui/colors";

export default createTheme("yellow", {
  colors: {
    primary: "hsl(40.6 96.1% 40.4%)",
    primaryDark: yellowDark.yellow8,
    primaryTransparence: yellowA.yellowA2,

    secondary: tomato.tomato10,
  },
});
