import { HeadingTitle } from "@/components/HeadingTitle/Heading";
import { Letter } from "@/components/Letter/Letter";
import { Code, Gear, Laptop } from "@phosphor-icons/react";
import { Box, Button, Flex, Grid, Text } from "@radix-ui/themes";
import { Stack } from "./components/Stack/Stack";
import { stacksBackend } from "./stacks";
import * as Styles from "./styles";

export const SectionStacks = () => {
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
          <Button variant="ghost" radius="full" color="gray" size="3">
            <Code width="22" height="22" /> Back-end
          </Button>
          <Button variant="ghost" radius="full" color="gray" size="3">
            <Laptop width="22" height="22" /> Front-end
          </Button>
          <Button variant="ghost" radius="full" color="gray" size="3">
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
            {stacksBackend.map((stack) => {
              return <Stack key={stack.alt} {...stack} />;
            })}
          </Grid>
        </Box>
      </Flex>
    </Styles.SectionStacks>
  );
};
