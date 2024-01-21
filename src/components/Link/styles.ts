import { styled } from "@/config/stitches.config";
import Linked from "next/link";

export const Link = styled(Linked, {
  fontSize: "0.85rem",

  color: "$text",

  textDecoration: "none",

  transition: "all ease 180ms",

  "&:hover": {
    color: "$primary",
  },
});
