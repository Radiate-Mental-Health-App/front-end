import { Center, Heading, SimpleGrid, Box } from "@chakra-ui/react";
import ArticleCard from "./ArticleCard.component.jsx";
import ArticleList from "./ArticleList.component.jsx";

function WellnessCenter() {
  return (
    <div>
      {/* <SimpleGrid columns={2} spacingY="20px">
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
      </SimpleGrid> */}
      <ArticleList />
    </div>
  );
}

export default WellnessCenter;
