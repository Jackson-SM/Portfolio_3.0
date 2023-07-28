import { styled } from "@/config/stitches.config";

export const SectionHero = styled("section", {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  background:
    "radial-gradient(circle at 0% 50%,rgba(0, 255, 134, 0.25) 0%, $background 20%)",
  backgroundPosition: "left top, right bottom",

  padding: 20,

  "& svg": {
    width: 100,
    height: 100,
  },
});

export const TitleHero = styled("h1", {
  fontSize: "2.5rem",
});
export const DescriptionHero = styled("p", {
  fontSize: "1rem",
});
