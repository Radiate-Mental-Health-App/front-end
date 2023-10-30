// Chakra imports
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    HStack,
    Heading
} from "@chakra-ui/react";

// Custom components import Card from "@/components/card/Card.jsx";
import Appointment from "./Appointment";

export default function TodaySessions(props) {
    const {
        ...rest
    } = props;

    return (
        <Card justifyContent="center" align="left" w="100%" mb="0px" {...rest}>
            <CardHeader>
                <HStack justifyContent={"space-between"}>
                    <Heading size='md'>Today Sessions</Heading>
                    <Button fontWeight={500} size="sm" variant="outline">
                        View all
                    </Button>
                </HStack>
            </CardHeader>

            <CardBody  maxH="50vh"  overflowY="auto">
                <Appointment/>
                <Appointment/>
                <Appointment/>
                <Appointment/>
                <Appointment/>
                <Appointment/>
            </CardBody>
        </Card>
    );
}
