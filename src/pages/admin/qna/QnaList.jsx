import DataTable from "react-data-table-component";
import axios from "axios";
import {
  Text,
  Heading,
  Box,
  Avatar,
  Flex,
  Button,
  Center,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useGetQnaQuery } from "../../../state/api";

function QnaList() {
  const goTo = useNavigate();
  const [sort, setSort] = useState({});

  const { data, isLoading } = useGetQnaQuery({
    sort: JSON.stringify(sort),
  });
  console.log("data", data);

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
      name: "pertanyaan",
      selector: (row) => row.pertanyaan,
    },
    {
      name: "response",
      selector: (row) => row.response,
    },
    // {
    //   name: "Action",
    //   cell: (row) => <ActionButton row={row} />,
    //   paddingRight: "20px",
    // },
  ];
  return (
    <div className="showUser">
      <Box p="32px">
        <Flex justifyContent="space-between" alignItems="center">
          <Heading size="lg" mb={"5"}>
            QNA
          </Heading>
          <Box className="add-button">
            <Button
              variant="ghost"
              bgColor="#FD9F00"
              color="white"
              leftIcon={<AddIcon />}
              size="sm"
              onClick={() => goTo(`/a/qna/QnaCreate`)}>
              Add
            </Button>
          </Box>
        </Flex>
        <Box border="1px" borderColor="gray.200" borderRadius="5px">
          <DataTable
            columns={column}
            data={data}
            pagination
            customStyles={style}
          />
        </Box>
      </Box>
    </div>
  );
}

export default QnaList;
