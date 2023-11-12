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

function QnaCreate() {
  return <div className="showUser"></div>;
}

export default QnaCreate;
