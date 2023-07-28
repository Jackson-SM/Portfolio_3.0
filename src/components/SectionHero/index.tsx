import React from "react";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import * as Styled from "./styles";

export const SectionHero = () => {
  return (
    <Styled.SectionHero>
      <div>
        <LiaLaptopCodeSolid />
        <Styled.TitleHero>Olá, eu sou Jackson Magalhães.</Styled.TitleHero>
        <Styled.DescriptionHero>
          Sou um desenvolvedor Full-Stack.
        </Styled.DescriptionHero>
      </div>
    </Styled.SectionHero>
  );
};
