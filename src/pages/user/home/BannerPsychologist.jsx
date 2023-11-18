// Chakra imports
import {
    Avatar,
    Box,
    Card,
    SimpleGrid,
    Text,
    useColorModeValue
} from "@chakra-ui/react";

export default function Banner(props) {
    // eslint-disable-next-line react/prop-types
    const {banner, avatar, appointmentData} = props;

    // Chakra Color Mode
    const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
    const borderColor = useColorModeValue("white !important", "#111C44 !important");

    return (
        <Card padding="20px" borderRadius='20px' align='left'>
            <Box
                bg={`url(${banner})`}
                bgSize='cover'
                borderRadius='16px'
                h='131px'
                w='100%'/>
            <Avatar
                mx='auto'
                src={avatar}
                h='87px'
                w='87px'
                mt='-43px'
                border='4px solid'
                borderColor={borderColor}/>
            <Text
                color={textColorPrimary}
                fontWeight='bold'
                fontSize='xl'
                mt='10px'
                mb='4px'
                align={"center"}>
                {appointmentData.psychologistId.fullName}
            </Text>

            <SimpleGrid columns={2} columnGap={1}>
                <Text fontWeight={"bold"}>Gender</Text>
                <Text>{appointmentData.psychologistId.gender || "-"}</Text>
            </SimpleGrid>

            <SimpleGrid columns={2} columnGap={1}>
                <Text fontWeight={"bold"}>Email</Text>
                <Text>{appointmentData.psychologistId.email}</Text>
            </SimpleGrid>

            <SimpleGrid columns={2} columnGap={1}>
                <Text fontWeight={"bold"}>WhatsApp</Text>
                <Text>{appointmentData.psychologistId.whatsappNo || "-"}</Text>
            </SimpleGrid>

            <SimpleGrid columns={2} columnGap={1}>
                <Text fontWeight={"bold"}>Method</Text>
                <Text>{appointmentData.package}</Text>
            </SimpleGrid>

            <SimpleGrid columns={2} columnGap={1}>
                <Text fontWeight={"bold"}>Problems</Text>
                <Text>{appointmentData.userProblem}</Text>
            </SimpleGrid>

            <SimpleGrid columns={2} columnGap={1}>
                <Text fontWeight={"bold"}>Appointment date</Text>
                <Text>{new Date(appointmentData.scheduleId.date).toDateString()}</Text>
            </SimpleGrid>

            <SimpleGrid columns={2} columnGap={1}>
                <Text fontWeight={"bold"}>Appointment time</Text>
                <Text>{new Date(appointmentData.scheduleId.timeSlots.startTime).toLocaleTimeString()} - {new Date(appointmentData.scheduleId.timeSlots.endTime).toLocaleTimeString()}</Text>
            </SimpleGrid>

            <SimpleGrid columns={2} columnGap={1}>
                <Text fontWeight={"bold"}>Link Session</Text>
                <Text>{appointmentData.linkSession || "-"}</Text>
            </SimpleGrid>
        
        </Card>
    );
}
