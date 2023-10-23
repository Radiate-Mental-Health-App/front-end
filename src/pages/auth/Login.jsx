import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Input,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

import Logo from "../../assets/radiate-logo.png";

import { userState } from "../../components/PrivateRoutes/AuthAtoms";
import { useRecoilState } from "recoil";

import { useForm } from "react-hook-form";
import { redirect } from "react-router";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const [user, setUser] = useRecoilState(userState);

  const onSubmit = (data) => {
    setUser({
      email: data.email,
      password: data.password,
    });
    console.log(user);
    redirect("/u");
  };

  return (
    <div className="login">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        bg="gray100"
        h="100vh"
      >
        <Box
          w={["full", "md"]}
          p="50px 50px"
          bg="neutralW"
          borderRadius="20"
          boxShadow="lg"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing={1} align="flex-start" w="full">
              <VStack spacing={1} align={["flex-start", " center"]} w="full">
                <Image src={Logo} height="60px" mb="48px" />
                <Text fontSize="30px" as="b">
                  Sign In
                </Text>
                <Text> Enter your email and password to login</Text>
              </VStack>
            </VStack>

            <FormControl mb="20px" mt="32px">
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

            <FormControl mb="16px">
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

            <Button
              type="submit"
              w="full"
              mt="20px"
              colorScheme="orange"
              bgColor="orange2"
              mb="10px"
            >
              Login
            </Button>
          </form>
        </Box>
      </Box>
    </div>
  );
};

export default Login;
