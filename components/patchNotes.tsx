import { Box, Text, Img } from "@chakra-ui/react";
import client from "../resources/contentfulClient";

const PatchNotes = async (props) => {
  return props.forEach((entry) => {
    <Box>
      <h1>{entry.fields.version}</h1>
      <Text>{entry.fields.content}</Text>
      {entry.fields.image && <Img>{entry.fields.image}</Img>}
    </Box>;
  });
};

export async function getStaticProps() {
  // @ts-ignore property items exists on entries but is not in the type
  const content: {
    items: [
      {
        fields: { version: string; content: string; image: string };
      }
    ];
  } = await client.getEntries({ content_type: "patchNotes" });
  return {
    props: content.items,
  };
}

export default PatchNotes;
