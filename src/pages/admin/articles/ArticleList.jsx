import DataTable from "react-data-table-component";
import axios from "axios";
import { Heading, Box, Flex, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ArticleLists() {
  const dummyData = [
    {
      _id: 65532535235,
      postingDate: "Jun 21, 2022",
      Questions: "Nurturing Minds: A Journey to Mental Wellness",
    },
    {
      _id: 65532535235,
      postingDate: "Aug 13, 2022",
      Questions: "Breaking the Silence: Understanding and Addressing Mental Illness",
    },
    {
      _id: 65532535235,
      postingDate: "Nov 23, 2022",
      Questions: "Embracing Wellness: A Holistic Approach to Mental Well-Being",
    },
  ];

  const ActionButton = ({ row }) => {
    return (
      <div className="button" justifycontent="center">
        <Button mr="10px" height={7} width="60px" fontSize="sm" colorScheme="red">
          {" "}
          Delete{" "}
        </Button>
        <Button height={7} width="50px" fontSize="sm" color="white" bg="#FFAC31">
          {" "}
          Edit{" "}
        </Button>
      </div>
    );
  };
  // table custom style
  const style = {
    headCells: {
      style: {
        fontSize: "14px",
        fontWeight: "bold",
        borderTop: "solid 1px #EBEBEB",
      },
    },
  };

  const column = [
    {
      name: "ID",
      selector: (row) => row._id,
      sortable: true,
      width: "70px",
    },
    {
      name: "Posting Date",
      selector: (row) => row.postingDate,
      width: "150px",
    },
    {
      name: "Title",
      selector: (row) => row.Questions,
      wrap: true,
      width: "700px",
    },
    {
      name: "Action",
      cell: (row) => <ActionButton row={row} />,
      paddingRight: "20px",
    },
  ];

  return (
    <div className="showUser">
      <Box p="32px">
        <Flex justifyContent="space-between" alignItems="center">
          <Heading size="lg" mb={"5"}>
            QNA
          </Heading>
          <Box className="add-button">
            <Button variant="ghost" bgColor="#FD9F00" color="white" leftIcon={<AddIcon />} size="sm" onClick={() => goTo(`/a/qna/QnaCreate`)}>
              Add
            </Button>
          </Box>
        </Flex>
        <Box border="1px" borderColor="gray.200" borderRadius="5px">
          {/* Pass the dummyData as the actual data */}
          <DataTable columns={column} data={dummyData} pagination customStyles={style} />
        </Box>
      </Box>
    </div>
  );
}

export default ArticleLists;
