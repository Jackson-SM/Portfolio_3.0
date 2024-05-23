import { styled } from "@/config/stitches.config";
import { Text } from "@radix-ui/themes";

export const DescriptionStacksV2Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 10,

  flex: 0.5,
});

export const TextDescriptionStacks = styled(Text, {
  color: "$textDark",

  maxWidth: "90%",
});
