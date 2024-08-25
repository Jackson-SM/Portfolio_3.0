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
    title: "Nightfall",
    description:
      "Nightfall é um sistema de chat via Sockets, permitindo a comunicação em tempo real entre múltiplos clientes.",
    link: "https://github.com/Jackson-SM/Nightfall",
  },
  {
    title: "NetunoAcademy",
    description:
      "Um projeto com a finalidade de construir uma aplicação escalável e de fácil manutenção utilizando o framework Nestjs e conceitos como DDD e SOLID.",
    link: "https://github.com/Jackson-SM/NetunoAcademy_API",
  },
  {
    title: "Ganymede",
    description:
      "Ganymede é uma API de um ECommerce utilizando .NET com Entity Framework e PostgreSQL.",
    link: "https://github.com/Jackson-SM/Ganymede",
  },
  {
    title: "Jupiter",
    description:
      "Jupiter é uma aplicação desenvolvida em Hapi.js com finalidade de criar um gerenciador de tarefas automatizado.",
    link: "https://github.com/Jackson-SM/Jupiter_API",
  },
  {
    title: "Password Generator",
    description:
      "Um gerador de passwords feito em Rust. O Objetivo é criar senhas seguras capazes de escapar de driblar ataques de Brute Force e mante-la seguras de qualquer ameaça.",
    link: "https://github.com/Jackson-SM/generate_password",
  },
  {
    title: "FulgurFilmes",
    description:
      "Uma API de catálogo de filmes com opções de autenticação de usuários desenvolvida em AdonisJS.",
    link: "https://github.com/Jackson-SM/api_fulgurfilmes",
  },
  {
    title: "CRUD Nodejs",
    description:
      "API Restful simples utilizando Nodejs com bibliotecas pra manipulação de banco de dados e autenticação.",
    link: "https://github.com/Jackson-SM/api-crud-node",
  },
];
