import { styled } from "@/config/stitches.config";
import Linked from "next/link";

export const Link = styled(Linked, {
  fontSize: "0.85rem",

  display: "flex",
  alignItems: "center",

  color: "$text",

  textDecoration: "none",

  transition: "all ease 180ms",

  "&:hover": {
    color: "$primary",

    "& > svg": {
      color: "$primary",
    },
  },

  "& > svg": {
    color: "$textDark",
    width: 25,
    height: 25,
    transition: "all ease 180ms",
  },

  variants: {
    size: {
      "1": {
        fontSize: "$1",
      },
      "2": {
        fontSize: "$2",
      },
      "3": {
        fontSize: "$3",
      },
      "4": {
        fontSize: "$4",
      },
      "5": {
        fontSize: "$5",
      },
      "6": {
        fontSize: "$6",
      },
    },
  },
});
