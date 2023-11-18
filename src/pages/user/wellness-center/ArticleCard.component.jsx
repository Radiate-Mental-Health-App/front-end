import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Button, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function ArticleCard() {
  return (
    <Card direction={{ base: "column", sm: "row" }} overflow="hidden" variant="outline" margin={5}>
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody>
          <Heading size="md">Article Title</Heading>

          <Text py="2">Article Summary</Text>
        </CardBody>

        <CardFooter>
          <Link to="article">
            <Button variant="solid" bg={"#FFAC31"} color={"white"}>
              Read
            </Button>
          </Link>
        </CardFooter>
      </Stack>
    </Card>
  );
}

export default ArticleCard;
