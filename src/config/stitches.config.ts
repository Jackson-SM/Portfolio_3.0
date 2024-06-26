import {
  grayA,
  grayDark,
  grayDarkA,
  purple,
  ruby,
  rubyA,
  rubyDark,
  whiteA,
  whiteP3A,
} from "@radix-ui/colors";
import { createStitches } from "@stitches/react";

export const { styled, globalCss, keyframes, theme, createTheme, getCssText } =
  createStitches({
    theme: {
      colors: {
        primary: ruby.ruby10,
        primaryTransparence: rubyA.rubyA4,
        primaryDark: rubyDark.ruby8,

        secondary: purple.purple10,

        tertiary: "#ffb121",

        background: grayDark.gray2,
        backgroundGray: grayDarkA.grayA2,
        backgroundTransparence: grayA.grayA4,

        card: grayDark.gray3,
        cardHover: grayDark.gray4,

        text: whiteA.whiteA12,
        textDark: whiteP3A.whiteA8,
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
      small: "(max-width: 400px)",
      medium: "(max-width: 750px)",
      mediumx: "(max-width: 1024px)",
      large: "(max-width: 1200px)",
      largex: "(max-width: 1366px)",
      largexx: "(max-width: 1600px)",
      largexxx: "(max-width: 1920px)",
    },
  });
