import { ButtonLink } from "@/components/Button";
import { HeadingTitle } from "@/components/HeadingTitle/Heading";
import { Letter } from "@/components/Letter/Letter";
import { ProjectTypes } from "@/data/projects";
import { ExternalLinkIcon, Link1Icon } from "@radix-ui/react-icons";
import {
  AspectRatio,
  Card,
  Flex,
  HoverCard,
  Inset,
  Text,
  Tooltip,
} from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import * as Styles from "./styles";

type CardProjectProps = {
  project: ProjectTypes;
};

export const CardProject = ({ project }: CardProjectProps) => {
  const slugPortfolio = `projects/${project.slug}`;

  return (
    <Styles.CardProjectContainer>
      <HoverCard.Root>
        <HoverCard.Trigger>
          <Card size="4" style={{ width: "100%" }}>
            <Inset clip="padding-box" side="top" pb="current">
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={project.coverImg}
                  alt="coverimg"
                  objectFit="cover"
                  style={{ width: "100%", height: "100%" }}
                />
              </AspectRatio>
            </Inset>
            <Styles.CardProjectDescription>
              <Flex justify="between">
                <HeadingTitle size="6" css={{ margin: 0, padding: 0 }}>
                  <Letter>{project.title}</Letter>
                </HeadingTitle>
                <Tooltip content="Ver mais" style={{ zIndex: 7 }}>
                  <Link href={slugPortfolio} style={{ alignSelf: "end" }}>
                    <Link1Icon width="20" height="20" />
                  </Link>
                </Tooltip>
              </Flex>
              <Flex gap="2">
                <ButtonLink
                  href="#"
                  css={{ fontSize: "0.7rem", padding: "10px 20px" }}
                >
                  Website <ExternalLinkIcon />
                </ButtonLink>
              </Flex>
            </Styles.CardProjectDescription>
          </Card>
        </HoverCard.Trigger>
        <HoverCard.Content style={{ maxWidth: "300px" }}>
          <Flex direction="column" gap="2">
            <HeadingTitle size="4">Descrição</HeadingTitle>
            <Flex>
              <Text size="2">{project.description}</Text>
            </Flex>
          </Flex>
        </HoverCard.Content>
      </HoverCard.Root>
    </Styles.CardProjectContainer>
  );
};
