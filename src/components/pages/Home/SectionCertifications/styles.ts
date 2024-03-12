import { styled } from "@/config/stitches.config";
import { Section } from "@radix-ui/themes";

export const SectionCertifications = styled(Section, {
  display: "flex",
  flexDirection: "column",
  gap: "$6",

  padding: "$4",
});
