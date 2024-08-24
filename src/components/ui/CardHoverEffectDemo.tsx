import { Text } from "@radix-ui/themes";
import { HeadingTitle } from "../HeadingTitle/Heading";
import { Letter } from "../Letter/Letter";
import { HoverEffect } from "./CardHoverEffect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-10">
      <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
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
          className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-400"
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
export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];
