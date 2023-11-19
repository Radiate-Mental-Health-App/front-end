/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _|
 | |_| | | | | |_) || |  / / | | |  \| | | | | || |
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|

=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, Heading, SimpleGrid, FormControl, FormLabel, Button, Textarea, Box } from "@chakra-ui/react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function FormCounselingResult() {
  const location = useLocation();
  const appointmentData = location.state.dataPatient;
  console.log(appointmentData);

  const [formData, setFormData] = useState({
    userId: appointmentData.userId,
    scheduleId: appointmentData.scheduleId,
    observationResult: "",
    interviewResult: "",
    personalityDynamics: "",
    problems: "",
    solutionAndAssignment: "",
    conclusion: "",
  });

  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSaveChanges = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/counselres", formData, {
        headers: { "x-access-token": localStorage.getItem("accessToken") },
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error creating counseling result:", error.message);
      setError("An error occurred while saving changes. Please try again.");
    }
  };

  return (
    <Box p={"32px"}>
      <Card justifyContent="center" align="left" p={"32px"}>
        <CardHeader>
          <Heading>Edit counseling result</Heading>
        </CardHeader>
        <CardBody>
          <SimpleGrid gap="16px">
            <FormControl id="observationResult">
              <FormLabel>Observation result</FormLabel>
              <Textarea id="observationResult" placeholder="Observation Result" borderRadius="16px" value={formData.observationResult} onChange={handleInputChange} />
            </FormControl>
            <FormControl id="interviewResult">
              <FormLabel>Interview result</FormLabel>
              <Textarea id="interviewResult" placeholder="Interview Result" borderRadius="16px" value={formData.interviewResult} onChange={handleInputChange} />
            </FormControl>
            <FormControl id="evaluationType">
              <FormLabel>Personality dinamics</FormLabel>
              <Textarea id="personalityDynamics" placeholder="Personality Dynamics" borderRadius="16px" value={formData.personalityDynamics} onChange={handleInputChange} />
            </FormControl>
            <FormControl id="problem">
              <FormLabel>Problem</FormLabel>
              <Textarea id="problems" placeholder="Problems" borderRadius="16px" value={formData.problems} onChange={handleInputChange} />
            </FormControl>
            <FormControl id="solutionAndAssignments">
              <FormLabel>Solution and assignments</FormLabel>
              <Textarea id="solutionAndAssignment" placeholder="Solution and assignments" borderRadius="16px" value={formData.solutionAndAssignment} onChange={handleInputChange} />
            </FormControl>
            <FormControl id="conclusion" isRequired>
              <FormLabel>Conclusion</FormLabel>
              <Textarea id="conclusion" placeholder="Conclusion" borderRadius="16px" value={formData.conclusion} onChange={handleInputChange} />
            </FormControl>
          </SimpleGrid>
          {error && (
            <Box mt={4} color="red.500">
              {error}
            </Box>
          )}
          <Button float="right" colorScheme="brand" mt={4} onClick={handleSaveChanges}>
            Save changes
          </Button>
        </CardBody>
      </Card>
    </Box>
  );
}
