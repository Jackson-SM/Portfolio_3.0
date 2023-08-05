import { styled } from "@/config/stitches.config";
import Image from "next/image";

export const SectionHero = styled("section", {
  height: "100vh",
  display: "flex",
  justifyContent: "space-around",

  backgroundImage:
    "radial-gradient(circle at 0% 100%,rgba(0, 255, 164, 0.15) 1%, $background 50%)",

  padding: 20,
  paddingTop: "80px",
});

export const ContainerAboutMe = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: 10,

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
  fontSize: "2.5rem",
});
export const DescriptionHero = styled("p", {
  fontSize: "1rem",
  color: "$textDark",
});

export const ContainerSkills = styled("div", {
  display: "flex",
  gap: 30,
  position: "relative",
  zIndex: 1,

  padding: 10,

  "&::before": {
    content: "",

    position: "absolute",

    height: "30%",
    width: "100%",

    //background: "linear-gradient(to bottom, $background, $backgroundLight)",

    top: 0,

    //zIndex: 2,

    //overflow: "hidden",
  },
  "&::after": {
    content: "",

    position: "absolute",

    height: "30%",
    width: "100%",

    bottom: 0,

    //background: "linear-gradient(to top, $background, $backgroundLight)",

    //zIndex: 1,

    //overflow: "hidden",
  },
});
