import { styled, theme } from "@/config/stitches.config";
import Linked from "next/link";
import { lighten, transparentize } from "polished";

const styleButtons = {
  width: "max-content",
  padding: "12px 17px",
  outline: "none",
  background: "none",
  border: "none",
  borderRadius: 3,

  transition: "all ease 130ms",

  cursor: "pointer",

  color: "$text",
  textDecoration: "none",

  "& svg": {
    width: "20px",
    height: "20px",
  },

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,

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
        background: `$primaryTransparence`,
        border: `1px solid $primary`,

        "&:hover": {
          background: `$primaryTransparence`,

          borderColor: `$primary`,
        },
      },
      outline_primary: {
        background: `none`,
        border: `1px solid ${lighten(0.2, theme.colors.background.value)}`,

        "&:hover": {
          background: `$primaryTransparence`,

          borderColor: `$primaryDark`,
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
};

export const Button = styled("button", styleButtons);
export const Link = styled(Linked, {
  ...styleButtons,
  padding: "12px 18px",
  fontSize: "0.75rem",
  display: "flex",
  alignItems: "center",
});
