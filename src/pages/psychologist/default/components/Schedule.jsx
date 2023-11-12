import { useState } from "react";

// Chakra imports
import {
  Button,
  Card,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  SimpleGrid,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";

// Custom components
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import {
  INITIAL_EVENTS,
  createEventId,
} from "@/pages/psychologist/schedules/variables/event-utils";

export default function Schedule() {
  // eslint-disable-next-line no-unused-vars
  const [currentEvents, setCurrentEvents] = useState([]);
  const handleDateSelect = (selectInfo) => {
    let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  const handleEventClick = (clickInfo) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  };

  const handleEvents = (events) => {
    setCurrentEvents(events);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Card w="100%" p={8} borderRadius="20px">
      <HStack justifyContent={"space-between"} pb={2}>
        <Heading size="md">Your availability</Heading>
        <Button onClick={onOpen} fontWeight={500} size="md" colorScheme="brand">
          + Create availability
        </Button>
      </HStack>
      <FullCalendar
        height="100vh"
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        initialView="timeGridWeek"
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        initialEvents={INITIAL_EVENTS}
        select={handleDateSelect}
        eventContent={renderEventContent}
        eventClick={handleEventClick}
        eventsSet={handleEvents}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create availability</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl id="day">
              <FormLabel>Day</FormLabel>
              <Select placeholder="Select day" borderRadius="16px" />
            </FormControl>
            <SimpleGrid mt={4} gap="16px" columns={2}>
              <FormControl id="startTime">
                <FormLabel>Start time</FormLabel>
                <Input
                  type="time"
                  placeholder="Start time"
                  borderRadius="16px"
                />
              </FormControl>
              <FormControl id="endTime">
                <FormLabel>End time</FormLabel>
                <Input type="time" placeholder="End time" borderRadius="16px" />
              </FormControl>
            </SimpleGrid>
          </ModalBody>
          <ModalFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="brand">Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Card>
  );
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}
