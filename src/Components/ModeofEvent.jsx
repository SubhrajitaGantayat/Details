import React from "react";

import { useRadio } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

function ModeofEvent(props) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "teal.600",
          color: "white",
          borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "outline",
          //bg :"linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)"
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}

export default ModeofEvent;
