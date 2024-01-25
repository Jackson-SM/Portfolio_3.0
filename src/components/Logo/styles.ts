import { styled } from "@/config/stitches.config";
import { Heading } from "@radix-ui/themes";

export const Logo = styled(Heading, {
  fontSize: "2rem",

  display: "flex",
  alignItems: "center",
  gap: 3,

  "& svg": {
    color: `$secondary`,
  },
});
