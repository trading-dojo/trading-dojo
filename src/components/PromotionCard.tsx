import React, { useState } from "react";
import { Box, Text, Flex, Link, Icon, useBreakpointValue } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

const PromotionCard: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<"membership" | "mentorship">("membership");

  // Ajustar os valores com base no tamanho da tela
  const fontSizeTitle = useBreakpointValue({ base: "18px", md: "32px" });
  const fontSizeOption = useBreakpointValue({ base: "14px", md: "20px" });
  const cardWidth = useBreakpointValue({ base: "100%", md: "30%" });
  const cardHeight = useBreakpointValue({ base: "auto", md: "520px" });
  const paddingValue = useBreakpointValue({ base: "2", md: "4" });
  
  const membershipOptions = [
    {
      title: "Monthly",
      price: "$49.99 / month",
      details: "Cancel subscription at any time",
      features: [
        "Weekly live streams",
        "Educational Resources",
        "Trade Ideas & Market Analysis",
        "Prop firm giveaways",
        "Mentorship & mastermind calls",
      ],
      link: "https://whop.com/checkout/2jazRXEo7NHk938tpL-1u59-yZq2-HdTC-mlz3AfmCg7EO/"
    },
    {
      title: "Quarterly",
      price: "$119 / 3 months",
      details: "Cancel subscription at any time",
      features: [
        "Weekly live streams",
        "Educational Resources",
        "Trade Ideas & Market Analysis",
        "Prop firm giveaways",
        "Mentorship & mastermind calls",
      ],
      link: "https://whop.com/checkout/5tx5AtufRlH3zHQrzH-m65B-32wo-5iVx-6J1LstnreoH0/"
    },
    {
      title: "Yearly",
      price: "$400 / year",
      details: "Cancel subscription at any time",
      features: [
        "Weekly live streams",
        "Educational Resources",
        "Trade Ideas & Market Analysis",
        "Prop firm giveaways",
        "Mentorship & mastermind calls",
      ],
      link: "https://whop.com/checkout/3nvOHy5smDNlWZazD3-RnU5-lEhc-6SC2-VtVBcYxsJ8TW/"
    },
  ];

  const mentorshipOptions = [
    {
      title: "Monthly",
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
      title: "Quarterly",
      price: "$550 / months",
      details: "Cancel subscription at any time",
      features: [
        "Access to membership content",
        "Personalised models",
        "3 weekly 1on1 calls ",
        "1on1 live trading",
        "Regular progress reviews",
      ],
      link: "https://whop.com/checkout/jA1p5EqlHuWkeKiCl-kAN6-3F50-FZT7-CE5ryblwcT4C/"
    },
    {
      title: "Yearly",
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

  const selectedOptions = selectedOption === "membership" ? membershipOptions : mentorshipOptions;

  return (
    <Box
      width="100%"
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
        <Text fontSize={fontSizeTitle} fontWeight="bold" color="white" mr={4}>
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
            backgroundColor="#01baef"
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
            <Text color={selectedOption === "membership" ? "white" : "gray.300"} p={2} fontSize={fontSizeOption}>
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
            <Text color={selectedOption === "mentorship" ? "white" : "gray.300"} p={2} fontSize={fontSizeOption}>
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
            width={cardWidth}
            height={cardHeight}
            p={paddingValue}
            borderWidth={index === 1 ? "2px" : "1px"}
            borderRadius="10px"
            borderColor={index === 1 ? "#01baef" : "#01baef"}
            textAlign="center"
            backgroundColor="black"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            transition="transform 0.3s, box-shadow 0.3s, z-index 0.3s"
            zIndex={index === 1 ? 1 : 0}
            _hover={{
              transform: "scale(1.05)",
              boxShadow: "0 4px 20px rgba(0, 0, 255, 0.5)",
              backgroundColor: "black",
              zIndex: 2,
            }}
          >
            <Box>
              <Text fontSize="24px" mb={2} color="#01baef">
                {option.title}
              </Text>
              <Text fontSize="22px" fontWeight="bold" mb={2} color="white">
                {option.price}
              </Text>
              <Text fontSize="18px" color="gray.400">{option.details}</Text>
            </Box>

            {/* Link to Get Access */}
            <Link
              color={index === 1 ? "black" : "#01baef"}
              href={option.link}
              isExternal
              fontWeight="bold"
              border="1px solid #01baef"
              borderRadius="30px"
              transition="background-color 0.3s"
              backgroundColor={index === 1 ? "#01baef" : "transparent"}
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
                  <Text fontSize="14px" color="white" ml={2}>
                    <Icon as={CheckIcon} color="#01baef" />
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
