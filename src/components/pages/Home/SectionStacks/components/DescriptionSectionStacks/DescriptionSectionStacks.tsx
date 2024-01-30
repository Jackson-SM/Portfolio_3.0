import { HeadingTitle } from "@/components/HeadingTitle/Heading";
import { Letter } from "@/components/Letter/Letter";
import { Box, Flex, Text } from "@radix-ui/themes";

export const DescriptionSectionStacks = () => {
  return (
    <Box width="100%">
      <Flex gap="4" direction="column" align="center">
        <HeadingTitle size="2" style={{ textAlign: "center" }}>
          Minhas tecnologias de desenvolvimento <Letter>Full-stack</Letter>
        </HeadingTitle>
        <Text
          as="p"
          style={{ textAlign: "center" }}
          size={{
            initial: "1",
            xs: "1",
            sm: "3",
            md: "4",
            lg: "5",
            xl: "4",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          similique ab, sed expedita quos enim sapiente unde accusamus iure vel
          quaerat, placeat <Letter>Node</Letter>, <Letter>React</Letter>, quidem{" "}
          <Letter>Vue</Letter>! Dicta repellat maxime distinctio perferendis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quis
          mollitia autem tenetur iure? Sequi modi corrupti explicabo quo,
          doloremque dignissimos accusantium quidem, error labore facilis cum
          perferendis praesentium. Reiciendis!
        </Text>
      </Flex>
    </Box>
  );
};
