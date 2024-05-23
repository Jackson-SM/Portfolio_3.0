import { Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import { StacksProps } from "../types/StackProps";
import * as Styles from "./styles";

type StackV2PropsComponent = React.ComponentProps<
  typeof Styles.StackV2Container
> &
  Omit<StacksProps, "color">;

export const StackV2 = ({
  children,
  title,
  src,
  alt,
  ...props
}: StackV2PropsComponent) => {
  return (
    <Styles.StackV2Container {...props}>
      <Flex
        direction="column"
        justify="center"
        align="center"
        style={{ height: "100%", padding: 10 }}
        gap="2"
      >
        <Image src={src} alt={alt} style={{ width: "75%", height: "75%" }} />
        <Text size="2">{title}</Text>
      </Flex>
      {children}
    </Styles.StackV2Container>
  );
};
