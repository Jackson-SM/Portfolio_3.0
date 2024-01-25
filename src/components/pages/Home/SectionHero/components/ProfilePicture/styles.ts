import { styled } from "@/config/stitches.config";
import { Box } from "@radix-ui/themes";

export const ProfilePictureBox = styled(Box, {
  width: "500px",
  minWidth: "30%",

  position: "relative",
  borderRadius: "50%",
  boxShadow: "0 0 10px 0 $colors$primaryDark",

  backgroundImage: `radial-gradient(circle at 0% 10%,$primaryTransparence 1%, $background 80%)`,

  "@large": {
    width: "50%",
  },
});
