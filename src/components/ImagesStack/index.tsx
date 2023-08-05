import Image from "next/image";
import React from "react";
import * as Styled from "./styles";
type ImageStackProps = React.ComponentProps<typeof Image>;

export const ImageStack = ({ children, ...props }: ImageStackProps) => {
  return (
    <Styled.ImageStackContainer>
      <Styled.ImageStack {...props}>{children}</Styled.ImageStack>
    </Styled.ImageStackContainer>
  );
};
