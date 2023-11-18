import { Box, Heading, Image, Text, Divider, HStack, Tag, Wrap, WrapItem, useColorModeValue, Container, VStack, SimpleGrid } from "@chakra-ui/react";
import ArticleCard from "./ArticleCard.component";

const ArticleList = () => {
  return (
    <Container maxW={"7xl"} p="12">
      <Box marginTop={{ base: "1", sm: "5" }} display="flex" flexDirection={{ base: "column", sm: "row" }} justifyContent="space-between">
        <Box display="flex" flex="1" marginRight="3" position="relative" alignItems="center">
          <Box width={{ base: "100%", sm: "85%" }} zIndex="2" marginLeft={{ base: "0", sm: "5%" }} marginTop="5%">
            <Box textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image borderRadius="lg" src={"https://neurosciencenews.com/files/2021/11/metacognition-mental-health.jpg.webp"} alt="some good alt text" objectFit="contain" />
            </Box>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box bgGradient={useColorModeValue("radial(orange.600 1px, transparent 1px)", "radial(orange.300 1px, transparent 1px)")} backgroundSize="20px 20px" opacity="0.4" height="100%" />
          </Box>
        </Box>
        <Box display="flex" flex="1" flexDirection="column" justifyContent="center" marginTop={{ base: "3", sm: "0" }}>
          <Heading marginTop="1">
            <Text textDecoration="none" _hover={{ textDecoration: "none" }}>
              Wellness Center
            </Text>
          </Heading>
          <Text as="p" marginTop="2" color={useColorModeValue("gray.700", "gray.200")} fontSize="lg">
            This page is a hub of mental health resources, offering a curated collection of articles covering topics from stress management to mindfulness. Designed to empower and educate, this page serves as a supportive space for
            individuals seeking practical guidance and fostering mental well-being. Explore a wealth of insights and tips on the journey to a healthier, more balanced life!
          </Text>
        </Box>
      </Box>
      <Heading as="h2" marginTop="5">
        Articles
      </Heading>
      <Divider marginTop="5" />

      <SimpleGrid columns={[2, null, 3]} spacing="40px">
        <Box height="400px">
          <ArticleCard />
        </Box>
        <Box height="80px">
          <ArticleCard />
        </Box>
        <Box height="80px">
          <ArticleCard />
        </Box>
        <Box height="80px">
          <ArticleCard />
        </Box>
        <Box height="80px">
          <ArticleCard />
        </Box>
        <Box height="80px">
          <ArticleCard />
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default ArticleList;
