import { stacks } from "@/data/stacks";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { StackTypes } from "@/components/types/StackTypes";
import styles from "@/styles/Skills.module.css";

type SkillsProps = React.ComponentProps<"div"> & {
  className?: string;
};

export const Skills = ({ ...props }: SkillsProps) => {
  return (
    <div {...props}>
      <SkillContainer type="backend" />
      <SkillContainer type="frontend" />
      <SkillContainer type="tools" />
    </div>
  );
};

type SkillContainerProps = React.ComponentProps<"div"> & {
  type: StackTypes["type"];
  className?: string;
};

const SkillContainer = ({ type, className }: SkillContainerProps) => {
  return (
    <div
      className={cn(
        "flex flex-wrap justify-center items-center gap-6 p-4",
        className,
      )}
    >
      {stacks
        .filter((stack) => stack.type === type)
        .map((stack, index) => (
          <Skill key={stack.title} stack={stack} index={index} />
        ))}
    </div>
  );
};

type SkillProps = {
  stack: StackTypes;
  index: number;
};

const Skill = ({ stack, index }: SkillProps) => {
  const animationDelay = `${index * 0.3}s`;

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-between p-4 rounded-md w-24 h-24 gap-2 transition-all duration-150 hover:scale-110 cursor-default",
        styles.skillCard,
      )}
      style={{
        animationDelay,
      }}
    >
      <Image src={stack.src} alt={stack.alt} width={35} height={35} />
      <p className="text-xs text-muted-foreground">{stack.title}</p>
    </div>
  );
};
