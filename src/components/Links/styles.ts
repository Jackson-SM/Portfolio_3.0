import { styled } from "@/config/stitches.config";

export const Link = styled("a", {
  textDecoration: "none",

  transition: "all ease 150ms",

  "&:hover": {
    color: "$primary",
  },
});
