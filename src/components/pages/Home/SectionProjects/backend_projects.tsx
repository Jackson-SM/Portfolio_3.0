import {
  IconBrandCSharp,
  IconBrandDocker,
  IconBrandJavascript,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandPrisma,
  IconBrandRust,
  IconCloudComputing,
  IconSql,
} from "@tabler/icons-react";
import { ItemsCard } from "./components/types/ItemsCard";

export const projects: ItemsCard[] = [
  {
    title: "Astra",
    description:
      "Uma aplicação aplicando conceitos de Microserviços com Nestjs, usando serviços como Kafka, Zookeeper e Docker.",
    link: "https://github.com/Jackson-SM/Astra",
    steps: [
      "Kafka e Zookeeper",
      "Docker",
      "Framework Nestjs",
      "Microserviços",
      "Autenticação JWT",
      "Next.js",
    ],
    stacks: [
      <IconBrandNodejs key="nodejs" className="p-[2px]" />,
      <IconSql key="sql" className="p-[2px]" />,
      <IconBrandDocker key="docker" className="p-[2px]" />,
      <IconBrandNextjs key="nextjs" className="p-[2px]" />,
    ],
    status: "Em Desenvolvimento",
    favorited: true,
  },
  {
    title: "Jupiter",
    description:
      "Uma aplicação completa, do Frontend ao Backend, utilizando Hapi.js e Nextjs.",
    link: "https://github.com/Jackson-SM/Jupiter",
    steps: [
      "Gerenciamento de tarefas",
      "Framework Next.js",
      "Biblioteca Hapi.js",
      "Testes unitários com Jest",
    ],
    stacks: [
      <IconBrandNodejs key="nodejs" className="p-[2px]" />,
      <IconSql key="sql" className="p-[2px]" />,
    ],
    status: "Em Desenvolvimento",
    favorited: true,
  },
  {
    title: "NetunoAcademy",
    description:
      "Aplicação escalável utilizando o Framework Nestjs e aplicando conceitos de SOLID e DDD.",
    link: "https://github.com/Jackson-SM/NetunoAcademy_API",
    steps: [
      "Arquitetura escalável",
      "Princípios DDD e SOLID",
      "Integração com PostgreSQL",
      "Computação em nuvem",
      "Testes unitários",
    ],
    stacks: [
      <IconBrandNodejs key="nodejs" className="p-[2px]" />,
      <IconBrandPrisma key="prisma" className="p-[2px]" />,
      <IconCloudComputing key="cloud" className="p-[2px]" />,
      <IconSql key="sql" className="p-[2px]" />,
    ],
    status: "Concluído",
    favorited: true,
  },
  {
    title: "Nightfall",
    description: "Sistema de Chat em Tempo real utilizando Sockets.",
    link: "https://github.com/Jackson-SM/Nightfall",
    steps: [
      "Comunicação em tempo real",
      "Suporte a múltiplos clientes",
      "Socket.IO",
      "Escalabilidade",
    ],
    stacks: [<IconBrandCSharp key="csharp" className="p-[2px]" />],
    status: "Concluído",
    favorited: false,
  },
  {
    title: "Ganymede",
    description:
      "API de Produtos e Usuários utilizando .NET com Entity Framework.",
    link: "https://github.com/Jackson-SM/Ganymede",
    steps: [
      "API de E-Commerce",
      ".NET e Entity Framework",
      "Suporte a PostgreSQL",
    ],
    stacks: [
      <IconBrandCSharp key="csharp" className="p-[2px]" />,
      <IconSql key="sql" className="p-[2px]" />,
    ],
    status: "Concluído",
    favorited: false,
  },

  {
    title: "Password Generator",
    description:
      "Um gerador de passwords feito em Rust. O Objetivo é criar senhas seguras de diversas ameaças.",
    link: "https://github.com/Jackson-SM/generate_password",
    steps: ["Rust para segurança", "Resistência a brute-force", "Segurança"],
    stacks: [<IconBrandRust key="rust" className="p-[2px]" />],
    status: "Concluído",
    favorited: false,
  },
  {
    title: "CRUD Nodejs",
    description:
      "API Restful simples utilizando Nodejs com bibliotecas pra manipulação de banco de dados e autenticação.",
    link: "https://github.com/Jackson-SM/api-crud-node",
    steps: [
      "API RESTful simples",
      "Manipulação de banco de dados",
      "Autenticação de usuários",
    ],
    stacks: [
      <IconBrandNodejs key="nodejs" className="p-[2px]" />,
      <IconBrandJavascript key="javascript" className="p-[2px]" />,
      <IconBrandMongodb key="mongodb" className="p-[2px]" />,
      <IconSql key="sql" className="p-[2px]" />,
    ],
    status: "Concluído",
    favorited: false,
  },
];
