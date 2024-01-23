import { styled } from "@/config/stitches.config";
import { Letter } from "../Letter/Letter";

export const Logo = styled(Letter, {
  fontSize: "2rem",

  display: "flex",
  alignItems: "center",
  gap: 3,

  "& svg": {
    color: `$secondary`,
  },
});
