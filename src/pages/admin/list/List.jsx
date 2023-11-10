import "./list.scss";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import Datatable from "@/components/datatable/Datatable";
import { Flex, Box, Heading, ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "@mui/material";

const List = () => {
  return (
    <div className="list">
      <div className="listContainer">
        <ChakraProvider>
          <Heading size="md" p="20px">
            Users
          </Heading>
        </ChakraProvider>
        <Datatable />
      </div>
    </div>
  );
};

export default List;
