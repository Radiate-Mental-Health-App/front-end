import { 
    Box, Heading,
    Avatar, Flex,
    VStack, Text,
    HStack, FormControl,
    FormLabel, Input,
    Radio, RadioGroup, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

function Add() {
    const [input, setInput] = useState({fullName:'', password:'', email:'', photo: '',
    gender:'', dateOfBirth:'', cityOfResidence:'', cityOfDistrict:'', whatsappNo:'' });

    const goTo = useNavigate();
      
    function handleSubmit(event) {
        event.preventDefault()
        console.log(input);

        axios.post('http://localhost:8000/users', input)
        .then(res => {
            alert('User added successfully!');
            goTo('/a/users'); 
        })
        .catch(err => console.log(err));
    }

    return (
        <Box className="user-detail" p="32px">
            <Heading size="lg" mb={5}> Add New User</Heading>
            <form onSubmit={handleSubmit}>
                <Box borderRadius="10px" border="1px" borderColor="gray.200" bgColor="white">
                    <Box className="avatar" display='flex' justifyContent='center' p={6}>
                        <Avatar size='2xl' name={input.fullName} />
                    </Box>
                    <Flex justifyContent='space-between'>
                            <Box className="personal" p='6'>
                                <Text mb='20px' fontSize='lg' fontWeight='semibold' color='gray.400'> Personal Information </Text>
                                <VStack spacing={6}>
                                    <FormControl >
                                        <FormLabel color='gray.500' fontSize='md'>Full Name</FormLabel>
                                        <Input isDisabled variant='outline' onChange={e => setInput({...input, fullName: e.target.value})} />
                                    </FormControl>
                                    <FormControl >
                                        <FormLabel color='gray.500' fontSize='md'>Password</FormLabel>
                                        <Input variant='outline' onChange={e => setInput({...input, password: e.target.value})} />
                                    </FormControl>
                                    <FormControl as='fieldset'>
                                        <FormLabel as='legend' color='gray.500' fontSize='md'>Gender</FormLabel>
                                        <RadioGroup onChange={value => setInput({...input, gender: value})}>
                                            <HStack spacing='24px'>
                                                <Radio value ='Male'> Male </Radio>
                                                <Radio value ='Female'> Female </Radio>
                                            </HStack>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel color='gray.500' fontSize='md'>Date of Birth</FormLabel>
                                        <Input
                                            placeholder="Select Date and Time"
                                            size="md"
                                            type="datetime-local"
                                            onChange={e => setInput({...input, dateOfBirth: e.target.value})}
                                        />
                                    </FormControl>
                                </VStack>
                            </Box>

                            <Box className='address' p='6'>
                                <Text mb='20px' fontSize='lg' fontWeight='semibold' color='gray.400'> Address </Text>
                                <VStack spacing={6}>
                                    <FormControl >
                                        <FormLabel color='gray.500' fontSize='md'> City of Residence </FormLabel>
                                        <Input variant='outline' onChange={e => setInput({...input, cityOfResidence: e.target.value})} />
                                    </FormControl>
                                    <FormControl >
                                        <FormLabel color='gray.500' fontSize='md'> City of District </FormLabel>
                                        <Input variant='outline' onChange={e => setInput({...input, cityOfDistrict: e.target.value})} />
                                    </FormControl>
                                </VStack>
                            </Box>

                            <Box className="contact" p='6'>
                                <Text mb='20px' fontSize='lg' fontWeight='semibold' color='gray.400'> Contact Details </Text>
                                <VStack spacing={6}>
                                    <FormControl >
                                        <FormLabel color='gray.500' fontSize='md'>Email</FormLabel>
                                        <Input variant='outline' type='email' onChange={e => setInput({...input, email: e.target.value})} />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel color='gray.500' fontSize='md'>WhatsApp Number</FormLabel>
                                        <Input variant='outline' onChange={e => setInput({...input, whatsappNo: e.target.value})} />
                                    </FormControl>
                                    <Box className="button" display='flex' ml='auto' mt='100px'>
                                        <Button bg='#FFAC31' width='120px' color='white' type='submit'> Save </Button>
                                    </Box>
                                </VStack>
                            </Box>
                        </Flex>
                </Box>
            </form>
        </Box>
    )
}

export default Add;