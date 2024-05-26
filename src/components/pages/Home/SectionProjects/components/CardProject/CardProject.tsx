import coverImg from "@/assets/projects/hockey.png";
import { AspectRatio } from "@radix-ui/themes";
import Image from "next/image";
import * as Styles from "./styles";

export const CardProject = () => {
  return (
    <Styles.CardProjectContainer>
      <AspectRatio ratio={16 / 8}>
        <Image
          src={coverImg}
          alt=""
          style={{ height: "100%", width: "100%" }}
        />
      </AspectRatio>
    </Styles.CardProjectContainer>
  );
};
