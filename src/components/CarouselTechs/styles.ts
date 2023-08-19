import { styled, theme } from "@/config/stitches.config";
import { lighten, transparentize } from "polished";

export const CarouselItems = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  overflow: "hidden",

  height: "100%",
  width: "100%",

  defaultVariants: {
    direction: "up",
  },
});

export const CarouselTechs = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  overflow: "hidden",
  position: "relative",
  zIndex: 1,

  width: "100%",
  height: "100%",

  background: `${transparentize(0.5, `${theme.colors.background.value}`)}`,
  boxShadow: `0px 0px 60px 10px ${lighten(
    0.2,
    `${theme.colors.background.value}`,
  )}`,

  backdropFilter: "blur(5px)",

  transition: "all 0.3s ease-in-out",
  padding: 5,
});
