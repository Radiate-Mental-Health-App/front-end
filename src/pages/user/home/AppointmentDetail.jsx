// Chakra imports
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Grid,
  Button,
  HStack,
  CardFooter,
} from "@chakra-ui/react";

import Banner from "./BannerPsychologist";

import banner from "@/assets/img/auth/banner.jpg";
import avatar from "@/assets/img/auth/avatars/avatar10.png";
import CounselingResult from "../../psychologist/dataTables/components/CounselingResult";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AppointmentDetail() {
  const { id } = useParams();
  const [appointmentData, setAppointmentData] = useState([]);

  const fetchAppointment = async () => {
    try {
      const appointmentResponse = await axios.get(
        `http://localhost:5000/api/appointment/detail/${id}`
      );
      setAppointmentData(appointmentResponse.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAppointment();
  }, []);

  return (
    <Box p={"32px"}>
      <Grid
        templateColumns={{
          base: "1fr",
          lg: "1.34fr 2.62fr",
        }}
        templateRows={{
          base: "repeat(2, 1fr)",
          lg: "1fr",
        }}
        gap={{
          base: "20px",
          xl: "20px",
        }}
      >
        {appointmentData.psychologistId && (
          <Banner
            gridArea="1 / 1 / 2 / 2"
            banner={banner}
            avatar={avatar}
            appointmentData={appointmentData}
          />
        )}
        <Card
          justifyContent="center"
          align="left"
          w="100%"
          mb="0px"
          borderRadius="20px"
        >
          <CardHeader>
            <HStack justifyContent={"space-between"}>
              <Heading size="md">Counseling Result</Heading>
            </HStack>
          </CardHeader>

          <CardBody>
            <CounselingResult />
          </CardBody>
          <CardFooter display="flex" justifyContent="flex-end">
            <Link to="/u">
              <Button colorScheme="brand" variant={"outline"}>
                Close
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </Grid>
    </Box>
  );
}
