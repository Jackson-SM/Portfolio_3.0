import { styled } from "@/config/stitches.config";

export const Container = styled("div", {
  display: "flex",

  position: "absolute",

  width: "100%",
  height: "100%",
  zIndex: 1,

  boxShadow: "0 0 40px 0 $colors$primaryDark",

  borderRadius: "50%",
});

export const ImageIcon = styled("img", {
  position: "absolute",

  height: "10%",
  width: "10%",
  padding: 5,

  borderRadius: "50%",

  background: "$background",

  boxShadow: "0 0 20px 0 $colors$primaryDark",

  // filter: "drop-shadow(0 0 10px $colors$primaryDark)",
});
