import { styled } from "@/config/stitches.config";

export const SectionHero = styled("section", {
  height: "100vh",
  display: "flex",
  alignItems: "center",
  position: "relative",
  zIndex: 1,

  overflow: "hidden",

  //background: `radial-gradient(circle at 0% 100%,$primaryTransparence 0%, $background 50%)`,

  padding: 20,
  paddingTop: "80px",

  "@large": {
    flexDirection: "column-reverse",
    alignItems: "center",
    justifyContent: "center",
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

  "@large": {
    margin: 0,
    alignItems: "center",
  },
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
