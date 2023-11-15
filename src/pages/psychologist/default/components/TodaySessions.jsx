// Chakra imports
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
} from "@chakra-ui/react";

// Custom components import Card from "@/components/card/Card.jsx";
import Appointment from "./Appointment";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function TodaySessions(props) {
  const { ...rest } = props;

  const [todaySession, setTodaySession] = useState([]);

  const getSession = async () => {
    axios
      .get(`http://localhost:5000/api/appointment`, {
        headers: { "x-access-token": localStorage.getItem("accessToken") },
      })
      .then((res) => {
        setTodaySession(res.data.data.appointments);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getSession();
  }, []);

  return (
    <Card
      justifyContent="center"
      align="left"
      w="100%"
      mb="0px"
      borderRadius="20px"
      {...rest}
    >
      <CardHeader>
        <HStack justifyContent={"space-between"}>
          <Heading size="md">Today Sessions</Heading>
          <Link to={"/p/appointments"}>
            <Button fontWeight={500} size="sm" variant="outline">
              View all
            </Button>
          </Link>
        </HStack>
      </CardHeader>

      <CardBody maxH="50vh" overflowY="auto">
        {todaySession.map((item) => (
          <Appointment item={item} />
        ))}
      </CardBody>
    </Card>
  );
}
