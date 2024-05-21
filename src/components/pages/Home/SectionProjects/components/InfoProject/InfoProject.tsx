import { Heading } from "@radix-ui/themes";
import * as Styles from "./styles";

export const InfoProject = () => {
  return (
    <Styles.InfoProjectContainer>
      <Heading as="h3" size="7">
        Detalhes
      </Heading>
      <div>
        <h3>Tecnologias e Frameworks</h3>
        <div>
          <ul>
            <li>React</li>
            <li>Next.js</li>
            <li>Stitches</li>
          </ul>
        </div>
      </div>
      <div>
        <div>Descrição</div>
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
