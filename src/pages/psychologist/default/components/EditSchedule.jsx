/* eslint-disable react/prop-types */
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import axios from "axios";

function EditSchedule({idSchedule, onClose}) {
  const { register, handleSubmit } = useForm();

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
        .put(`http://localhost:5000/api/psychologist/schedule/${idSchedule}`, dataForm)
        .then((res) => {
          alert("Schedule updated successfully!");
          window.location.reload();
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
              onClick={onClose}
            >
              Save Change
            </Button>
          </form>
        </ModalBody>
      </ModalContent>
    </div>
  );
}

export default EditSchedule;