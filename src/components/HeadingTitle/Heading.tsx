import * as Styles from "./styles";

type HeadingTitleProps = React.ComponentProps<typeof Styles.HeadingTitle>;
export const HeadingTitle = ({ children, ...props }: HeadingTitleProps) => {
  return <Styles.HeadingTitle {...props}>{children}</Styles.HeadingTitle>;
};
