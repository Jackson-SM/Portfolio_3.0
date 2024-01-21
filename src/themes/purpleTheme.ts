import { createTheme } from "@/config/stitches.config";
import { indigo, purple, purpleA, purpleDark } from "@radix-ui/colors";

export default createTheme("purple", {
  colors: {
    primary: purple.purple10,
    primaryDark: purpleDark.purple8,
    primaryTransparence: purpleA.purpleA3,

    secondary: indigo.indigo9,
  },
});
