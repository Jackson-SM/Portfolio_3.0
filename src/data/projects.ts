import defaultImg from "@/assets/projects/default.jpg";
import coverImg from "@/assets/projects/hockey.png";
import jkCompanyImg from "@/assets/projects/jk_company.png";

export const projects = [
  {
    title: "Hockey",
    slug: "hockey",
    description:
      "Desafio feito em uma comunidade para programadores a fim de melhorar e utilizar habilidades das tecnologias web.",
    stacks: ["html", "css", "js"],
    coverImg: coverImg,
    website: "https://jackson-sm.github.io/Hockey-Desafio/",
    repository: "#",
  },
  {
    title: "JK-Company",
    slug: "jk_company",
    description: "",
    stacks: ["html", "css", "js"],
    coverImg: jkCompanyImg,
    website: "https://jackson-sm.github.io/JK-Company/",
    repository: "#",
  },
  {
    title: "NetunoAcademy",
    slug: "netuno",
    description: "",
    stacks: ["nodejs", "ts", "js"],
    coverImg: defaultImg,
    website: "#",
    repository: "#",
  },
];

export type ProjectTypes = (typeof projects)[number];
