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

import React from "react";

// Chakra imports
import { Stack, Container, VStack } from "@chakra-ui/react";

// Assets
import EventCalendar from "@/components/calendar/MiniCalendar";
import TodayAppointments from "../default/components/TodaySessions";
import Schedule from "../default/components/Schedule";

export default function Marketplace() {
  return (
    <Stack
      pt={{
        base: "180px",
        md: "80px",
        xl: "80px",
      }}
    >
      <Stack direction={"row"}>
        <VStack spacing={4} align="stretch">
          <EventCalendar />
          <TodayAppointments />
        </VStack>
        <Container>
          <Schedule />
        </Container>
      </Stack>
    </Stack>
  );
}
