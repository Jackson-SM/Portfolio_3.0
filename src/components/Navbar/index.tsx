import React from "react";
import * as Styled from "./styles";
import { Logo } from "../Logo";

import { Poppins } from "next/font/google";
import { Link } from "../Links";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const Navbar = () => {
  return (
    <Styled.Navbar className={`${poppins.className}`}>
      <Logo />
      <Styled.Links>
        <Link href="#">Início</Link>
        <Link href="#">Sobre mim</Link>
        <Link href="#">Projetos</Link>
        <Link href="#">Habilidades</Link>
        <Link href="#">Contato</Link>
      </Styled.Links>
    </Styled.Navbar>
  );
};
