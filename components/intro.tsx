import { Box, Text } from "@chakra-ui/react";
import { EntryCollection } from "contentful";
import client from "../resources/contentfulClient";

const Intro = async (props) => {
  return (
    <Box>
      <h1>{props.heading}</h1>
      <Text>{props.content}</Text>
    </Box>
  );
};

Intro.getStaticProps = async () => {
  const content: {
    items:
      | EntryCollection<{ introTitle: string; introContent: string }>
      | unknown;
  } = await client.getEntries({ content_type: "introduction" });
  return {
    props: {
      heading: content.items[0].fields.introTitle,
      content: content.items[0].fields.introContent,
    },
  };
};

export default Intro;
