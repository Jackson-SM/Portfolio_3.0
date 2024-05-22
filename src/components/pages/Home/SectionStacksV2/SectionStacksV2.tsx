import { HeadingTitle } from "@/components/HeadingTitle/Heading";
import { Letter } from "@/components/Letter/Letter";
import { StackV2 } from "@/components/StackV2/StackV2";
import { Flex, Grid, Text } from "@radix-ui/themes";
import * as Styles from "./styles";

import cssIcon from "@/assets/icons-langs/css3.svg";
import htmlIcon from "@/assets/icons-langs/html.svg";
import javascriptIcon from "@/assets/icons-langs/javascript.svg";
import nodeIcon from "@/assets/icons-langs/nodejs.svg";
import typescriptIcon from "@/assets/icons-langs/typescript.svg";
import reactIcon from "@/assets/icons-libs-frameworks/react.svg";
import { StacksProps } from "@/components/types/StackProps";

export const SectionStacksV2 = () => {
  const someStacks: Omit<StacksProps, "color">[] = [
    { title: "Node", src: nodeIcon, alt: "nodejs" },
    { title: "Javascript", src: javascriptIcon, alt: "javascript" },
    { title: "React", src: reactIcon, alt: "react" },
    { title: "Typescript", src: typescriptIcon, alt: "typescript" },
    { title: "HTML", src: htmlIcon, alt: "html" },
    { title: "CSS", src: cssIcon, alt: "css" },
  ];

  return (
    <Styles.SectionStacksV2Container>
      <Flex direction="column" align="center" justify="center" gap="3">
        <HeadingTitle size="6">
          Minhas <Letter>Habilidades</Letter>
        </HeadingTitle>
        <Text size={{ initial: "2", xs: "2", sm: "3" }}>
          Tecnologias que eu domino ou tenho <Letter>estudado</Letter>.
        </Text>
      </Flex>
      <Styles.ContentStacksV2>
        <Grid columns="repeat(4, 1fr)" gap="3" rows="repeat(2, 1fr)">
          {someStacks.map((stack, index) => (
            <StackV2
              key={index}
              title={stack.title}
              src={stack.src}
              alt={stack.alt}
            />
          ))}
        </Grid>
      </Styles.ContentStacksV2>
    </Styles.SectionStacksV2Container>
  );
};
