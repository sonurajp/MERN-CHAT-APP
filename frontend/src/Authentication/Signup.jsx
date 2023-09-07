import {
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [password, setPassword] = useState();
  const [pic, setPic] = useState();
  const submitHandler = () => {};
  return (
    <VStack>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          placeholder="Enter Your Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormLabel>Confirm Password</FormLabel>
        <Input
          type="password"
          placeholder="Confirm Your Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </FormControl>
      <Button colorScheme="blue" width="100%" mt="1rem" onClick={submitHandler}>
        Sign UP
      </Button>
    </VStack>
  );
};

export default SignUp;
