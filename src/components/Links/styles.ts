import { styled } from "@/config/stitches.config";

export const Link = styled("a", {
  color: "$text",
  textDecoration: "none",

  transition: "all ease 150ms",

  "&:hover": {
    color: "$primary",
  },
});
