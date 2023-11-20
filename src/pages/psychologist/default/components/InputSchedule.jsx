/* eslint-disable react/prop-types */
import ModalOk from "@/components/modals/ModalOk";
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

import { useForm } from "react-hook-form";

function InputSchedule({ onClose }) {
  const { register, handleSubmit } = useForm();

  const { isOpen: isModalOkOpen, onOpen: onOpenModalOk, onClose: onCloseModalOk } = useDisclosure();
  const [modalMessage, setModalMessage] = useState("");
  const [modalHeader, setModalHeader] = useState("");

  const onSubmit = async (data) => {
    const dataForm = {
      date: data.date,
      timeSlots: {
        startTime: data.date + "," + data.startTime,
        endTime: data.date + "," + data.endTime,
      },
    };

    try {
      axios
        .post(`http://localhost:5000/api/psychologist/schedule/`, dataForm, {
          headers: { "x-access-token": localStorage.getItem("accessToken") },
        })
        .then((res) => {
          setModalHeader("Success");
          setModalMessage("New schedule created successfully!");
          onOpenModalOk();
        })
        .catch((err) => console.log(err));
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create availability</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <FormLabel>Date</FormLabel>
              <Input
                type="date"
                variant="outline"
                rounded="10"
                placeholder="Select Date"
                {...register("date", {
                  required: true,
                })}
              />
            </FormControl>

            <SimpleGrid mt={4} gap="16px" columns={2}>
              <FormControl>
                <FormLabel>Start Time</FormLabel>
                <Input
                  type="time"
                  variant="outline"
                  placeholder="Start time"
                  borderRadius="16px"
                  {...register("startTime", {
                    required: true,
                  })}
                />
              </FormControl>

              <FormControl>
                <FormLabel>End Time</FormLabel>
                <Input
                  type="time"
                  variant="outline"
                  placeholder="End time"
                  borderRadius="16px"
                  {...register("endTime", {
                    required: true,
                  })}
                />
              </FormControl>
            </SimpleGrid>
            <Button
              type="submit"
              mt="20px"
              mb="10px"
              colorScheme="brand"
            >
              Save
            </Button>
          </form>
        </ModalBody>
      </ModalContent>
      <ModalOk modalHeader={modalHeader} modalMessage={modalMessage} isOpen={isModalOkOpen} onOpen={onOpenModalOk} onClose={onCloseModalOk} />
    </div>
  );
}

export default InputSchedule;
