import { useEffect, useState } from "react";
import PsychologistCard from "./psyCard.component";
import { Grid } from "@chakra-ui/react";

const PsychologistList = () => {
  const [listPsychologists, setListPsychologists] = useState([]);

  const getListPsy = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/account/psychologist"
      );

      const data = await response.json();
      if (data.data) {
        setListPsychologists(data.data.psychologists);
      } else throw data;
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getListPsy();
  }, []);

  return (
    <div>
      <h2>List of Psychologists</h2>
      <Grid templateColumns="repeat(3, 1fr)" gap={8} mx={4}>
        {listPsychologists
          .filter((item) => item.isVerified)
          .map((item) => (
            <PsychologistCard key={item._id} psychologist={item} />
          ))}
      </Grid>
    </div>
  );
};

export default PsychologistList;
