import React, { useState } from "react";

import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  Stack,
  Box,
  Text,
  Heading,
  InputRightAddon,
  Image,
  Button,
  CircularProgress,
  CloseButton,
  useToast,
} from "@chakra-ui/react";

import { MdOutlineAdd } from "react-icons/md";

import { IconButton } from "@chakra-ui/react";

import Participation from "./Participation";
import { useRadioGroup } from "@chakra-ui/react";

function RegistrationDetails() {
  // const options = ["Individual", "Participate as team"];

  // const { getRootProps, getRadioProps } = useRadioGroup({
  //   name: "framework",
  //   defaultValue: "react",
  //   onChange: console.log,
  // });

  // const group = getRootProps();

  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);
  const toast = useToast();

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    //Tasks to-do
    //bug fixed but need some testing
    //check if it is a valid image file or not =>done
    //dissolve the error appearing if you cancel instead of selecting a image =>done
    if (file.type.split("/")[0] === "image") {
      try {
        const newImage = { file };
        setImages((prevImages) => [...prevImages, newImage]);
      } catch (error) {
        console.error(error);
        toast({
          title: "Error",
          description: "Failed to upload image.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } finally {
      }
    } else {
      console.log("This is not an image file");
      return;
    }
  };

  const handleImageDelete = (index) => {
    setImages((prevImages) => {
      const newImages = [...prevImages];
      newImages.splice(index, 1);
      return newImages;
    });
  };

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
          width={{ md: "60%", base: "90%" }}
          py={8}
          px={2}
        >
          <Heading
            bg={"white"}
            color={"black"}
            fontSize={{ md: "4xl", base: "3xl" }}
            align={"left"}
            borderRadius={"20px 20px 0px 0px"}
          >
            Registration Details
          </Heading>

          <FormControl color={"black"} w="100%" isRequired>
            <FormLabel>Contact the Organiser</FormLabel>
            <Flex justifyContent={"space-between"}>
              <Input w="40%" type="text" placeholder="Name" />
              <Input w="40%" type="number" placeholder="Contact No." />
            </Flex>
          </FormControl>

          <FormControl color={"black"}>
            <FormLabel></FormLabel>
            <Input type="email" placeholder="Email" />
          </FormControl>

          <FormControl color={"black"}>
            <FormLabel></FormLabel>
            <Input type="text" placeholder="LinkedIn" />
          </FormControl>

          <FormControl color={"black"}>
            <FormLabel>Rewards</FormLabel>
            <Input type="text" />
          </FormControl>

          {/* <Flex>
            <FormControl color={"black"}>
              <FormLabel>In Pictures</FormLabel>
              <HStack spacing="24px">
                <Box w="33%" h="150px" bg="gray.300">
                  <Flex direction={'column'} align={'center'} mt={'4'}>
                      <Text>Add Picture</Text>
                      <br/>
                      <IconButton icon={< MdOutlineAdd/>} w='10%'/>
                  </Flex>
                </Box>
                <Box w="33%" h="150px" bg="gray.300">
                  
                </Box>
                <Box w="33%" h="150px" bg="gray.300">
                  
                </Box>
              </HStack>
            </FormControl>
          </Flex> */}

          <FormControl color={"black"}>
            <FormLabel>In Pictures</FormLabel>
            <Box>
              <Flex alignItems="center">
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  isDisabled={images.length >= 3}
                  display="none"
                  id="image-input"
                />
                <label htmlFor="image-input">
                  <Button
                    as="div"
                    size="sm"
                    //variant="outline"
                    //colorScheme="white"
                    w="8rem"
                    h="8rem"
                    cursor="pointer"
                    disabled={images.length >= 3}
                    _disabled={{
                      opacity: 0.4,
                      cursor: "not-allowed",
                    }}
                  >
                    {/* <Box as="span" fontSize="sm">
                       Upload Image
                      </Box> */}

                    <Flex direction={"column"} align={"center"} mt={"1"}>
                      <Text>Add Picture</Text>
                      <br />
                      <IconButton icon={<MdOutlineAdd />} />
                    </Flex>
                  </Button>
                </label>

                {images.length < 1
                  ? ""
                  : images.map((image, index) => (
                      <Flex
                        w={{ base: "35%", md: "15%" }}
                        h={{ base: "35%", md: "15%" }}
                        mb={{ base: "4" }}
                        mr={{ base: "0", md: "4" }}
                        key={index}
                        position="relative"
                        ml={2}
                      >
                        <Box>
                          <CloseButton
                            size="lg"
                            fontWeight="bold"
                            borderWidth="2px"
                            borderColor="black"
                            borderRadius="50%"
                            colorScheme="red"
                            position="absolute"
                            top="-0.5rem"
                            right="-0.5rem"
                            onClick={() => handleImageDelete(index)}
                          />
                        </Box>
                        <Box h="7rem" w="15rem" boxShadow="md">
                          <Image
                            src={URL.createObjectURL(image.file)}
                            alt="Uploaded image"
                            objectFit="cover"
                            h="100%"
                            w="100%"
                          />
                        </Box>
                      </Flex>
                    ))}
              </Flex>
            </Box>
          </FormControl>

          {/* prev file */}

          {/* <FormControl color={"black"} isRequired>
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
              type="date"
              placeholder=""
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
          </FormControl> */}

        </Stack>
      </Flex>
    </div>
  );
}

export default RegistrationDetails;
