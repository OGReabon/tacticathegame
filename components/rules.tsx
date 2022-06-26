import { Box, Text, Img } from "@chakra-ui/react";
import { EntryCollection } from "contentful";
import client from "../resources/contentfulClient";

const Rules = async (props, preview = false) => {
  return !preview ? (
    props.forEach((entry) => {
      <Box>
        <h1>{entry.fields.sectionTitle}</h1>
        <Text>{entry.fields.sectionContent}</Text>
        {entry.fields.sectionImage && <Img>{entry.fields.sectionImage}</Img>}
      </Box>;
    })
  ) : (
    // only show preview on landing page
    <Box>
      <h1>{props[0].fields.sectionTitle}</h1>
      <Text>{props[0].fields.sectionContent}</Text>
    </Box>
  );
};

Rules.getStaticProps = async () => {
  const content: {
    items:
      | EntryCollection<{
          fields: {
            sectionTitle: string;
            sectionContent: string;
            image: string;
          };
        }>
      | unknown;
  } = await client.getEntries({ content_type: "rules" });
  return {
    props: content.items,
  };
};

export default Rules;
