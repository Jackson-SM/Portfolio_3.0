import { styled } from "@/config/stitches.config";

export const HeadingTitle = styled("h2", {
  defaultVariants: {
    size: "4",
  },

  "@largex": {
    fontSize: "2.5rem !important",
  },

  "@medium": {
    fontSize: "1.5rem !important",
  },

  variants: {
    size: {
      1: {
        fontSize: "2rem",
      },
      2: {
        fontSize: "2.5rem",
      },
      3: {
        fontSize: "3rem",
      },
      4: {
        fontSize: "3.5rem",
      },
      5: {
        fontSize: "4rem",
      },
    },
  },
});
