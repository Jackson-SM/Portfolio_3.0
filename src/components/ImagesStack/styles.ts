import { styled } from "@/config/stitches.config";
import Image from "next/image";

export const ImageStackContainer = styled("div", {
  width: "100%",
  height: "100%",
});

export const ImageStack = styled(Image, {
  width: "auto",
  height: "100%",

  filter: "grayscale(100%)",

  transition: "filter ease 230ms, transform ease 230ms",

  cursor: "pointer",

  padding: "15px",

  "@large": {
    height: "100%",
  },

  "@largex": {
    padding: "5px",
  },

  "&:hover": {
    filter: "grayscale(0%)",
    transform: "scale(1.05)",
  },
});
