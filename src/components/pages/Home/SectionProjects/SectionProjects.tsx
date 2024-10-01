import { HeadingTitle } from "@/components/HeadingTitle/Heading";
import { Letter } from "@/components/Letter/Letter";
import { HeroParallaxDemo } from "@/components/ui/HeroParallaxDemo";
import { Text } from "@radix-ui/themes";
import { motion } from "framer-motion";
import { projects } from "./backend_projects";
import { CardBackend } from "./components/CardBackend/CardBackend";

export const SectionProjects = () => {
  return (
    <div className="flex flex-col gap-2 relative">
      <HeroParallaxDemo />
      <div className="max-w-5xl mx-auto px-8 py-0 my-16">
        <div className="max-w-7xl relative mx-auto py-0 md:py-8 px-4 w-full  left-0 top-0">
          <HeadingTitle
            className="text-2xl md:text-7xl dark:text-neutral-300"
            size="9"
            style={{ fontWeight: "600" }}
          >
            Meus projetos <Letter>backend</Letter>.
          </HeadingTitle>
          <Text
            as="p"
            size={{
              initial: "1",
              md: "2",
              lg: "3",
              xl: "4",
            }}
            className="max-w-2xl text-base md:text-lg mt-8 dark:text-neutral-400"
          >
            Aqui estão alguns dos trabalhos que desenvolvi com foco em backend.
            Cada um desses projetos demonstra minha habilidade em criar APIs
            funcionais, gerenciar bancos de dados e estruturar sistemas sólidos
            e eficientes. Esses projetos representam minha dedicação e
            capacidade de resolver problemas complexos no desenvolvimento
            server-side.
          </Text>
        </div>
        <motion.ul className="grid grid-cols-auto-fill-100 gap-2">
          {projects.map((project, index) => {
            return (
              <CardBackend project={project} key={project.title + index} />
            );
          })}
        </motion.ul>
      </div>
    </div>
  );
};
