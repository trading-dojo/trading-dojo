import React, { useState } from "react";
import { Box, Text, Collapse, Button, Grid } from "@chakra-ui/react";

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Box
      mb={4}
      borderWidth={1}
      borderColor={isOpen ? "black" : "black"} // Borda vermelha quando aberto, preta quando fechado
      borderRadius="10px"
      
      overflow="hidden"
    > 
      <Button
        onClick={toggle}
        width="100%"
        textAlign="left"
        fontSize="20px"
        colorScheme={isOpen ? "red" : "gray"}
        variant={isOpen ? "solid" : "outline"}
        borderRadius="10px"
        color="white"
        p={4}
        height="90px" // Aumenta a altura do botão
        justifyContent="space-between"
        transition="background 0.2s"
        _hover={{ bg: "red.600" }} // Altera a cor de fundo para vermelho ao passar o mouse
      >
        <Text>{question}</Text>
        <Text>{isOpen ? "−" : "+"}</Text>
      </Button>
      <Collapse in={isOpen} unmountOnExit>
        <Box p={4} bg="gray.800" transition="all 0.5s ease-in-out"> {/* Ajuste a duração e a curva de transição */}
          <Text fontSize="18px" color="white" mt={2} borderRadius="10px">
            {answer}
          </Text>
        </Box>
      </Collapse>
    </Box>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What is the Mentorship program?",
      answer: "The mentorship program offers personalized guidance to help participants achieve their learning goals.",
    },
    {
      question: "How can I enroll?",
      answer: "You can enroll through our website. Just fill out the enrollment form and wait for confirmation.",
    },
    {
      question: "What are the requirements to participate?",
      answer: "Requirements vary by program, but generally, a genuine interest in learning is needed.",
    },
    {
      question: "What is the duration of the mentorship program?",
      answer: "The duration varies, but typical programs last between 3 to 6 months, depending on the type of mentorship.",
    },
    {
      question: "Can I cancel my enrollment?",
      answer: "Yes, you can cancel your enrollment at any time. Contact our support for more details.",
    },
    {
      question: "Is there support available during the program?",
      answer: "Yes, we offer continuous support to participants throughout the mentorship program.",
    },
  ];

  return (
    <Box p={4} bg="black" borderRadius="md">
      <Text fontSize="32px" fontWeight="bold" mb={6} textAlign="center" color="white">
        Frequently Asked Questions (FAQ)
      </Text>
      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </Grid>
    </Box>
  );
};

export default FAQ;
