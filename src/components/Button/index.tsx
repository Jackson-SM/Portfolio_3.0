import { Poppins } from "next/font/google";
import React from "react";
import * as Styled from "./styles";

type ButtonProps = React.ComponentProps<typeof Styled.Button> &
  React.ComponentProps<"a"> & {
    as?: string;
  };

type ButtonLinkProps = React.ComponentProps<typeof Styled.Link>;

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <Styled.Button className={poppins.className} as={props.as} {...props}>
      {children}
    </Styled.Button>
  );
};

export const ButtonLink = ({ children, ...props }: ButtonLinkProps) => {
  return <Styled.Link {...props}>{children}</Styled.Link>;
};
