import React from "react";
import { Box, Text, Link, VStack, Icon } from "@chakra-ui/react";
import { FaEnvelope } from "react-icons/fa"; // Ícone de email
import RiskNotice from "./RiskNotice";
import Footer from "./Footer";

const ContactUs: React.FC = () => {
  return (
    <Box
      bg="black"
      color="white"
      py={10}
      
      px={6}
      textAlign="center"
      minHeight="100vh" // Garante que o fundo preto ocupe a altura total da viewport
    >
      <VStack spacing={4} align="center"  marginTop="90px">
        <Text fontSize="7xl" fontWeight="bold" color={"red"}>
          Contact Us
        </Text>
        <Text fontSize="lg" marginTop="20px">
          If you have any questions, feel free to get in touch with us by email, we will reply in maximum 24H
        </Text>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
           marginTop="40px"
          border="2px solid white"
          borderRadius="md"
          p={2}
        >
          <Icon as={FaEnvelope} w={6} h={6} color="white" mr={2} />
          <Link
            href="mailto:pirchmark@gmail.com"
            color="blue.400"
            fontSize="3xl"
            _hover={{ textDecoration: "underline", color: "blue.300" }}
          >
            pirchmark@gmail.com
          </Link>
        </Box>
      </VStack>


        <Box
        marginTop="170px"
        >

        <RiskNotice/>
        </Box>
      
      <Footer/>
    </Box>
  );
};

export default ContactUs;
