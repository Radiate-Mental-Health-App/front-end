import {
  Box,
  Button,
  FormControl,
  Input,
  Image,
  Text,
  Stack
} from "@chakra-ui/react";

import Logo from "../../assets/radiate-logo.png";

// import { userState } from "../../components/PrivateRoutes/AuthAtoms";
// import { useRecoilState } from "recoil";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const roles = localStorage.getItem("roles");

  // const [user, setUser] = useRecoilState(userState);

  const onSubmit = async (data) => {
    const dataForm = {
      email: data.email,
      password: data.password,
    };

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataForm),
      });

      const data = await response.json();
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("roles", data.roles);
      localStorage.setItem("idAccount", data.id)
      if (data.roles == "user") {
        navigate("/u");
      } else if (data.roles == "psychologist") {
        navigate("/p");
      } else if (data.roles == "admin") {
        navigate("/a");
      } else {
        alert("gagal login");
      }
    } catch (error) {
      alert(error.message);
    }

    // setUser({
    //   email: data.email,
    //   password: data.password,
    // });
    // console.log(user);
    // redirect("/u");
  };

  useEffect(() => {
    if (roles == "user") {
      navigate("/u");
    } else if (roles == "psychologist") {
      navigate("/p");
    } else if (roles == "admin") {
      navigate("/a");
    } else {
      console.log("sesi login habis");
    }
  });

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
          bg='white'
          borderRadius='20'
          boxShadow='md'
          p='50px'
          border='1px'
          borderColor='gray.200'
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={6}>
              <Box className="logo">
                <Stack align="center" spacing={4}>
                  <Image src={Logo} h="60px" />
                  <Box textAlign='center'>
                    <Text fontSize="28px" as="b">
                      Log In
                    </Text>
                    <Text fontSize="16px"> Enter your email and password to login </Text>
                  </Box>
                </Stack>
              </Box>

              <Box className="form">
                <Stack align="center" spacing={4}>
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
                    Login
                  </Button>
                  
                  <Button
                    color='orange'
                    onClick={() => navigate("/register")}
                    variant='link'
                    fontWeight='normal'
                  >
                    Don't have an account?
                    <Text fontWeight='semibold' as='u' ml='3px'> Register </Text>
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

export default Login;