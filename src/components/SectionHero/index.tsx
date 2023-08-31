import React from "react";
import * as Styled from "./styles";
import { Button } from "../Button";
import { Info, DownloadSimple } from "@phosphor-icons/react";

export const SectionHero = () => {
  return (
    <Styled.SectionHero>
      <Styled.ContainerAboutMe>
        <div>
          <Styled.DescriptionHero>
            Desenvolvedor Full-Stack
          </Styled.DescriptionHero>
          <Styled.TitleHero>Jackson Magalhães.</Styled.TitleHero>
        </div>
        <Styled.DescriptionHero>
          Eu sou Jackson Magalhães, um entusiasta da tecnologia, apaixonado por
          aprender e com facilidade de comunicação. Tenho amplo conhecimento em
          diversas áreas e gosto de enfrentar desafios. Minha experiência inclui
          desenvolvimento de aplicativos, sistemas e soluções de infraestrutura.
          Adoro compartilhar conhecimento e estou aberto a parcerias e projetos
          inovadores. Meu objetivo é continuar evoluindo na carreira e
          contribuir para o progresso tecnológico.
        </Styled.DescriptionHero>
        <div style={{ display: "flex", gap: 10 }}>
          <Button>
            Download CV <DownloadSimple />
          </Button>
          <Button>
            Sobre mim <Info />
          </Button>
        </div>
      </Styled.ContainerAboutMe>
    </Styled.SectionHero>
  );
};
