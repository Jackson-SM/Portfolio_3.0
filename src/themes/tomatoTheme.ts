import { createTheme } from "@/config/stitches.config";
import { tomato, tomatoA, tomatoDark, yellow } from "@radix-ui/colors";

export default createTheme("tomato", {
  colors: {
    primary: tomato.tomato10,
    primaryDark: tomatoDark.tomato8,
    primaryTransparence: tomatoA.tomatoA3,

    secondary: yellow.yellow10,
  },
});
