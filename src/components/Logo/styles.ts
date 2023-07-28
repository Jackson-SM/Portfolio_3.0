import { styled } from "@/config/stitches.config";

export const Logo = styled("span", {
  fontSize: "2rem",

  display: "flex",
  alignItems: "center",

  background: "linear-gradient(to right, $primary, $secondary)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",

  "& svg": {
    color: "$secondaryLight",
  },
});
