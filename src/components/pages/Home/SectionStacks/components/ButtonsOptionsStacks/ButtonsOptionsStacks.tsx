import { Code, Gear, Laptop } from "@phosphor-icons/react";
import { Flex } from "@radix-ui/themes";
import { StackListTypes } from "../../SectionStacks";
import { Button } from "@/components/Button";

type ButtonOptionsStacksProps = {
  handleStackList: (stackType: StackListTypes) => void;
  stackList: StackListTypes;
};

export const ButtonsOptionsStacks = ({
  handleStackList,
  stackList,
}: ButtonOptionsStacksProps) => {
  return (
    <Flex gap="8" align="center" justify="between">
      <Button onClick={() => handleStackList("backend")}>
        <Code width="22" height="22" /> Back-end
      </Button>
      <Button onClick={() => handleStackList("frontend")}>
        <Laptop width="22" height="22" /> Front-end
      </Button>
      <Button onClick={() => handleStackList("tools")}>
        <Gear width="22" height="22" /> DevOps
      </Button>
    </Flex>
  );
};
