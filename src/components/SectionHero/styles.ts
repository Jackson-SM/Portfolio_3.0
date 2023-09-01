import { styled, theme } from "@/config/stitches.config";
import Image from "next/image";
import { transparentize } from "polished";

export const SectionHero = styled("section", {
  height: "100vh",
  display: "flex",
  justifyContent: "start",

  backgroundImage: `radial-gradient(circle at 0% 100%,${transparentize(
    0.8,
    theme.colors.primary.value,
  )} 1%, $background 50%)`,

  padding: 20,
  paddingTop: "80px",

  "@large": {
    flexDirection: "column",
    alignItems: "center",
  },
});

export const ContainerAboutMe = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: 30,

  marginLeft: 100,

  height: "100%",

  "& svg": {
    width: 100,
    height: 100,
  },
});

export const ImageIllustration = styled(Image, {
  width: 100,
  height: 100,
});
export const TitleHero = styled("h1", {
  fontSize: "3.5rem",
});
export const DescriptionHero = styled("p", {
  fontSize: "0.9rem",
  color: "$textDark",

  maxWidth: "50%",

  "& > span.primary": {},
  "& > span.secondary": {},
  "& > span.tertiary": {},
});
