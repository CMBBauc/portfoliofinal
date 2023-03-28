import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <HStack >
      <VStack
        align="left"
        borderRadius="lg"
        color="black"
        bg="white"
        
      > 
      <Box borderRadius="lg">
        <Image opacity=".9" borderRadius="lg"src={imageSrc}></Image>
      </Box>
        <Heading paddingLeft="10px"size="sm">{title}</Heading>
        <Text paddingLeft="10px" color="gray">{description}</Text>
        <HStack paddingBottom="10px" paddingLeft="10px">
          <Text>See More</Text>
          <FontAwesomeIcon icon={faArrowRight}/>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default Card;
