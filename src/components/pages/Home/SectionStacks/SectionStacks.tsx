import { Flex } from "@radix-ui/themes";
import { useState } from "react";
import { ButtonsOptionsStacks } from "./components/ButtonsOptionsStacks/ButtonsOptionsStacks";
import { DescriptionSectionStacks } from "./components/DescriptionSectionStacks/DescriptionSectionStacks";
import { StackList } from "./components/StackList/StackList";
import * as Styles from "./styles";

export type StackListTypes = "backend" | "frontend" | "tools";

export const SectionStacks = () => {
  const [stackList, setStackList] = useState<StackListTypes>("backend");

  const handleStackList = (stackType: StackListTypes) => {
    setStackList(stackType);
  };

  return (
    <Styles.SectionStacks>
      <Flex gap="9" align="center" direction="column" justify="between">
        <DescriptionSectionStacks />
        <ButtonsOptionsStacks
          handleStackList={handleStackList}
          stackList={stackList}
        />
        <StackList stackList={stackList} />
      </Flex>
    </Styles.SectionStacks>
  );
};
