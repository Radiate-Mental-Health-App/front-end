// Chakra imports
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    HStack,
    Heading
} from "@chakra-ui/react";

// Custom components import Card from "@/components/card/Card.jsx";
import Appointment from "./Appointment";
import { useEffect, useState } from "react";

export default function TodaySessions(props) {
    const {
        ...rest
    } = props;

    const [appointments, setAppointments] = useState([]);

    const getAppointments = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/appointment", {
          headers: { "x-access-token": localStorage.getItem("token") },
        });
        const getData = await response.json();
        setAppointments(getData.data.appointments)
      } catch (error) {
        alert(error);
      }
    };
  
    useEffect(() => {
      getAppointments();
    }, []);

    return (
        <Card justifyContent="center" align="left" w="100%" mb="0px" {...rest}>
            <CardHeader>
                <HStack justifyContent={"space-between"}>
                    <Heading size='md'>Today Sessions</Heading>
                    <Button fontWeight={500} size="sm" variant="outline">
                        View all
                    </Button>
                </HStack>
            </CardHeader>

            <CardBody>
                {appointments.map((item) => (
                    <Appointment key={item._id} item={item} />
                ))}
            </CardBody>
        </Card>
    );
}
