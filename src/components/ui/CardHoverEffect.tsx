import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./hover-card";

type ItemsCard = {
  title: string;
  description: string;
  link: string;
};

export const HoverEffect = ({
  items,
  className,
}: {
  items: ItemsCard[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3",
        className,
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-zinc-700/[0.7] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card item={item} />
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  item,
}: {
  className?: string;
  children?: React.ReactNode;
  item: ItemsCard;
}) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div
          className={cn(
            "rounded-2xl h-full w-full p-4 overflow-hidden bg-card border border-transparent dark:border-primary group-hover:border-primary relative z-20 transition-all",
            className,
          )}
        >
          <div className="relative z-50">
            <div className="p-4">
              <CardTitle className="text-primary-foreground">
                {item.title}
              </CardTitle>
              <CardDescription>{item.description}</CardDescription>
              {children}
            </div>
          </div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="shadow-lg shadow-black/[0.3] p-4">
        <div>
          <CardTitle className="text-card-foreground">{item.title}</CardTitle>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("font-bold tracking-wide", className)}>{children}</h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm group-hover:text-zinc-300 transition-colors",
        className,
      )}
    >
      {children}
    </p>
  );
};
