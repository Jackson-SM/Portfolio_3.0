import { createTheme } from "@/config/stitches.config";
import { tomatoA, tomatoDark, yellow } from "@radix-ui/colors";

export default createTheme("tomato", {
  colors: {
    primary: "hsl(0 72.2% 50.6%)",
    primaryDark: tomatoDark.tomato8,
    primaryTransparence: tomatoA.tomatoA3,

    secondary: yellow.yellow10,
  },
});
