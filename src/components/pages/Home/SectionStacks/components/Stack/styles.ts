import { styled } from "@/config/stitches.config";
import Image from "next/image";

export const Stack = styled("li", {
  background: "$backgroundTransparence",

  height: "60px",
  borderRadius: "8px",

  margin: "0 auto",
  width: "100%",

  "@medium": {
    width: "auto",
    margin: "0",
  },

  display: "flex",
  alignItems: "center",
  gap: "10px",

  fontSize: "$2",

  padding: 10,
  transition: "all ease 130ms",

  "&:hover": {
    background: "$backgroundGray",
  },
});
export const StackImage = styled(Image, {
  padding: 7,
  borderRadius: "5px",

  transition: "all ease 130ms",
});
