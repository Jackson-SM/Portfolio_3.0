import { styled } from "@/config/stitches.config";

export const StackV2Container = styled("div", {
  position: "relative",

  padding: "5px 15px",
  borderRadius: 10,

  background: "$backgroundGray",

  "& > img": {
    width: "100%",
    height: "100%",
  },

  "&:hover": {
    background: "$primaryTransparence",
    border: "1px solid $primary",
  },
});
