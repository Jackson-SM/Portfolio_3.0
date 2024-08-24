import { StaticImageData } from "next/image";

export type ProductParallax = {
  title: string;
  link: string;
  thumbnail: StaticImageData | string;
};
