"use client";

import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion, Variants } from "framer-motion";
import Image from "next/image";

export type StackTypes = {
  title: string;
  src: string;
  alt: string;
  color?: string;
};
type StackProps = HTMLMotionProps<"li"> & {
  stack: StackTypes;
};

const itemVars: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};

export const Stack = ({ stack, className, ...props }: StackProps) => {
  return (
    <motion.li
      className={cn(
        "p-3 flex flex-col gap-2 h-28 w-28 justify-center rounded-md items-center transition-transform duration-300 bg-muted hover:bg-accent hover:-translate-y-4 shadow-lg",
        className,
      )}
      variants={itemVars}
      {...props}
    >
      <Image alt={stack.title} src={stack.src} className="w-2/4 h-2/4" />
      <span className="text-sm">{stack.title}</span>
    </motion.li>
  );
};
