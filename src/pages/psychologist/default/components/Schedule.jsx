import { useState } from "react";

// Chakra imports
import {Card, Heading} from "@chakra-ui/react";

// Custom components
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from '@fullcalendar/interaction';
import {INITIAL_EVENTS, createEventId} from '@/pages/psychologist/schedules/variables/event-utils';

export default function Schedule() {
    // eslint-disable-next-line no-unused-vars
    const [currentEvents, setCurrentEvents] = useState([]);
    const handleDateSelect = (selectInfo) => {
        let title = prompt("Please enter a new title for your event");
        let calendarApi = selectInfo.view.calendar;

        calendarApi.unselect(); // clear date selection

        if (title) {
            calendarApi.addEvent({id: createEventId(), title, start: selectInfo.startStr, end: selectInfo.endStr, allDay: selectInfo.allDay});
        }
    };

    const handleEventClick = (clickInfo) => {
        if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
            clickInfo
                .event
                .remove();
        }
    };

    const handleEvents = (events) => {
        setCurrentEvents(events);
    }

    return (
        <Card w="100%" p={8}
        borderRadius='20px'>
            <Heading size="md">Your Availability</Heading>
            <FullCalendar
                height="100vh"
                plugins={[dayGridPlugin,timeGridPlugin, interactionPlugin]}
                headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay"
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
                eventsSet={handleEvents}/>
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