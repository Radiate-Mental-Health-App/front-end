/* eslint-disable react/prop-types */
"use client";
import React from "react";
import { Route, Link } from "react-router-dom";
import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
  GridItem,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { FaBriefcase } from "react-icons/fa";

const PsychologistCard = ({ psychologist }) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src="https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody>
          <Heading size="md" fontFamily="body">
            {psychologist.name}
          </Heading>
          <Stack direction={"row"} mt={2}>
              <Badge
                px={2}
                py={1}
                // eslint-disable-next-line react-hooks/rules-of-hooks
                bg={useColorModeValue("gray.50", "gray.800")}
                fontWeight={"400"}
              >
                <Icon as={FaBriefcase} />
                <span />5 years
              </Badge>
              <Badge
                px={2}
                py={1}
                // eslint-disable-next-line react-hooks/rules-of-hooks
                bg={useColorModeValue("gray.50", "gray.800")}
                fontWeight={"400"}
              >
                <StarIcon /> <span />
                4.8
              </Badge>
          </Stack>
          <Text pt={4}>{psychologist.specialization}</Text>
        </CardBody>

        <CardFooter>
          <Link to={`/p/details/${psychologist.id}`}>
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              bg={"#FFAC31"}
              color={"white"}
            >
              Profile Details
            </Button>
          </Link>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default PsychologistCard;

/*
<Stack align={"center"} justify={"center"} direction={"row"} mt={1}>
            <Badge
              px={2}
              py={1}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
            >
              <Icon as={FaBriefcase} />
              <span />5 years
            </Badge>
            <Badge
              px={2}
              py={1}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
            >
              <StarIcon /> <span />
              4.8
            </Badge>
          </Stack>
          <Text py="2">{psychologist.specialization}</Text>
*/
