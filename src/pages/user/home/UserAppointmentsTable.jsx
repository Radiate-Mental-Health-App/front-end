import {
  Card,
  CardBody,
  Flex,
  Table,
  Icon,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  CardHeader,
  Heading,
  IconButton,
  HStack,
  Badge,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Select,
} from "@chakra-ui/react";
import { useMemo } from "react";

import { useGlobalFilter, usePagination, useSortBy, useTable } from "react-table";

// Assets
import { MdCheckCircle, MdCancel, MdOutlineError } from "react-icons/md";
import { InfoIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import axios from "axios";

export default function UserAppointmentsTable(props) {
  // eslint-disable-next-line react/prop-types
  const { columnsData, tableData } = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow, initialState } = tableInstance;
  initialState.pageSize = 5;

  const textColor = useColorModeValue("black.500", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleCanceled = async (id) => {
    const confirmation = window.confirm("Do you want to canceled this appointment? You can't undo this action.");
    if (confirmation) {
      axios
        .patch(`http://localhost:5000/api/appointment/${id}`, {
          status: "Canceled",
        })
        .then((res) => {
          alert("appointment canceled.");
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <Card padding="8px" borderRadius="20px" direction="column" w="100%" px="0px" overflowX={{ sm: "scroll", lg: "hidden" }}>
      <CardHeader>
        <Heading size="md">Appointments</Heading>
      </CardHeader>

      <CardBody>
        <Table {...getTableProps()} variant="simple" color="gray.500" mb="24px">
          <Thead>
            {headerGroups.map((headerGroup, index) => (
              <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => (
                  <Th {...column.getHeaderProps(column.getSortByToggleProps())} pe="10px" key={index} borderColor={borderColor}>
                    <Flex justify="space-between" align="center" fontSize={{ sm: "10px", lg: "12px" }} color="gray.400">
                      {column.render("Header")}
                    </Flex>
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row);
              return (
                <Tr {...row.getRowProps()} key={index}>
                  {row.cells.map((cell, index) => {
                    let data = "";
                    if (cell.column.Header === "NAME") {
                      data = (
                        <Text color={textColor} fontSize="sm">
                          {cell.row.original.psychologistId?.fullName}
                        </Text>
                      );
                    } else if (cell.column.Header === "DATE") {
                      data = (
                        <Text color={textColor} fontSize="sm">
                          {new Date(cell.row.original.scheduleId?.date).toDateString()}
                        </Text>
                      );
                    } else if (cell.column.Header === "TIME") {
                      data = (
                        <Text color={textColor} fontSize="sm">
                          {new Date(cell.row.original.scheduleId?.timeSlots?.startTime).toLocaleTimeString()} - {new Date(cell.row.original.scheduleId?.timeSlots?.endTime).toLocaleTimeString()}
                        </Text>
                      );
                    } else if (cell.column.Header === "PROBLEMS") {
                      data = (
                        <Badge colorScheme="green" mr="2" mt="2">
                          {cell.row.original.userProblem}
                        </Badge>
                      );
                    } else if (cell.column.Header === "PACKAGE") {
                      data = (
                        <Text color={textColor} fontSize="sm">
                          {cell.row.original.package}
                        </Text>
                      );
                    } else if (cell.column.Header === "STATUS") {
                      data = (
                        <Flex align="center">
                          <Icon
                            w="24px"
                            h="24px"
                            me="5px"
                            color={cell.value === "Scheduled" ? "green.500" : cell.value === "Canceled" ? "red.500" : cell.value === "Waiting confirmation" ? "orange.500" : null}
                            as={cell.value === "Scheduled" ? MdCheckCircle : cell.value === "Canceled" ? MdCancel : cell.value === "Waiting confirmation" ? MdOutlineError : null}
                          />
                          <Text color={textColor} fontSize="sm" fontWeight="700">
                            {cell.value}
                          </Text>
                        </Flex>
                      );
                    } else if (cell.column.Header === "ACTION") {
                      data = (
                        <HStack>
                          <Link to={`appointments/detail/${cell.row.original._id}`}>
                            <IconButton colorScheme="green" aria-label="Search database" borderRadius="10px" icon={<InfoIcon />} />
                          </Link>

                          <IconButton onClick={() => handleCanceled(cell.row.original._id)} colorScheme="red" aria-label="Search database" borderRadius="10px" icon={<SmallCloseIcon />} />
                        </HStack>
                      );
                    }
                    return (
                      <Td {...cell.getCellProps()} key={index} fontSize={{ sm: "14px" }} maxH="30px !important" py="8px" minW={{ sm: "150px", md: "200px", lg: "auto" }} borderColor="transparent">
                        {data}
                      </Td>
                    );
                  })}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Cancel the appointment?</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Select placeholder="Change appointment status..." size="md" />
            </ModalBody>
            <ModalFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                No
              </Button>
              <Button colorScheme="brand">Yes</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </CardBody>
    </Card>
  );
}
