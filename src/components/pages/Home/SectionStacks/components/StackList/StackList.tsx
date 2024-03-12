import { keyframes } from "@/config/stitches.config";
import { Grid } from "@radix-ui/themes";
import { StackListTypes } from "../../SectionStacks";
import { stacksBackend, stacksFrontend, stacksTools } from "../../stacks";
import { Stack } from "../Stack/Stack";
import * as Styles from "./styles";
type StackListProps = {
  stackList: StackListTypes;
};

const animationStacks = keyframes({
  "0%": {
    opacity: 0,
    transform: "translateY(-40px)",
  },
  "100%": {
    opacity: 1,
    transform: "translateY(0)",
  },
});

export const StackList = ({ stackList }: StackListProps) => {
  return (
    <Styles.StackList>
      <Grid
        asChild
        gap="4"
        columns={{
          initial: "2",
          xs: "2",
          sm: "2",
          md: "3",
          lg: "3",
          xl: "4",
        }}
        align="center"
        width="auto"
      >
        <ul>
          {stackList == "backend" &&
            stacksBackend.map((stack, index) => (
              <Stack
                key={stack.title}
                title={stack.title}
                src={stack.src}
                color={stack.color}
                style={{
                  opacity: 0,
                  animation: `${animationStacks} 0.5s ease-in-out forwards`,
                  animationDelay: `${(index + 1) / 5}s`,
                }}
              />
            ))}
          {stackList == "frontend" &&
            stacksFrontend.map((stack, index) => (
              <Stack
                key={stack.title}
                title={stack.title}
                src={stack.src}
                color={stack.color}
                style={{
                  opacity: 0,
                  animation: `${animationStacks} 0.5s ease-in-out forwards`,
                  animationDelay: `${(index + 1) / 5}s`,
                }}
              />
            ))}
          {stackList == "tools" &&
            stacksTools.map((stack, index) => (
              <Stack
                key={stack.title}
                title={stack.title}
                src={stack.src}
                color={stack.color}
                style={{
                  opacity: 0,
                  animation: `${animationStacks} 0.5s ease-in-out forwards`,
                  animationDelay: `${(index + 1) / 5}s`,
                }}
              />
            ))}
        </ul>
      </Grid>
    </Styles.StackList>
  );
};
