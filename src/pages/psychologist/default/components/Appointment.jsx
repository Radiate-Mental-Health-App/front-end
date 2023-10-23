// Chakra imports
import { Button, Flex, Icon, Stack, Text } from "@chakra-ui/react";
// Custom components
import Card from "@/components/card/Card.jsx";
import React from "react";

// Assets
import {
  IoCalendarOutline,
  IoChatbubbleOutline,
  IoTimeOutline,
} from "react-icons/io5";

export default function Appointment(props) {
  const { ...rest } = props;

  return (
    <Card
      bgColor={"grass.100"}
      borderRadius="16px"
      border={"2px solid"}
      borderColor={"grass.300"}
      justifyContent="center"
      align="left"
      direction="column"
      w="100%"
      mb="0px"
      mt="16px"
      fontSize={"sm"}
      {...rest}
    >
      <Stack direction="row" spacing="auto" align="center" marginBottom={4}>
        <Text fontWeight={"bold"} fontSize={"md"}>
          Patient name
        </Text>
        <Stack direction="row" spacing={4} align="center">
          <Button size="sm" variant="grass">
            Start session
          </Button>
          <Button size="sm" variant="grass">
            ...
          </Button>
        </Stack>
      </Stack>

      <Stack
        direction="row"
        spacing={2}
        align="left"
        fontWeight="medium"
        color={"black.400"}
      >
        <Text>30 min</Text>
        <Text>•</Text>
        <Text>Sleep, Depression, Relationship</Text>
      </Stack>

      <Stack
        direction="row"
        spacing={4}
        align="center"
        color={"grass.500"}
        fontWeight={"medium"}
      >
        <Flex>
          <Icon
            marginRight="4px"
            transition="0.2s linear"
            w="20px"
            h="20px"
            as={IoCalendarOutline}
            color="grass.500"
          />
          <Text>Sep 30, 2023</Text>
        </Flex>
        <Flex>
          <Icon
            marginRight="4px"
            transition="0.2s linear"
            w="20px"
            h="20px"
            as={IoTimeOutline}
            color="grass.500"
          />
          <Text>03:00-03.30 PM</Text>
        </Flex>
        <Flex>
          <Icon
            marginRight="4px"
            transition="0.2s linear"
            w="20px"
            h="20px"
            as={IoChatbubbleOutline}
            color="grass.500"
          />
          <Text>Chat</Text>
        </Flex>
      </Stack>
    </Card>
  );
}
