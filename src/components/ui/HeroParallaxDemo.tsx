"use client";

import { HeroParallax } from "./HeroParallax";

import dashlearn from "@/assets/projects/dashlearn.png";
import hockey from "@/assets/projects/hockey.png";
import infinite from "@/assets/projects/infinite.png";
import jkCompany from "@/assets/projects/jk_company.png";
import portfolio from "@/assets/projects/portfolio.png";
import { ProductParallax } from "../types/ProductParallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products: ProductParallax[] = [
  {
    title: "Hockey",
    link: "https://jackson-sm.github.io/Hockey-Desafio/",
    thumbnail: hockey,
  },
  {
    title: "JK Company",
    link: "https://jackson-sm.github.io/JK-Company/",
    thumbnail: jkCompany,
  },
  {
    title: "Portfolio",
    link: "https://jacksonmagalhaes.vercel.app/",
    thumbnail: portfolio,
  },
  {
    title: "Dashlearn",
    link: "https://dashlearn.netlify.app/",
    thumbnail: dashlearn,
  },
  {
    title: "Infinite",
    link: "https://jackson-sm.github.io/infinite/",
    thumbnail: infinite,
  },
];
