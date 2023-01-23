import { Box, Text, Img } from "@chakra-ui/react";

const Rules = ({
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
            <h1>{entry.fields.sectionTitle}</h1>
            <Text>
              {entry.fields.sectionContent.content[0].content[0].value}
            </Text>
            {entry.fields.sectionImage && (
              <Img>{entry.fields.sectionImage}</Img>
            )}
          </Box>;
        })
      ) : (
        // only show preview on landing page
        <Box>
          <h1>{content.items[0].fields.sectionTitle}</h1>
          <Text>
            {content.items[0].fields.sectionContent.content[0].content[0].value}
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default Rules;
