import { Center, Heading } from "@chakra-ui/react";
import BarChart from "./moodBarChart.component";
import LineChart from "./moodLineChart.component";

function UserDashboard() {
  return (
    <Center>
      <Heading>Dashboard</Heading>
      <br />
      <BarChart />
      <LineChart />
    </Center>
  );
}

export default UserDashboard;
