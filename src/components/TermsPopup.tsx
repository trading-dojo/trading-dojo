import React, { useState } from "react";
import { Box, Text, Button, Link as ChakraLink, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const TermsPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} size={{ base: "full", md: "lg" }} isCentered>
      <ModalOverlay />
      <ModalContent 
        width={{ base: "90vw", md: "80vw" }} 
        maxWidth="900px" 
        bg="#333333" 
        borderRadius="md"
        p={{ base: 3, md: 5 }} // Ajustado o padding para usar melhor o espaço
        height="auto"
        maxHeight="85vh" // Ajustado para não precisar rolar
        overflow="hidden" // Remover rolagem
      >
        <ModalHeader 
          color="white" 
          fontSize={{ base: "16px", md: "18px" }} 
          pb={2} // Diminuído padding bottom
          textAlign="center"
        >
          *IMPORTANT RISK NOTICE*
        </ModalHeader>
        <ModalBody>
          <Text fontSize={{ base: "12px", md: "14px" }} color="white" mb={2} lineHeight="1.4">
            Trading on any foreign currency exchange, trading cryptocurrency or commodities is highly volatile and risky. This risk increases with margin use. Consider your investment goals, experience, and risk tolerance before trading. Do not invest money you cannot afford to lose. High volatility may result in significant losses or total loss of capital.
          </Text>
          <Text fontSize={{ base: "12px", md: "14px" }} color="white" mb={2} lineHeight="1.4">
            Content from The Trading Dojo is educational, not investment advice. Trades shown are incidental to training. Users should not expect to be profitable. Consult a licensed financial professional and perform your own research before trading.
          </Text>
          <Text fontSize={{ base: "12px", md: "14px" }} color="white" mb={2} lineHeight="1.4">
            Past performance is not indicative of future results. Simulated results may differ from actual trading. No guarantees of profit are made.
          </Text>
          <Text fontSize={{ base: "12px", md: "14px" }} color="white" mb={2} lineHeight="1.4">
            The Trading Dojo is not a financial broker or advisor. Trading services should be provided by licensed brokers.
          </Text>
          <Text fontSize={{ base: "12px", md: "14px" }} color="white" mb={2} lineHeight="1.4">
            Beware of impersonators claiming to be The Trading Dojo. Services are only provided through our official website and channels.
          </Text>
          <Box textAlign="center" mt={2}>
            <Text fontSize={{ base: "12px", md: "14px" }} color="white" mb={2}>
              Please refer to our:
            </Text>
            <Box>
              <ChakraLink as={Link} to="/terms-and-conditions" textDecoration="underline" color="blue.400" mr={1}>Terms & Conditions</ChakraLink>
              <ChakraLink as={Link} to="/terms-and-conditions" textDecoration="underline" color="blue.400" mr={1}>Important Risk Notice</ChakraLink>
              <ChakraLink as={Link} to="/terms-and-conditions" textDecoration="underline" color="blue.400" mr={1}>Testimonials Disclaimer</ChakraLink>
              <ChakraLink as={Link} to="/terms-and-conditions" textDecoration="underline" color="blue.400">Privacy Policy</ChakraLink>
            </Box>
          </Box>
        </ModalBody>
        <ModalFooter justifyContent="center">
          <Button colorScheme="red" onClick={handleClose} size="sm">
            Accept and Continue
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TermsPopup;
