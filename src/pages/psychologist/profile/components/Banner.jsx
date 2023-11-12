// Chakra imports
import {
    Avatar,
    Box,
    Card,
    Text,
    TagLeftIcon,
    Tag,
    TagLabel,
    useColorModeValue
} from "@chakra-ui/react";

import { FiClock, FiCheckCircle } from "react-icons/fi";

export default function Banner(props) {
    // eslint-disable-next-line react/prop-types
    const { banner, avatar, name, job } = props;

    // Chakra Color Mode
    const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
    const textColorSecondary = "gray.400";
    const borderColor = useColorModeValue("white !important", "#111C44 !important");

    return (
        <Card
        //     mb={{
        //     base: "0px",
        //     lg: "20px"
        // }}
            padding="20px"
            borderRadius='20px'
            align='center'
            height="max-content">
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
            <Tag variant="subtle" size='md' colorScheme="green">
                <TagLeftIcon as={ FiCheckCircle } />
                <TagLabel> Verified </TagLabel>
            </Tag>
            <Tag variant="subtle" size='md' colorScheme="orange">
        <TagLeftIcon as={ FiClock } />
        <TagLabel> Pending </TagLabel>
      </Tag>
        </Card>
    );
}
