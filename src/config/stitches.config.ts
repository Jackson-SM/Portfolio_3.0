import { createStitches } from "@stitches/react";

export const { styled, globalCss, keyframes, theme, createTheme, getCssText } =
  createStitches({
    theme: {
      colors: {
        primary: "hsla(153, 100%, 50%, 1)",
        primaryLight: "hsla(153, 100%, 67%, 1)",

        secondary: "hsla(192, 100%, 57%, 1)",
        secondaryLight: "hsla(192, 100%, 73%, 1)",

        tertiary: "hsla(281, 100%, 56%, 1)",
        tertiaryLight: "hsla(281, 100%, 74%, 1)",

        background: "hsl(0, 0%, 5%)",
        backgroundLight: "hsl(0, 0%, 10%)",
        backgroundLight2: "hsl(0, 0%, 20%)",

        backgroundTransparence: "hsl(0, 0%, 15%, 0.9)",
        backgroundTransparence2: "hsl(0, 0%, 15%, 0.5)",
        backgroundTransparence3: "hsl(0, 0%, 15%, 0.3)",

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
      large: "(max-width: 900px)",
      medium: "(max-width: 750px)",
      small: "(max-width: 400px)",
    },
  });
