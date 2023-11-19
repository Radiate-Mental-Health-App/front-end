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
        <Box height="500px">
          <ArticleCard
            title="Nurturing Minds: A Journey to Mental Wellness"
            imageUrl="https://media.licdn.com/dms/image/D4E12AQGZUXfeYdFxCg/article-cover_image-shrink_720_1280/0/1684841363369?e=2147483647&v=beta&t=Sa6S3js7i2GodasBOAQlTOX7gkx2FWune-rHtFNDILY"
            summary="In our fast-paced and demanding world, taking care of our mental health is more crucial than ever. Mental well-being is not merely the absence of mental illnesses; it encompasses our emotional, psychological, and social health. "
          />
        </Box>
        <Box height="80px">
          <ArticleCard
            title="Breaking the Silence: Understanding and Addressing Mental Illness"
            imageUrl="https://apibhs.com/wp-content/uploads/2022/05/Depositphotos_134029518_L-1.jpg"
            summary="In a world that often prioritizes physical health, the significance of mental health can be overlooked. Mental illness affects millions of individuals globally, yet misconceptions and stigma persist.  "
          />
        </Box>
        <Box height="500px">
          <ArticleCard
            title="Embracing Wellness: A Holistic Approach to Mental Well-Being"
            imageUrl="https://nhscarevolunteerresponders.org/documents/5-steps-to-mental-wellbeing-1188.jpg"
            summary="Mental well-being goes beyond momentary happiness, it reflects a state of satisfaction with life and a sense of purpose"
          />
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
