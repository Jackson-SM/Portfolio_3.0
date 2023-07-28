import { styled } from "@/config/stitches.config";

export const Navbar = styled("nav", {
  height: "80px",

  background: "$backgroundTransparence2",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  fontWeight: "bold",

  padding: "5px",

  position: "fixed",
  backdropFilter: "blur(5px)",
  width: "100%",
  borderBottom: "1px solid $backgroundLight2",
});
