"use client";

import { Step } from "@/components/atoms/Step";
import {
  HoverCard,
  HoverCardArrow,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";
import { IconArrowRight, IconStarFilled } from "@tabler/icons-react";
import { HTMLMotionProps, motion } from "framer-motion";
import Link from "next/link";
import { ItemsCard } from "../types/ItemsCard";

type CardBackendProps = HTMLMotionProps<"li"> & {
  project: ItemsCard;
};

export const CardBackend = ({
  project,
  className,
  ...props
}: CardBackendProps) => {
  return (
    <HoverCard openDelay={200}>
      <HoverCardTrigger asChild>
        <motion.li
          {...props}
          className={cn(
            "w-full h-full bg-card rounded-md m-2 relative hover:bg-accent",
            className,
          )}
        >
          <Link
            href={project.link}
            className="flex w-full h-full px-4 py-2 relative hover:bg-primary/20 group transition-colors duration-150"
          >
            <div className="flex flex-col justify-around">
              <div className="flex justify-between">
                <h1>{project.title}</h1>
                {project.favorited && (
                  <IconStarFilled className="fill-primary" />
                )}
              </div>
              <p className="text-card-foreground text-xs w-11/12">
                {project.description}
              </p>
            </div>
            <div className="flex justify-center items-center">
              <IconArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform duration-150" />
            </div>
          </Link>
        </motion.li>
      </HoverCardTrigger>
      <HoverCardContent
        className="shadow-2xl shadow-black/[0.9] p-4 flex flex-col gap-6"
        side="top"
      >
        <div className="flex justify-around">
          <h3 className="text-foreground flex flex-col justify-between items-center gap-1">
            {project.title}{" "}
            <span className="text-xs text-card-foreground">
              ({project.status})
            </span>
          </h3>
        </div>
        <div className="pl-2 flex flex-col gap-1">
          {project.steps.map((title) => (
            <Step title={title} key={title} />
          ))}
        </div>
        <div className="flex gap-3 items-center">
          {project.stacks.map((stack, idx) => (
            <div key={idx}>{stack}</div>
          ))}
        </div>
        <HoverCardArrow className="fill-gray-600" width={18} height={10} />
      </HoverCardContent>
    </HoverCard>
  );
};
