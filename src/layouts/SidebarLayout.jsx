import { Outlet } from "react-router-dom";

import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";

import "../themes/stylesheet.css";

import { Flex } from "@chakra-ui/react";

function SidebarLayout({ menu }) {
  return (
    <Flex flexDirection="row">
      <Sidebar menu={menu} />
      <Flex flexDirection="column" w="100%">
        <Navbar />
        <Outlet />
      </Flex>
    </Flex>
  );
}

export default SidebarLayout;
