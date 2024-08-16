import React from "react";
import { Box, Text, useBreakpointValue } from "@chakra-ui/react";

const DoTheMath: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      backgroundColor="#0b0e13"
      height="600px" // Altura ajustada
      width="100%" // Largura ocupando toda a tela
      padding={4}
      textAlign="center" // Centralizar o texto
      color="white"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center" // Centralizar o conteúdo
      position="relative"
    >
      {/* Título */}
      <Text fontSize={isMobile ? "4xl" : "6xl"} fontWeight="bold" mb={12} >
        Do the Math.
      </Text>

      {/* Seção dos dados */}
      <Box
        display="flex"
        flexDirection={isMobile ? "column" : "row"} // Coluna em mobile e linha em desktop
        justifyContent="center" // Centralizar o conteúdo
        alignItems="center"
        gap={8}
        width="100%" // Garantir que a seção ocupe toda a largura disponível
        maxWidth="100%" // Garantir que não haja largura máxima
      >
        {/* Primeiro item */}
        <Box textAlign="center" flex="1">
          <Text fontSize={isMobile ? "3xl" : "5xl"} fontWeight="bold" color="#01baef">
            150,000+
          </Text>
          <Text fontSize={isMobile ? "lg" : "xl"}>
            reputation points on TradingView – the biggest trading-related website in the world.
          </Text>
        </Box>

        {/* Segundo item */}
        <Box textAlign="center" flex="1">
          <Text fontSize={isMobile ? "3xl" : "5xl"} fontWeight="bold" color="#01baef">
            107
          </Text>
          <Text fontSize={isMobile ? "lg" : "xl"}>
            countries from which our students all across the world come.
          </Text>
        </Box>

        {/* Terceiro item */}
        <Box textAlign="center" flex="1">
          <Text fontSize={isMobile ? "3xl" : "5xl"} fontWeight="bold" color="#01baef">
            2,800+
          </Text>
          <Text fontSize={isMobile ? "lg" : "xl"}>
            students have graduated at the Transparent FX Academy.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default DoTheMath;
