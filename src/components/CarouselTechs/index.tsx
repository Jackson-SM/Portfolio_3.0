import React from "react";
import * as Styled from "./styles";
import Image from "next/image";

type StackProps = {
  name: string;
  icon: string;
  color?: string;
  width?: number;
  height?: number;
};
type CarouselTechsProps = React.ComponentProps<typeof Styled.CarouselItems> & {
  stack: StackProps[];
};

export const CarouselTechs = ({
  children,
  stack,
  ...props
}: CarouselTechsProps) => {
  return (
    <Styled.CarouselTechs>
      <Styled.CarouselItems {...props}>
        {stack.map((item) => {
          return (
            <Image
              src={item.icon}
              key={item.name}
              style={{
                accentColor: `${item.color}`,
                width: `${item.width}px`,
                height: `${item.height}px`,
              }}
              alt=""
            ></Image>
          );
        })}
      </Styled.CarouselItems>
      {children}
    </Styled.CarouselTechs>
  );
};
