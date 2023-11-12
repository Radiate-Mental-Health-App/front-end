import React from "react";
import PsychologistCard from "./psyCard.component";
import mockPsychologists from "./mockPsychologist";
import { Grid, GridItem } from "@chakra-ui/react";

const PsychologistList = () => {
  return (
    <div>
      <h2>List of Psychologists</h2>
      <Grid templateColumns="repeat(2, 1fr)" gap={8} mx={4}>
        {mockPsychologists.map((psychologist) => (
          <PsychologistCard key={psychologist.id} psychologist={psychologist} />
        ))}
      </Grid>
    </div>
  );
};

export default PsychologistList;
