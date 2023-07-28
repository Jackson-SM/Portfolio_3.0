import React from "react";
import * as Styled from "./styles";
import { Logo } from "../Logo";

import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const Navbar = () => {
  return (
    <Styled.Navbar className={`${poppins.className}`}>
      <Logo />
    </Styled.Navbar>
  );
};
