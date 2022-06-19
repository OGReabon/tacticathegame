import { Box, Text } from "@chakra-ui/react";
import client from "../resources/contentfulClient";

const Intro = async (props) => {
  return (
    <Box>
      <h1>{props.heading}</h1>
      <Text>{props.content}</Text>
    </Box>
  );
};

export async function getStaticProps() {
  // @ts-ignore property items exists on entries but is not in the type
  const content: {
    items: [{ fields: { introTitle: string; introContent: string } }];
  } = await client.getEntries({ content_type: "introduction" });
  return {
    props: {
      heading: content.items[0].fields.introTitle,
      content: content.items[0].fields.introContent,
    },
  };
}

export default Intro;
