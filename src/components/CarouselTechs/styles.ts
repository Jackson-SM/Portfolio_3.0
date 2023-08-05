import { styled } from "@/config/stitches.config";

export const CarouselItems = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  overflowX: "hidden",

  gap: "30px",

  "& img": {
    width: "45px",
    height: "45px",

    filter: "grayscale(100%)",

    transition: "filter,transform ease 230ms",

    cursor: "pointer",

    margin: 5,

    "&:hover": {
      filter: "grayscale(0%)",
      transform: "scale(1.05)",
    },
  },

  defaultVariants: {
    direction: "up",
  },
});

export const CarouselTechs = styled("div", {
  display: "flex",
  overflow: "hidden",
  position: "relative",
  zIndex: 1,

  background: "$backgroundTransparence2",
  boxShadow: "0px 0px 60px 10px rgba(255, 255, 255, 0.1)",

  border: "2px transparent",
  borderRadius: "5px",
  backgroundImage:
    "linear-gradient($backgroundLight, $backgroundLight), radial-gradient(circle at top left, $primary, $tertiary)",
  backgroundOrigin: "border-box",
  backgroundClip: "content-box, border-box",

  backdropFilter: "blur(5px)",

  transition: "all 0.3s ease-in-out",
  padding: 2,
  margin: 5,
});
