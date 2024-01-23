import { Letter } from "@/components/Letter/Letter";
import { DownloadSimple, Info } from "@phosphor-icons/react";
import { AspectRatio, Box, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import { ButtonLink } from "../../../Button";
import * as Styles from "./styles";

export const SectionHero = () => {
  return (
    <Styles.SectionHero>
      <Flex gap="3" align="center">
        <Box>
          <Styles.ContainerAboutMe>
            <Styles.TitleHero>
              <Text as="p">{"I'm Jackson Magalhães"}</Text>
              <Letter as="span" gradient>
                Fullstack
              </Letter>
              {" Developer"}.
            </Styles.TitleHero>
            <Styles.DescriptionHero>
              Eu sou Jackson Magalhães, um entusiasta da tecnologia empenhado em
              transformar conceitos em soluções digitais inovadoras. Minha
              habilidade abrange o espectro Full-Stack, com expertise em
              <Letter as="span"> Node.js</Letter>,{" "}
              <Letter as="span"> C#</Letter>, <Letter as="span"> Java</Letter>,
              <Letter as="span"> C++</Letter>,{" "}
              <Letter as="span"> React.js</Letter> e{" "}
              <Letter as="span"> Vue.js</Letter>. Com uma paixão pela resolução
              de problemas complexos e pela criação de interfaces dinâmicas,
              estou comprometido em evoluir constantemente. Junte-se a mim nesta
              jornada, onde a criatividade encontra a excelência na programação.
              Vamos construir juntos o futuro digital!
            </Styles.DescriptionHero>
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
          </Styles.ContainerAboutMe>
        </Box>
        <Box style={{ width: "500px", minWidth: "30%" }}>
          <AspectRatio ratio={1 / 1}>
            <Image
              src={"/pfp.png"}
              alt="hero"
              layout="fill"
              objectFit="cover"
              style={{
                borderRadius: "50%",
              }}
            />
          </AspectRatio>
        </Box>
      </Flex>
    </Styles.SectionHero>
  );
};
