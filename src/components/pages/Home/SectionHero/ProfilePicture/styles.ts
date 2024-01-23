import { styled } from "@/config/stitches.config";
import { Box } from "@radix-ui/themes";

export const ProfilePictureBox = styled(Box, {
  width: "500px",
  minWidth: "30%",

  "@large": {
    width: "50%",
  },
});
