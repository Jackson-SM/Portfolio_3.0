"use client";
import { Text } from "@radix-ui/themes";
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HeadingTitle } from "../HeadingTitle/Heading";
import { Letter } from "../Letter/Letter";
import { ProductParallax } from "../types/ProductParallax";

export const HeroParallax = ({ products }: { products: ProductParallax[] }) => {
  const itemsPerRow = 3;
  const rows: ProductParallax[][] = products.reduce(
    (acc: ProductParallax[][], curr, index) => {
      if (index % itemsPerRow === 0) {
        acc.push(products.slice(index, index + itemsPerRow));
      }
      return acc;
    },
    [],
  );
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 40, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -140]),
    springConfig,
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 140]),
    springConfig,
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig,
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig,
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig,
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.25], [-650, 100]),
    springConfig,
  );
  return (
    <div
      ref={ref}
      className="h-auto p-20 overflow-hidden antialiased relative flex flex-col self-auto [perspective:500px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        {rows.map((row, rowIndex) => {
          return (
            <motion.div
              className={`flex flex-row relative ${
                rowIndex % 2 === 0
                  ? "flex-row-reverse space-x-reverse space-x-10"
                  : "space-x-10"
              } mb-20`}
              key={rowIndex}
            >
              {row.map((product, idx) => (
                <ProductCard
                  product={product}
                  translate={
                    rowIndex % 2 === 0 ? translateX : translateXReverse
                  }
                  key={idx + product.title}
                />
              ))}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <HeadingTitle
        className="text-2xl md:text-7xl dark:text-neutral-300"
        size="9"
        style={{ fontWeight: "600" }}
      >
        Meus projetos <Letter>frontend</Letter>.
      </HeadingTitle>
      <Text
        as="p"
        size={{
          initial: "1",
          md: "2",
          lg: "3",
          xl: "4",
        }}
        className="max-w-2xl text-base md:text-lg mt-8 dark:text-neutral-400"
      >
        Confira alguns dos meus projetos que já estão no ar. Cada um deles foi
        uma oportunidade de colocar em prática o que aprendi, unindo design e
        desenvolvimento para criar soluções simples e funcionais.
      </Text>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: ProductParallax;
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-60 w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0 rounded-lg shadow-xl shadow-black/[0.9]"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
