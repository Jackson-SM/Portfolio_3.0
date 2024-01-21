import { Logo } from "../Logo";
import * as Styled from "./styles";

import { Flex } from "@radix-ui/themes";
import { Poppins } from "next/font/google";
import { HoverThemeButton } from "../HoverThemeButton/HoverThemeButton";
import { Link } from "../Link";

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
      </Styled.Links>
      <Flex align="center" gap="3">
        <HoverThemeButton variant="soft" radius="full" />
      </Flex>
    </Styled.Navbar>
  );
};
