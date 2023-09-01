import { styled, theme } from "@/config/stitches.config";
import { lighten } from "polished";

export const Logo = styled("span", {
  fontSize: "2rem",

  display: "flex",
  alignItems: "center",
  gap: 3,

  background: `linear-gradient(to right, $primary, ${lighten(
    0.2,
    `${theme.colors.secondary.value}`,
  )})`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",

  "& svg": {
    color: `${lighten(0.2, `${theme.colors.secondary.value}`)}`,
  },
});
