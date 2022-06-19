import { Box, Text, Img } from "@chakra-ui/react";
import client from "../resources/contentfulClient";

const Rules = async (props) => {
  return props.forEach((entry) => {
    <Box>
      <h1>{entry.fields.sectionTitle}</h1>
      <Text>{entry.fields.sectionContent}</Text>
      {entry.fields.sectionImage && <Img>{entry.fields.sectionImage}</Img>}
    </Box>;
  });
};

export async function getStaticProps() {
  // @ts-ignore property items exists on entries but is not in the type
  const content: {
    items: [
      {
        fields: { sectionTitle: string; sectionContent: string; image: string };
      }
    ];
  } = await client.getEntries({ content_type: "rules" });
  return {
    props: content.items,
  };
}

export default Rules;
