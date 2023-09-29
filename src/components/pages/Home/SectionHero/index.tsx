import illustration from "@/assets/hero_dev2.svg";
import { DownloadSimple, Info } from "@phosphor-icons/react";
import Image from "next/image";
import { ButtonLink } from "../../../Button";
import * as Styled from "./styles";

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
          <ButtonLink
            href="/resume.pdf"
            style={{ textDecoration: "none" }}
            target="_blank"
          >
            Download CV <DownloadSimple />
          </ButtonLink>
          <ButtonLink href="/aboutme" target="_blank">
            Sobre mim <Info />
          </ButtonLink>
        </div>
      </Styled.ContainerAboutMe>
      <div>
        <Image src={illustration} alt="" />
      </div>
    </Styled.SectionHero>
  );
};
