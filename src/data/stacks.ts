import csharpIcon from "@/assets/icons-langs/csharp.svg";
import cssIcon from "@/assets/icons-langs/css3.svg";
import htmlIcon from "@/assets/icons-langs/html.svg";
import javascriptIcon from "@/assets/icons-langs/javascript.svg";
import nodejsIcon from "@/assets/icons-langs/nodejs.svg";
import phpIcon from "@/assets/icons-langs/php.svg";
import pythonIcon from "@/assets/icons-langs/python.svg";
import typescriptIcon from "@/assets/icons-langs/typescript.svg";
import bootstrapIcon from "@/assets/icons-libs-frameworks/bootstrap.svg";
import expressIcon from "@/assets/icons-libs-frameworks/express.svg";
import nestjsIcon from "@/assets/icons-libs-frameworks/nestjs.svg";
import nextIcon from "@/assets/icons-libs-frameworks/nextjs.svg";
import prismaIcon from "@/assets/icons-libs-frameworks/prisma.svg";
import reactIcon from "@/assets/icons-libs-frameworks/react.svg";
import supabaseIcon from "@/assets/icons-libs-frameworks/supabase.svg";
import tailwindIcon from "@/assets/icons-libs-frameworks/tailwindcss.svg";
import vueIcon from "@/assets/icons-libs-frameworks/vuejs.svg";
import dockerIcon from "@/assets/icons-tools/docker.svg";
import gitIcon from "@/assets/icons-tools/git.svg";
import githubIcon from "@/assets/icons-tools/github.svg";
import linuxIcon from "@/assets/icons-tools/linux.svg";
import postgresIcon from "@/assets/icons-tools/postgresql.svg";
import trelloIcon from "@/assets/icons-tools/trello.svg";
import visualStudioIcon from "@/assets/icons-tools/visual-studio.svg";
import viteIcon from "@/assets/icons-tools/vite.svg";
import vscodeIcon from "@/assets/icons-tools/vscode.svg";
import { StackTypes } from "@/components/types/StackTypes";
import {
  blueA,
  blueDarkA,
  cyanA,
  cyanDarkA,
  greenA,
  jadeA,
  plumA,
  purpleA,
  purpleDarkA,
  redA,
  sageA,
  skyA,
  slateA,
  tealA,
  whiteA,
  yellowA,
} from "@radix-ui/colors";

export const stacks: StackTypes[] = [
  {
    title: "Python",
    src: pythonIcon,
    alt: "python",
    color: yellowA.yellowA2,
    type: "backend",
    code: "py",
  },
  {
    title: "Node",
    src: nodejsIcon,
    alt: "nodejs",
    color: greenA.greenA3,
    type: "backend",
    code: "node",
  },
  {
    title: "Express",
    src: expressIcon,
    alt: "express",
    color: sageA.sageA5,
    type: "backend",
    code: "express",
  },
  {
    title: "Nest",
    src: nestjsIcon,
    alt: "nestjs",
    color: redA.redA3,
    type: "backend",
    code: "nest",
  },
  {
    title: "Prisma",
    src: prismaIcon,
    alt: "prisma",
    color: purpleA.purpleA4,
    type: "backend",
    code: "prisma",
  },
  {
    title: "Supabase",
    src: supabaseIcon,
    alt: "supabase",
    color: jadeA.jadeA3,
    type: "backend",
    code: "supabase",
  },
  {
    title: "CSharp",
    src: csharpIcon,
    alt: "csharp",
    color: plumA.plumA3,
    type: "backend",
    code: "csharp",
  },
  {
    title: "PHP",
    src: phpIcon,
    alt: "php",
    color: purpleA.purpleA3,
    type: "backend",
    code: "php",
  },
  {
    title: "React",
    src: reactIcon,
    alt: "reactjs",
    color: skyA.skyA3,
    type: "frontend",
    code: "react",
  },
  {
    title: "Vue",
    src: vueIcon,
    alt: "vue",
    color: tealA.tealA3,
    type: "frontend",
    code: "vue",
  },
  {
    title: "Tailwind CSS",
    src: tailwindIcon,
    alt: "tailwindcss",
    color: blueA.blueA3,
    type: "frontend",
    code: "tailwind",
  },
  {
    title: "Bootstrap",
    src: bootstrapIcon,
    alt: "bootstrap",
    color: purpleDarkA.purpleA2,
    type: "frontend",
    code: "bootstrap",
  },
  {
    title: "Next",
    src: nextIcon,
    alt: "nextjs",
    color: whiteA.whiteA2,
    type: "frontend",
    code: "next",
  },
  {
    title: "Javascript",
    src: javascriptIcon,
    alt: "javascript",
    color: yellowA.yellowA2,
    type: "frontend",
    code: "js",
  },
  {
    title: "Typescript",
    src: typescriptIcon,
    alt: "typescript",
    color: cyanA.cyanA3,
    type: "frontend",
    code: "ts",
  },
  {
    title: "CSS",
    src: cssIcon,
    alt: "css",
    color: blueA.blueA3,
    type: "frontend",
    code: "css",
  },
  {
    title: "HTML",
    src: htmlIcon,
    alt: "html",
    color: redA.redA3,
    type: "frontend",
    code: "html",
  },
  {
    title: "Docker",
    src: dockerIcon,
    alt: "docker",
    color: cyanDarkA.cyanA2,
    type: "tools",
    code: "docker",
  },
  {
    title: "Git",
    src: gitIcon,
    alt: "git",
    color: redA.redA3,
    type: "tools",
    code: "git",
  },
  {
    title: "Github",
    src: githubIcon,
    alt: "github",
    color: whiteA.whiteA1,
    type: "tools",
    code: "github",
  },
  {
    title: "VSCode",
    src: vscodeIcon,
    alt: "vscode",
    color: blueDarkA.blueA2,
    type: "tools",
    code: "vscode",
  },
  {
    title: "Visual Studio",
    src: visualStudioIcon,
    alt: "vscode",
    color: purpleDarkA.purpleA2,
    type: "tools",
    code: "vs",
  },
  {
    title: "Linux",
    src: linuxIcon,
    alt: "linux",
    color: slateA.slateA7,
    type: "tools",
    code: "linux",
  },
  {
    title: "Trello",
    src: trelloIcon,
    alt: "trello",
    color: blueDarkA.blueA3,
    type: "tools",
    code: "trello",
  },
  {
    title: "Vite",
    src: viteIcon,
    alt: "vite",
    color: plumA.plumA3,
    type: "tools",
    code: "vite",
  },
  {
    title: "Postgres",
    src: postgresIcon,
    alt: "postgresql",
    color: skyA.skyA3,
    type: "tools",
    code: "postgres",
  },
];
