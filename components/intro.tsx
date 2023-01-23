import { Box, Text } from "@chakra-ui/react";

const Intro = ({ content }: { content: any }) => {
  return (
    <Box>
      <h1>{content.items[0].fields.introTitle}</h1>
      <Text>
        {content.items[0].fields.introContent.content[0].content[0].value}
      </Text>
    </Box>
  );
};

export default Intro;
