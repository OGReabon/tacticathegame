import { Box, Text, Img } from "@chakra-ui/react";
import { EntryCollection } from "contentful";
import client from "../resources/contentfulClient";

const PatchNotes = async (props, preview = false) => {
  return !preview ? (
    props.forEach((entry) => {
      <Box>
        <h1>{entry.fields.version}</h1>
        <Text>{entry.fields.content}</Text>
        {entry.fields.image && <Img>{entry.fields.image}</Img>}
      </Box>;
    })
  ) : (
    <Box>
      <h1>{props[0].fields.version}</h1>
      <Text>{props[0].fields.content}</Text>
    </Box>
  );
};

PatchNotes.getStaticProps = async () => {
  const content: {
    items:
      | EntryCollection<{
          fields: { version: string; content: string; image: string };
        }>
      | unknown;
  } = await client.getEntries({ content_type: "patchNotes" });
  return {
    props: content.items,
  };
};

export default PatchNotes;
