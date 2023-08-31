import React from "react";
import * as Styled from "./styles";
import { Poppins } from "next/font/google";

type ButtonProps = React.ComponentProps<typeof Styled.Button> & {
  as?: string;
};

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <Styled.Button className={poppins.className} as={props.as} {...props}>
      {children}
    </Styled.Button>
  );
};
