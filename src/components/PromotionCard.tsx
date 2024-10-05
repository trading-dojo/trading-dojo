import React from "react";
import { Box, Text, Button, keyframes, Flex } from "@chakra-ui/react";
import { FaTelegramPlane } from "react-icons/fa";
import img1 from "./images/back.jpg";

// Define the pulse animation using Chakra UI's keyframes utility
const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const PromotionCard: React.FC = () => {
  const handleButtonClick = () => {
    window.location.href = "https://whop.com/thetradingdojo/";
  };

  return (
    <Box
      width="100%"
      height={["auto", "auto", "700px"]}
      bgImage={`url(${img1})`}
      bgSize="cover"
      bgPosition="center"
      display="flex"
      justifyContent="center"
      alignItems="center"
      p={4}
      position="relative"
      flexDirection="column"
    >
      <Box
        maxWidth={["95%", "85%", "585px"]}
        height="auto"
        bg="#191919"
        color="white"
        borderRadius="20px"
        boxShadow="lg"
        p={[4, 6]}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        position="relative"
        overflow="hidden"
      >
        <Text fontSize={["xl", "2xl", "3xl"]} fontWeight="bold" mb={6} color="white">
          Get <span style={{ color: "#ff4d4d" }}> Lifetime Access</span> to the Trading Dojo Mentorship Program
        </Text>

        <Box textAlign="center">
          <Box
            bgColor="#ff4d4d"
            color="white"
            borderRadius="30px"
            width={["200px", "230px", "270px"]}
            p={2}
            mb={4}
            textAlign="center"
            mx="auto" // Centraliza o box dentro do container
          >
            <Text fontSize={["lg", "xl", "2xl"]} fontWeight="bold">
              SPECIAL PROMOTION
            </Text>
          </Box>

          <Text fontSize={["md", "lg"]} mb={4} color="white">
            Get
            <span style={{ color: "red", fontSize: "20px", padding: "0 4px", borderRadius: "4px", marginLeft: "10px" }}>
              vip access
            </span> to The Trading Dojo, was $49.99,
          </Text>
          <Text fontSize={["3xl", "4xl", "5xl"]} fontWeight="bold" mb={-2} color="#ff4d4d">
            NOW 29.99
          </Text>
          <Text fontSize={["sm", "md"]} mt="20px" color="yellow.300">
            Use code
            <span style={{ color: "red", fontSize: "20px", fontWeight: "bold", padding: "0 4px", borderRadius: "4px", marginLeft: "10px" }}>
              “Funded”
            </span>
            at checkout
          </Text>
        </Box>
        <Button
          colorScheme="red"
          width={["250px", "300px", "400px"]}
          mt="40px"
          variant="solid"
          size="lg"
          borderRadius="full"
          animation={`${pulseAnimation} 1.5s infinite`}
          _hover={{ bg: "black" }}
          onClick={handleButtonClick}
        >
          Get Access Now
        </Button>
      </Box>

      <Box
        width="100%"
        maxWidth="712px"
        textAlign="center"
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginTop="20px"
      >
        <Flex align="center" mb={4}>
          <FaTelegramPlane size={30} color="#ff4d4d" style={{ marginRight: '8px' }} />
          <Text
            fontSize={["md", "lg", "25px"]}
            color="white"
            fontWeight="bold"
            display="inline"
          >
            <span style={{ color: "white" }}>Take one second to join the </span>
            <span style={{ color: "#ff4d4d" }}>FREE Telegram Channel</span>
            <span style={{ color: "black" }}> so you never miss new free education and updates</span>
          </Text>
        </Flex>
        <Button
          as="a"
          href="https://t.me/ictdojo"
          target="_blank"
          color="#ffffff"
          bg="#ff4d4d"
          variant="solid"
          size="sm"
          _hover={{ bg: "white", color: "black" }}
        >
          JOIN NOW
        </Button>
      </Box>
    </Box>
  );
};

export default PromotionCard;
