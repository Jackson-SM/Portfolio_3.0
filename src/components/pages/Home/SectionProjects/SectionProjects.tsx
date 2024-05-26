import hockeyImg from "@/assets/projects/hockey.png";
import jkcompanyImg from "@/assets/projects/jk_company.png";
import { HeadingTitle } from "@/components/HeadingTitle/Heading";
import { Letter } from "@/components/Letter/Letter";
import { CardProject } from "./components/CardProject/CardProject";
import * as Styles from "./styles";

export const SectionProjects = () => {
  return (
    <Styles.SectionProjectContainer>
      <HeadingTitle size="7" style={{ marginBottom: "30px" }}>
        Meus <Letter>Projetos</Letter>
      </HeadingTitle>
      <CardProject
        coverImg={hockeyImg}
        stacksCodes={["html", "css", "js", "ts"]}
      />
      <CardProject
        coverImg={jkcompanyImg}
        stacksCodes={["html", "css", "js", "ts"]}
      />
    </Styles.SectionProjectContainer>
  );
};
