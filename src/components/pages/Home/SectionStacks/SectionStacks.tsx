import { HeadingTitle } from "@/components/HeadingTitle/Heading";
import { Letter } from "@/components/Letter/Letter";
import { keyframes } from "@/config/stitches.config";
import { Code, Gear, Laptop } from "@phosphor-icons/react";
import { Box, Button, Flex, Grid, Text } from "@radix-ui/themes";
import { useState } from "react";
import { Stack } from "./components/Stack/Stack";
import { stacksBackend, stacksFrontend, stacksTools } from "./stacks";
import * as Styles from "./styles";

const animationStacks = keyframes({
  "0%": {
    opacity: 0,
    transform: "translateY(-20px)",
  },
  "100%": {
    opacity: 1,
    transform: "translateY(0)",
  },
});

export const SectionStacks = () => {
  const [stackList, setStackList] = useState("backend");

  return (
    <Styles.SectionStacks>
      <Flex gap="9" align="center" direction="column" justify="center">
        <Box width="100%">
          <Flex gap="4" direction="column" align="center">
            <HeadingTitle as="h2" style={{ fontSize: "3rem" }}>
              Minhas tecnologias de desenvolvimento <Letter>Full-stack</Letter>
            </HeadingTitle>
            <Text as="p" style={{ maxWidth: "60%" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem similique ab, sed expedita quos enim sapiente unde
              accusamus iure vel quaerat, placeat <Letter>Node</Letter>,{" "}
              <Letter>React</Letter>, quidem <Letter>Vue</Letter>! Dicta
              repellat maxime distinctio perferendis! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Vero quis mollitia autem tenetur
              iure? Sequi modi corrupti explicabo quo, doloremque dignissimos
              accusantium quidem, error labore facilis cum perferendis
              praesentium. Reiciendis!
            </Text>
          </Flex>
        </Box>
        <Flex gap="8" align="center" justify="between">
          <Button
            variant="ghost"
            radius="full"
            color="gray"
            size="3"
            onClick={() => setStackList("backend")}
          >
            <Code width="22" height="22" /> Back-end
          </Button>
          <Button
            variant="ghost"
            radius="full"
            color="gray"
            size="3"
            onClick={() => setStackList("frontend")}
          >
            <Laptop width="22" height="22" /> Front-end
          </Button>
          <Button
            variant="ghost"
            radius="full"
            color="gray"
            size="3"
            onClick={() => setStackList("tools")}
          >
            <Gear width="22" height="22" /> DevOps
          </Button>
        </Flex>
        <Box
          style={{
            width: "100%",
            maxWidth: "60%",
          }}
        >
          <Grid
            asChild
            gap="4"
            columns={{
              initial: "1",
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
                      animation: `${animationStacks} 1s ease-in-out forwards`,
                      animationDelay: `${(index + 1) / 4}s`,
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
                      animation: `${animationStacks} 1s ease-in-out forwards`,
                      animationDelay: `${(index + 1) / 4}s`,
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
                      animation: `${animationStacks} 1s ease-in-out forwards`,
                      animationDelay: `${(index + 1) / 4}s`,
                    }}
                  />
                ))}
            </ul>
          </Grid>
        </Box>
      </Flex>
    </Styles.SectionStacks>
  );
};
