import { styled } from "@/config/stitches.config";

export const CardProject = styled("li", {
  display: "flex",
  justifyContent: "center",

  gap: 10,

  position: "relative",

  padding: "15px",

  "@largex": {
    flexDirection: "column",
  },

  "@medium": {
    height: "auto",
  },
});
