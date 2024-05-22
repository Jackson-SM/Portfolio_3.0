import { styled } from "@/config/stitches.config";

export const ImageProjectContainer = styled("div", {
  position: "relative",
  flex: 0.8,
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  overflow: "hidden",
  padding: 5,

  border: "1px solid $backgroundGray",

  transition: "border,filter ease 0.2s",

  filter: "brightness(0.8)",

  "&:hover": {
    border: "1px solid $primary",
    filter: "brightness(1)",
  },

  "& > img": {
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  },
});
