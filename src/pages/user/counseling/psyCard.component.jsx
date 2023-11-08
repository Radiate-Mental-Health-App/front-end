"use client";
import React from "react";
import { Route, Link } from "react-router-dom";
import { Badge, Button, Center, Flex, Heading, Image, Stack, Text, useColorModeValue, GridItem } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { FaBriefcase } from "react-icons/fa";

const PsychologistCard = ({ psychologist }) => {
  return (
    <div className="psychologist-card">
      <GridItem w="100%" h="10" bg="blue.500">
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: "100%", md: "540px" }}
          height={{ sm: "476px", md: "20rem" }}
          direction={{ base: "column", md: "row" }}
          // eslint-disable-next-line react-hooks/rules-of-hooks
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          padding={4}
        >
          <Flex flex={1} bg="blue.200">
            <Image objectFit="cover" boxSize="100%" src={"https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"} alt="#" />
          </Flex>
          <Stack flex={1} flexDirection="column" justifyContent="center" alignItems="center" p={1} pt={2}>
            <Heading fontSize={"2xl"} fontFamily={"body"}>
              {psychologist.name}
            </Heading>
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
            <Text
              textAlign={"left"}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              color={useColorModeValue("gray.700", "gray.400")}
              px={3}
            >
              {psychologist.specialization}
            </Text>

            <Link to={`/p/details/${psychologist.id}`}>
              <Stack width={"100%"} mt={"2rem"} direction={"row"} padding={2} justifyContent={"space-between"} alignItems={"center"}>
                <Button flex={1} fontSize={"sm"} rounded={"full"} bg={"#FFAC31"} color={"white"}>
                  Profile Details
                </Button>
              </Stack>
            </Link>
          </Stack>
        </Stack>
      </GridItem>
    </div>
  );
};

export default PsychologistCard;
