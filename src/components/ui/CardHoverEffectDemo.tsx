import { Text } from "@radix-ui/themes";
import { HeadingTitle } from "../HeadingTitle/Heading";
import { Letter } from "../Letter/Letter";
import { HoverEffect } from "./CardHoverEffect";
import { projects } from "../pages/Home/SectionProjects/backend_projects";

export function CardHoverEffectDemo() {
  return (
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
          funcionais, gerenciar bancos de dados e estruturar sistemas sólidos e
          eficientes. Esses projetos representam minha dedicação e capacidade de
          resolver problemas complexos no desenvolvimento server-side.
        </Text>
      </div>
      <HoverEffect items={projects} />
    </div>
  );
}
