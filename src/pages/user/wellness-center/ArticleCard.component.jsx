import { Box, Heading, Image, Text, Divider, HStack, Tag, Wrap, WrapItem, useColorModeValue, Container, VStack, Card, CardHeader, CardBody, CardFooter, Stack, ButtonGroup, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ArticleCard = ({ title, imageUrl, summary }) => {
  return (
    <Card maxW="sm" marginTop="5" marginBottom="3">
      <CardBody>
        <Image src={imageUrl} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Link to="article">
            <Heading size="md">{title}</Heading>
          </Link>

          <Text>{summary}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ArticleCard;
