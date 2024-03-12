import { HeadingTitle } from "@/components/HeadingTitle/Heading";
import { Box, Flex } from "@radix-ui/themes";
import { CardCertification } from "./components/CardCertification/CardCertification";
import * as Styles from "./styles";

export const SectionCertifications = () => {
  return (
    <Styles.SectionCertifications>
      <HeadingTitle size="2">Certificados</HeadingTitle>
      <Flex gap="3" wrap="wrap">
        <Box>
          <CardCertification
            title="Curso Web Moderno Completo com Javascript"
            link="https://www.udemy.com/certificate/UC-2b3d76e4-e9a3-4f9c-9405-0e8db877ce27/"
            description="Programação Orientada a Objetos e C#, com foco na criação de soluções flexíveis e testáveis. Adquiri uma base sólida para ser um desenvolvedor eficaz, aplicando princípios de orientação a objetos na resolução de problemas reais e compreendendo diagramas de classe UML."
          />
        </Box>
      </Flex>
    </Styles.SectionCertifications>
  );
};
