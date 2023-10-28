// Chakra imports
import { Box, Card, CardBody, Text, useColorModeValue } from "@chakra-ui/react";

export default function Information(props) {
  // eslint-disable-next-line react/prop-types
  const { title, value, ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const bg = useColorModeValue("white", "navy.700");
  return (
    <Card bg={bg} {...rest}>
      <CardBody>
      <Box>
        <Text fontWeight='500' color={textColorSecondary} fontSize='sm'>
          {title}
        </Text>
        <Text color={textColorPrimary} fontWeight='500' fontSize='md'>
          {value}
        </Text>
      </Box>
      </CardBody>
    </Card>
  );
}
