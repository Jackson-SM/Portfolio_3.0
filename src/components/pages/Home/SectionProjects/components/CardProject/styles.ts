import { styled } from "@/config/stitches.config";

export const CardProjectContainer = styled("div", {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  gap: 10,

  padding: 10,
  borderRadius: 10,

  maxWidth: 400,
});

export const CardProjectDescription = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 10,
});
