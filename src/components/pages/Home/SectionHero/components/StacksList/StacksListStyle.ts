import { keyframes, styled } from "@/config/stitches.config";

const stacksAnimations = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

export const Container = styled("div", {
  position: "absolute",

  width: "100%",
  height: "100%",
  zIndex: 1,

  boxShadow: "0 0 40px 0 $colors$primaryDark",

  borderRadius: "50%",
  animation: `${stacksAnimations} 20s linear infinite`,
});

export const ImageIcon = styled("img", {
  position: "absolute",

  height: "10%",
  width: "10%",
  padding: 5,

  borderRadius: "50%",

  background: "$background",

  //boxShadow: "0 0 20px 0 $colors$primaryDark",

  filter: "drop-shadow(0 0 10px $colors$primaryDark) grayscale(80%) blur(2px)",
  opacity: 0.5,

  // filter: "drop-shadow(0 0 10px $colors$primaryDark)",
});
