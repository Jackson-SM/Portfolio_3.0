import { HeadingTitle } from "@/components/HeadingTitle/Heading";
import { Letter } from "@/components/Letter/Letter";
import { projects } from "@/data/projects";
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
        {projects.map((project) => {
          return <CardProject key={project.slug} project={project} />;
        })}
      </Grid>
    </Styles.SectionProjectContainer>
  );
};
