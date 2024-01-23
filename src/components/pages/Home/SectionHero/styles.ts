import { styled } from "@/config/stitches.config";
import Image from "next/image";

export const SectionHero = styled("section", {
  height: "100vh",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  backgroundImage: `radial-gradient(circle at 0% 100%,$primaryTransparence 1%, $background 50%)`,

  padding: 20,
  paddingTop: "80px",

  "& > div > img": {
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
    width: "100%",
  },
});

export const ContainerAboutMe = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: 30,

  height: "100%",

  "& svg": {
    width: 100,
    height: 100,
  },

  "@large": {
    margin: 0,
    alignItems: "center",
  },
});

export const ImageIllustration = styled(Image, {
  width: 100,
  height: 100,
});
export const TitleHero = styled("h1", {
  fontSize: "4.5rem",

  "@largex": {
    fontSize: "3.5rem",
  },

  "@medium": {
    fontSize: "2.5rem",
  },
});
export const DescriptionHero = styled("p", {
  fontSize: "0.9rem",
  color: "$textDark",

  maxWidth: "60%",

  "@medium": {
    fontSize: "0.7rem",
    maxWidth: "100%",
  },
});
