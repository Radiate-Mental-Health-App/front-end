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
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

import { Icon } from "@chakra-ui/react";
import { HiCalendar } from "react-icons/hi2";

import TerribleIcon from "@/assets/mood-icons/1_terrible.png";
import BadIcon from "@/assets/mood-icons/2_bad.png";
import OkayIcon from "@/assets/mood-icons/3_okay.png";
import GoodIcon from "@/assets/mood-icons/4_good.png";
import WonderfulIcon from "@/assets/mood-icons/5_wonderful.png";

const moodIcon = {
  Terrible: {
    icon: TerribleIcon,
  },
  Sad: {
    icon: BadIcon,
  },
  Okay: {
    icon: OkayIcon,
  },
  Good: {
    icon: GoodIcon,
  },
  Wonderful: {
    icon: WonderfulIcon,
  },
};

export const MoodCard = ({ item, onOpen, setModalAction, setIdMood }) => {
  const onClickEdit = () => {
    setModalAction("edit");
    setIdMood(item.id);
    onOpen();
  };

  const onClickDelete = async () => {
    if (confirm("are you sure delete this item ?") == true) {
      try {
        const response = await fetch(
          "http://localhost:5000/api/user/moodentries/" + item.id,
          {
            method: "DELETE",
            headers: {
              "x-access-token": localStorage.getItem("accessToken"),
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();
        if (data.success) {
          alert(data.message);
          window.location.reload();
        }
      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (
    <Card w={"350px"} h={"auto"} rounded={"xl"}>
      <CardBody>
        <Flex justifyContent="space-between" mb={5}>
          <HStack>
            <Image src={moodIcon[item.moodValue].icon} boxSize={"60px"} />
            <VStack align={"left"} ml={4}>
              <Heading size={"md"}>{item.moodValue}</Heading>
              <HStack>
                <Icon as={HiCalendar} boxSize={5}></Icon>
                <Text fontSize={"sm"}>
                  {new Date(item.date).toDateString()}
                </Text>
              </HStack>
            </VStack>
          </HStack>
          <Menu>
            <MenuButton as={Button} colorScheme="gray" fontSize="2xl">
              ...
            </MenuButton>
            <MenuList minWidth="100%">
              <MenuItem onClick={onClickEdit}>Edit</MenuItem>
              <MenuItem onClick={onClickDelete}>Delete</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Container mb={5} p={0}>
          <Wrap spacing={"8px"}>
            {item.activities.map((activity, index) => (
              <WrapItem key={index}>
                <Tag
                  size={"md"}
                  variant={"outline"}
                  borderRadius={"full"}
                  colorScheme="brand"
                >
                  {activity}
                </Tag>
              </WrapItem>
            ))}
          </Wrap>
        </Container>
        <Container mb={5} p={0}>
          <Textarea
            isDisabled
            value={item.moodNote}
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
