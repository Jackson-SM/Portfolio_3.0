import { Letter } from "@/components/Letter/Letter";
import { Poppins } from "next/font/google";
import { ComponentProps } from "react";
import * as Styles from "./styles";

type CardCertificationTypes = ComponentProps<
  typeof Styles.CardCertification
> & {
  title: string;
  link: string;
  description: string;
};

const poppins = Poppins({ weight: "400", subsets: ["latin"] });
export const CardCertification = ({
  children,
  title,
  link,
  description,
  ...props
}: CardCertificationTypes) => {
  return (
    <Styles.CardCertification {...props} className={poppins.className}>
      <Letter>{title}</Letter>
      <p>{description}</p>
      <a href={link}>Go to Certificate</a>
      {children}
    </Styles.CardCertification>
  );
};
