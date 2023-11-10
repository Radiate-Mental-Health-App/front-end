import DataTable from "react-data-table-component";
import axios from "axios";
import { Text, Heading, Box, Avatar, Flex, Button, Icon, Tag, TagLeftIcon, TagLabel } from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons';
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiClock, FiCheckCircle } from "react-icons/fi";

// cell's components
const UserList = ({ row }) => (
  <Flex alignItems='center'>
    <Avatar size='sm' src={ row.photo } />
    <Text ml='20px'>{ row.fullName }</Text>
  </Flex>
);

// action button
const ActionButton = ({ row }) => {
  if (row.isVerified === false) {
    return <VerifButton row={ row } />;
  }

  return(
    <div className="button" justifycontent="center">
      <Button mr='10px' height={7} width="60px" fontSize='sm' colorScheme="red"
      onClick={() => handleDelete(row.id)}
      > Delete </Button>
      <Link to={`/a/users/edit/${row.id}`}>
        <Button height={7} width="50px" fontSize='sm' color='white' bg="#FFAC31"> Edit </Button>
      </Link>
    </div>
  )
}

// view profile button
const VerifButton = ({ row }) => (
  <div className="button" justifyContent="center">
    <Link to={`/a/psychologist/${row.id}`}>
      <Button mr='10px' fontSize='sm' width="120px" height={7} colorScheme="green">
        View profile
      </Button>
    </Link>
  </div>
);

// status
const Status = ({ row }) => {
  if (row.isVerified === true) {
    return (
      <Tag variant="subtle" size='sm' colorScheme="green">
        <TagLeftIcon as={ FiCheckCircle } />
        <TagLabel> Verified </TagLabel>
      </Tag>
    )
  }
  else return (
    <Tag variant="subtle" size='sm' colorScheme="orange">
        <TagLeftIcon as={ FiClock } />
        <TagLabel> Pending </TagLabel>
    </Tag>
  )
}


// delete function
function handleDelete(id) {
  const confirmation = window.confirm("Do you want to delete this user? You can't undo this action.");
  if (confirmation) {
    axios.delete(`http://localhost:8000/counselors/${id}`)
    .then(res => {
      alert('User deleted.');
      window.location.reload();
    })
    .catch(err => console.log(err));
  }
};

// table custom style
const style = {
  headCells: {
    style: {
      fontSize: '14px',
      fontWeight: 'bold',
      borderTop: 'solid 1px #EBEBEB',
    }
  }
};

function List() {

  const goTo = useNavigate();

  const column = [
    {
        name: 'ID',
        selector: row => row.id,
        sortable: true,
        width: '70px'
    },
    {
        name: 'User',
        cell: row => <Link to={`/a/psychologist/${row.id}`}> <UserList row={ row } /> </Link>,
        sortable: true,
    },
    {
        name: 'Field',
        selector: row => row.currentJob,
        maxWidth: "200px"
    },
    {
        name: 'Email',
        selector: row => row.email,
    },
    {
        name: 'Status',
        selector: row =>  <Status row={ row }/>,
        width: "130px"
    },
    {
        name: 'Action',
        cell: row => <ActionButton row={ row } />,
        paddingRight: '20px'
    },
  ]

  // fetching API

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      axios.get(`http://localhost:8000/counselors`)
      .then(res => {
        setData(res.data)
      })
      .catch(err => console.log(err))
    }
    fetchData();
  }, []);

  return (
    <div className="list">
      <Box p='24px'>
      <Flex justifyContent="space-between" alignItems='center'>
        <Heading size="lg" mb={"5"}>
          Registered Psychologists
        </Heading>
      </Flex>
      <Box border="1px" borderColor="gray.200" borderRadius="5px">
        <DataTable
          columns={ column }
          data={ data }
          pagination
          customStyles={style}
        />
      </Box>
    </Box>
    </div>
  );
}

export default List;
