import { createTheme } from "@/config/stitches.config";
import { tomato, yellow, yellowA, yellowDark } from "@radix-ui/colors";

export default createTheme("yellow", {
  colors: {
    primary: yellow.yellow10,
    primaryDark: yellowDark.yellow8,
    primaryTransparence: yellowA.yellowA2,

    secondary: tomato.tomato10,
  },
});
