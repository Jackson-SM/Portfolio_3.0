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
          layout="fill"
          objectFit="cover"
          style={{
            borderRadius: "50%",
          }}
        />
      </AspectRatio>
    </Styles.ProfilePictureBox>
  );
};
