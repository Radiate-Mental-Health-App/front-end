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
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
    Grid
} from "@chakra-ui/react";

import Banner from "./components/BannerPatient";

import banner from "@/assets/img/auth/banner.jpg";
import avatar from "@/assets/img/auth/avatars/avatar10.png";

export default function AppointmentDetail() {
    return (
        <Box p={"32px"}>
            <Grid
                templateColumns={{
                base: "1fr",
                lg: "1.34fr 2.62fr"
            }}
                templateRows={{
                base: "repeat(2, 1fr)",
                lg: "1fr"
            }}
                gap={{
                base: "20px",
                xl: "20px"
            }}>
            <Banner
                    gridArea='1 / 1 / 2 / 2'
                    banner={banner}
                    avatar={avatar}
                    name='Patient full name'
            />
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
                                    <Box as="span" flex='1' textAlign='left' fontWeight="bold">
                                        Evaluation type
                                    </Box>
                                    <AccordionIcon/>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Observation
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left' fontWeight="bold">
                                        Observation result
                                    </Box>
                                    <AccordionIcon/>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                The patient exhibited signs of...
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left' fontWeight="bold">
                                        Interview result
                                    </Box>
                                    <AccordionIcon/>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                During the interview,the patient...
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left' fontWeight="bold">
                                        Personality dinamics
                                    </Box>
                                    <AccordionIcon/>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                The patient&apos;s personality dynamics...
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left' fontWeight="bold">
                                        Solution and assignment
                                    </Box>
                                    <AccordionIcon/>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                The patient is advised to...
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left' fontWeight="bold">
                                        Conclusion
                                    </Box>
                                    <AccordionIcon/>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                In conclusion, the counseling session..
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </CardBody>
            </Card>
            </Grid>
        </Box>

    );
}
