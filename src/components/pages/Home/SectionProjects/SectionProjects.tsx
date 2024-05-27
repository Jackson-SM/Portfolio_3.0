import hockeyImg from "@/assets/projects/hockey.png";
import jkcompanyImg from "@/assets/projects/jk_company.png";
import { HeadingTitle } from "@/components/HeadingTitle/Heading";
import { Letter } from "@/components/Letter/Letter";
import { Flex, Grid } from "@radix-ui/themes";
import { CardProject } from "./components/CardProject/CardProject";
import * as Styles from "./styles";

export const SectionProjects = () => {
  return (
    <Styles.SectionProjectContainer>
      <Flex justify="center">
        <HeadingTitle size="7" style={{ marginBottom: "30px" }}>
          Meus <Letter>Projetos</Letter>
        </HeadingTitle>
      </Flex>
      <Grid columns="repeat(auto-fill, minmax(350px, 1fr))">
        <CardProject
          coverImg={hockeyImg}
          stacksCodes={["html", "css", "js", "ts"]}
        />
        <CardProject
          coverImg={jkcompanyImg}
          stacksCodes={["html", "css", "js", "ts"]}
        />
      </Grid>
    </Styles.SectionProjectContainer>
  );
};
