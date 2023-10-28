import DataTable from "react-data-table-component";
import axios from "axios";
import { Text, Center, Heading, Box, Avatar, Flex, Button, IconButton } from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserList = ({ row }) => (
  <Flex alignItems='center'>
    <Avatar size='sm' src={ row.photo } />
    <Text ml='20px'>{ row.fullName }</Text>
  </Flex>
);

const ActionButton = ({ row }) => (
  <div className="button" justifycontent="center">
    <Button mr='10px' size='sm' colorScheme="red"> Delete </Button>
    <Button size='sm' bgColor='orange' color="white"> Edit </Button>
  </div>
);

const style = {
  headCells: {
    style: {
      fontSize: '14px',
      fontWeight: 'bold',
      borderTop: 'solid 1px #EBEBEB',
    }
  }
};

function User() {
  const column = [
    {
      name: 'ID',
      selector: row => row.id,
      sortable: true,
      width: '70px'
    },
    {
      name: 'User',
      cell: row => <UserList row={ row } />,
      sortable: true
    },
    {
      name: 'Email',
      selector: row => row.email,
    },
    {
      name: 'Password',
      selector: row =>  row.password
    },
    {
      name: 'Action',
      cell: row => <ActionButton row={ row } />,
      paddingRight: '20px'
    },
  ]

  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      axios.get(`http://localhost:8000/users`)
      .then(res => {
        setRecords(res.data)
      })
      .catch(err => console.log(err))
    }
    fetchData();
  }, []);


  return (
    <div className="showUser">
      <Box p='32px'>
      <Flex justifyContent="space-between">
        <Heading size="lg" mb={"5"}>
          User
        </Heading>
        <Box className="add-button">
          <Button variant="ghost" bgColor="#FD9F00" color="white" leftIcon={<AddIcon />} size="sm"> Add </Button>
        </Box>
      </Flex>
      <Box border="1px" borderColor="gray.200" borderRadius="5px">
        <DataTable
          columns={ column }
          data={ records }
          pagination
          selectableRows
          customStyles={style}
        />
      </Box>
    </Box>
    </div>
  );
}

export default User;
