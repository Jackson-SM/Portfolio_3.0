import { styled } from "@/config/stitches.config";
import Linked from "next/link";

export const Link = styled(Linked, {
  color: "$text",
  fontSize: "0.85rem",

  textDecoration: "none",

  transition: "all ease 180ms",

  "&:hover": {
    color: "$primary",
  },
});
