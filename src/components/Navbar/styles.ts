import { styled } from "@/config/stitches.config";

export const Navbar = styled("header", {
  height: "80px",

  background: "$backgroundGray",

  /*   background: `${transparentize(
    0.8,
    lighten(0.2, `${theme.colors.background.value}`),
  )}`, */

  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",

  fontWeight: "bold",

  padding: "5px",

  position: "fixed",
  backdropFilter: "blur(5px)",
  width: "100%",
});

export const Links = styled("nav", {
  display: "flex",
  gap: "10px",
});
