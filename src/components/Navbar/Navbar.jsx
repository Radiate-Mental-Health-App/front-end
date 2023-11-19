import {
  Flex,
  Box,
  Center,
  Button,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { HiUserCircle, HiUser, HiLogout } from "react-icons/hi";
import axios from "axios";
import { Link } from "react-router-dom";

function Navbar() {
  const idAccount = localStorage.getItem("idAccount");
  const roles = localStorage.getItem("roles");
  console.log("Role:", roles);
  const [dataAccount, setDataAccount] = useState([]);

  const handleLogout = () => {
    localStorage.clear()
    window.location.reload()
  }

  const fetchAccount = async () => {
    try {
      if (roles == "user") {
        axios.get(`http://localhost:5000/api/account/user/${idAccount}`)
        .then((res) => {
          console.log("User Response:", res.data);
          setDataAccount(res.data.data.user);
        }
        )
      } else {
        axios.get(`http://localhost:5000/api/account/psychologist/${idAccount}`)
        .then((res) => {
          console.log("Psychologist Response:", res.data);
          setDataAccount(res.data.data.psychologist);
        })
      };
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAccount();
    console.log("FullName:", dataAccount.fullName);
  }, [idAccount, roles]);

  const Name = () => {
    if (roles === "user" || roles === "psychologist") {
      return (
        <MenuButton as={Button} colorScheme="gray" variant="ghost">
            <Center>
              <Icon as={HiUserCircle} boxSize={8} color="orange" mr="2" />
              {dataAccount.fullName || "No Data"}
            </Center>
        </MenuButton>
      );
    } else {
      return (
        <MenuButton as={Button} colorScheme="gray" variant="ghost">
            <Center>
              <Icon as={HiUserCircle} boxSize={8} color="orange" mr="2" />
              Admin
            </Center>
        </MenuButton>
      );
    }
  }
  
  return (
    <>
      <Flex alignItems="center" gap="2" color="gray.800" bg="white" boxShadow="sm" h="16" w="100%" p="0 24px">
        <Box p="2">{/* <Heading size='md'>Home</Heading> */}</Box>
        <Spacer />
        <Menu>
          <Name />
          <MenuList>
            <MenuItem as={Link} to="/u/profile">
              <Icon as={HiUser} boxSize={5} color="gray.800" mr="3" />
              Profile
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <Icon as={HiLogout} boxSize={5} color="gray.800" mr="3" />
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </>
  );
};

export default Navbar;