import React from "react";

import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  Textarea,
  Select,
  Button,
} from "@chakra-ui/react";

import { IoMdAdd } from "react-icons/io";
//import { AddIcon } from "@chakra-ui/icons";

//import { Button } from "antd";

function JobDescription() {
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
          spacing={4}
          mx={"auto"}
          //   borderWidth={1}
          //   borderColor={"white"}
          width={{ md: "60%", base: "90%" }}
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
            Description
          </Heading>

          <Flex justifyContent={"space-between"}>
            <FormControl color={"black"} w="48%" isRequired>
              <FormLabel>Job Type</FormLabel>
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

            <FormControl color={"black"} w="48%" isRequired>
              <FormLabel>Job Mode</FormLabel>
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
          </Flex>

          <FormControl color={"black"} isRequired>
            <FormLabel>Description</FormLabel>
            <Textarea
              background={
                "linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)"
              }
              height={"20vh"}
              type="text"
              autoComplete="off"
            />
          </FormControl>

          <FormControl color={"black"} isRequired>
            <FormLabel>Responsibility</FormLabel>
            <Textarea
              background={
                "linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)"
              }
              height={"20vh"}
              type="text"
              autoComplete="off"
            />
          </FormControl>

          <FormControl color={"black"} isRequired>
            <FormLabel>Skills</FormLabel>
            <Stack direction="row" spacing={4}>
              <Button leftIcon={<IoMdAdd />} colorScheme="teal" variant="solid">
                Add your skills
              </Button>
            </Stack>
          </FormControl>
        </Stack>
      </Flex>
    </div>
  );
}

export default JobDescription;
