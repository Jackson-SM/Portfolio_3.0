import { createStitches } from "@stitches/react";

export const { styled, globalCss, keyframes, theme, createTheme, getCssText } =
  createStitches({
    theme: {
      colors: {
        primary: "#b03eed",

        secondary: "#0356fc",

        tertiary: "#ffb121",

        background: "#0d0d0d",

        text: "hsl(0, 0%, 95%)",
        textDark: "hsl(0, 0%, 70%)",
        textDark2: "hsl(0, 0%, 60%)",
      },
      fontSizes: {
        1: "12px",
        2: "13px",
        3: "16px",
        4: "26px",
        5: "35px",
        6: "70px",
      },
      transitions: {
        transitionsLow: "all ease 130ms",
        transitionsMedium: "all ease 300ms",
        transitionsHard: "all ease 600ms",
      },
    },
    utils: {
      linearGradient: (value: string) => ({
        backgroundImage: `linear-gradient(${value})`,
      }),
    },
    media: {
      large: "(max-width: 1200px)",
      largex: "(max-width: 1366px)",
      largexx: "(max-width: 1600px)",
      largexxx: "(max-width: 1920px)",
      medium: "(max-width: 750px)",
      small: "(max-width: 400px)",
    },
  });
