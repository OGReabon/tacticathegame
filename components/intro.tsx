import { Box, Text } from "@chakra-ui/react";
import client from "../resources/contentfulClient";

const Intro = async () => {
  const content: {
    fields: { introTitle: string; introContent: string };
  } = await client.getEntry("5KkTdyjZ37bvYqkEtGUEHc");
  return (
    <Box>
      <h1>{content.fields.introTitle}</h1>
      <Text>{content.fields.introContent}</Text>
    </Box>
  );
};

export default Intro;
