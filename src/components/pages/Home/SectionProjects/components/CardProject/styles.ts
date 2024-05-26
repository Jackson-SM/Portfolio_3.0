import { styled } from "@/config/stitches.config";
import { Text } from "@radix-ui/themes";
import Image from "next/image";

export const CardProjectContainer = styled("div", {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  gap: 10,

  padding: 10,
  borderRadius: 10,

  "@mediumx": {
    minWidth: "auto",
    width: "100%",
    height: "100%",
    flexDirection: "column",
  },
});

export const CardProjectImageCover = styled(Image, {
  width: "100%",
  height: "100%",
  borderRadius: 10,

  filter: "brightness(0.8)",

  transition: "filter ease 200ms",

  "&:hover": {
    filter: "brightness(1)",
  },
});

// Description

export const CardDescriptionProject = styled("div", {
  flex: 0.3,

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: 20,
  padding: 20,
});
export const TextDescription = styled(Text, {});
