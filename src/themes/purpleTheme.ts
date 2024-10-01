import { createTheme } from "@/config/stitches.config";
import { indigo, purpleA, purpleDark } from "@radix-ui/colors";

export default createTheme("purple", {
  colors: {
    primary: "hsl(263.4 70% 50.4%)",
    primaryDark: purpleDark.purple8,
    primaryTransparence: purpleA.purpleA3,

    secondary: indigo.indigo9,
  },
});
