/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _|
 | |_| | | | | |_) || |  / / | | |  \| | | | | || |
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|

=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import { Stack, VStack, Button, Modal, useDisclosure } from "@chakra-ui/react";

// Assets
import EventCalendar from "@/components/calendar/MiniCalendar";
import TodayAppointments from "../default/components/TodaySessions";
import Schedule from "../default/components/Schedule";
import InputSchedule from "./components/InputSchedule";

export default function Schedules() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack p={"32px"}>
      <Button colorScheme="blue" width="20%" onClick={onOpen}>
        Add Schedule
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <InputSchedule onClose={onClose} />
      </Modal>
      <Stack direction={"row"} spacing={8}>
        <VStack spacing={8} alignItems="stretch">
          <EventCalendar />
          <TodayAppointments />
        </VStack>
        <Schedule />
      </Stack>
    </Stack>
  );
}
