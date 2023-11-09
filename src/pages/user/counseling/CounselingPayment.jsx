import {
    Box,
    Button,
    Card,
    CardBody,
    CardHeader,
    Center,
    Divider,
    Heading,
    SimpleGrid,
    Text
} from "@chakra-ui/react";

function CounselingPayment() {
    return (
        <Box p={'32px'} alignSelf={"center"} mt={8}>
            <Card padding="8px" borderRadius='20px' w="70vh" px="0px">
                <CardHeader>
                    <Heading size={"md"} textAlign={"center"}>
                        Payment Detail
                    </Heading>
                </CardHeader>
                <CardBody>
                    <Heading size={"sm"}>
                        Counseling detail
                    </Heading>

                    <SimpleGrid columns={2} columnGap={1}>
                        <Text>Package</Text>
                        <Text>Basic</Text>
                    </SimpleGrid>

                    <SimpleGrid columns={2} columnGap={1}>
                        <Text>Date</Text>
                        <Text>September 23, 2023</Text>
                    </SimpleGrid>

                    <SimpleGrid columns={2} columnGap={1}>
                        <Text>Time</Text>
                        <Text>19.00-20.00</Text>
                    </SimpleGrid>

                    <SimpleGrid columns={2} columnGap={1}>
                        <Text>Problems</Text>
                        <Text>Relationship</Text>
                    </SimpleGrid>

                    <SimpleGrid columns={2} columnGap={1}>
                        <Text>Method</Text>
                        <Text>Video call</Text>
                    </SimpleGrid>

                    <SimpleGrid columns={2} columnGap={1}>
                        <Text>Psycholog</Text>
                        <Text>Psycholog name</Text>
                    </SimpleGrid>

                    <Divider borderStyle={"dashed"} borderColor={"grey"} mt={8} mb={2}></Divider>
                    <SimpleGrid columns={2} columnGap={1}>
                        <Heading size={"md"} fontWeight={"bold"}>Total</Heading>
                        <Heading size={"md"} fontWeight={"bold"}>IDR 100.000</Heading>
                    </SimpleGrid>

                    <Center>
                    <Button mt={8} float={"right"} colorScheme="brand">Confirm and Pay</Button>
                    </Center>
                </CardBody>
            </Card>
        </Box>
    );
}

export default CounselingPayment;
