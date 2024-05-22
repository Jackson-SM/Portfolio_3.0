import { HeadingTitle } from "@/components/HeadingTitle/Heading";
import { Heading } from "@radix-ui/themes";
import { Poppins } from "next/font/google";
import * as Styles from "./styles";

export const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export const InfoProject = () => {
  return (
    <Styles.InfoProjectContainer>
      <HeadingTitle as="h3" size="7">
        Detalhes
      </HeadingTitle>
      <div>
        <Heading as="h4" size="5" className={`${poppins.className}`}>
          Tecnologias e Frameworks
        </Heading>
        <div>
          <ul>
            <li>React</li>
            <li>Next.js</li>
            <li>Stitches</li>
          </ul>
        </div>
      </div>
      <div>
        <Heading as="h4" size="5" className={`${poppins.className}`}>
          Descrição
        </Heading>
        <div>
          <p>
            Projeto desenvolvido para aprimorar minhas habilidades com Next.js,
            Stitches e NextAuth.Projeto desenvolvido para aprimorar minhas
            habilidades com Next.js, Stitches e NextAuth.Projeto desenvolvido
            para aprimorar minhas habilidades com Next.js, Stitches e
            NextAuth.Projeto desenvolvido para aprimorar minhas habilidades com
            Next.js, Stitches e NextAuth.Projeto desenvolvido para aprimorar
            minhas habilidades com Next.js, Stitches e NextAuth.
          </p>
        </div>
      </div>
    </Styles.InfoProjectContainer>
  );
};
