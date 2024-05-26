import { styled } from "@/config/stitches.config";

export const SectionStacksV2Container = styled("section", {
  position: "relative",

  display: "flex",
  flexDirection: "column",
  gap: 20,
});
export const ContentStacksV2 = styled("div", {
  position: "relative",
  padding: 20,

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 20,

  "@medium": {
    flexDirection: "column",
    gap: 20,
  },
});
