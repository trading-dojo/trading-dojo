import React from "react";
import { Box, Flex, Grid, Text, Link as ChakraLink, Image, UnorderedList, ListItem, Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom"; // Import necessário para o roteamento
import logo from "./images/logo (2).png"; // Substitua pelo caminho correto da imagem

const Footer: React.FC = () => {
  return (
    <Box bg="black" color="white" py={10} px={6}>
      <Grid
        maxWidth="1200px"
        mx="auto"
        templateColumns={["1fr", "1fr", "1fr 1fr"]}
        gap={10}
        alignItems="center"
        textAlign={["center", "center", "left"]}
      >
        {/* Lado Esquerdo: Logo e detalhes da empresa */}
        <Flex direction="column" alignItems={["center", "center", "flex-start"]}>
          <Image
            src={logo}
            alt="Logo"
            boxSize="180px"
            objectFit="contain"
            mt="-100px"
          />
          <Box textAlign={["center", "center", "left"]} fontSize="sm">
            <UnorderedList spacing={2} styleType="disc" ml={4}>
              <ListItem>The Trading Dojo</ListItem>
              <ListItem>LEVEL 2</ListItem>
              <ListItem>thetradingdojovip@gmail.com</ListItem>
            </UnorderedList>
          </Box>
        </Flex>

        {/* Lado Direito: Links */}
        <Flex direction="column" alignItems={["center", "center", "flex-end"]} fontSize="md">
          <ChakraLink
            as={Link}
            to="/ContactUs"
            mb={2}
            color="blue.400"
            border="2px solid"
            borderColor="blue.400"
            padding="4px 8px"
            borderRadius="10px"
            backgroundColor="transparent"
            _hover={{ backgroundColor: "blue.400", color: "white" }}
          >
            Contact Us
          </ChakraLink>
          <ChakraLink as={Link} to="/terms-and-conditions" fontSize="18px" mb={2} _hover={{ textDecoration: "underline", color: "gray.300" }}>
            Terms & Conditions
          </ChakraLink>
          <ChakraLink as={Link} to="/terms-and-conditions" fontSize="18px" mb={2} _hover={{ textDecoration: "underline", color: "gray.300" }}>
            Important Risk Notice
          </ChakraLink>
          <ChakraLink as={Link} to="/terms-and-conditions" fontSize="18px" mb={2} _hover={{ textDecoration: "underline", color: "gray.300" }}>
            Privacy Policy
          </ChakraLink>
          <ChakraLink as={Link} to="/terms-and-conditions" fontSize="18px" mb={2} _hover={{ textDecoration: "underline", color: "gray.300" }}>
            Testimonials Disclaimer
          </ChakraLink>
          <Divider my={4} borderColor="gray.600" />
          <Text mt={4} fontSize="lg" color="gray.500">
            © 2024 TheTradingDojo.com. All rights reserved.
          </Text>
        </Flex>
      </Grid>
    </Box>
  );
};

export default Footer;