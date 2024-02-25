import { styled } from "@/config/stitches.config";
import { Section } from "@radix-ui/themes";

export const SectionEducations = styled(Section, {
  height: "100vh",
  position: "relative",
  zIndex: "1",

  background: `radial-gradient(circle at 0% 0%,$primaryTransparence 0%, $background 50%)`,
});
