import { CardHoverEffectDemo } from "@/components/ui/CardHoverEffectDemo";
import { HeroParallaxDemo } from "@/components/ui/HeroParallaxDemo";

export const SectionProjects = () => {
  return (
    <div className="flex flex-col gap-2">
      <HeroParallaxDemo />
      <CardHoverEffectDemo />
    </div>
  );
};
