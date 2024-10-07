import React, { useState } from "react";
import { Box, Text, Flex, Link, Icon } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons"; // Importando o ícone de check

const PromotionCard: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<"membership" | "mentorship">("membership");

  // Conteúdo dos frames
  const membershipOptions = [
    {
      title: "Monthly",
      price: "$49.99 / month",
      details: "Cancel subscription at any time",
      features: [
        "Daily Live Streams",
        "Educational Resources",
        "Trade Ideas & Market Analysis",
        "Exclusive Discounts & Giveaways",
        "Mentorships & 1to1",
      ],
      link: "https://whop.com/checkout/2jazRXEo7NHk938tpL-1u59-yZq2-HdTC-mlz3AfmCg7EO/"
    },
    {
      title: "Custom",
      price: "$119 / 3 months",
      details: "Cancel subscription at any time",
      features: [
        "Daily Live Streams",
        "Educational Resources",
        "Trade Ideas & Market Analysis",
        "Exclusive Discounts & Giveaways",
        "Mentorships & 1to1",
      ],
      link: "https://whop.com/checkout/5tx5AtufRlH3zHQrzH-m65B-32wo-5iVx-6J1LstnreoH0/"
    },
    {
      title: "Yearly",
      price: "$400 / year",
      details: "Cancel subscription at any time",
      features: [
        "Daily Live Streams",
        "Educational Resources",
        "Trade Ideas & Market Analysis",
        "Exclusive Discounts & Giveaways",
        "Mentorships & 1to1",
      ],
      link: "https://whop.com/checkout/3nvOHy5smDNlWZazD3-RnU5-lEhc-6SC2-VtVBcYxsJ8TW/"
    },
  ];

  const mentorshipOptions = [
    {
      title: "Once Off",
      price: "395 / month",
      details: "Cancel subscription at any time",
      features: [
        "1 x 1 Hour 1 to 1 Session",
        "Personalised Learning Plan",
        "Lab Membership Included",
        "Regular Progress Reviews",
        "Ability to Purchase Additional Sessions at Discounted Rate",
      ],
      link: "https://whop.com/checkout/5whJS2aCYkm4s0LxTz-YKgL-C1UJ-fRBS-qdjAOSjtLRIp/"
    },
    {
      title: "Monthly",
      price: "$550 / months",
      details: "Cancel subscription at any time",
      features: [
        "1 x 1 Hour 1 to 1 Session",
        "Personalised Learning Plan",
        "Lab Membership Included",
        "Regular Progress Reviews",
        "Ability to Purchase Additional Sessions at Discounted Rate",
      ],
      link: "https://whop.com/checkout/jA1p5EqlHuWkeKiCl-kAN6-3F50-FZT7-CE5ryblwcT4C/"
    },
    {
      title: "Custom",
      price: "2000 / year",
      details: "Cancel subscription at any time",
      features: [
        "1 x 1 Hour 1 to 1 Session",
        "Personalised Learning Plan",
        "Lab Membership Included",
        "Regular Progress Reviews",
        "Ability to Purchase Additional Sessions at Discounted Rate",
      ],
      link: "https://whop.com/checkout/6ObvWx4ZEjO32BW0oN-EJMe-Cq6E-4bqB-PpknaaI2GWCl/"
    },
  ];

  // Selecionar as opções com base no tipo
  const selectedOptions = selectedOption === "membership" ? membershipOptions : mentorshipOptions;

  return (
    <Box
      width="100%"
      height="800px"
      bgSize="cover"
      bgPosition="center"
      display="flex"
      justifyContent="center"
      alignItems="center"
      p={4}
      flexDirection="column"
      position="relative"
    >
      {/* Linha para o Título e Switch de Alternância */}
      <Flex justifyContent="space-between" alignItems="center" width="100%" mb={4}>
        {/* Título dos Frames */}
        <Text fontSize="32px" fontWeight="bold" color="white" mr={4}>
          {selectedOption === "membership" ? "Membership Options" : "Mentorship Options"}
        </Text>

        {/* Switch de Alternância com Nomes */}
        <Box
          display="flex"
          alignItems="center"
          borderWidth="1px"
          borderRadius="20px"
          borderColor="black"
          width="300px"
          backgroundColor="gray.800"
          position="relative"
        >
          {/* Sliding Indicator */}
          <Box
            position="absolute"
            left={selectedOption === "membership" ? "0" : "50%"}
            width="50%"
            height="100%"
            backgroundColor="red.600"
            borderRadius="20"
            transition="left 0.5s ease"
            zIndex={0}
          />

          <Box
            flex="1"
            textAlign="center"
            onClick={() => setSelectedOption("membership")}
            overflow="hidden"
            position="relative"
            zIndex={1}
          >
            <Text color={selectedOption === "membership" ? "white" : "gray.300"} p={2} fontSize="20px">
              Membership
            </Text>
          </Box>
          <Box
            flex="1"
            textAlign="center"
            onClick={() => setSelectedOption("mentorship")}
            overflow="hidden"
            position="relative"
            zIndex={1}
          >
            <Text color={selectedOption === "mentorship" ? "white" : "gray.300"} p={2} fontSize="20px">
              Mentorship
            </Text>
          </Box>
        </Box>
      </Flex>

      {/* Linha para os Frames de Conteúdo */}
      <Flex justifyContent="space-between" width="100%" flexWrap="wrap" gap={4}>
        {selectedOptions.map((option, index) => (
          <Box
            key={index}
            width="30%"
            height="520px"
            p={4}
            borderWidth={index === 1 ? "2px" : "1px"}
            borderRadius="10px"
            borderColor={index === 1 ? "red.500" : "#5c5b5b"}
            textAlign="center"
            backgroundColor="gray.700"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            transition="transform 0.3s, box-shadow 0.3s, z-index 0.3s" // Adicionando z-index à transição
            zIndex={index === 1 ? 1 : 0} // Frame do meio com z-index maior
            _hover={{
              transform: "scale(1.05)", // Efeito de crescimento
              boxShadow: "0 4px 20px rgba(255, 0, 0, 0.5)", // Efeito de sombra ao passar o mouse
              backgroundColor: "rgba(255, 0, 0, 0.5)", // Cor ao passar o mouse
              zIndex: 2, // Aumenta o z-index ao passar o mouse
            }}
          >
            <Box>
              <Text fontSize="24px" mb={2} color="#e00b0b">
                {option.title}
              </Text>
              <Text fontSize="22px" fontWeight="bold" mb={2} color="gray.200">
                {option.price}
              </Text>
              <Text fontSize="18px" color="gray.400">{option.details}</Text>
            </Box>

            {/* Link to Get Access com bordas e preenchimento ao passar o mouse */}
            <Link
              color="white"
              href={option.link}
              isExternal
              fontWeight="bold"
              border="1px solid red"
              borderRadius="30px"
              transition="background-color 0.3s"
              backgroundColor={index === 1 ? "red" : "transparent"}
              _hover={{
                backgroundColor: "red",
                color: "white",
              }}
              mt={4}
              p={4}
              display="inline-block"
            >
              Get Access
            </Link>

            {/* Features List */}
            <Box mt={4} textAlign="left">
              {option.features.map((feature, idx) => (
                <Flex key={idx} alignItems="center" mb={4}>
                  <Text fontSize="20px" fontWeight="bold" color="gray.300" mr={2}>
                    {idx < 4 ? "✅" : <Icon as={CheckIcon} color="green.300" boxSize={4} />}
                  </Text>
                  <Text fontSize="20px" color="gray.300">
                    {feature}
                  </Text>
                </Flex>
              ))}
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default PromotionCard;
