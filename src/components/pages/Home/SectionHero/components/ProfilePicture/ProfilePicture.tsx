import { AspectRatio } from "@radix-ui/themes";
import Image from "next/image";
import { StacksList } from "../StacksList/StacksList";
import * as Styles from "./styles";

export const ProfilePicture = () => {
  return (
    <Styles.ProfilePictureBox>
      <StacksList />
      <AspectRatio ratio={1 / 1}>
        <Image
          src={"/pfp.png"}
          alt="hero"
          width={500}
          height={500}
          priority
          quality={100}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            width: "100%",
            height: "auto",
          }}
        />
      </AspectRatio>
    </Styles.ProfilePictureBox>
  );
};
