import React from "react";
import * as Styled from "./styles";

type LinkProps = React.ComponentProps<typeof Styled.Link>;

export const Link = ({ children, ...props }: LinkProps) => {
  return <Styled.Link {...props}>{children}</Styled.Link>;
};
