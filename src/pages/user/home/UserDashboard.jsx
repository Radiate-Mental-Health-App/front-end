// import LineChart from "@/components/charts/LineAreaChart";
import {Box, Heading, SimpleGrid} from "@chakra-ui/react";
import FetchLineChart from "./LineChart.component";
import FetchBarChart from "./BarChart.component";
import UserAppointmentsTable from "./UserAppointmentsTable";
import {columnsData} from "./variables/columnsData";
import tableData from "./variables/tableData.json";
import axios from "axios";
import { useEffect, useState } from "react";

function UserDashboard() {

    return (
        <Box p={"32px"}>
                <Heading size="lg">
                    Dashboard
                </Heading>
            {/* <div style={{ display: "flex", gap: "20px" }}>

  const [appointmentData, setAppointmentData] = useState([]);

  const fetchAppointment = async () => {
    try {
      const appointmentResponse = await axios.get(
        `http://localhost:5000/api/appointment`,
        {
          headers: { "x-access-token": localStorage.getItem("accessToken") },
        }
      );
      setAppointmentData(appointmentResponse.data.data.appointments);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAppointment();
  }, []);

  return (
    <Box p={"32px"}>
      <Center>
        <Heading size="xl" color="gray.400">
          Dashboard
        </Heading>
      </Center>
      <div style={{ display: "flex", gap: "20px" }}>

        <div style={{ width: "500px", height: "250px", margin: "20px" }}>
          <FetchBarChart />
        </div>
        <div style={{ width: "500px", height: "250px", margin: "20px" }}>
          <FetchLineChart />
        </div>

      </div> */}

            <SimpleGrid
                columns={{
                base: 1,
                md: 2,
                xl: 2
            }}
                gap="40px"
                mb="20px">
                <FetchBarChart/>
                <FetchLineChart/>
            </SimpleGrid>

            <Box>
                <UserAppointmentsTable columnsData={columnsData} tableData={tableData}/>
            </Box>
        </Box>
    );

      </div>
      <Box>
        <UserAppointmentsTable
          columnsData={columnsData}
          tableData={appointmentData}
        />
      </Box>
    </Box>
  );

}

export default UserDashboard;
