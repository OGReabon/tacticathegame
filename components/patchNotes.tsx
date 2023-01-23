import { Box, Text, Img } from "@chakra-ui/react";

const PatchNotes = ({
  content,
  preview = false,
}: {
  content: any;
  preview?: boolean;
}) => {
  return (
    <Box>
      {!preview ? (
        content.items.forEach((entry) => {
          <Box>
            <h1>{entry.fields.version}</h1>
            <Text>{entry.fields.content.content[0].content[0].value}</Text>
            {entry.fields.image && <Img>{entry.fields.image}</Img>}
          </Box>;
        })
      ) : (
        <Box>
          <h1>{content.items[0].fields.version}</h1>
          <Text>
            {content.items[0].fields.content.content[0].content[0].value}
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default PatchNotes;
