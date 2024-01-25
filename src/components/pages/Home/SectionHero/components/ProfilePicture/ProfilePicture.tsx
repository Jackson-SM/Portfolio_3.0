import { AspectRatio } from "@radix-ui/themes";
import Image from "next/image";
import * as Styles from "./styles";

export const ProfilePicture = () => {
  return (
    <Styles.ProfilePictureBox>
      <Image
        src="/icons-langs/nodejs.svg"
        alt="nodejs"
        width="50"
        height="50"
        style={{ position: "absolute", top: "50%", left: "-30px" }}
      />
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
