import {
  Container,
  Heading,
  HStack,
  VStack,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Wrap,
  WrapItem,
  Tag,
  Text,
  Textarea,
} from "@chakra-ui/react";

import TerribleIcon from "../../assets/mood-icons/1_terrible.png";
import BadIcon from "../../assets/mood-icons/2_bad.png";
import OkayIcon from "../../assets/mood-icons/3_okay.png";
import GoodIcon from "../../assets/mood-icons/4_good.png";
import WonderfulIcon from "../../assets/mood-icons/5_wonderful.png";

export const MoodModal = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        size={"xl"}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>How are your feeling</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <VStack>
              <Container p={0}>
                <Heading size={"md"} fontWeight={"medium"} mb={3}>
                  Rate your mood
                </Heading>
                <HStack spacing={"32px"} justify={"center"} mb={5}>
                  <Image
                    src={TerribleIcon}
                    alt="mood_icon"
                    boxSize={"60px"}
                    cursor={"pointer"}
                  />
                  <Image
                    src={BadIcon}
                    alt="mood_icon"
                    boxSize={"60px"}
                    cursor={"pointer"}
                  />
                  <Image
                    src={OkayIcon}
                    alt="mood_icon"
                    boxSize={"60px"}
                    cursor={"pointer"}
                  />
                  <Image
                    src={GoodIcon}
                    alt="mood_icon"
                    boxSize={"60px"}
                    cursor={"pointer"}
                  />
                  <Image
                    src={WonderfulIcon}
                    alt="mood_icon"
                    boxSize={"60px"}
                    cursor={"pointer"}
                  />
                </HStack>
              </Container>
              <Container p={0}>
                <Heading size={"md"} fontWeight={"medium"} mb={3}>
                  What makes you this feeling
                </Heading>
                <Container p={0}>
                  <Text color={"black.500"} mb={3}>
                    Social
                  </Text>
                  <Wrap spacing={"8px"} mb={3}>
                    <WrapItem>
                      <Tag
                        size={"lg"}
                        variant={"outline"}
                        borderRadius={"full"}
                        colorScheme="brand"
                        fontSize={"14px"}
                        fontWeight={"regular"}
                      >
                        Family
                      </Tag>
                    </WrapItem>
                    <WrapItem>
                      <Tag
                        size={"lg"}
                        variant={"outline"}
                        borderRadius={"full"}
                        colorScheme="brand"
                        fontSize={"14px"}
                        fontWeight={"regular"}
                      >
                        Friends
                      </Tag>
                    </WrapItem>
                    <WrapItem>
                      <Tag
                        size={"lg"}
                        variant={"outline"}
                        borderRadius={"full"}
                        colorScheme="brand"
                        fontSize={"14px"}
                        fontWeight={"regular"}
                      >
                        Relationship
                      </Tag>
                    </WrapItem>
                    <WrapItem>
                      <Tag
                        size={"lg"}
                        variant={"outline"}
                        borderRadius={"full"}
                        colorScheme="brand"
                        fontSize={"14px"}
                        fontWeight={"regular"}
                      >
                        Colleagues
                      </Tag>
                    </WrapItem>
                  </Wrap>
                  <Text color={"black.500"} mb={3}>
                    Activities
                  </Text>
                  <Wrap spacing={"8px"} mb={5}>
                    <WrapItem>
                      <Tag
                        size={"lg"}
                        variant={"outline"}
                        borderRadius={"full"}
                        colorScheme="brand"
                        fontSize={"14px"}
                        fontWeight={"regular"}
                      >
                        Studying
                      </Tag>
                    </WrapItem>
                    <WrapItem>
                      <Tag
                        size={"lg"}
                        variant={"outline"}
                        borderRadius={"full"}
                        colorScheme="brand"
                        fontSize={"14px"}
                        fontWeight={"regular"}
                      >
                        Working
                      </Tag>
                    </WrapItem>
                    <WrapItem>
                      <Tag
                        size={"lg"}
                        variant={"outline"}
                        borderRadius={"full"}
                        colorScheme="brand"
                        fontSize={"14px"}
                        fontWeight={"regular"}
                      >
                        Exercise
                      </Tag>
                    </WrapItem>
                    <WrapItem>
                      <Tag
                        size={"lg"}
                        variant={"outline"}
                        borderRadius={"full"}
                        colorScheme="brand"
                        fontSize={"14px"}
                        fontWeight={"regular"}
                      >
                        Trip
                      </Tag>
                    </WrapItem>
                    <WrapItem>
                      <Tag
                        size={"lg"}
                        variant={"outline"}
                        borderRadius={"full"}
                        colorScheme="brand"
                        fontSize={"14px"}
                        fontWeight={"regular"}
                      >
                        Watching
                      </Tag>
                    </WrapItem>
                    <WrapItem>
                      <Tag
                        size={"lg"}
                        variant={"outline"}
                        borderRadius={"full"}
                        colorScheme="brand"
                        fontSize={"14px"}
                        fontWeight={"regular"}
                      >
                        Date
                      </Tag>
                    </WrapItem>
                    <WrapItem>
                      <Tag
                        size={"lg"}
                        variant={"outline"}
                        borderRadius={"full"}
                        colorScheme="brand"
                        fontSize={"14px"}
                        fontWeight={"regular"}
                      >
                        Shopping
                      </Tag>
                    </WrapItem>
                    <WrapItem>
                      <Tag
                        size={"lg"}
                        variant={"outline"}
                        borderRadius={"full"}
                        colorScheme="brand"
                        fontSize={"14px"}
                        fontWeight={"regular"}
                      >
                        Game
                      </Tag>
                    </WrapItem>
                    <WrapItem>
                      <Tag
                        size={"lg"}
                        variant={"outline"}
                        borderRadius={"full"}
                        colorScheme="brand"
                        fontSize={"14px"}
                        fontWeight={"regular"}
                      >
                        Movies
                      </Tag>
                    </WrapItem>
                  </Wrap>
                </Container>
              </Container>
              <Container p={0}>
                <Heading size={"md"} fontWeight={"medium"} mb={3}>
                  Tell us about your emotion...
                </Heading>
                <Textarea
                  resize={"none"}
                  w={"100%"}
                  h={"100px"}
                  bg={"black.50"}
                  color={"black.500"}
                  focusBorderColor={"black.100"}
                />
              </Container>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="brand" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      ;
    </>
  );
};
