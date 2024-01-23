import { Text } from "@radix-ui/themes";
import * as Styled from "./styles";

type LetterProps = React.ComponentProps<
  typeof Text & typeof Styled.LetterStyled
>;

export const Letter = ({ children, ...props }: LetterProps) => {
  return <Styled.LetterStyled {...props}>{children}</Styled.LetterStyled>;
};
