import { styled } from "@/config/stitches.config";
import { Box } from "@radix-ui/themes";

export const ProfilePictureBox = styled(Box, {
  width: "500",
  minWidth: "30%",

  position: "relative",
  borderRadius: "50%",

  //boxShadow: "0 0 40px 0 $colors$primaryDark",

  marginRight: "20px",

  backgroundImage: `radial-gradient(transparent 40%, $primary)`,

  "@large": {
    width: "50%",
  },
});
