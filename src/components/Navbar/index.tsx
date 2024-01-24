import { Logo } from "../Logo";
import * as Styled from "./styles";

import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
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
      <Flex align="center" gap="4">
        <HoverThemeButton variant="soft" radius="full" />
        <Link href="https://github.com/Jackson-SM" target="_blank">
          <GitHubLogoIcon />
        </Link>
        <Link
          href="https://www.linkedin.com/in/jackson-magalhaes/"
          target="_blank"
        >
          <LinkedInLogoIcon />
        </Link>
      </Flex>
    </Styled.Navbar>
  );
};
