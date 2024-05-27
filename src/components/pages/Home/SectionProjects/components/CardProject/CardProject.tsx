import { ButtonLink } from "@/components/Button";
import { HeadingTitle } from "@/components/HeadingTitle/Heading";
import { Letter } from "@/components/Letter/Letter";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { AspectRatio, Card, Flex, Inset } from "@radix-ui/themes";
import Image, { StaticImageData } from "next/image";
import * as Styles from "./styles";

type CardProjectProps = {
  stacksCodes: string[];
  coverImg: StaticImageData;
};

export const CardProject = ({ coverImg }: CardProjectProps) => {
  return (
    <Styles.CardProjectContainer>
      <Card size="4" style={{ width: "100%" }}>
        <Inset clip="padding-box" side="top" pb="current">
          <AspectRatio ratio={16 / 8}>
            <Image
              src={coverImg}
              alt="coverimg"
              objectFit="cover"
              style={{ width: "100%", height: "100%" }}
            />
          </AspectRatio>
        </Inset>
        <Styles.CardProjectDescription>
          <HeadingTitle size="6" css={{ margin: 0, padding: 0 }}>
            <Letter>Hockey</Letter>
          </HeadingTitle>
          <Flex gap="2">
            <ButtonLink
              href="#"
              css={{ fontSize: "0.7rem", padding: "10px 20px" }}
            >
              Website <ExternalLinkIcon />
            </ButtonLink>
            <ButtonLink
              href="#"
              css={{ fontSize: "0.7rem", padding: "10px 20px" }}
            >
              Repositório <GitHubLogoIcon />
            </ButtonLink>
          </Flex>
        </Styles.CardProjectDescription>
      </Card>
    </Styles.CardProjectContainer>
  );
};
