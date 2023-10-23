// Chakra imports
import { Stack, useColorModeValue } from "@chakra-ui/react";

// Custom components
import Card from "@/components/card/Card.jsx";
import React from "react";
import { Calendar } from "@fullcalendar/core";
import timeGridPlugin from "@fullcalendar/timegrid";
import FullCalendar from "@fullcalendar/react";

export default function Schedule(props) {
  const { ...rest } = props;

  // const calendar = new Calendar(calendarEl, {     plugins: [timeGridPlugin],
  //  initialView: 'timeGridWeek',     headerToolbar: {         left: 'prev,next',
  //         center: 'title',         right: 'timeGridWeek,timeGridDay' // user
  // can switch between the two     } })

  return (
    <Card
      justifyContent="center"
      align="left"
      direction="row"
      w="100%"
      mb="0px"
      {...rest}
    >
      <Stack direction="row" spacing="auto" align="center">
        <FullCalendar
          height={"100vh"}
          plugins={[timeGridPlugin]}
          initialView="timeGridWeek"
        />
      </Stack>
    </Card>
  );
}
