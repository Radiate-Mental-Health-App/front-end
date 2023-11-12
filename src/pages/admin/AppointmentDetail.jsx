import { Box, Flex, Heading, Avatar, Text, Tag, TagLeftIcon, TagLabel, Icon, Stack, HStack, Input, Button } from '@chakra-ui/react';
import { FiMail, FiCalendar, FiPhone, FiUsers, FiClock } from "react-icons/fi";
import { BsArrowLeftRight } from "react-icons/bs";
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

function AppointmentDetail() {

// fetching API
const { id } = useParams();
const [data, setData] = useState();

useEffect(() => {
    const fetchData = async () => {
        axios.get(`http://localhost:8000/appointment/${id}`)
        .then(res => {
            setData(res.data);
        })
        .catch(err => console.log(err));
    }
    fetchData();
}, []);

//status
const Status = () => {
    if(data && data.paymentTime !== null) {
        return(
            <Tag variant="subtle" size='md' colorScheme="orange">
                <TagLeftIcon as={ FiCalendar } />
                <TagLabel> Scheduled </TagLabel>
            </Tag>
        )
    }

    else return (
        <Tag variant="subtle" size='md' colorScheme="orange">
            <TagLeftIcon as={ FiClock } />
            <TagLabel> Waiting for Payment </TagLabel>
        </Tag>
    )
}

// input link
const [input, setInput] = useState({ link:'' });
function handleSubmit(event) {
    event.preventDefault()
    console.log(input);

    axios.post(`http://localhost:8000/appointment/${id}`, { ...data, ...input })
    .then(res => {
        alert('Link added successfully.');
    })
    .catch(err => console.log(err));
}

  return (
    <div className="detail">
        <form onSubmit={handleSubmit}>
        <Box p='24px' >
            <Heading size="lg" mb={"5"}> Order Details </Heading>
            <Box p={5} border="1px" borderColor="gray.200" borderRadius="5px" bg='white'>
                <Flex alignItems='center' justifyContent='space-evenly'>
                    <Box className='user' p={3}>
                        <Flex alignItems='center' flexWrap='wrap' gap={3}>
                        {data && data.userImage && <Avatar size='lg' src={data.userImage} />}
                            <Box>
                                {data && data.userName && <Text fontSize='md' fontWeight='semibold' mb='4px'>
                                {data.userName} </Text>}
                                <Status />
                            </Box>
                        </Flex>
                    </Box>

                    <Box>
                        <Icon fontSize='24px' as={BsArrowLeftRight} />
                    </Box>

                    <Box className='konselor' p={3}>
                        <Flex alignItems='center' flexWrap='wrap' gap={3}>
                        {data && data.counselorImage && <Avatar size='lg' src={data.counselorImage} />}
                            <Box>
                                {data && data.counselor && <Text fontSize='md' fontWeight='semibold' mb='4px'>
                                {data.counselor} </Text>}
                                {data && data.counselorJob && <Text fontSize='md'>
                                {data.counselorJob} </Text>}
                            </Box>
                        </Flex>
                    </Box>
                </Flex>

                <Box mt={3} p={5} borderTop='1px' borderColor="gray.200">
                    <Box>
                        <Flex justifyContent='space-between'>
                            <Box className='order' pl={8} pr={8}>
                                <Text fontSize='lg' fontWeight='semibold' color='gray.400' mb={1}> Order Details </Text>
                                <HStack spacing={30}>
                                    <Box>
                                        <Stack spacing={2}>
                                            <Text fontWeight='semibold'> Order Time </Text>
                                            <Text fontWeight='semibold'> Payment Time </Text>
                                            <Text fontWeight='semibold'> Amount </Text>
                                        </Stack>
                                    </Box>
                                    <Box>
                                        <Stack spacing={2}>
                                            {data && data.orderTime && <Text> {data.orderTime} </Text>}
                                            {data && data.paymentTime && <Text> {data.paymentTime} </Text>}
                                            {data && data.amount && <Text> Rp {data.amount} </Text>}
                                        </Stack>
                                    </Box>
                                </HStack>
                            </Box>
                            <Box pl={8} pr='130px'>
                                <Text fontSize='lg' fontWeight='semibold' color='gray.400' mb={1}> Appointment Details </Text>
                                    <HStack spacing={30}>
                                        <Box>
                                            <Stack spacing={2}>
                                                <Text fontWeight='semibold'> Package </Text>
                                                <Text fontWeight='semibold'> Date </Text>
                                                <Text fontWeight='semibold'> Time </Text>
                                            </Stack>
                                        </Box>
                                        <Box>
                                            <Stack spacing={2}>
                                                {data && data.package && <Text> {data.package} </Text>}
                                                {data && data.schedule.date && 
                                                <Text> {data.schedule.date} </Text>}
                                                <HStack>
                                                    {data && data.schedule.timeSlots.startTime &&
                                                    <Text> {data.schedule.timeSlots.startTime} - </Text>}
                                                    {data && data.schedule.timeSlots.endTime &&
                                                    <Text> {data.schedule.timeSlots.endTime} </Text>}
                                                </HStack>
                                            </Stack>
                                        </Box>
                                    </HStack>
                            </Box>
                        </Flex>
                    </Box>

                    <Box mt={6} p={5} borderTop='1px' borderColor="gray.200">
                        <Box>
                            <Text fontSize='lg' fontWeight='semibold' color='gray.400' mb={1}> Add link for this appointment </Text>
                            <Text> Link </Text>
                            <HStack>
                                <Input w='400px' onChange={e => setInput({...input, link: e.target.value})}/>
                            </HStack>
                        </Box>
                    </Box>
                    
                    <Flex justifyContent='flex-end'>
                        <Box mt={6} p={5}>
                            <HStack spacing={3}>
                                <Link to={`/a`}>
                                    <Button colorScheme='red' variant='ghost'> Cancel </Button>
                                </Link>
                                
                                <Button colorScheme='orange' type='submit'> Save </Button>
                            </HStack>
                            
                        </Box>
                    </Flex>
                    
                    
                    
                        
                        
                   
                </Box>
            </Box>
        </Box>
        </form>
        
    </div>
  )
}

export default AppointmentDetail;
