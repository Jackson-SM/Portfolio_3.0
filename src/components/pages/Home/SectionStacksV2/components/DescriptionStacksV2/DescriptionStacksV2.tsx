import { HeadingTitle } from "@/components/HeadingTitle/Heading";
import { Letter } from "@/components/Letter/Letter";
import * as Styles from "./styles";

export const DescriptionStacksV2 = () => {
  return (
    <Styles.DescriptionStacksV2Container>
      <HeadingTitle size="9" style={{ fontWeight: "bold" }}>
        Soft <Letter>Skills</Letter>
      </HeadingTitle>
      <Styles.TextDescriptionStacks as="p" size="3">
        Ao longo da minha carreira, aprendi a comunicar conceitos técnicos de
        forma clara, resolver problemas com criatividade e eficiência, colaborar
        efetivamente com colegas e stakeholders, e adaptar-me rapidamente a
        novas tecnologias e técnicas.
      </Styles.TextDescriptionStacks>
    </Styles.DescriptionStacksV2Container>
  );
};
