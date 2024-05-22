import { HeadingTitle } from "@/components/HeadingTitle/Heading";
import { Letter } from "@/components/Letter/Letter";
import { DownloadSimple } from "@phosphor-icons/react";
import { Text } from "@radix-ui/themes";
import TypewriterComponent from "typewriter-effect";
import { ButtonLink } from "../../../Button";
import { ProfilePicture } from "./components/ProfilePicture/ProfilePicture";
import * as Styles from "./styles";

export const SectionHero = () => {
  return (
    <Styles.SectionHero>
      <Styles.ContainerAboutMe>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <HeadingTitle size="6">
            <Text
              as="div"
              color="gray"
              size={{ initial: "2", md: "6", lg: "8" }}
            >
              {
                <TypewriterComponent
                  options={{
                    strings: ["Jackson Magalhães"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              }
            </Text>
          </HeadingTitle>
          <HeadingTitle asChild size={{ initial: "6", md: "8", lg: "9" }}>
            <h2 style={{ fontWeight: "bold" }}>
              <Letter as="span" gradient="primaryToSecondary">
                Desenvolvedor
              </Letter>
              <Letter as="span" gradient="secondaryToPrimary">
                {" "}
                Full-Stack
              </Letter>
            </h2>
          </HeadingTitle>
        </div>
        <Styles.DescriptionHero>
          Eu sou um entusiasta da tecnologia empenhado em transformar conceitos
          em soluções digitais inovadoras. Minha habilidade abrange o espectro
          Full-Stack, com expertise em
          <Letter as="span"> Node.js</Letter>, <Letter as="span"> C#</Letter>,{" "}
          <Letter as="span"> Java</Letter>,<Letter as="span"> C++</Letter>,{" "}
          <Letter as="span"> React.js</Letter> e{" "}
          <Letter as="span"> Vue.js</Letter>. Com uma paixão pela resolução de
          problemas complexos e pela criação de interfaces dinâmicas, estou
          comprometido em evoluir constantemente. Junte-se a mim nesta jornada,
          onde a criatividade encontra a excelência na programação. Vamos
          construir juntos o futuro digital!
        </Styles.DescriptionHero>
        <div style={{ display: "flex", gap: 10 }}>
          <ButtonLink href="/resume.pdf" target="_blank">
            Download CV <DownloadSimple />
          </ButtonLink>
        </div>
      </Styles.ContainerAboutMe>

      <ProfilePicture />
    </Styles.SectionHero>
  );
};
