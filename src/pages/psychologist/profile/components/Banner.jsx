// Chakra imports
import {
    Avatar,
    Box,
    Card,
    Flex,
    Text,
    useColorModeValue
} from "@chakra-ui/react";

export default function Banner(props) {
    // eslint-disable-next-line react/prop-types
    const { banner, avatar, name, job, totalSessions, reviews } = props;

    // Chakra Color Mode
    const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
    const textColorSecondary = "gray.400";
    const borderColor = useColorModeValue("white !important", "#111C44 !important");

    return (
        <Card
            mb={{
            base: "0px",
            lg: "20px"
        }}
            align='center'>
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
            <Text color={textColorPrimary} fontWeight='bold' fontSize='xl' mt='10px'>
                {name}
            </Text>
            <Text color={textColorSecondary} fontSize='sm'>
                {job}
            </Text>
            <Flex w='max-content' mx='auto' mt='26px'>
                <Flex mx='auto' me='60px' align='center' direction='column'>
                    <Text color={textColorPrimary} fontSize='2xl' fontWeight='700'>
                        {totalSessions}
                    </Text>
                    <Text
                        color={textColorSecondary}
                        fontSize='xs'
                        fontWeight='400'
                        textAlign={"center"}>
                        total sessions
                    </Text>
                </Flex>
                <Flex mx='auto' align='center' direction='column'>
                    <Text color={textColorPrimary} fontSize='2xl' fontWeight='700'>
                        {reviews}
                    </Text>
                    <Text
                        color={textColorSecondary}
                        fontSize='xs'
                        fontWeight='400'
                        textAlign={"center"}>
                        reviews
                    </Text>
                </Flex>
            </Flex>
        </Card>
    );
}
