import {
  Container,
  Heading,
  Text,
  HStack,
  VStack,
  Image,
  Card,
  CardBody,
  Wrap,
  WrapItem,
  Tag,
  Textarea,
} from "@chakra-ui/react";

import { Icon } from "@chakra-ui/react";
import { HiCalendar } from "react-icons/hi2";

import TerribleIcon from "../../assets/mood-icons/1_terrible.png";
import BadIcon from "../../assets/mood-icons/2_bad.png";
import OkayIcon from "../../assets/mood-icons/3_okay.png";
import GoodIcon from "../../assets/mood-icons/4_good.png";
import WonderfulIcon from "../../assets/mood-icons/5_wonderful.png";

const mood = {
  terrible: {
    name: "Terrible",
    icon: TerribleIcon,
  },
  bad: {
    name: "Bad",
    icon: BadIcon,
  },
  okay: {
    name: "Okay",
    icon: OkayIcon,
  },
  good: {
    name: "Good",
    icon: GoodIcon,
  },
  wonderful: {
    name: "Wonderful",
    icon: WonderfulIcon,
  },
};

export const MoodCard = ({ log }) => {
  return (
    <Card w={"350px"} h={"auto"} rounded={"xl"} mb={"21px"}>
      <CardBody>
        <HStack mb={5}>
          <Image src={mood[log.moodValue].icon} boxSize={"60px"} />
          <VStack align={"left"} ml={4}>
            <Heading size={"md"}>{mood[log.moodValue].name}</Heading>
            <HStack>
              <Icon as={HiCalendar} boxSize={5}></Icon>
              <Text fontSize={"sm"}>{log.date}</Text>
            </HStack>
          </VStack>
        </HStack>
        <Container mb={5} p={0}>
          <Wrap spacing={"8px"}>
            {log.activities.map((activity) => {
              return (
                <WrapItem>
                  <Tag
                    size={"md"}
                    variant={"outline"}
                    borderRadius={"full"}
                    colorScheme="brand"
                  >
                    {activity}
                  </Tag>
                </WrapItem>
              );
            })}
          </Wrap>
        </Container>
        <Container mb={5} p={0}>
          <Textarea
            value={log.moodNote}
            resize={"none"}
            w={"100%"}
            bg={"black.50"}
            color={"black.500"}
            focusBorderColor={"black.100"}
          />
        </Container>
      </CardBody>
    </Card>
  );
};
