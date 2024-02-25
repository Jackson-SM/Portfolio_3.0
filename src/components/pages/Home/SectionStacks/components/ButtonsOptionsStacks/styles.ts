import { styled } from "@/config/stitches.config";

export const ButtonsOptionsContainer = styled("div", {
  position: "relative",
  display: "flex",
  gap: "40px",

  zIndex: "1",

  "&::before": {
    content: "",

    position: "absolute",

    width: "25%",
    height: "2px",

    top: "-100%",
    left: 0,
    background: "$secondary",

    zIndex: "-1",

    transition: "all ease-in-out 130ms",
  },
});
