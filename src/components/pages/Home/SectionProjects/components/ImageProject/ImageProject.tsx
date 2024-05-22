import projectImage from "@/assets/projects/hockey.png";
import { AspectRatio } from "@radix-ui/themes";
import Image from "next/image";
import * as Styles from "./styles";

export const ImageProject = () => {
  return (
    <Styles.ImageProjectContainer>
      <AspectRatio
        ratio={16 / 8}
        style={{ borderRadius: 5, overflow: "hidden" }}
      >
        <Image src={projectImage} alt="hockey" fill={true} />
      </AspectRatio>
    </Styles.ImageProjectContainer>
  );
};
