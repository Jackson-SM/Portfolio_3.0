import { ButtonLink } from "@/components/Button";
import { HeadingTitle } from "@/components/HeadingTitle/Heading";
import { Letter } from "@/components/Letter/Letter";
import { stacks } from "@/data/stacks";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { AspectRatio, Flex, Grid } from "@radix-ui/themes";
import { StaticImageData } from "next/image";
import { Stack } from "../../../SectionStacks/components/Stack/Stack";
import * as Styles from "./styles";

type CardProjectProps = {
  stacksCodes: string[];
  coverImg: StaticImageData;
};

export const CardProject = ({ stacksCodes, coverImg }: CardProjectProps) => {
  const stacksFilter = stacks.filter((stack) =>
    stacksCodes.includes(stack.code),
  );

  return (
    <Styles.CardProjectContainer>
      <div style={{ flex: 0.5, height: "100%", width: "100%", padding: 20 }}>
        <AspectRatio ratio={16 / 8}>
          <Styles.CardProjectImageCover
            src={coverImg}
            alt="cover project"
            fill={true}
          />
        </AspectRatio>
      </div>
      <Styles.CardDescriptionProject>
        <Flex direction="column" gap="3">
          <HeadingTitle size="8" style={{ marginBottom: "20px" }}>
            <Letter>Hockey</Letter>
          </HeadingTitle>
          <Grid columns="repeat(auto-fill, minmax(150px, 1fr))" gap="2">
            {stacksFilter.map((stack) => {
              return (
                <Stack
                  key={stack.code}
                  title={stack.title}
                  color={stack.color}
                  alt={stack.alt}
                  src={stack.src}
                />
              );
            })}
          </Grid>
          <Styles.TextDescription>
            Desafio de clonar um site como parte de uma comunidade de
            programadores. Neste projeto, aprendi a estruturar páginas web,
            criar layouts responsivos, adicionar interatividade, aplicar boas
            práticas de codificação e controle de versão, otimizar o desempenho,
            melhorar a acessibilidade, resolver problemas de compatibilidade
            entre navegadores e utilizar ferramentas de desenvolvimento para
            depuração.
          </Styles.TextDescription>
        </Flex>
        <Flex gap="2">
          <ButtonLink href="#">
            Abrir Website <ExternalLinkIcon />
          </ButtonLink>
          <ButtonLink href="#">
            Abrir Github <GitHubLogoIcon />
          </ButtonLink>
        </Flex>
      </Styles.CardDescriptionProject>
    </Styles.CardProjectContainer>
  );
};
