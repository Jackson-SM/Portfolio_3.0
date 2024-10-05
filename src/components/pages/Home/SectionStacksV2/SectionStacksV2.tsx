"use client";

import { HeadingTitle } from "@/components/HeadingTitle/Heading";
import { Letter } from "@/components/Letter/Letter";
import { Flex } from "@radix-ui/themes";
import { motion, Variants } from "framer-motion";
import * as Styles from "./styles";

import csharpIcon from "@/assets/icons-langs/csharp.svg";
import golangIcon from "@/assets/icons-langs/go.svg";
import javaIcon from "@/assets/icons-langs/java.svg";
import javascriptIcon from "@/assets/icons-langs/javascript.svg";
import nodeIcon from "@/assets/icons-langs/nodejs.svg";
import pythonIcon from "@/assets/icons-langs/python.svg";
import typescriptIcon from "@/assets/icons-langs/typescript.svg";
import nestIcon from "@/assets/icons-libs-frameworks/nestjs.svg";
import reactIcon from "@/assets/icons-libs-frameworks/react.svg";
import vuejsIcon from "@/assets/icons-libs-frameworks/vuejs.svg";
import mongoIcon from "@/assets/icons-tools/mongodb.svg";
import mysqlIcon from "@/assets/icons-tools/mysql.svg";
import postgreIcon from "@/assets/icons-tools/postgresql.svg";
import { Stack, StackTypes } from "@/components/StackV2/Stack";
import { DescriptionStacksV2 } from "./components/DescriptionStacksV2/DescriptionStacksV2";
import { SoftSkillsList } from "./components/SoftSkillsList/SoftSkillsList";

export const SectionStacksV2 = () => {
  const someStacks: StackTypes[] = [
    { title: "Javascript", src: javascriptIcon, alt: "javascript" },
    { title: "Typescript", src: typescriptIcon, alt: "typescript" },
    { title: "React", src: reactIcon, alt: "react" },
    { title: "Vue.js", src: vuejsIcon, alt: "vuejs" },
    { title: "Node", src: nodeIcon, alt: "nodejs" },
    { title: "Nestjs", src: nestIcon, alt: "nestjs" },
    { title: "Golang", src: golangIcon, alt: "golang" },
    { title: "Java", src: javaIcon, alt: "java" },
    {
      title: "Python",
      src: pythonIcon,
      alt: "python",
    },
    { title: "CSharp", src: csharpIcon, alt: "csharp" },
    { title: "MongoDB", src: mongoIcon, alt: "mongodb" },
    { title: "PostgreSQL", src: postgreIcon, alt: "postgresql" },
    { title: "MySQL", src: mysqlIcon, alt: "mysql" },
  ];

  const listVars: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <Styles.SectionStacksV2Container>
      <Flex align="center" justify="center" gap="3">
        <HeadingTitle size="7" style={{ marginBottom: "30px" }}>
          Minhas <Letter>Habilidades</Letter>
        </HeadingTitle>
      </Flex>
      <Styles.ContentStacksV2>
        <Flex direction="column" gap="4" style={{ flex: 1 }}>
          <DescriptionStacksV2 />
          <div style={{ width: "100%", flex: 0.8 }}>
            <SoftSkillsList />
          </div>
        </Flex>
        <motion.ul
          className="grid grid-cols-auto-fill-card-stack relative flex-1 items-center gap-4 p-4"
          variants={listVars}
          initial="hidden"
          animate="show"
        >
          {someStacks.map((stack, index) => (
            <Stack key={index} stack={stack} />
          ))}
        </motion.ul>
      </Styles.ContentStacksV2>
    </Styles.SectionStacksV2Container>
  );
};
