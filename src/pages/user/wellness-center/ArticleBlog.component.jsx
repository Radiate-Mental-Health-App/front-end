// Import necessary Chakra UI components
import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";

// Create the ArticleBlog component
const ArticleBlog = ({ title, imageUrl, paragraphText }) => {
  return (
    <Container maxW="container.xl">
      {/* Blog Post */}
      <Box mt="8">
        {/* Article Title */}
        <Heading as="h1" size="2xl" mb="4">
          Title
        </Heading>

        {/* Article Image */}
        <Image src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60" alt={title} mb="4" />

        {/* Article Paragraph Text */}
        <Text fontSize="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
          <Heading as="h2">What we write about</Heading>
          <Text as="p" fontSize="lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum quam arcu, eu tempus tortor molestie at. Vestibulum pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed imperdiet. Mauris quis erat
            consequat, commodo massa quis, feugiat sapien. Suspendisse placerat vulputate posuere. Curabitur neque tortor, mattis nec lacus non, placerat congue elit.
          </Text>
          <Text as="p" fontSize="lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum quam arcu, eu tempus tortor molestie at. Vestibulum pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed imperdiet. Mauris quis erat
            consequat, commodo massa quis, feugiat sapien. Suspendisse placerat vulputate posuere. Curabitur neque tortor, mattis nec lacus non, placerat congue elit.
          </Text>
          <Text as="p" fontSize="lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum quam arcu, eu tempus tortor molestie at. Vestibulum pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed imperdiet. Mauris quis erat
            consequat, commodo massa quis, feugiat sapien. Suspendisse placerat vulputate posuere. Curabitur neque tortor, mattis nec lacus non, placerat congue elit.
          </Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default ArticleBlog;
