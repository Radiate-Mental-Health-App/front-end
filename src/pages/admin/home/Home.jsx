import React from "react";
import "./home.scss";
import { Box, Flex } from "@chakra-ui/react";

import { useNavigate } from "react-router";
import { useEffect } from "react";

export default function Home() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      console.log("tidak ada token");
      navigate("/");
    } else {
      console.log("ada token");
    }
  });

  return (
    <div className="home">
      <Flex>
        <div className="homeContainer">dashboard</div>
      </Flex>
    </div>
  );
}
