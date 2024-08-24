import { CardHoverEffectDemo } from "@/components/ui/CardHoverEffectDemo";
import { HeroParallaxDemo } from "@/components/ui/HeroParallaxDemo";
import * as Styles from "./styles";

export const SectionProjects = () => {
  return (
    <Styles.SectionProjectContainer>
      <HeroParallaxDemo />
      <CardHoverEffectDemo />
    </Styles.SectionProjectContainer>
  );
};
