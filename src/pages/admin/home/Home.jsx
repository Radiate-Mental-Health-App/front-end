import React from "react";
import "./home.scss";
import { Box, Flex } from "@chakra-ui/react";

import { useNavigate } from "react-router";
import { useEffect } from "react";

export default function Home() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const roles = localStorage.getItem("roles");

  useEffect(() => {
    if (!token) {
      console.log("tidak ada token");
      navigate("/");
    } else {
      if (roles == "user") {
        navigate("/u");
      } else if (roles == "psychologist") {
        navigate("/p");
      } else if (roles == "admin") {
        navigate("/a");
      } else {
        console.log("tidak ada role");
      }
    }
  }, []);

  return (
    <div className="home">
      <Flex>
        <div className="homeContainer">dashboard</div>
      </Flex>
    </div>
  );
}
