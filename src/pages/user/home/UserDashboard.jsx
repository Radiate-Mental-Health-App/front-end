// import LineChart from "@/components/charts/LineAreaChart";
import { Box, Center, Heading } from "@chakra-ui/react";
import FetchLineChart from "./LineChart.component";
import FetchBarChart from "./BarChart.component";
import UserAppointmentsTable from "./UserAppointmentsTable";
import { columnsData } from "./variables/columnsData";
import tableData from "./variables/tableData.json";

function UserDashboard() {
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
      </div>
      <Box>
        <UserAppointmentsTable columnsData={columnsData} tableData={tableData} />
      </Box>
    </Box>
  );
}

export default UserDashboard;
