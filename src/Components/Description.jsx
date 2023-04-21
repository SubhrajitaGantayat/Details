import React from "react";

import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  Textarea,
} from "@chakra-ui/react";

function Description() {
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
            Description
          </Heading>

          <FormControl color={"black"} isRequired>
            <FormLabel>Eligibility</FormLabel>
            <Input
              background={
                "linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)"
              }
              type="text"
              autoComplete="off"
            />
          </FormControl>

          <FormControl color={"black"} isRequired>
            <FormLabel>About the internship</FormLabel>
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
        </Stack>
      </Flex>
    </div>
  );
}

export default Description;
