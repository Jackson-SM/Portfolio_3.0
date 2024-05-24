import { styled } from "@/config/stitches.config";

export const SoftSkillsList = styled("ul", {
  listStyle: "none",

  display: "flex",
  flexDirection: "column",
  gap: 20,
});
export const SoftSkillsListItem = styled("li", {
  display: "flex",
  alignItems: "center",
  gap: 15,
});

// Icon
export const SoftSkillsListItemIcon = styled("div", {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 45,
  height: 45,
  borderRadius: "10px",
  color: "$primary",
  fontSize: 20,
  zIndex: 1,

  background: "transparent",

  border: "1px solid $primary",

  "&:before": {
    content: "",
    position: "absolute",
    top: "100%",
    left: "50%",
    background: "$primary",

    width: "2px",

    zIndex: -1,
  },
});
