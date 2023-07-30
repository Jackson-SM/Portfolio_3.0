import { keyframes, styled } from "@/config/stitches.config";

const toGetUp = keyframes({
  "0%": { translate: "0 0" },
  "50%": { translate: "0 -5%" },
  "100%": { translate: "0 5%" },
});
const toGetDown = keyframes({
  "0%": { translate: "0 0" },
  "50%": { translate: "0 -5%" },
  "100%": { translate: "0 5%" },
});
const toGetRandom = keyframes({
  "0%": { translate: "0 0" },
  "50%": { translate: "0 -5%" },
  "100%": { translate: "0 5%" },
});

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
  },

  defaultVariants: {
    direction: "up",
  },

  variants: {
    direction: {
      up: {
        animation: `${toGetUp} 4s ease-in-out infinite alternate`,
      },
      down: {
        animation: `${toGetDown} 4s ease-in-out infinite alternate`,
      },
      random: {
        animation: `${toGetRandom} 4s ease-in-out infinite alternate`,
      },
    },
  },
});

export const CarouselTechs = styled("div", {
  display: "flex",
  overflow: "hidden",
  position: "relative",
  zIndex: 1,

  borderRadius: "5px",
  background: "$backgroundTransparence2",
  border: "1px solid $backgroundLight2",

  backdropFilter: "blur(5px)",

  transition: "all 0.3s ease-in-out",

  "&:hover": {
    border: "1px solid $primaryLight",
  },
  padding: 10,
});
