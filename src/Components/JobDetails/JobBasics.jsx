import React, {useState} from "react";

import {
  Flex,
  Center,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  Box,
  Button,
  CircularProgress
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

function JobBasics() {

  //for profile pic upload
  const toast = useToast();
  const [profileArray, setProfileArray] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [userImage, setUserImage] = useState(null);

  const handleImageUpload = async (event) => {
    setIsLoading(true);
    const file = event.target.files[0];

    if (file.type.split("/")[0] === "image") {
      try {
        const newImage = { file };
        console.log(newImage);
        setUserImage(newImage);
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
        setIsLoading(false);
      }
      } else {
        console.log("This is not an image file");
        return;
      }
  };

  return (
    <div>
      <Flex
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
            Job Details
          </Heading>

          <FormControl color={"black"} isRequired>
            <FormLabel>Job Image</FormLabel>
            <Center>
            <Box mt={{ base: "5%", md: "1%" }} w={{ base: "100%", md: "40%" }}>
              <Box color="black" ml={{ base: "25%", md: "0%" }}>
                <Flex direction="column" pl={{ md: "20%", base: "0%" }}>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    //isDisabled={isLoading}
                    display="none"
                    id="image-input"
                  />
                  {userImage ? (
                    <Image
                      // size="2xl"
                      h={{ md: "12rem", base: "10rem" }}
                      w={{ md: "15rem", base: "10rem" }}
                      mt={{ base: "0%", md: "5%" }}
                      src={URL.createObjectURL(userImage.file)}
                      alt="Uploaded image"
                      objectFit="cover"
                    />
                  ) : (
                    <Image
                      mb="5%"
                      size={{ base: "xl", md: "2xl" }}
                      src="data:image/png;base64,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"
                    />
                  )}
                  <label htmlFor="image-input">
                    <Button
                      as="div"
                      size="sm"
                      variant="outline"
                      bg="black"
                      color="white"
                      p={5}
                      w="8rem"
                      h="2rem"
                      ml={{ md: "0%", base: "-30%" }}
                      borderRadius={25}
                      mt="10%"
                      cursor="pointer"
                      //disabled={isLoading}
                      transition={"all ease-in-out 100ms"}
                      _hover={{ transform: "scale(1.05)" }}
                      // _disabled={{
                      //   opacity: 0.4,
                      //   cursor: "not-allowed",
                      // }}
                    >
                   
                        <Box as="span" fontSize="sm">
                          Upload Image
                        </Box>
                     
                    </Button>
                  </label>
                </Flex>
              </Box>
            </Box>
            </Center>
          </FormControl>

          <FormControl color={"black"} isRequired>
            <FormLabel>Title</FormLabel>
            <Input
              background={
                "linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)"
              }
              type="text"
              autoComplete="off"
            />
          </FormControl>

          <FormControl color={"black"} isRequired>
            <FormLabel>Role</FormLabel>
            <Input
              background={
                "linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)"
              }
              type="text"
              autoComplete="off"
            />
          </FormControl>

          <FormControl color={"black"} isRequired>
            <FormLabel>Company</FormLabel>
            <Input
              background={
                "linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)"
              }
              type="text"
              autoComplete="off"
            />
          </FormControl>

          <FormControl color={"black"} isRequired>
            <FormLabel>Start Date</FormLabel>
            <Input
              background={
                "linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)"
              }
              type="date"
              placeholder=""
            />
          </FormControl>

          <FormControl color={"black"} isRequired>
            <FormLabel>End Date</FormLabel>
            <Input
              background={
                "linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)"
              }
              type="date"
            />
          </FormControl>
        </Stack>
      </Flex>
    </div>
  );
}

export default JobBasics;
