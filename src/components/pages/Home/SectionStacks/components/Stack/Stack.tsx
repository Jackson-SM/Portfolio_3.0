import { StacksProps } from "@/components/types/StackProps";
import { transparentize } from "polished";
import * as Styles from "./styles";

type StacksPropsComponent = React.ComponentProps<typeof Styles.Stack> &
  StacksProps;

export const Stack = ({ children, ...props }: StacksPropsComponent) => {
  const { title, src, alt, color } = props;

  return (
    <Styles.Stack
      {...props}
      css={{
        "&:hover": {
          [`& ${Styles.StackImage}`]: {
            boxShadow: `0 5px 20px 0px ${transparentize(0.9, color)}`,
          },
        },
      }}
    >
      <Styles.StackImage
        src={src}
        alt={alt}
        width={40}
        height={40}
        css={{
          background: `${transparentize(0.9, color)}`,
        }}
      />
      {title}
      {children}
    </Styles.Stack>
  );
};
