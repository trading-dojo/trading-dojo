import React from "react";
import { Box, Text, Button, keyframes } from "@chakra-ui/react";
import { FaTelegramPlane } from "react-icons/fa";
import img1 from "./images/Untitled-1.jpg";

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
    window.location.href = "https://buy.stripe.com/6oEeWW4SP0Kh1DWaEY";
  };

  return (
    <Box
      width="100%"
      height={["auto", "auto", "700px"]} // Ajusta a altura para telas pequenas
      bgImage={`url(${img1})`} // Usando a imagem importada
      bgSize="cover"
      bgPosition="center"
      display="flex"
      justifyContent="center"
      alignItems="center"
      p={4}
      position="relative"
      flexDirection="column" // Garantir que o conteúdo fique empilhado verticalmente
    >
      <Box
        maxWidth={["95%", "85%", "585px"]} // Ajusta a largura para telas pequenas
        height="auto" // Altura automática para evitar corte de conteúdo
        bg="black"
        color="white"
        borderRadius="20px"
        boxShadow="lg"
        p={[4, 6]} // Padding ajustado para telas pequenas
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        position="relative"
        overflow="hidden"
      >
        {/* Decagon shape for the special promotion */}
        <Box
          position="absolute"
          left={["10px", "20px", "80px"]} // Mantém a estrela à esquerda em todas as telas
          top={["150px", "170px", "190px"]} // Ajusta a posição para diferentes tamanhos de tela
          width={["80px", "90px", "110px"]}
          height={["90px", "100px", "120px"]}
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg="blue.500"
          color="black"
          borderRadius="0"
          boxShadow="lg"
          zIndex={2}
          textAlign="center"
          p={2}
          fontWeight="bold"
          fontSize={["sm", "md"]}
          animation={`${pulseAnimation} 1.5s infinite`}
          clipPath="polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
        >
          SPECIAL PROMOTION
        </Box>

        <Text fontSize={["xl", "2xl", "3xl"]} fontWeight="bold" mb={6} color="white" textAlign="center">
          Get <span style={{ color: "#ff4d4d" }}> Lifetime Access</span> to the TransparentFX Mentorship Program
        </Text>

        <Box marginLeft={["0px", "100px", "230px"]}>
          <Box
            bgColor="#ff4d4d"
            color="white"
            borderRadius="30px"
            width={["200px", "230px", "270px"]}
            p={2}
            mb={4}
            textAlign="center"
          >
            <Text fontSize={["lg", "xl", "2xl"]} fontWeight="bold">
              SPECIAL PROMOTION
            </Text>
          </Box>

          <Text fontSize={["md", "lg"]} mb={4} color="white">
            WAS <s>447€</s> 
            <span style={{ color: "red", backgroundColor: "yellow", padding: "0 4px", borderRadius: "4px", marginLeft: "10px" }}>
              SAVE 400€
            </span>
          </Text>
          <Text fontSize={["3xl", "4xl", "5xl"]} fontWeight="bold" mb={-2} color="#ff4d4d">
            NOW 47€
          </Text>
          <Text fontSize={["sm", "md"]} mt="20px" color="yellow.300">
            LIMITED SPOTS!
          </Text>
        </Box>
        <Button
          colorScheme="red"
          width={["250px", "300px", "400px"]}
          mt="40px"
          variant="solid"
          size="lg"
          borderRadius="full"
          animation={`${pulseAnimation} 1.5s infinite`} // Apply animation using Chakra UI's keyframes
          _hover={{ bg: "teal.400" }}
          onClick={handleButtonClick} // Add onClick event to handle redirection
        >
          Get Access Now
        </Button>
      </Box>

      <Box
        width="100%"
        maxWidth="712px"
        textAlign="center"
        display="flex"
        marginTop="20px"
        justifyContent="center"
        flexWrap="wrap"
        alignItems="center" // Center the content vertically if needed
      >
        <FaTelegramPlane size={30} color="#ff4d4d" style={{ marginRight: '8px' }} />
        <Text
          fontSize={["md", "lg", "25px"]}
          color="white"
          fontWeight="bold"
          display="inline"
        >
          <span style={{ color: "white" }}>Take one second to join the </span>
          <span style={{ color: "#ff4d4d" }}>FREE Telegram Channel</span>
          <span style={{ color: "white" }}> so you never miss new free education and updates</span>
          <Button
            as="a"
            href="https://t.me/ictdojo"
            target="_blank"
            color="#ffffff"
            bg="#ff4d4d"
            variant="solid"
            size="sm"
            ml={2}
          >
            JOIN NOW
          </Button>
        </Text>
      </Box>
    </Box>
  );
};

export default PromotionCard;
