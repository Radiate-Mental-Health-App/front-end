import {
  Center,
  Flex,
  Spacer,
  Heading,
  Box,
  HStack,
  Image,
} from "@chakra-ui/react";

import { MoodCard } from "./components/MoodCard";
import { MoodModal } from "./components//MoodModal";

import TerribleIcon from "@/assets/mood-icons/1_terrible.png";
import BadIcon from "@/assets/mood-icons/2_bad.png";
import OkayIcon from "@/assets/mood-icons/3_okay.png";
import GoodIcon from "@/assets/mood-icons/4_good.png";
import WonderfulIcon from "@/assets/mood-icons/5_wonderful.png";

import { useDisclosure } from "@chakra-ui/react";

import { useNavigate } from "react-router";

function MoodTracker() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (!token) navigate("/");
  
  const moodLog = [
    {
      moodValue: "terrible",
      social: "family",
      activities: ["work", "exercise", "study"],
      moodNote: "Feeling stressed at work.",
      date: "Monday, 16 October 2023",
    },
    {
      moodValue: "good",
      social: "family",
      activities: ["work", "exercise", "study"],
      moodNote: "Feeling stressed at work.",
      date: "Monday, 16 October 2023",
    },
    {
      moodValue: "bad",
      social: "family",
      activities: ["work", "exercise", "study"],
      moodNote: "Feeling stressed at work.",
      date: "Monday, 16 October 2023",
    },
    {
      moodValue: "terrible",
      social: "family",
      activities: ["work", "exercise", "study"],
      moodNote: "Feeling stressed at work.",
      date: "Monday, 16 October 2023",
    },
    {
      moodValue: "okay",
      social: "family",
      activities: ["work", "exercise", "study"],
      moodNote: "Feeling stressed at work.",
      date: "Monday, 16 October 2023",
    },
    {
      moodValue: "good",
      social: "family",
      activities: ["work", "exercise", "study"],
      moodNote: "Feeling stressed at work.",
      date: "Monday, 16 October 2023",
    },
    {
      moodValue: "terrible",
      social: "family",
      activities: ["work", "exercise", "study"],
      moodNote: "Feeling stressed at work.",
      date: "Monday, 16 October 2023",
    },
    {
      moodValue: "bad",
      social: "family",
      activities: ["work", "exercise", "study"],
      moodNote: "Feeling stressed at work.",
      date: "Monday, 16 October 2023",
    },
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex p="32px" direction={"column"}>
      <Heading size="lg" mb={"5"}>
        Mood Tracker
      </Heading>
      <Center py={6}>
        <Box
          w={"100%"}
          h={"auto"}
          bg={"white"}
          boxShadow={"md"}
          rounded={"xl"}
          p={6}
          textAlign={"center"}
        >
          <Heading size={"md"} mb={"32px"}>
            How are you feeling today?
          </Heading>
          <Center>
            <HStack spacing={"48px"}>
              <Image
                src={TerribleIcon}
                alt="mood_icon"
                boxSize={"100px"}
                cursor={"pointer"}
                onClick={onOpen}
              />
              <Image
                src={BadIcon}
                alt="mood_icon"
                boxSize={"100px"}
                cursor={"pointer"}
              />
              <Image
                src={OkayIcon}
                alt="mood_icon"
                boxSize={"100px"}
                cursor={"pointer"}
              />
              <Image
                src={GoodIcon}
                alt="mood_icon"
                boxSize={"100px"}
                cursor={"pointer"}
              />
              <Image
                src={WonderfulIcon}
                alt="mood_icon"
                boxSize={"100px"}
                cursor={"pointer"}
              />
            </HStack>
          </Center>
        </Box>
      </Center>
      <Heading size={"lg"} fontSize={"24px"} fontWeight={"medium"} mb={"24px"}>
        Mood Log
      </Heading>
      <Flex wrap={"wrap"}>
        {moodLog.map((log) => {
          return (
            <>
              <MoodCard log={log} />
              <Spacer />
            </>
          );
        })}
      </Flex>
      <MoodModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
}

export default MoodTracker;
