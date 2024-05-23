import { styled } from "@/config/stitches.config";

export const StackV2Container = styled("div", {
  position: "relative",

  padding: "5px 15px",
  borderRadius: 10,

  height: "110px",

  maxWidth: 110,
  maxHeight: 110,

  width: "100%",

  background: "$card",

  transition: "background ease 0.2s",

  "&:hover": {
    background: "$cardHover",
  },
});
