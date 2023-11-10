import {
    Box,
    Button,
    Card,
    CardBody,
    CardHeader,
    Center,
    Divider,
    Heading,
    Icon,
    SimpleGrid,
    Text
} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import { HiCheckBadge } from "react-icons/hi2";

function CounselingPaymentDone() {
    return (
        <Box p={'32px'} alignSelf={"center"} mt={8}>
            <Card padding="8px" borderRadius='20px' w="60vh" px="0px">
                <CardHeader display={"flex"} flexDirection={"column"} alignItems={"center"}>
                    <Icon
                        w="80px"
                        h="80px"
                        as={HiCheckBadge}
                        color={"green"}/>
                    <Heading size={"lg"}>
                        Payment Success
                    </Heading>
                </CardHeader>
                <CardBody>
                    <Heading size={"sm"}>
                        Transaction detail
                    </Heading>

                    <SimpleGrid columns={2} columnGap={1}>
                        <Text>Transaction code</Text>
                        <Text>S1283HASDH91</Text>
                    </SimpleGrid>

                    <SimpleGrid columns={2} columnGap={1}>
                        <Text>Payment method</Text>
                        <Text>Bank transfer</Text>
                    </SimpleGrid>

                    <SimpleGrid columns={2} columnGap={1}>
                        <Text>Date</Text>
                        <Text>September 20, 2023</Text>
                    </SimpleGrid>

                    <SimpleGrid columns={2} columnGap={1}>
                        <Text>Time</Text>
                        <Text>04:00 PM</Text>
                    </SimpleGrid>

                    <Divider borderStyle={"dashed"} borderColor={"grey"} mt={8} mb={2}></Divider>
                    <SimpleGrid columns={2} columnGap={1}>
                        <Heading size={"md"} fontWeight={"bold"}>Total</Heading>
                        <Heading size={"md"} fontWeight={"bold"}>IDR 100.000</Heading>
                    </SimpleGrid>

                    <Center>
                        <Link to={"/u/counseling"}>
                            <Button mt={8} float={"right"} variant={"outline"} colorScheme="brand">Back to counseling menu</Button>
                        </Link>
                    </Center>
                </CardBody>
            </Card>
        </Box>
    );
}

export default CounselingPaymentDone;
