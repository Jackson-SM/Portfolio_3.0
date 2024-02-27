import { Code, Gear, Laptop } from "@phosphor-icons/react";
import { Button } from "@radix-ui/themes";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { StackListTypes } from "../../SectionStacks";
import * as Styles from "./styles";

type ButtonOptionsStacksProps = {
  handleStackList: (stackType: StackListTypes) => void;
};

export const ButtonsOptionsStacks = ({
  handleStackList,
}: ButtonOptionsStacksProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [lineProperties, setLineProperties] = useState<{
    left: number;
    width: number;
  }>({
    left: 0,
    width: 0,
  });
  const buttonsStacks: {
    stack: StackListTypes;
    icon: JSX.Element;
    string: string;
  }[] = [
    {
      stack: "backend",
      icon: <Code width="22" height="22" />,
      string: "Back-end",
    },
    {
      stack: "frontend",
      icon: <Laptop width="22" height="22" />,
      string: "Front-end",
    },
    { stack: "tools", icon: <Gear width="22" height="22" />, string: "Tools" },
  ];

  useEffect(() => {
    if (containerRef.current) {
      const firstElement =
        (containerRef.current.firstElementChild as HTMLButtonElement) || null;
      setLineProperties({
        left: firstElement?.offsetLeft || 0,
        width: firstElement?.getBoundingClientRect().width || 0,
      });
    }
  }, []);

  const handleLinePosition = (event: MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    setLineProperties((prev) => ({
      ...prev,
      left: target.offsetLeft,
      width: target.offsetWidth,
    }));
  };

  return (
    <Styles.ButtonsOptionsContainer
      css={{
        "&::before": {
          width: `${lineProperties.width}px`,
          left: `${lineProperties.left}px`,
        },
      }}
      ref={containerRef}
    >
      {buttonsStacks.map(({ stack, icon, string }) => (
        <ButtonOptionStackCustom
          key={string}
          stack={stack}
          handleLinePosition={handleLinePosition}
          handleStackList={handleStackList}
        >
          {icon} {string}
        </ButtonOptionStackCustom>
      ))}
    </Styles.ButtonsOptionsContainer>
  );
};

type ButtonOptionsStackCustomProps = React.ComponentProps<typeof Button> & {
  handleStackList: (stackType: StackListTypes) => void;
  stack: StackListTypes;
  handleLinePosition: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const ButtonOptionStackCustom = ({
  children,
  ref,
  stack,
  handleStackList,
  handleLinePosition,
  ...props
}: ButtonOptionsStackCustomProps) => {
  return (
    <Button
      variant="ghost"
      radius="medium"
      color="gray"
      size="3"
      ref={ref}
      {...props}
      onClick={(event) => {
        handleStackList(stack);
        handleLinePosition(event);
      }}
    >
      {children}
    </Button>
  );
};
