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
    Card,
    CardBody,
    CardHeader,
    Heading,
    Stack
} from "@chakra-ui/react";

// Custom components

export default function AppointmentDetail() {
    return (
        <Stack p={"32px"}>
            <Card
                justifyContent="center"
                align="left"
                w="100%"
                mb="0px"
                borderRadius='20px'>
                <CardHeader>
                    <Heading size='md'>Appointment Detail</Heading>
                </CardHeader>

                <CardBody></CardBody>
            </Card>
        </Stack>

    );
}
