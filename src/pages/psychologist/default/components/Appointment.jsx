// Chakra imports
import {
  Button,
  Card,
  CardBody,
  Flex,
  Icon,
  HStack,
  Text,
  Box,
  Modal,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
// Custom components import Card from "@/components/card/Card.jsx"; Assets
import { IoCalendarOutline, IoTimeOutline } from "react-icons/io5";
import EditSchedule from "./EditSchedule";
import ModalOk from "@/components/modals/ModalOk";

export default function Appointment({ item }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [idSchedule, setIdSchedule] = useState("");

  const { isOpen: isModalOkOpen, onOpen: onOpenModalOk, onClose: onCloseModalOk } = useDisclosure();
  const [modalMessage, setModalMessage] = useState("");
  const [modalHeader, setModalHeader] = useState("");

  const handleClickEdit = (id) => {
    setIdSchedule(id);
    onOpen();
  };

  const handleClickDelete = (id) => {
    const confirmation = window.confirm(
      "Do you want to delete this schedule? You can't undo this action."
    );
    if (confirmation) {
      axios
        .delete(`http://localhost:5000/api/psychologist/schedule/${id}`)
        .then((res) => {
          setModalHeader("Success");
          setModalMessage("Schedule deleted.");
          onOpenModalOk();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <Card
      bgColor={item.isBooked ? "grass.100" : "gray.100"}
      borderRadius="16px"
      border={"2px solid"}
      borderColor={item.isBooked ? "grass.300" : "black.100"}
      justifyContent="center"
      align="left"
      w="100%"
      mb="0px"
      mt="16px"
      fontSize={"sm"}
      direction={{
        base: "column",
        sm: "column",
      }}
      overflow="hidden"
      variant="outline"
    >
      <CardBody>
        <Flex mb={2}>
          <Icon
            marginRight="4px"
            transition="0.2s linear"
            w="20px"
            h="20px"
            as={IoCalendarOutline}
            color="black.400"
          />
          <Text>{new Date(item.date).toDateString()}</Text>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center">
          <HStack>
            <Icon
              marginRight="4px"
              transition="0.2s linear"
              w="20px"
              h="20px"
              as={IoTimeOutline}
              color={"grass.500"}
            />
            <Text>
              {new Date(item.timeSlots.startTime).toLocaleTimeString()} -{" "}
              {new Date(item.timeSlots.endTime).toLocaleTimeString()}
            </Text>
          </HStack>
          <Box>
            <Button
              variant="solid"
              colorScheme="brand"
              mr="2"
              onClick={() => handleClickEdit(item._id)}
            >
              Edit
            </Button>
            <Button
              variant="solid"
              colorScheme="red"
              onClick={() => handleClickDelete(item._id)}
            >
              Delete
            </Button>
          </Box>
        </Flex>
      </CardBody>
      <Modal isOpen={isOpen} onClose={onClose}>
        <EditSchedule idSchedule={idSchedule} onClose={onClose} />
      </Modal>
      <ModalOk modalHeader={modalHeader} modalMessage={modalMessage} isOpen={isModalOkOpen} onOpen={onOpenModalOk} onClose={onCloseModalOk} />
    </Card>
  );
}
