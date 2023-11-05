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
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";

function InputSchedule({ onClose }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const dataForm = {
      date: data.date,
      timeSlots: {
        startTime: data.date + "," + data.startTime,
        endTime: data.date + "," + data.endTime,
      },
    };

    console.log(dataForm)

    try {
      const response = await fetch(
        "http://localhost:5000/api/psychologist/schedule",
        {
          method: "POST",
          headers: {
            "x-access-token": localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataForm),
        }
      );
      const data = await response.json();
      if (data.success) {
        alert("berhasil menambahkan jadwal baru");
      } else {
        throw data.message || "gagal menambahkan jadwal";
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>tes input jadwal</ModalHeader>
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

            <FormControl>
              <FormLabel>Start Time</FormLabel>
              <Input
                type="time"
                variant="outline"
                rounded="10"
                placeholder="Select Time"
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
                rounded="10"
                placeholder="Select Time"
                {...register("endTime", {
                  required: true,
                })}
              />
            </FormControl>

            <Button
              type="submit"
              mt="20px"
              colorScheme="blue"
              onClick={onClose}
            >
              Add
            </Button>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </div>
  );
}

export default InputSchedule;
