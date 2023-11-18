import { Center, Heading, SimpleGrid, Box } from "@chakra-ui/react";
import ArticleCard from "./ArticleCard.component.jsx";

function WellnessCenter() {
  return (
    <div>
      <Heading size="xl" color="gray.400" margin={5}>
        Wellness Center
      </Heading>
      <SimpleGrid columns={2} spacingY="20px">
        <Box height="190px">
          <ArticleCard />
        </Box>
        <Box height="190px">
          <ArticleCard />
        </Box>
        <Box height="190px">
          <ArticleCard />
        </Box>
        <Box height="190px">
          <ArticleCard />
        </Box>
        <Box height="190px">
          <ArticleCard />
        </Box>
      </SimpleGrid>
    </div>
  );
}

export default WellnessCenter;
