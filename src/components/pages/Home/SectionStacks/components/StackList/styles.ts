import { styled } from "@/config/stitches.config";
import { Box } from "@radix-ui/themes";

export const StackList = styled(Box, {
  width: "100%",
  maxWidth: "60%",

  "@medium": {
    maxWidth: "100%",
  },
});
