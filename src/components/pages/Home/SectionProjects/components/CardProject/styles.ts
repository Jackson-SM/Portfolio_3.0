import { styled } from "@/config/stitches.config";

export const CardProjectContainer = styled("div", {
  position: "relative",

  minWidth: "500px",

  "@medium": {
    minWidth: "auto",
    width: "100%",
    height: "100%",
  },
});
