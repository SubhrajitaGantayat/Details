import React, { useState } from "react";

import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  Stack,
  Button,
  Heading,
  InputLeftAddon,
} from "@chakra-ui/react";

import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";

function Location() {
  const [checkOnline, setCheckOnline] = useState(false);
  const [checkOffline, setCheckOffline] = useState(false);

  const [mode, setMode] = useState("");

  // const handleOnline = () => {
  //   setMode("online")
  //   setCheckOnline(!checkOnline);
  //   if (checkOffline) {
  //     setCheckOffline(false);
  //   }
  // };

  // const handleOffline = () => {
  //   setMode("offline")
  //   setCheckOffline(!checkOffline);
  //   if (checkOnline) {
  //     setCheckOnline(false);
  //   }
  // };

  const handleOnline = () => {
    setMode("online");
    setCheckOnline(true);
    setCheckOffline(false);
  };

  const handleOffline = () => {
    setMode("offline");
    setCheckOffline(true);
    setCheckOnline(false);
  };

  return (
    //<Box  h={{md:"70vh", sm:'100vh'}}>
    <div>
      <Flex
        //shadow='xl'
        //rounded={"lg"}
        boxShadow={
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
        }
        minH={{ md: "70vh", sm: "100vh" }}
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
            Location
          </Heading>

          <FormControl color={"black"} isRequired>
            <FormLabel>Mode of Event </FormLabel>
            <HStack>
              <Button
                borderWidth={1}
                style={{
                  backgroundColor: mode === "online" ? "black" : "white",
                  color: mode === "online" ? "white" : "black",
                }}
                onClick={handleOnline}
              >
                Online
              </Button>
              <Button
                borderWidth={1}
                style={{
                  backgroundColor: mode === "offline" ? "black" : "white",
                  color: mode === "offline" ? "white" : "black",
                }}
                onClick={handleOffline}
                ml="2%"
              >
                Offline
              </Button>
            </HStack>
          </FormControl>

          {checkOffline && (
            <>
              <FormControl color={"black"} isRequired>
                <FormLabel>Address</FormLabel>
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
                  <FormLabel>City</FormLabel>
                  <Input
                    background={
                      "linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)"
                    }
                    type="text"
                    autoComplete="off"
                  />
                </FormControl>

                <FormControl color={"black"} w="48%" isRequired>
                  <FormLabel>State</FormLabel>
                  <Input
                    background={
                      "linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)"
                    }
                    type="text"
                    autoComplete="off"
                  />
                </FormControl>
              </Flex>

              <FormControl color={"black"} isRequired>
                <FormLabel>Pincode</FormLabel>
                <Input
                  background={
                    "linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)"
                  }
                  type="text"
                  autoComplete="off"
                />
              </FormControl>
            </>
          )}

          {checkOnline && (
            <>
              <FormControl color={"black"} isRequired>
                <FormLabel>Website URL</FormLabel>
                <Input
                  background={
                    "linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)"
                  }
                  type="text"
                  autoComplete="off"
                />
              </FormControl>

              <FormControl color={"black"} isRequired>
                <FormLabel>Social Media URL</FormLabel>

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

                <InputGroup mt="6">
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
              </FormControl>
            </>
          )}
        </Stack>
      </Flex>
    </div>
    //</Box>
  );
}

export default Location;
