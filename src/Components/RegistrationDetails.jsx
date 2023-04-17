import React from "react";

import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  Stack,
  Text,
  Button,
  Heading,
  InputRightAddon,
} from "@chakra-ui/react";

import Participation from "./Participation";
import { useRadioGroup } from "@chakra-ui/react";

function RegistrationDetails() {
  const options = ["Individual", "Participate as team"];

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
      >
        
        <Stack
          spacing={6}
          mx={"auto"}
          // borderWidth={1}
          // borderColor={"white"}
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
          Registration Details
        </Heading>
          <FormControl color={"black"} isRequired>
            <FormLabel color={"black"}>Participation Type</FormLabel>
            <HStack {...group}>
              {options.map((value) => {
                const radio = getRadioProps({ value });
                return (
                  <Participation key={value} {...radio}>
                    {value}
                  </Participation>
                );
              })}
            </HStack>
          </FormControl>

          <FormControl color={"black"} isRequired>
            <FormLabel>Participate as a team</FormLabel>
            <HStack>
              <InputGroup>
                <Input
                  background={
                    "linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)"
                  }
                  type="number"
                  autoComplete="off"
                />
                <InputRightAddon
                  background={
                    "linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)"
                  }
                >
                  <Text> min</Text>
                </InputRightAddon>
              </InputGroup>

              <InputGroup>
                <Input
                  background={
                    "linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)"
                  }
                  type="number"
                  autoComplete="off"
                />
                <InputRightAddon
                  background={
                    "linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)"
                  }
                >
                  <Text> max</Text>
                </InputRightAddon>
              </InputGroup>
            </HStack>
          </FormControl>

          <FormControl color={"black"} isRequired>
            <FormLabel>Registration Start Date & Time</FormLabel>
            <Input
              background={
                "linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)"
              }
              type="date" placeholder=''
            />
          </FormControl>

          <FormControl color={"black"} isRequired>
            <FormLabel>Registration End Date & Time</FormLabel>
            <Input
              background={
                "linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)"
              }
              type="date"
            />
          </FormControl>

          <FormControl color={"black"}>
            <FormLabel>Number of Registrations allowed</FormLabel>
            <Input
              background={
                "linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)"
              }
              type="text"
            />
          </FormControl>

          {/* <Stack spacing={4} pt={2} w="30%" align={"right"}>
            <Button
              background={
                "linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)"
              }
              loadingText="Submitting"
              color={"white"}
              _hover={{
                bg: "gray.800",
              }}
            >
              Submit
            </Button>
          </Stack> */}
        </Stack>
      </Flex>
    </div>
  );
}

export default RegistrationDetails;
