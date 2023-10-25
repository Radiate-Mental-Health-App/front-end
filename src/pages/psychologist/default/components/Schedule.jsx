// Chakra imports
import {Card} from "@chakra-ui/react";

// Custom components import { Calendar } from "@fullcalendar/core";
import timeGridPlugin from "@fullcalendar/timegrid";
import FullCalendar from "@fullcalendar/react";

export default function Schedule(props) {
    const {
        ...rest
    } = props;

    // const calendar = new Calendar(calendarEl, {     plugins: [timeGridPlugin],
    // initialView: 'timeGridWeek',     headerToolbar: {         left: 'prev,next',
    //       center: 'title',         right: 'timeGridWeek,timeGridDay' // user can
    // switch between the two     } })

    return (
        <Card w="100%" p={8} {...rest}>
            <FullCalendar
                height="100vh"
                plugins={[timeGridPlugin]}
                initialView="timeGridWeek"/>
        </Card>
    );
}
