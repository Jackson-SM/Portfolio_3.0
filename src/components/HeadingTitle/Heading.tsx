import { Poppins } from "next/font/google";
import { ComponentProps } from "react";
import * as Styles from "./styles";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

type HeadingTitleProps = ComponentProps<typeof Styles.HeadingTitle>;

export const HeadingTitle = ({
  children,
  className,
  ...props
}: HeadingTitleProps) => {
  return (
    <Styles.HeadingTitle
      {...props}
      className={`${poppins.className} ${className}`}
    >
      {children}
    </Styles.HeadingTitle>
  );
};
