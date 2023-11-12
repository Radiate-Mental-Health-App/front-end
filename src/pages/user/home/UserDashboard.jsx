import LineChart from "@/components/charts/LineAreaChart";
import { Center, Heading } from "@chakra-ui/react";
import FetchLineChart from "./LineChart.component";
import FetchBarChart from "./BarChart.component";
import Appointment from "@/pages/psychologist/dataTables";

function UserDashboard() {
  return (
    <div>
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
          <FetchBarChart />
        </div>
      </div>
      <div>
        <Appointment />
      </div>
    </div>
  );
}

export default UserDashboard;
