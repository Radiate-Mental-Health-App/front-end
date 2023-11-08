/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _|
 | |_| | | | | |_) || |  / / | | |  \| | | | | || |
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|

=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import {
    Box,
    Card,
    CardBody,
    CardHeader,
    Heading,
    Stack,
    Text,
    StackDivider,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
    Flex,
    SimpleGrid
} from "@chakra-ui/react";
import Appointment from "../default/components/Appointment";

// Custom components

export default function AppointmentDetail() {
    return (
        <Stack p={"32px"}>
            <Card
                variant={"filled"}
                bgColor="grey"
                color={"white"}
                mb={4}
                borderRadius='16px'>
                <CardHeader>
                    <Heading size='md'>Patient name</Heading>
                </CardHeader>
                <CardBody>
                    <SimpleGrid columns='2' gap='16px'>
                        <Text>Full name</Text>
                        <Text>Full name</Text>
                        <Text>Full name</Text>
                        <Text>Full name</Text>
                    </SimpleGrid>
                </CardBody>
            </Card>
            <Card
                justifyContent="center"
                align="left"
                w="100%"
                mb="0px"
                borderRadius='20px'>
                <CardHeader>
                    <Heading size='md'>Counseling Result</Heading>
                </CardHeader>

                <CardBody>
                    <Accordion mt={2} defaultIndex={[0]} allowMultiple>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        Section 1 title
                                    </Box>
                                    <AccordionIcon/>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        Section 2 title
                                    </Box>
                                    <AccordionIcon/>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </CardBody>
            </Card>
        </Stack>

    );
}
