import React from "react";
import * as Styled from "./styles";
import svgIllustration from "../../assets/hero_dev.svg";
import { CarouselTechs } from "../CarouselTechs";
import langs_stacks from "../CarouselTechs/langs_stacks";
import libs_frameworks from "../CarouselTechs/libs_frameworks";

export const SectionHero = () => {
  return (
    <Styled.SectionHero>
      <Styled.ContainerAboutMe>
        <Styled.ImageIllustration src={svgIllustration} alt="" />
        <Styled.TitleHero>Olá, eu sou Jackson Magalhães.</Styled.TitleHero>
        <Styled.DescriptionHero>
          Sou um desenvolvedor Full-Stack.
        </Styled.DescriptionHero>
      </Styled.ContainerAboutMe>
      <Styled.ContainerSkills>
        <CarouselTechs stack={langs_stacks} />
        <CarouselTechs stack={libs_frameworks} />
      </Styled.ContainerSkills>
    </Styled.SectionHero>
  );
};
