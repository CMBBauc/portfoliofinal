import React from "react";
import { Avatar, Heading, VStack, Box } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
const greeting = "Hello, I am Corbin!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.


const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#6883BC"
  >

    <VStack spacing={30}>

      <Box align="center">
        <Avatar src={require('../images/landingpageicon.png')} size="2xl"></Avatar>
        <Heading padding="5px" size="xs">{greeting}</Heading>
      </Box>
      <Box align="center">
        <Heading>{bio1}</Heading>
        <Heading>{bio2}</Heading>
      </Box>
    </VStack>
    
  </FullScreenSection>
);

export default LandingSection;
