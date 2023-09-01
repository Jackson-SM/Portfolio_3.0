import { styled, theme } from "@/config/stitches.config";
import { lighten, transparentize } from "polished";

export const Button = styled("button", {
  width: "max-content",
  padding: "12px 17px",
  outline: "none",
  background: "none",
  border: "none",
  borderRadius: 3,

  cursor: "pointer",

  color: "$text",

  "& svg": {
    width: "20px",
    height: "20px",
  },

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,

  transition: "all ease 130ms",

  defaultVariants: {
    variant: "outline_primary",
  },

  variants: {
    variant: {
      primary: {
        background: "$primary",
      },
      secondary: {
        background: "$secondary",
      },
      outline: {
        background: `${transparentize(1, theme.colors.background.value)}`,
        border: `1px solid ${lighten(0.2, theme.colors.background.value)}`,

        "&:hover": {
          background: `${lighten(
            0.2,
            transparentize(0.8, theme.colors.background.value),
          )}`,

          borderColor: `${lighten(0.4, theme.colors.background.value)}`,
        },
      },
      outline_primary: {
        background: `${transparentize(1, theme.colors.background.value)}`,
        border: `1px solid ${lighten(0.2, theme.colors.background.value)}`,

        "&:hover": {
          background: `${lighten(
            0.2,
            transparentize(0.9, theme.colors.primary.value),
          )}`,

          borderColor: `${lighten(0.1, theme.colors.primary.value)}`,
        },
      },
      outline_secondary: {
        background: `${transparentize(1, theme.colors.background.value)}`,
        border: `1px solid ${lighten(0.2, theme.colors.background.value)}`,

        "&:hover": {
          background: `${lighten(
            0.2,
            transparentize(0.9, theme.colors.secondary.value),
          )}`,

          borderColor: `${lighten(0.1, theme.colors.secondary.value)}`,
        },
      },
      outline_tertiary: {
        background: `${transparentize(1, theme.colors.background.value)}`,
        border: `1px solid ${lighten(0.2, theme.colors.background.value)}`,

        "&:hover": {
          background: `${lighten(
            0.2,
            transparentize(0.9, theme.colors.tertiary.value),
          )}`,

          borderColor: `${lighten(0.1, theme.colors.tertiary.value)}`,
        },
      },
    },
  },
});
