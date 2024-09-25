import { HeadingTitle } from "@/components/HeadingTitle/Heading";
import { Letter } from "@/components/Letter/Letter";
import { StackV2 } from "@/components/StackV2/StackV2";
import { Flex, Grid } from "@radix-ui/themes";
import * as Styles from "./styles";

import csharpIcon from "@/assets/icons-langs/csharp.svg";
import cssIcon from "@/assets/icons-langs/css3.svg";
import htmlIcon from "@/assets/icons-langs/html.svg";
import javascriptIcon from "@/assets/icons-langs/javascript.svg";
import nodeIcon from "@/assets/icons-langs/nodejs.svg";
import pythonIcon from "@/assets/icons-langs/python.svg";
import typescriptIcon from "@/assets/icons-langs/typescript.svg";
import reactIcon from "@/assets/icons-libs-frameworks/react.svg";
import { StacksProps } from "@/components/types/StackProps";
import { DescriptionStacksV2 } from "./components/DescriptionStacksV2/DescriptionStacksV2";
import { SoftSkillsList } from "./components/SoftSkillsList/SoftSkillsList";

export const SectionStacksV2 = () => {
  const someStacks: Omit<StacksProps, "color">[] = [
    { title: "Node", src: nodeIcon, alt: "nodejs" },
    { title: "Javascript", src: javascriptIcon, alt: "javascript" },
    { title: "React", src: reactIcon, alt: "react" },
    {
      title: "Python",
      src: pythonIcon,
      alt: "python",
    },
    { title: "Typescript", src: typescriptIcon, alt: "typescript" },
    { title: "HTML", src: htmlIcon, alt: "html" },
    { title: "CSS", src: cssIcon, alt: "css" },
    { title: "CSharp", src: csharpIcon, alt: "csharp" },
  ];

  return (
    <Styles.SectionStacksV2Container>
      <Flex align="center" justify="center" gap="3">
        <HeadingTitle size="7" style={{ marginBottom: "30px" }}>
          Minhas <Letter>Habilidades</Letter>
        </HeadingTitle>
      </Flex>
      <Styles.ContentStacksV2>
        <Flex direction="column" gap="4" style={{ flex: 1 }}>
          <DescriptionStacksV2 />
          <div style={{ width: "100%", flex: 0.8 }}>
            <SoftSkillsList />
          </div>
        </Flex>
        <Grid
          columns="repeat(auto-fill, minmax(105px, 1fr))"
          gap="3"
          rows="repeat(2, 1fr)"
          style={{ flex: 1, width: "100%", padding: 10 }}
        >
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
