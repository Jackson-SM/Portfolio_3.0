import { styled } from "@/config/stitches.config";

export const ImageProjectContainer = styled("div", {
  position: "relative",
  width: "100%",
  flex: 0.8,
  height: "100%",
  borderRadius: "10px",
  overflow: "hidden",
  margin: "10px",

  border: "1px solid $backgroundGray",

  transition: "border ease 0.2s",

  "&:hover": {
    border: "1px solid $primary",
  },

  "& > img": {
    width: "100%",
    height: "100%",
    padding: 10,
  },
});
