import { styled } from "@/config/stitches.config";

export const Logo = styled("span", {
  fontSize: "2rem",

  display: "flex",
  alignItems: "center",
  gap: 3,

  background: `linear-gradient(to right, $primary, $secondary)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",

  "& svg": {
    color: `$primaryDark`,
  },
});
