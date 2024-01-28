import { Heading } from "@radix-ui/themes";
import * as Styles from "./styles";

type HeadingTitleProps = React.ComponentProps<typeof Heading>;
export const HeadingTitle = ({ children, ...props }: HeadingTitleProps) => {
  return <Styles.HeadingTitle {...props}>{children}</Styles.HeadingTitle>;
};
