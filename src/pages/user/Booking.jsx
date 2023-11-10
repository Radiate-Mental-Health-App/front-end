import { Box, Center, Flex, Text, Avatar, Stack, TagLabel, Tag, TagLeftIcon, Icon, HStack, VStack, Select, Button, Card, CardHeader, Heading, CardBody, ListItem, CardFooter, SimpleGrid } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaBriefcase, FaRegCommentAlt, FaRegComment } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { HiOutlineIdentification } from "react-icons/hi";
import { IoSchoolOutline } from "react-icons/io5";
import { BsFileEarmark } from "react-icons/bs";
import axios from "axios";

function Booking() {
    // fetching data
  const { id } = useParams();
  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      axios.get(`http://localhost:8000/counselors/${id}`)
      .then(res => {
        setData(res.data)
      })
      .catch(err => console.log(err))
    }
    fetchData();
  }, [id]);

const [jam, setJam] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      axios.get(`http://localhost:8000/jadwal`)
      .then(res => {
        setJam(res.jam)
      })
      .catch(err => console.log(err))
    }
    fetchData();
  }, []);

// card
const Package = () => {
    return (
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
        <Card variant='elevated'>
            <CardHeader>
                <Heading size='md' textAlign='center'> Video Call </Heading>
            </CardHeader>
            <CardBody>
                <Text> A video call session for an hour. </Text>
                <Text fontWeight='semibold'> Rp100.000 </Text>
            </CardBody>
            <CardFooter>
                <Box display='flex' justifyContent='center'>
                    <CardFooter>
                        <Button bg='#FFAC31' color='white'> Select </Button>
                    </CardFooter>
                </Box>
            </CardFooter>
        </Card>

        <Card>
            <CardHeader>
                <Heading size='md' textAlign='center'> Voice Call </Heading>
            </CardHeader>
            <CardBody>
                <Text> A voice call session for an hour. </Text>
                <Text fontWeight='semibold'> Rp100.000 </Text>
            </CardBody>
            <CardFooter>
                <Box display='flex' justifyContent='center'>
                    <CardFooter>
                        <Button bg='#FFAC31' color='white'> Select </Button>
                    </CardFooter>
                </Box>
            </CardFooter>
            
        </Card>
        </SimpleGrid>
        
    )
}

    return(
        <Box bg='white' p='24px' borderTop='1px' borderTopColor='gray.200'>
            <Box className="profile" pr='80px' pl='80px'>
                <Box className="title">
                    <Center>
                        <Text fontSize='18px' fontWeight='semibold'>About this Psychologyst</Text>
                    </Center>
                </Box>
                <Box mt={6} className="profil-psikolog">
                    <Flex gap={6} flexWrap='wrap'>
                        <Avatar size='xl' src={data.photo} />
                        <Box flexBasis='calc(100% - 140px)'>
                            <Text fontSize='lg' fontWeight='semibold'>{data.fullName}</Text>
                            <Text color='gray.500' fontSize='md'> {data.currentJob} </Text>
                            <Flex gap={4}>
                                <Tag variant='solid' mt='6px' colorScheme="orange" size='md'>
                                    <TagLeftIcon as={FaBriefcase} fontSize='12px' />
                                    <TagLabel> {data.yearsOfExperienceAsCounselor} years </TagLabel>
                                </Tag>

                                
                            </Flex>
                            <Text fontSize='16px' mt={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Cursus mattis molestie a iaculis at. Purus in mollis nunc sed id.
                                Mattis rhoncus urna neque viverra justo nec ultrices. Netus et malesuada fames ac.
                            </Text>
                        </Box>
                    </Flex>
                </Box>

                <Box className="details" mt='20px'>
                    <Box className="box 1" p={4} mr='30px'>
                        <Flex justifyContent='space-between'>
                            <Flex gap='2' flexWrap='wrap'>
                                <Icon as={HiOutlineIdentification} fontSize='24px' />
                                <Box>
                                    <Text fontSize='16px' fontWeight='semibold'> Lisence </Text>
                                    <Text> 1234567890 </Text>
                                </Box>
                            </Flex>

                            <Flex gap='2' flexWrap='wrap'>
                                <Icon as={IoSchoolOutline} fontSize='24px' />
                                <Box>
                                    <Text fontSize='16px' fontWeight='semibold'> Education </Text>
                                    <Text> {data.levelOfEducation} </Text>
                                </Box>
                            </Flex>
                        </Flex>
                    </Box>

                    <Box p={4}>
                        <Flex gap='2' >
                                <Icon as={BsFileEarmark} fontSize='18px' />
                                <Box>
                                    <Text fontSize='16px' fontWeight='semibold'> Areas of Focus </Text>
                                    {data.expertiseFields && data.expertiseFields.map((field, index) => (
                                    <Tag
                                    key={index}
                                    size="md" colorScheme="orange" 
                                    variant="subtle"
                                    borderRadius='full'
                                    mt='6px'
                                    mr='6px'
                                    >
                                    <TagLabel>{field}</TagLabel>
                                    </Tag> ))}
                                </Box>
                            </Flex>
                    </Box>
                </Box>

                <Box className="jadwal" mt='40px'>
                    <Stack spacing={3}>
                        <Text fontWeight='semibold'> Available Schedules </Text>
                       
                            <Select placeholder="Book an appoinment" size='md'>
                            <option> Kamis, 28 September 2023 </option>
                            <option> Jum'at, 29 September 2023 </option>
                            <option> Sabtu, 30 September 2023 </option>
                            </Select>

                            <Select placeholder="Choose your session" size='md'>
                            <option> 13.00 - 15.00 </option>
                            <option> 18.00 - 19.00 </option>
                            </Select>
                        
                    </Stack>
                </Box>

                <Box mt='40px'>
                    <Text textAlign='center' fontWeight='semibold' mb='10px'> What do you need? </Text>
                    <Package />
                </Box>

                <Box mt='20px' display='flex' justifyContent='flex-end'>
                    <Button bg='#FFAC31' color='white'> Next </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Booking;