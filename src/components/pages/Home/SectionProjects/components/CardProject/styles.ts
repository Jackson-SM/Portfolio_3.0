import { styled } from "@/config/stitches.config";

export const CardProject = styled("li", {
  display: "flex",
  gap: 10,

  height: "500px",

  position: "relative",

  padding: "15px",

  "@medium": {
    height: "auto",
  },
});
