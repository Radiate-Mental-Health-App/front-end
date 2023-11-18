// Chakra imports
import { Box } from "@chakra-ui/react";
import AppointmentsTable from "@/pages/psychologist/dataTables/components/AppointmentsTable";
import { columnsDataComplex } from "@/pages/psychologist/default/variables/columnsData";
import tableDataComplex from "@/pages/psychologist/default/variables/tableDataComplex.json";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Settings() {
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
      <Box>
        <AppointmentsTable
          columnsData={columnsDataComplex}
          tableData={appointmentData}
        />
      </Box>
    </Box>
  );
}
