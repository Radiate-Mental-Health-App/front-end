import './single.scss'
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { FiUser, FiMail, FiCalendar, FiPhone } from "react-icons/fi";
import { Input, Text, Flex, Box, Heading, ChakraProvider, Spacer, Image, Avatar, CardHeader, Card, Stack, Icon, FormControl, FormLabel, RadioGroup, HStack, Radio } from '@chakra-ui/react';

const Single = () => {
    return ( 
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
               <Navbar />
               <ChakraProvider>
               <Heading size='md' p='20px'>User Detail</Heading>

                <Flex paddingLeft='20px'paddingRight='20px' gap='2'>
                    <Box className='profile' bg='white' w='40%' borderWidth='1px' borderRadius='lg' p='5'>
                        <Flex spacing='4'>
                            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                <Avatar size='lg' src='https://image.enjoymovie.net/fr1xrnZq9_d-H01uc0DGxgcMADk=/256x256/smart/core/p/L0pZo7GWPJ.jpg' />
                                <Box>
                                    <Heading size='md'>Jamie Lanister</Heading>
                                    <Text color='gray.500'> Rawa Buaya, Jakarta Barat</Text>
                                </Box>
                            </Flex>
                        </Flex>
                        <Stack mt='4' spacing='2'>
                            <Text fontSize='md' fontWeight='semibold' color='gray.400'> Personal Information </Text>
                            <Flex alignItems='center' gap='3'>
                                <Icon as={FiUser} />
                                <Text> Male </Text>
                            </Flex>
                            <Flex alignItems='center' gap='3'>
                                <Icon as={FiCalendar} />
                                <Text> 15-01-1996 </Text>
                            </Flex>
                           
                            <Text mt='10px' fontSize='md' fontWeight='semibold' color='gray.400'> Contact Details </Text>
                            <Flex alignItems='center' gap='3'>
                                <Icon as={FiPhone} />
                                <Text> 123-456-7890 </Text>
                            </Flex>
                            <Flex alignItems='center' gap='3'>
                                <Icon as={FiMail} />
                                <Text> johndoe@example.com </Text>
                            </Flex>
                        </Stack>
                    </Box>
                    
                    <Spacer />

                    <Box className='update' bg='white' w='75%' borderWidth='1px' borderRadius='lg' p='5'>
                        <Heading fontSize='28px' mb='20px'>Edit</Heading>
                            <Text fontSize='lg' fontWeight='semibold' color='gray.400'> Personal Information </Text>
                            <Stack spacing='6' mt='2'>
                            <FormControl as='fieldset'>
                                <FormLabel as='legend' color='gray.500' fontSize='md'>Gender</FormLabel>
                                <RadioGroup defaultValue='Male'>
                                    <HStack spacing='24px'>
                                        <Radio value ='Male'> Male </Radio>
                                        <Radio value ='Female'> Female </Radio>
                                    </HStack>
                                </RadioGroup>
                            </FormControl>
                            
                            <FormControl w='50%'>
                                <FormLabel color='gray.500' fontSize='md'>Date of Birth</FormLabel>
                                <Input
                                    placeholder="Select Date and Time"
                                    size="md"
                                    type="datetime-local"
                                />
                            </FormControl>
                            
                            <FormControl w='50%'>
                                <FormLabel color='gray.500' fontSize='md'>City of Residence</FormLabel>
                                <Input variant='outline' type='email' />
                            </FormControl>

                            <FormControl w='50%'>
                                <FormLabel color='gray.500' fontSize='md'>City of District</FormLabel>
                                <Input variant='outline' type='email' />
                            </FormControl>
                        </Stack>
                    </Box>
                
                </Flex>
                
                



               </ChakraProvider>
            </div>
        </div>
     );
}
 
export default Single;