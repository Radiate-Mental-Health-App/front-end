import {
  Box,
  Button,
  FormControl,
  Input,
  Image,
  Text,
  RadioGroup,
  Radio,
  Stack,
} from "@chakra-ui/react";

import Logo from "../../assets/radiate-logo.png";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const [registrationType, setRegistrationType] = useState("user");

  const onSubmit = async (data) => {
    const dataForm = {
      email: data.email,
      fullName: data.fullName,
      password: data.password,
      roles: registrationType,
    };

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataForm),
      });

      const data = await response.json();
      console.log(data);
      alert("berhasil mendaftar");
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  const Role = () => {
    if (registrationType === 'user') {
      return (
        <Text fontSize="24px" as="b"> User </Text>
      );
    }
    else return (
      <Text fontSize="24px" as="b"> Psychologist </Text>
    );
  };

  return (
    <div className="login">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        bg="gray100"
        h="100vh"
        flexDirection="column"
      >
        <RadioGroup
          value={registrationType}
          onChange={setRegistrationType}
          defaultValue="user"
        >
          <Stack direction="row">
            <Radio value="user">User</Radio>
            <Radio value="psychologist">Psychologist</Radio>
          </Stack>
        </RadioGroup>

        <Box
          bg='white'
          borderRadius='20'
          boxShadow='md'
          p='50px'
          border='1px'
          borderColor='gray.200'
          mt={3}
          className="register"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={6}>
              <Box className="logo">
                <Stack align="center" spacing={3}>
                  <Image src={Logo} h="60px" />
                  <Box textAlign='center'>
                    <Text fontSize="24px" as="b">
                      Sign Up as <Role />
                    </Text>
                    <Text fontSize="16px"> Create an account</Text>
                  </Box>
                </Stack>
              </Box>

              <Box className="form">
                <Stack align="center" spacing={3}>
                  <FormControl>
                    <Input
                    type="text"
                    variant="outline"
                    rounded="10"
                    placeholder="Fullname"
                    {...register("fullName", {
                      required: true,
                    })}
                    />
                  </FormControl>

                  <FormControl>
                    <Input
                      type="email"
                      variant="outline"
                      rounded="10"
                      placeholder="Email Address"
                      {...register("email", {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                      })}
                    />
                  </FormControl>

                  <FormControl>
                    <Input
                      type="password"
                      variant="outline"
                      rounded="10"
                      placeholder="Password"
                      {...register("password", {
                        required: true,
                      })}
                    />
                  </FormControl>
                </Stack>
              </Box>

              <Box className="button">
                <Stack align="center">
                  <Button
                    type="submit"
                    colorScheme="orange"
                    bgColor="orange2"
                    mb="10px"
                    w="full"
                  >
                    Register
                  </Button>
                  
                  <Button
                    color="orange"
                    fontWeight='normal'
                    onClick={() => navigate("/login")}
                    variant='link'>
                    Already have an account?
                    <Text fontWeight='semibold' as='u' ml='3px'> Log in </Text>
                  </Button>
                </Stack>
              </Box>
            </Stack>
          </form>
        </Box>
      </Box>
    </div>
  );
};

export default Register;