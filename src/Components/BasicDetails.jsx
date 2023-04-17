import React from "react";

import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";

import {
  Flex,
  Center,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  Stack,
  Button,
  Heading,
  InputLeftAddon,
  Textarea,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import ModeofEvent from "./ModeofEvent";
import { useRadioGroup } from "@chakra-ui/react";

function BasicDetails() {
  const options = ["Online Mode", "Offline Mode"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "react",
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <div>
      <Flex
        //shadow='xl'
        //rounded={"lg"}
        boxShadow={
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
        }
        minH={"100vh"}
        bg={"white"}
        borderRadius={"20px 20px 20px 20px"}
        //px={1} py={2}
      >
       
        <Stack
          spacing={2}
          mx={"auto"}
          //   borderWidth={1}
          //   borderColor={"white"}
          width={{ md: "60%", sm: "100%" }}
          py={8}
          px={2}
        >
           <Heading
          bg={"white"}
          color={"black"}
          fontSize={"4xl"}
          align={"left"}
          borderRadius={"20px 20px 0px 0px"}
        >
          Basic Details
        </Heading>
          {/* <Box
          rounded={"lg"}
          background={
            "linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)"
          }
          backdropFilter={"blur(25px)"}
          boxShadow={
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
          }
          p={8}
        > */}
          {/* <Stack spacing={4}> */}

          <Center>
            <Image
              boxSize="180px"
              objectFit="cover"
              src="https://bit.ly/dan-abramov"
              alt="POSTER"
            />
          </Center>

          <FormControl isRequired>
            <FormLabel color={"black"}>Opportunity Type</FormLabel>
            <Select
              background={
                "linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)"
              }
              placeholder="Select option"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </FormControl>

          <FormControl isRequired>
            <FormLabel color={"black"}>Opportunity Sub Type</FormLabel>
            <Select
              background={
                "linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)"
              }
              placeholder="Select option"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </FormControl>

          <FormControl color={"black"} isRequired>
            <FormLabel>Opportunity Title</FormLabel>
            <Input
              background={
                "linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)"
              }
              type="text"
              autoComplete="off"
            />
          </FormControl>

          <FormControl color={"black"} isRequired>
            <FormLabel>Enter your Organisation</FormLabel>
            <Input
              background={
                "linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)"
              }
              type="text"
              autoComplete="off"
            />
          </FormControl>

          <FormControl color={"black"}>
            <FormLabel>Festival</FormLabel>
            <Input
              background={
                "linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)"
              }
              type="text"
              autoComplete="off"
            />
          </FormControl>

          <FormControl color={"black"} isRequired>
            <FormLabel>Mode of Event </FormLabel>
            <HStack {...group}>
              {options.map((value) => {
                const radio = getRadioProps({ value });
                return (
                  <ModeofEvent key={value} {...radio}>
                    {value}
                  </ModeofEvent>
                );
              })}
            </HStack>
          </FormControl>

          <FormControl color={"black"} isRequired>
            <FormLabel>Categories</FormLabel>
            <Input
              background={
                "linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)"
              }
              type="text"
              autoComplete="off"
            />
          </FormControl>

          <FormControl color={"black"} isRequired>
            <FormLabel>About Opportunity</FormLabel>
            <Textarea
              background={
                "linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)"
              }
              height={"30vh"}
              type="text"
              autoComplete="off"
            />
          </FormControl>

          <FormControl color={"black"}>
            <FormLabel>Website URL</FormLabel>
            <Input
              background={
                "linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)"
              }
              type="text"
              autoComplete="off"
            />
          </FormControl>

          <FormControl color={"black"}>
            <FormLabel>Social Media URL</FormLabel>
            <HStack>
              <InputGroup>
                <InputLeftAddon>
                  <BsFacebook size={30} color="black" />
                </InputLeftAddon>
                <Input
                  background={
                    "linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)"
                  }
                  type="text"
                  autoComplete="off"
                />
              </InputGroup>

              <InputGroup>
                <InputLeftAddon>
                  <AiOutlineInstagram size={30} color="black" />
                </InputLeftAddon>
                <Input
                  background={
                    "linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)"
                  }
                  type="text"
                  autoComplete="off"
                />
              </InputGroup>
            </HStack>
          </FormControl>

          {/* <Stack spacing={4} pt={2} w='30%' align={'right'} >
            <Button background={"linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)"}
              loadingText="Submitting"
              color={'white'}
              _hover={{
                bg: "gray.800",
              }}
            >
              Next
            </Button>
          </Stack> */}
        </Stack>
        {/* </Box> */}
        {/* </Stack> */}
      </Flex>
    </div>
  );
}

export default BasicDetails;
