import projectImage from "@/assets/projects/hockey.png";
import Image from "next/image";
import * as Styles from "./styles";

export const ImageProject = () => {
  return (
    <Styles.ImageProjectContainer>
      <Image src={projectImage} alt="hockey" fill={true} />
    </Styles.ImageProjectContainer>
  );
};
