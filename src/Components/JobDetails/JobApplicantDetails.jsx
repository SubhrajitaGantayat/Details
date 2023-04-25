import React from "react";

import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Select,
  Checkbox,
  Heading,
  Text,
} from "@chakra-ui/react";

function JobApplicantDetails() {
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
          width={{ md: "60%", base: "100%" }}
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
            Applicant Details
          </Heading>

          <Flex justifyContent={"space-between"}>
            <FormControl color={"black"} w="48%" isRequired>
              <FormLabel>Recieved Applicants</FormLabel>
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
              <FormLabel>Email id</FormLabel>
              <Input
                background={
                  "linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)"
                }
                type="email"
              />
            </FormControl>
          </Flex>

          <FormControl color={"black"} isRequired>
            <FormLabel>Work Experience</FormLabel>
            <Input
              background={
                "linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)"
              }
              type="text"
              autoComplete="off"
            />
          </FormControl>

          <Flex justifyContent={"space-between"}>
            <FormControl color={"black"} w="48%" isRequired>
              <FormLabel>Drive Date</FormLabel>
              <Input
                background={
                  "linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)"
                }
                type="date"
                placeholder=""
              />
            </FormControl>

            <FormControl color={"black"} w="48%" isRequired>
              <FormLabel>Deadline Date</FormLabel>
              <Input
                background={
                  "linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)"
                }
                type="date"
                placeholder=""
              />
            </FormControl>
          </Flex>

          <Stack>
            <Checkbox defaultChecked color={"black"}>
              <Text mt={4} ml={-2}>
                By continuing, you agree to LOGO Jobs Terms and Conditions
                including our policies prohibiting discriminatory job posts.
              </Text>
            </Checkbox>

            <Checkbox defaultChecked color={"black"}>
              <Text mt={4} ml={5}>
                The #Hiring photo frame will be added to your profile.We'll
                notify your network that you're hiring.
              </Text>
            </Checkbox>
          </Stack>
        </Stack>
      </Flex>
    </div>
  );
}

export default JobApplicantDetails;
