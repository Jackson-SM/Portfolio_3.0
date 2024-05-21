import { HeadingTitle } from "@/components/HeadingTitle/Heading";
import { Letter } from "@/components/Letter/Letter";
import { CardProject } from "./components/CardProject/CardProject";
import * as Styles from "./styles";

export const SectionProjects = () => {
  return (
    <Styles.SectionProjectContainer>
      <HeadingTitle>
        Meus <Letter>Projetos</Letter>
      </HeadingTitle>
      <ul>
        <CardProject />
        <CardProject />
        <CardProject />
      </ul>
    </Styles.SectionProjectContainer>
  );
};
