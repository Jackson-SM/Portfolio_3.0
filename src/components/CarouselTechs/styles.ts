import { styled } from "@/config/stitches.config";

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

  background: "$backgroundTransparence2",
  boxShadow: "0px 0px 60px 10px rgba(255, 255, 255, 0.1)",

  backdropFilter: "blur(5px)",

  transition: "all 0.3s ease-in-out",
  padding: 5,
});
