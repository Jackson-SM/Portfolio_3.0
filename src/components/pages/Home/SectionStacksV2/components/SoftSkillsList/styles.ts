import { styled } from "@/config/stitches.config";

export const SoftSkillsList = styled("ul", {
  listStyle: "none",

  display: "flex",
  flexDirection: "column",
  gap: 10,
});
export const SoftSkillsListItem = styled("li", {
  display: "flex",
  alignItems: "center",
  gap: 5,
});

// Icon
export const SoftSkillsListItemIcon = styled("div", {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 50,
  height: 50,
  borderRadius: "10px",
  color: "$primary",
  fontSize: 20,
  zIndex: 1,

  border: "1px solid $primary",
  background: "transparent",
});
