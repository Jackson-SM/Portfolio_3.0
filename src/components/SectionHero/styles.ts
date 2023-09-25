import { styled, theme } from "@/config/stitches.config";
import Image from "next/image";
import { transparentize } from "polished";

export const SectionHero = styled("section", {
  height: "100vh",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  backgroundImage: `radial-gradient(circle at 0% 100%,${transparentize(
    0.8,
    theme.colors.primary.value,
  )} 1%, $background 50%)`,

  padding: 20,
  paddingTop: "80px",

  "& > div > img": {
    marginRight: 30,

    "@large": {
      margin: 0,
    },
  },

  "@large": {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    "& > div > img": {
      display: "none",
    },
  },

  "@medium": {
    height: "100vh",
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

  "@large": {
    margin: 0,
  },
});

export const ImageIllustration = styled(Image, {
  width: 100,
  height: 100,
});
export const TitleHero = styled("h1", {
  fontSize: "3.5rem",

  "@medium": {
    fontSize: "2.5rem",
  },
});
export const DescriptionHero = styled("p", {
  fontSize: "0.9rem",
  color: "$textDark",

  maxWidth: "50%",

  "@medium": {
    fontSize: "0.7rem",
    maxWidth: "100%",
  },

  "& > span.primary": {},
  "& > span.secondary": {},
  "& > span.tertiary": {},
});
